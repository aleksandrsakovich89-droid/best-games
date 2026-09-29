'use client';

import { Children, createContext, isValidElement, useContext, useState, useSyncExternalStore, type ReactNode } from 'react';

const decadeOptions = [
  { value: 'all', label: 'ВСЕ ИГРЫ' },
  { value: '1990', label: '1990-е' },
  { value: '2000', label: '2000-е' },
  { value: '2010', label: '2010-е' },
  { value: '2020', label: '2020-е' },
] as const;

type Decade = (typeof decadeOptions)[number]['value'];
type GameSort = 'default' | 'newest' | 'oldest' | 'title-asc' | 'title-desc';

type GameDecadeContextValue = {
  activeDecade: Decade;
  visibleGameCount: number;
  selectDecade: (decade: Decade) => void;
  favoriteTitles: string[];
  favoritesOnly: boolean;
  toggleFavorite: (title: string) => void;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  searchMatchTitles: string[];
  sortOrder: GameSort;
  setSortOrder: (sortOrder: GameSort) => void;
  sortedGameTitles: string[];
  hasActiveFilters: boolean;
  resetFilters: () => void;
};

const GameDecadeContext = createContext<GameDecadeContextValue | null>(null);
const favoritesStorageKey = 'best-games-favorites';
const favoritesChangeEvent = 'best-games-favorites-change';
const gameSearchAliases: Record<string, string[]> = {
  'The Witcher 3': ['Ведьмак', 'Ведьмак 3'],
};

function normalizeSearchText(value: string) {
  return value
    .toLowerCase()
    .normalize('NFKD')
    .replace(/\p{M}/gu, '')
    .replace(/[^\p{L}\p{N}]/gu, '');
}

function matchesGameSearch(
  game: { title: string; genre: string; year: number },
  query: string,
) {
  const normalizedQuery = normalizeSearchText(query);

  if (!normalizedQuery) {
    return true;
  }

  const searchableValues = [
    game.title,
    game.genre,
    String(game.year),
    ...(gameSearchAliases[game.title] ?? []),
  ];

  return searchableValues.some((value) => normalizeSearchText(value).includes(normalizedQuery));
}

function subscribeToAppState(onStoreChange: () => void) {
  window.addEventListener('storage', onStoreChange);
  window.addEventListener('hashchange', onStoreChange);
  window.addEventListener(favoritesChangeEvent, onStoreChange);

  return () => {
    window.removeEventListener('storage', onStoreChange);
    window.removeEventListener('hashchange', onStoreChange);
    window.removeEventListener(favoritesChangeEvent, onStoreChange);
  };
}

function getFavoritesSnapshot() {
  try {
    return window.localStorage.getItem(favoritesStorageKey) ?? '[]';
  } catch {
    return '[]';
  }
}

function readFavoriteTitles(snapshot: string) {
  try {
    const parsedFavorites: unknown = JSON.parse(snapshot);
    return Array.isArray(parsedFavorites)
      ? parsedFavorites.filter((title): title is string => typeof title === 'string')
      : [];
  } catch {
    return [];
  }
}

export default function GameDecadeProvider({
  children,
  games,
}: {
  children: ReactNode;
  games: { title: string; genre: string; year: number }[];
}) {
  const [activeDecade, setActiveDecade] = useState<Decade>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [sortOrder, setSortOrder] = useState<GameSort>('default');
  const appSnapshot = useSyncExternalStore(subscribeToAppState, getAppSnapshot, () => null);
  const [currentHash, favoritesSnapshot] = appSnapshot?.split('\u0000', 2) ?? ['', '[]'];
  const favoriteTitles = readFavoriteTitles(favoritesSnapshot);
  const favoritesOnly = currentHash === '#favorites';

  function selectDecade(decade: Decade) {
    setActiveDecade(decade);

    const behavior = window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth';
    window.requestAnimationFrame(() => {
      document.getElementById('games-title')?.scrollIntoView({ behavior, block: 'start' });
    });
  }

  function toggleFavorite(title: string) {
    const updatedTitles = favoriteTitles.includes(title)
      ? favoriteTitles.filter((favoriteTitle) => favoriteTitle !== title)
      : [...favoriteTitles, title];

    try {
      window.localStorage.setItem(favoritesStorageKey, JSON.stringify(updatedTitles));
      window.dispatchEvent(new Event(favoritesChangeEvent));
    } catch {
      return;
    }
  }

  const searchMatchTitles = games
    .filter((game) => matchesGameSearch(game, searchQuery))
    .map((game) => game.title);
  const searchMatchSet = new Set(searchMatchTitles);
  const sortedGames = [...games];

  if (sortOrder === 'newest') {
    sortedGames.sort((firstGame, secondGame) => secondGame.year - firstGame.year);
  } else if (sortOrder === 'oldest') {
    sortedGames.sort((firstGame, secondGame) => firstGame.year - secondGame.year);
  } else if (sortOrder === 'title-asc' || sortOrder === 'title-desc') {
    sortedGames.sort((firstGame, secondGame) => {
      const titleOrder = firstGame.title.localeCompare(secondGame.title, 'en', { sensitivity: 'base' });
      return sortOrder === 'title-asc' ? titleOrder : -titleOrder;
    });
  }
  const sortedGameTitles = sortedGames.map((game) => game.title);
  const visibleGameCount = games.filter((game) => {
    const decadeMatches = activeDecade === 'all'
      || Math.floor(game.year / 10) * 10 === Number(activeDecade);
    const favoriteMatches = !favoritesOnly || favoriteTitles.includes(game.title);
    const searchMatches = searchMatchSet.has(game.title);

    return decadeMatches && favoriteMatches && searchMatches;
  }).length;
  const hasActiveFilters = searchQuery.length > 0 || activeDecade !== 'all' || sortOrder !== 'default';

  function resetFilters() {
    setSearchQuery('');
    setActiveDecade('all');
    setSortOrder('default');
  }

  if (appSnapshot === null) {
    return <div className="min-h-screen w-full bg-[#08090b]" aria-busy="true" />;
  }

  return (
    <GameDecadeContext.Provider value={{
      activeDecade,
      visibleGameCount,
      selectDecade,
      favoriteTitles,
      favoritesOnly,
      toggleFavorite,
      searchQuery,
      setSearchQuery,
      searchMatchTitles,
      sortOrder,
      setSortOrder,
      sortedGameTitles,
      hasActiveFilters,
      resetFilters,
    }}>
      {children}
    </GameDecadeContext.Provider>
  );
}

function useGameDecade() {
  const context = useContext(GameDecadeContext);

  if (!context) {
    throw new Error('Game decade controls must be rendered inside GameDecadeProvider.');
  }

  return context;
}

export function GameDecadeFilter() {
  const { activeDecade, selectDecade } = useGameDecade();

  return (
    <section id="years" data-game-decade={activeDecade} className="relative z-10 mx-auto w-full max-w-7xl px-6 pb-14 sm:px-10 lg:px-12" aria-labelledby="years-title">
      <div className="mb-3">
        <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-amber-200/75">Временная шкала</p>
        <h2 id="years-title" className="mt-2 font-serif text-3xl text-white sm:text-4xl">Игры по годам</h2>
      </div>
      <div className="grid grid-cols-2 gap-2 sm:grid-cols-5" role="group" aria-label="Фильтр игр по десятилетию">
        {decadeOptions.map((option) => {
          const isActive = activeDecade === option.value;

          return (
            <button
              key={option.value}
              type="button"
              aria-pressed={isActive}
              onClick={() => selectDecade(option.value)}
              className={`border px-3 py-3 text-[10px] font-semibold uppercase tracking-[0.16em] transition-colors sm:px-4 sm:text-xs ${isActive ? 'border-amber-200 bg-amber-200 text-[#08090b]' : 'border-white/15 bg-[#0d0f13]/80 text-white/60 hover:border-amber-200/50 hover:text-amber-100'}`}
            >
              {option.label}
            </button>
          );
        })}
      </div>
    </section>
  );
}

export function GameSearchInput() {
  const { searchQuery, setSearchQuery, sortOrder, setSortOrder, hasActiveFilters, resetFilters } = useGameDecade();

  return (
    <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center">
      <input
        type="search"
        aria-label="Найти игру"
        placeholder="Найти игру..."
        value={searchQuery}
        onChange={(event) => setSearchQuery(event.currentTarget.value)}
        className="w-full border border-white/15 bg-[#0d0f13]/80 px-4 py-3 text-sm text-white placeholder:text-white/35 outline-none transition-colors focus:border-amber-200/60 sm:min-w-0 sm:flex-1"
      />
      <div className="relative w-full sm:w-56 sm:shrink-0">
        <select
          aria-label="Сортировка игр"
          value={sortOrder}
          onChange={(event) => setSortOrder(event.currentTarget.value as GameSort)}
          className="w-full appearance-none border border-white/15 bg-[#0d0f13]/80 px-4 py-3 pr-10 text-sm text-white outline-none transition-colors focus:border-amber-200/60"
        >
          <option value="default">По умолчанию</option>
          <option value="newest">Сначала новые</option>
          <option value="oldest">Сначала старые</option>
          <option value="title-asc">Название А–Я</option>
          <option value="title-desc">Название Я–А</option>
        </select>
        <span aria-hidden="true" className="pointer-events-none absolute inset-y-0 right-4 flex items-center text-amber-200/75">⌄</span>
      </div>
      {hasActiveFilters && (
        <button
          type="button"
          onClick={resetFilters}
          className="w-full shrink-0 border border-amber-200/35 bg-amber-200/5 px-4 py-3 text-[10px] font-semibold uppercase tracking-[0.14em] text-amber-100 transition-colors hover:border-amber-200 hover:bg-amber-200 hover:text-[#08090b] sm:w-auto"
        >
          Сбросить фильтры
        </button>
      )}
    </div>
  );
}

export function SortedGameGrid({ children }: { children: ReactNode }) {
  const { sortedGameTitles } = useGameDecade();
  const sortedCards = Children.toArray(children).sort((firstCard, secondCard) => {
    if (!isValidElement<{ title: string }>(firstCard) || !isValidElement<{ title: string }>(secondCard)) {
      return 0;
    }

    return sortedGameTitles.indexOf(firstCard.props.title) - sortedGameTitles.indexOf(secondCard.props.title);
  });

  return <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">{sortedCards}</div>;
}

export function GameDecadeCount() {
  const { visibleGameCount: count } = useGameDecade();
  const lastTwoDigits = count % 100;
  const lastDigit = count % 10;
  const gameWord = lastTwoDigits >= 11 && lastTwoDigits <= 14
    ? 'ИГР'
    : lastDigit === 1
      ? 'ИГРА'
      : lastDigit >= 2 && lastDigit <= 4
        ? 'ИГРЫ'
        : 'ИГР';

  return (
    <span className="hidden text-[10px] uppercase tracking-[0.2em] text-white/35 sm:block">
      {count} {gameWord}
    </span>
  );
}

export function GameSectionTitle() {
  const { favoritesOnly } = useGameDecade();

  return (
    <div>
      <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-amber-200/75">
        {favoritesOnly ? 'ЛИЧНАЯ КОЛЛЕКЦИЯ' : 'Легендарный архив'}
      </p>
      <h2 id="games-title" className="mt-3 font-serif text-4xl tracking-[-0.06em] text-white sm:text-5xl">
        {favoritesOnly ? 'Избранные игры' : 'Легендарные игры'}
      </h2>
    </div>
  );
}

export function FavoritesLink() {
  return (
    <a className="transition-colors hover:text-white" href="#favorites">
      Избранное
    </a>
  );
}

export function AllGamesLink() {
  return (
    <a className="transition-colors hover:text-white" href="#games">
      Игры
    </a>
  );
}

export function FavoriteToggle({ title }: { title: string }) {
  const { favoriteTitles, toggleFavorite } = useGameDecade();
  const isFavorite = favoriteTitles.includes(title);

  return (
    <button
      type="button"
      aria-label={isFavorite ? `Удалить ${title} из избранного` : `Добавить ${title} в избранное`}
      aria-pressed={isFavorite}
      onClick={() => toggleFavorite(title)}
      className={`absolute right-4 top-4 z-10 flex size-10 items-center justify-center rounded-full border bg-black/55 text-2xl leading-none backdrop-blur-sm transition-colors hover:border-amber-200 hover:text-amber-200 ${isFavorite ? 'border-amber-200 text-amber-300' : 'border-white/25 text-white/85'}`}
    >
      {isFavorite ? '★' : '☆'}
    </button>
  );
}

export function FavoriteGameCard({
  title,
  year,
  children,
}: {
  title: string;
  year: number;
  children: ReactNode;
}) {
  const { favoriteTitles, searchMatchTitles } = useGameDecade();
  const matchesSearch = searchMatchTitles.includes(title);

  return (
    <article
      data-decade={Math.floor(year / 10) * 10}
      data-favorite={favoriteTitles.includes(title)}
      data-search-match={matchesSearch}
      className="group flex h-full flex-col overflow-hidden border border-white/10 bg-[#0d0f13]/90 transition-all duration-300 hover:-translate-y-1 hover:border-amber-200/40 hover:shadow-[0_24px_70px_rgba(0,0,0,0.45)]"
    >
      {children}
    </article>
  );
}

export function FavoriteGamesSection({ children }: { children: ReactNode }) {
  const { favoritesOnly, favoriteTitles, visibleGameCount, searchQuery } = useGameDecade();

  return (
    <section
      id="games"
      data-favorites-only={favoritesOnly}
      data-favorite-count={favoriteTitles.length}
      className="relative z-10 mx-auto w-full max-w-7xl px-6 pb-20 sm:px-10 lg:px-12"
    >
      {children}
      {visibleGameCount === 0 && (
        <p className="border-t border-white/10 py-12 text-center font-serif text-2xl text-white/60" role="status">
          {favoritesOnly && favoriteTitles.length === 0 && !searchQuery.trim()
            ? 'В избранном пока нет игр'
            : 'Игры не найдены'}
        </p>
      )}
    </section>
  );
}

function getAppSnapshot() {
  return `${window.location.hash}\u0000${getFavoritesSnapshot()}`;
}