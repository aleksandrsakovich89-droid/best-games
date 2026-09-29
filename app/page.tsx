import Link from 'next/link';
import Image from 'next/image';
import { homeMetadata, SiteStructuredData } from './seo';
import GameDecadeProvider, { AllGamesLink, FavoriteGameCard, FavoriteGamesSection, FavoriteToggle, FavoritesLink, GameDecadeCount, GameDecadeFilter, GameSearchInput, GameSectionTitle, SortedGameGrid } from './game-decade-filter';

export const metadata = homeMetadata;

const legendaryGames = [
  {
    title: 'DOOM',
    year: 1993,
    genre: 'Шутер от первого лица',
    description: 'Бунт против ада, безумная скорость и легендарный геймплей, который изменил индустрию FPS навсегда.',
    gradient: 'linear-gradient(135deg, rgba(235, 175, 74, 0.28), rgba(16, 17, 20, 0.9) 42%, rgba(34, 18, 8, 0.8))',
  },
  {
    title: 'Diablo',
    year: 1996,
    genre: 'Action RPG',
    description: 'Сердце ролевого экшена с добычей, прокачкой героя и атмосферой вечного похода в глубины ада.',
    gradient: 'linear-gradient(135deg, rgba(163, 100, 72, 0.26), rgba(17, 16, 21, 0.9) 45%, rgba(53, 27, 15, 0.76))',
  },
  {
    title: 'Half-Life',
    year: 1998,
    genre: 'Научно-фантастический шутер',
    description: 'Мастерская история, напряжённая атмосфера и революционный сюжет, который до сих пор вдохновляет разработчиков.',
    gradient: 'linear-gradient(135deg, rgba(119, 169, 194, 0.2), rgba(15, 18, 21, 0.9) 40%, rgba(13, 24, 30, 0.7))',
  },
  {
    title: 'Counter-Strike',
    year: 2000,
    genre: 'Тактический шутер',
    description: 'Командный дух, точная тактика и адреналин соревновательных сражений, ставшие эталоном жанра.',
    gradient: 'linear-gradient(135deg, rgba(198, 160, 78, 0.22), rgba(17, 20, 25, 0.95) 45%, rgba(20, 22, 27, 0.8))',
  },
  {
    title: 'GTA: San Andreas',
    year: 2004,
    genre: 'Открытый мир',
    description: 'Культовый город, огромная карта и свобода выбора — игра, которая стала символом эпохи PlayStation 2.',
    gradient: 'linear-gradient(135deg, rgba(181, 146, 56, 0.28), rgba(18, 18, 17, 0.92) 42%, rgba(42, 34, 9, 0.78))',
  },
  {
    title: 'The Witcher 3',
    year: 2015,
    genre: 'RPG',
    description: 'Величественный мир, сложные решения и потрясающая история, которые вывели RPG на новый уровень.',
    gradient: 'linear-gradient(135deg, rgba(122, 167, 96, 0.22), rgba(15, 18, 19, 0.95) 44%, rgba(23, 31, 21, 0.75))',
  },
  {
    title: 'Wolfenstein 3D',
    year: 1992,
    genre: 'Шутер от первого лица',
    description: 'Побег из стен замка превращается в стремительный прорыв сквозь лабиринты, где каждый поворот ведёт к новой опасности.',
    gradient: 'linear-gradient(135deg, rgba(159, 132, 94, 0.24), rgba(17, 18, 20, 0.92) 43%, rgba(47, 37, 25, 0.78))',
  },
  {
    title: 'Warcraft II',
    year: 1995,
    genre: 'Стратегия в реальном времени',
    description: 'Собирайте ресурсы, возводите крепости и ведите флот через бурные воды, где исход войны людей и орков решает каждый приказ.',
    gradient: 'linear-gradient(135deg, rgba(104, 139, 163, 0.24), rgba(15, 19, 23, 0.92) 44%, rgba(38, 47, 34, 0.78))',
  },
  {
    title: 'Heroes of Might and Magic III',
    year: 1999,
    genre: 'Пошаговая стратегия',
    description: 'Прокладывайте путь по зачарованным землям, собирайте армию из мифических существ и решайте судьбу королевства ход за ходом.',
    gradient: 'linear-gradient(135deg, rgba(122, 144, 113, 0.24), rgba(17, 19, 20, 0.92) 44%, rgba(48, 39, 29, 0.78))',
  },
  {
    title: 'Age of Empires II',
    year: 1999,
    genre: 'Стратегия в реальном времени',
    description: 'Проведите цивилизацию сквозь века: развивайте экономику, возводите города и решайте исход сражений на поле боя.',
    gradient: 'linear-gradient(135deg, rgba(161, 133, 91, 0.24), rgba(17, 19, 21, 0.92) 44%, rgba(44, 50, 39, 0.78))',
  },
  {
    title: 'StarCraft',
    year: 1998,
    genre: 'Стратегия в реальном времени',
    description: 'На далёком рубеже галактики три цивилизации ведут борьбу за выживание, где каждый ресурс и каждое решение меняют ход войны.',
    gradient: 'linear-gradient(135deg, rgba(93, 135, 166, 0.24), rgba(14, 18, 22, 0.92) 44%, rgba(38, 48, 54, 0.78))',
  },
  {
    title: 'Deus Ex',
    year: 2000,
    genre: 'Иммерсивный симулятор / RPG',
    description: 'В мрачном киберпанковом мире технологии переплетаются с тайными заговорами, а каждый выбор открывает свой путь — от скрытной операции до прямого столкновения.',
    gradient: 'linear-gradient(135deg, rgba(153, 132, 91, 0.24), rgba(17, 19, 22, 0.92) 44%, rgba(39, 49, 51, 0.78))',
  },
  {
    title: 'Max Payne',
    year: 2001,
    genre: 'Шутер от третьего лица / нуар',
    description: 'Заснеженный город тонет в тенях, а сломленный детектив идёт по следу заговора сквозь криминальный нуар и собственные кошмары.',
    gradient: 'linear-gradient(135deg, rgba(117, 133, 151, 0.24), rgba(15, 17, 21, 0.94) 44%, rgba(39, 42, 49, 0.8))',
  },
  {
    title: 'Morrowind',
    year: 2002,
    genre: 'Ролевая игра / открытый мир',
    description: 'Странствия по пепельным пустошам Вварденфелла ведут к древним тайнам, необычным культурам и историям, которые вы выбираете сами.',
    gradient: 'linear-gradient(135deg, rgba(133, 119, 88, 0.24), rgba(17, 19, 19, 0.92) 44%, rgba(47, 50, 39, 0.8))',
  },
  {
    title: 'Gothic',
    year: 2001,
    genre: 'Ролевая игра / экшен',
    description: 'За магическим Барьером жизнь Колонии подчинена своим суровым законам: найдите место среди лагерей и выберите собственный путь.',
    gradient: 'linear-gradient(135deg, rgba(133, 105, 78, 0.24), rgba(17, 18, 19, 0.92) 44%, rgba(47, 40, 32, 0.8))',
  },
  {
    title: 'Warcraft III',
    year: 2002,
    genre: 'Стратегия в реальном времени',
    description: 'Люди, орки, нежить и ночные эльфы сходятся в битве, пока над Азеротом сгущается тень древней угрозы.',
    gradient: 'linear-gradient(135deg, rgba(117, 140, 117, 0.24), rgba(16, 19, 21, 0.92) 44%, rgba(41, 49, 40, 0.8))',
  },
  {
    title: 'Mafia',
    year: 2002,
    genre: 'Экшен / приключение',
    description: 'В городе 1930-х таксист Томми Анджело обретает семью и положение, но верность преступному миру неизбежно ведёт к тяжёлому выбору.',
    gradient: 'linear-gradient(135deg, rgba(126, 124, 112, 0.24), rgba(17, 18, 20, 0.94) 44%, rgba(46, 43, 38, 0.8))',
  },
  {
    title: 'Prince of Persia: The Sands of Time',
    year: 2003,
    genre: 'Экшен / приключение',
    description: 'В древней Персии принц проходит сквозь дворцовые ловушки и ожившие пески, пытаясь исправить роковую ошибку и повернуть время вспять.',
    gradient: 'linear-gradient(135deg, rgba(163, 132, 87, 0.24), rgba(19, 18, 18, 0.92) 44%, rgba(51, 43, 31, 0.8))',
  },
  {
    title: 'Need for Speed: Underground',
    year: 2003,
    genre: 'Аркадные гонки',
    description: 'Под неоновыми огнями городских улиц ревут моторы: тюнингованные машины мчатся за славой в подпольной гоночной культуре.',
    gradient: 'linear-gradient(135deg, rgba(61, 130, 166, 0.24), rgba(13, 18, 23, 0.94) 44%, rgba(48, 36, 57, 0.8))',
  },
  {
    title: 'Half-Life 2',
    year: 2004,
    genre: 'Шутер от первого лица / приключение',
    description: 'В оккупированном Сити 17 Гордон Фримен вновь вступает в борьбу, где каждый шаг приближает людей к надежде на освобождение.',
    gradient: 'linear-gradient(135deg, rgba(120, 139, 148, 0.24), rgba(15, 18, 21, 0.94) 44%, rgba(39, 47, 48, 0.8))',
  },
  {
    title: 'World of Warcraft',
    year: 2004,
    genre: 'MMORPG / фэнтези',
    description: 'Отправляйтесь навстречу древним тайнам Азерота, выберите сторону Альянса или Орды и разделите опасные приключения с союзниками.',
    gradient: 'linear-gradient(135deg, rgba(157, 133, 83, 0.24), rgba(17, 19, 21, 0.92) 44%, rgba(43, 49, 38, 0.8))',
  },
  {
    title: 'S.T.A.L.K.E.R.: Shadow of Chernobyl',
    year: 2007,
    genre: 'Шутер от первого лица / survival horror',
    description: 'За ржавыми периметрами Зоны путь к Припяти пролегает через аномалии, мутантов и охоту за артефактами, где любая вылазка может стать последней.',
    gradient: 'linear-gradient(135deg, rgba(130, 133, 103, 0.24), rgba(17, 19, 19, 0.94) 44%, rgba(44, 48, 37, 0.8))',
  },
  {
    title: 'BioShock',
    year: 2007,
    genre: 'Шутер от первого лица / immersive sim',
    description: 'Под океаном мерцает Восторг: плазмиды обещают власть, Большие Папочки охраняют мрачные тайны, а каждый выбор имеет цену.',
    gradient: 'linear-gradient(135deg, rgba(77, 132, 142, 0.24), rgba(14, 19, 22, 0.94) 44%, rgba(42, 45, 40, 0.8))',
  },
  {
    title: 'Assassin’s Creed',
    year: 2007,
    genre: 'Экшен / приключение / стелс',
    description: 'Среди шумных городов Святой земли ассасин скрывается в толпе, взбирается на крыши и выслеживает тамплиеров, меняющих ход крестовых походов.',
    gradient: 'linear-gradient(135deg, rgba(157, 151, 134, 0.24), rgba(19, 20, 21, 0.94) 44%, rgba(47, 45, 40, 0.8))',
  },
  {
    title: 'Fallout 3',
    year: 2008,
    genre: 'Ролевая игра / постапокалипсис',
    description: 'Выйдя из Убежища 101, вы отправляетесь через разрушенную Столичную Пустошь, где встречи с мутантами и решения меняют судьбы людей.',
    gradient: 'linear-gradient(135deg, rgba(128, 139, 104, 0.24), rgba(17, 19, 18, 0.94) 44%, rgba(47, 47, 35, 0.8))',
  },
  {
    title: 'Mass Effect',
    year: 2007,
    genre: 'Action RPG / научная фантастика',
    description: 'Командир Шепард и экипаж «Нормандии» отправляются исследовать галактику, где каждое решение способно изменить судьбу миров.',
    gradient: 'linear-gradient(135deg, rgba(103, 136, 157, 0.24), rgba(15, 19, 22, 0.94) 44%, rgba(36, 44, 52, 0.8))',
  },
  {
    title: 'Dead Space',
    year: 2008,
    genre: 'Survival horror / научная фантастика',
    description: 'Инженер Айзек Кларк исследует заброшенные отсеки USG Ishimura, где гул пустого корабля скрывает угрозу и не оставляет места для ошибки.',
    gradient: 'linear-gradient(135deg, rgba(117, 133, 127, 0.24), rgba(15, 18, 20, 0.94) 44%, rgba(40, 46, 44, 0.8))',
  },
  {
    title: 'Mirror’s Edge',
    year: 2008,
    genre: 'Экшен / паркур',
    description: 'Курьер Фейт несётся над улицами сияющего мегаполиса, превращая крыши, стены и лестницы в маршрут сквозь погони и неон.',
    gradient: 'linear-gradient(135deg, rgba(186, 174, 155, 0.24), rgba(20, 21, 22, 0.94) 44%, rgba(156, 55, 50, 0.72))',
  },
  {
    title: 'Minecraft',
    year: 2011,
    genre: 'Песочница / выживание',
    description: 'Исследуйте бескрайний кубический мир, добывайте ресурсы, стройте убежища и отправляйтесь в путешествия, ограниченные лишь вашим воображением.',
    gradient: 'linear-gradient(135deg, rgba(113, 139, 97, 0.24), rgba(18, 21, 20, 0.94) 44%, rgba(55, 55, 39, 0.8))',
  },
  {
    title: 'The Elder Scrolls V: Skyrim',
    year: 2011,
    genre: 'Ролевая игра / открытый мир',
    description: 'Станьте Довакином и отправьтесь через древние руины и суровые города Скайрима навстречу драконам, тайнам и решениям, определяющим ваш путь.',
    gradient: 'linear-gradient(135deg, rgba(130, 139, 131, 0.24), rgba(17, 19, 20, 0.94) 44%, rgba(45, 49, 43, 0.8))',
  },
  {
    title: 'Dark Souls',
    year: 2011,
    genre: 'Action RPG / тёмное фэнтези',
    description: 'Проклятый Лордран хранит взаимосвязанные руины, смертоносных боссов и костры, у которых можно перевести дух перед новой схваткой.',
    gradient: 'linear-gradient(135deg, rgba(129, 116, 95, 0.24), rgba(18, 18, 19, 0.94) 44%, rgba(44, 40, 35, 0.8))',
  },
  {
    title: 'Dishonored',
    year: 2012,
    genre: 'Action / стелс / immersive sim',
    description: 'В охваченном чумой Дануолле Корво сочетает скрытность и сверхъестественные силы, а выбранный путь меняет судьбу города.',
    gradient: 'linear-gradient(135deg, rgba(111, 127, 121, 0.24), rgba(17, 19, 20, 0.94) 44%, rgba(43, 46, 41, 0.8))',
  },
  {
    title: 'Far Cry 3',
    year: 2012,
    genre: 'Шутер от первого лица / открытый мир',
    description: 'На тропических островах Джейсон Броди учится выживать: исследует джунгли, охотится и отвоёвывает аванпосты у людей Вааса.',
    gradient: 'linear-gradient(135deg, rgba(100, 137, 111, 0.24), rgba(16, 20, 19, 0.94) 44%, rgba(44, 53, 39, 0.8))',
  },
  {
    title: 'The Last of Us',
    year: 2013,
    genre: 'Action-adventure / survival horror',
    description: 'Джоэл и Элли пересекают заражённую Америку, пробираясь через заброшенные города и опасности, которые меняют их отношения и взгляды на выживание.',
    gradient: 'linear-gradient(135deg, rgba(115, 128, 100, 0.24), rgba(17, 19, 18, 0.94) 44%, rgba(43, 48, 39, 0.8))',
  },
  {
    title: 'GTA V',
    year: 2013,
    genre: 'Action-adventure / открытый мир',
    description: 'Майкл, Франклин и Тревор прокладывают свой путь в Лос-Сантосе через ограбления, погони и опасные решения в огромном открытом мире.',
    gradient: 'linear-gradient(135deg, rgba(143, 132, 94, 0.24), rgba(17, 19, 20, 0.94) 44%, rgba(46, 43, 35, 0.8))',
  },
  {
    title: 'Cyberpunk 2077',
    year: 2020,
    genre: 'Action RPG / открытый мир / киберпанк',
    description: 'Наёмник Ви ищет свой путь в Найт-Сити, где импланты меняют тела, мегакорпорации правят улицами, а каждое решение влияет на судьбу города.',
    gradient: 'linear-gradient(135deg, rgba(180, 166, 83, 0.24), rgba(17, 18, 21, 0.94) 44%, rgba(76, 49, 55, 0.8))',
  },
];

const gamePages: Record<string, string> = {
  DOOM: '/games/doom',
  Diablo: '/games/diablo',
  'Half-Life': '/games/half-life',
  'Counter-Strike': '/games/counter-strike',
  'GTA: San Andreas': '/games/gta-san-andreas',
  'The Witcher 3': '/games/the-witcher-3',
  'Wolfenstein 3D': '/games/wolfenstein-3d',
  'Warcraft II': '/games/warcraft-2',
  'Heroes of Might and Magic III': '/games/heroes-3',
  'Age of Empires II': '/games/age-of-empires-2',
  StarCraft: '/games/starcraft',
  'Deus Ex': '/games/deus-ex',
  'Max Payne': '/games/max-payne',
  Morrowind: '/games/morrowind',
  Gothic: '/games/gothic',
  'Warcraft III': '/games/warcraft-3',
  Mafia: '/games/mafia',
  'Prince of Persia: The Sands of Time': '/games/prince-of-persia',
  'Need for Speed: Underground': '/games/need-for-speed-underground',
  'Half-Life 2': '/games/half-life-2',
  'World of Warcraft': '/games/world-of-warcraft',
  'S.T.A.L.K.E.R.: Shadow of Chernobyl': '/games/stalker-shadow-of-chernobyl',
  BioShock: '/games/bioshock',
  'Assassin’s Creed': '/games/assassins-creed',
  'Fallout 3': '/games/fallout-3',
  'Mass Effect': '/games/mass-effect',
  'Dead Space': '/games/dead-space',
  'Mirror’s Edge': '/games/mirrors-edge',
  Minecraft: '/games/minecraft',
  'The Elder Scrolls V: Skyrim': '/games/skyrim',
  'Dark Souls': '/games/dark-souls',
  Dishonored: '/games/dishonored',
  'Far Cry 3': '/games/far-cry-3',
  'The Last of Us': '/games/the-last-of-us',
  'GTA V': '/games/gta-5',
  'Cyberpunk 2077': '/games/cyberpunk-2077',
};

const featuredLegendTitles = new Set([
  'DOOM',
  'Diablo',
  'Half-Life',
  'GTA: San Andreas',
  'The Witcher 3',
  'Minecraft',
]);

const featuredLegendImages: Record<string, string> = {
  DOOM: '/games/doom.png',
  Diablo: '/games/diablo.png',
  'Half-Life': '/games/half-life.png',
  'GTA: San Andreas': '/games/gta-san-andreas.png',
  'The Witcher 3': '/games/the-witcher-3.png',
  Minecraft: '/games/minecraft.png',
};

const featuredLegends = legendaryGames.filter((game) => featuredLegendTitles.has(game.title));
const spotlightLegend = featuredLegends.find((game) => game.title === 'DOOM');
const supportingLegends = featuredLegends.filter((game) => game.title !== 'DOOM');

export default function Home() {
  return (
    <GameDecadeProvider games={legendaryGames.map(({ title, genre, year }) => ({ title, genre, year }))}>
    <main className="relative min-h-screen overflow-hidden bg-[#08090b] text-white selection:bg-amber-300 selection:text-[#08090b]">
      <SiteStructuredData />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_72%_46%,rgba(177,116,42,0.16),transparent_26%),linear-gradient(112deg,#08090b_18%,#111217_58%,#17120f)]" />
      <div className="pointer-events-none absolute inset-0 opacity-20 [background-image:linear-gradient(rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.06)_1px,transparent_1px)] [background-size:72px_72px] [mask-image:linear-gradient(to_bottom,black,transparent_78%)]" />

      <nav className="relative z-10 mx-auto flex w-full max-w-7xl items-center justify-between px-6 py-7 sm:px-10 lg:px-12" aria-label="Основная навигация">
        <a href="#top" className="group flex items-center gap-3" aria-label="BEST GAMES, на главную">
          <span className="flex h-9 w-9 items-center justify-center border border-amber-300/70 text-xs font-bold tracking-[-0.08em] text-amber-200 transition-colors group-hover:bg-amber-200 group-hover:text-[#08090b]">BG</span>
          <span className="text-sm font-semibold tracking-[0.22em] text-white">BEST GAMES</span>
        </a>
        <div className="hidden items-center gap-8 text-[11px] font-medium uppercase tracking-[0.18em] text-white/55 lg:flex">
          <a className="text-amber-200" href="#top">Главная</a>
          <AllGamesLink />
          <a className="transition-colors hover:text-white" href="#years">По годам</a>
          <a className="transition-colors hover:text-white" href="#legends">Легенды</a>
          <FavoritesLink />
        </div>
        <span className="text-[10px] uppercase tracking-[0.2em] text-white/35">36 ЛЕГЕНДАРНЫХ ИГР</span>
      </nav>

      <nav className="relative z-10 mx-auto flex w-full max-w-7xl flex-wrap items-center gap-x-4 gap-y-1 px-6 pb-4 text-[10px] font-medium uppercase tracking-[0.14em] text-white/55 lg:hidden" aria-label="Мобильная навигация">
        <a className="py-2 text-amber-200" href="#top">Главная</a>
        <AllGamesLink />
        <a className="py-2 transition-colors hover:text-white" href="#years">По годам</a>
        <a className="py-2 transition-colors hover:text-white" href="#legends">Легенды</a>
        <FavoritesLink />
      </nav>

      <section id="top" className="relative z-10 mx-auto flex min-h-[calc(100vh-89px)] w-full max-w-7xl items-center px-6 pb-16 pt-8 sm:px-10 lg:px-12">
        <div className="grid w-full items-center gap-16 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10">
          <div className="max-w-2xl">
            <p className="mb-7 flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.3em] text-amber-200/80">
              <span className="h-px w-10 bg-amber-300" />
              Золотая коллекция
            </p>
            <h1 className="font-serif text-5xl font-medium leading-[0.82] tracking-[-0.075em] text-white sm:text-[clamp(4.5rem,12vw,9.5rem)] sm:leading-[0.78]">
              BEST<br /><span className="text-white/25">GAMES</span>
            </h1>
            <div className="mt-9 flex flex-col gap-7 sm:flex-row sm:items-end sm:gap-12">
              <div>
                <p className="text-[clamp(2rem,4vw,3.25rem)] font-light leading-none tracking-[-0.06em] text-amber-200">1990 <span className="text-white/35">—</span> 2026</p>
                <p className="mt-3 text-sm text-white/55">Легендарные игры всех времён</p>
              </div>
              <a href="#games" className="group inline-flex w-fit items-center gap-4 border border-white/25 px-5 py-3 text-xs font-semibold uppercase tracking-[0.17em] transition-all hover:border-amber-200 hover:bg-amber-200 hover:text-[#08090b]">
                Исследовать игры
                <span className="text-lg leading-none transition-transform group-hover:translate-x-1">↗</span>
              </a>
            </div>
          </div>

          <div className="relative mx-auto aspect-[0.9] w-full max-w-[31rem] lg:mr-0" aria-hidden="true">
            <div className="absolute right-[10%] top-[7%] h-[78%] w-[65%] rotate-[8deg] border border-white/15 bg-[#1b1c21]/80 shadow-2xl shadow-black/50 backdrop-blur-sm" />
            <div className="absolute left-[10%] top-[14%] h-[78%] w-[65%] -rotate-[9deg] border border-amber-200/30 bg-[#24201c]/80 shadow-2xl shadow-black/60 backdrop-blur-sm" />
            <div className="absolute inset-x-[18%] bottom-[5%] top-0 border border-white/25 bg-gradient-to-br from-[#35302b] via-[#16171b] to-[#0b0c0e] p-5 shadow-2xl shadow-black/70">
              <div className="flex h-full flex-col justify-between border border-white/10 p-5 sm:p-7">
                <div className="flex justify-between text-[9px] uppercase tracking-[0.22em] text-white/45"><span>Vol. 01</span><span>1990—26</span></div>
                <div>
                  <div className="mb-6 h-px w-16 bg-amber-300" />
                  <p className="font-serif text-4xl leading-[0.88] tracking-[-0.06em] text-white sm:text-5xl">PLAY<br /><span className="text-amber-200">FOREVER</span></p>
                </div>
                <div className="flex items-end justify-between"><span className="text-[9px] uppercase tracking-[0.18em] text-white/40">The essential archive</span><span className="text-3xl font-light text-white/70">01</span></div>
              </div>
            </div>
            <div className="absolute -bottom-1 left-0 flex items-center gap-3 text-[9px] uppercase tracking-[0.28em] text-white/35"><span className="h-px w-8 bg-amber-300/70" /> Curated memories</div>
          </div>
        </div>
      </section>

      <section id="legends" className="relative z-10 mx-auto w-full max-w-7xl px-6 pb-16 sm:px-10 lg:px-12" aria-labelledby="legends-title">
        <div className="mb-7 flex items-end justify-between gap-4 border-b border-white/10 pb-5">
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-amber-200/75">Из архива · 01—06</p>
            <h2 id="legends-title" className="mt-3 font-serif text-4xl tracking-[-0.06em] text-white sm:text-5xl">Легенды игровой индустрии</h2>
          </div>
          <span className="hidden font-serif text-4xl text-amber-100/70 sm:block">06</span>
        </div>

        <div className="grid gap-4 lg:grid-cols-[1.08fr_0.92fr]">
          {spotlightLegend && (
            <Link href={gamePages[spotlightLegend.title]} className="group relative flex min-h-[32rem] flex-col overflow-hidden border border-amber-200/25 bg-[#141821] shadow-2xl shadow-black/40">
              <Image src={featuredLegendImages[spotlightLegend.title]} alt={spotlightLegend.title} fill sizes="(max-width: 1023px) calc(100vw - 2rem), 58vw" quality={85} loading="lazy" className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#08090b] via-[#08090b]/25 to-transparent" />
              <span className="absolute left-5 top-5 border border-amber-200/35 bg-black/30 px-3 py-2 text-[9px] font-semibold uppercase tracking-[0.22em] text-amber-100/80 backdrop-blur-sm">01 / The original</span>
              <div className="relative mt-auto p-6 sm:p-8">
                <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-amber-200/80">{spotlightLegend.year} · {spotlightLegend.genre}</p>
                <h3 className="mt-3 font-serif text-6xl tracking-[-0.06em] text-white sm:text-7xl">{spotlightLegend.title}</h3>
                <p className="mt-4 max-w-xl text-sm leading-6 text-white/70">{spotlightLegend.description}</p>
                <span className="mt-6 inline-flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.18em] text-amber-100">
                  Открыть легенду <span className="text-base">↗</span>
                </span>
              </div>
            </Link>
          )}

          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
            {supportingLegends.map((game, index) => (
              <Link key={game.title} href={gamePages[game.title]} className="group flex min-h-24 overflow-hidden border border-white/10 bg-[#0d0f13]/80 transition-colors hover:border-amber-200/40 hover:bg-[#111318]">
                <div className="relative w-28 shrink-0 overflow-hidden bg-[#141821] sm:w-32">
                  <Image src={featuredLegendImages[game.title]} alt={game.title} fill sizes="128px" quality={85} loading="lazy" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#0d0f13]/50" />
                </div>
                <div className="flex min-w-0 flex-1 flex-col justify-center px-4 py-3">
                  <p className="text-[9px] font-semibold uppercase tracking-[0.2em] text-amber-200/65">0{index + 2} / {game.year}</p>
                  <h3 className="mt-1 truncate font-serif text-xl tracking-[-0.04em] text-white">{game.title}</h3>
                  <p className="mt-1 line-clamp-2 text-xs leading-5 text-white/55">{game.description}</p>
                </div>
                <span className="flex items-center px-3 text-sm text-amber-100/70 transition-transform group-hover:translate-x-1">↗</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <GameDecadeFilter />

        <FavoriteGamesSection>
          <div id="favorites" className="mb-10 flex items-end justify-between gap-4 border-b border-white/10 pb-5">
            <GameSectionTitle />
            <GameDecadeCount />
          </div>

          <GameSearchInput />

          <SortedGameGrid>
          {legendaryGames.map((game) => (
            <FavoriteGameCard key={game.title} title={game.title} year={game.year}>
              <div className="relative h-52 overflow-hidden border-b border-white/10 bg-[#141821]" style={{ background: game.title === 'DOOM' || game.title === 'Diablo' || game.title === 'Half-Life' || game.title === 'Counter-Strike' || game.title === 'GTA: San Andreas' || game.title === 'The Witcher 3' || game.title === 'Wolfenstein 3D' || game.title === 'Warcraft II' || game.title === 'Heroes of Might and Magic III' || game.title === 'Age of Empires II' || game.title === 'StarCraft' || game.title === 'Deus Ex' || game.title === 'Max Payne' || game.title === 'Morrowind' || game.title === 'Gothic' || game.title === 'Warcraft III' || game.title === 'Mafia' || game.title === 'Prince of Persia: The Sands of Time' || game.title === 'Need for Speed: Underground' || game.title === 'Half-Life 2' || game.title === 'World of Warcraft' || game.title === 'S.T.A.L.K.E.R.: Shadow of Chernobyl' || game.title === 'BioShock' || game.title === 'Assassin’s Creed' || game.title === 'Fallout 3' || game.title === 'Mass Effect' || game.title === 'Dead Space' || game.title === 'Mirror’s Edge' || game.title === 'Minecraft' || game.title === 'The Elder Scrolls V: Skyrim' || game.title === 'Dark Souls' || game.title === 'Dishonored' || game.title === 'Far Cry 3' || game.title === 'The Last of Us' || game.title === 'GTA V' || game.title === 'Cyberpunk 2077' ? 'transparent' : game.gradient }}>
                {game.title === 'DOOM' ? (
                  <>
                    <Image
                      src="/games/doom.png"
                      alt="DOOM"
                      fill
                      sizes="(max-width: 767px) calc(100vw - 2rem), (max-width: 1279px) calc(50vw - 2rem), 376px"
                      quality={85}
                      loading="lazy"
                      className="h-full w-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#09090b] via-[#09090b]/15 to-transparent" />
                  </>
                ) : game.title === 'Diablo' ? (
                  <>
                    <Image
                      src="/games/diablo.png"
                      alt="Diablo"
                      fill
                      sizes="(max-width: 767px) calc(100vw - 2rem), (max-width: 1279px) calc(50vw - 2rem), 376px"
                      quality={85}
                      loading="lazy"
                      className="h-full w-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#09090b] via-[#09090b]/15 to-transparent" />
                  </>
                ) : game.title === 'Half-Life' ? (
                  <>
                    <Image
                      src="/games/half-life.png"
                      alt="Half-Life"
                      fill
                      sizes="(max-width: 767px) calc(100vw - 2rem), (max-width: 1279px) calc(50vw - 2rem), 376px"
                      quality={85}
                      loading="lazy"
                      className="h-full w-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#09090b] via-[#09090b]/15 to-transparent" />
                  </>
                ) : game.title === 'Counter-Strike' ? (
                  <>
                    <Image
                      src="/games/counter-strike.png"
                      alt="Counter-Strike"
                      fill
                      sizes="(max-width: 767px) calc(100vw - 2rem), (max-width: 1279px) calc(50vw - 2rem), 376px"
                      quality={85}
                      loading="lazy"
                      className="h-full w-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#09090b] via-[#09090b]/15 to-transparent" />
                  </>
                ) : game.title === 'GTA: San Andreas' ? (
                  <>
                    <Image
                      src="/games/gta-san-andreas.png"
                      alt="GTA: San Andreas"
                      fill
                      sizes="(max-width: 767px) calc(100vw - 2rem), (max-width: 1279px) calc(50vw - 2rem), 376px"
                      quality={85}
                      loading="lazy"
                      className="h-full w-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#09090b] via-[#09090b]/15 to-transparent" />
                  </>
                ) : game.title === 'The Witcher 3' ? (
                  <>
                    <Image
                      src="/games/the-witcher-3.png"
                      alt="The Witcher 3"
                      fill
                      sizes="(max-width: 767px) calc(100vw - 2rem), (max-width: 1279px) calc(50vw - 2rem), 376px"
                      quality={85}
                      loading="lazy"
                      className="h-full w-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#09090b] via-[#09090b]/15 to-transparent" />
                  </>
                ) : game.title === 'Wolfenstein 3D' ? (
                  <>
                    <Image
                      src="/games/wolfenstein-3d.png"
                      alt="Wolfenstein 3D"
                      fill
                      sizes="(max-width: 767px) calc(100vw - 2rem), (max-width: 1279px) calc(50vw - 2rem), 376px"
                      quality={85}
                      loading="lazy"
                      className="h-full w-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#09090b] via-[#09090b]/15 to-transparent" />
                  </>
                ) : game.title === 'Warcraft II' ? (
                  <>
                    <Image
                      src="/games/warcraft-2.png"
                      alt="Warcraft II"
                      fill
                      sizes="(max-width: 767px) calc(100vw - 2rem), (max-width: 1279px) calc(50vw - 2rem), 376px"
                      quality={85}
                      loading="lazy"
                      className="h-full w-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#09090b] via-[#09090b]/15 to-transparent" />
                  </>
                ) : game.title === 'Heroes of Might and Magic III' ? (
                  <>
                    <Image
                      src="/games/heroes-3.png"
                      alt="Heroes of Might and Magic III"
                      fill
                      sizes="(max-width: 767px) calc(100vw - 2rem), (max-width: 1279px) calc(50vw - 2rem), 376px"
                      quality={85}
                      loading="lazy"
                      className="h-full w-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#09090b] via-[#09090b]/15 to-transparent" />
                  </>
                ) : game.title === 'Age of Empires II' ? (
                  <>
                    <Image
                      src="/games/age-of-empires-2.png"
                      alt="Age of Empires II"
                      fill
                      sizes="(max-width: 767px) calc(100vw - 2rem), (max-width: 1279px) calc(50vw - 2rem), 376px"
                      quality={85}
                      loading="lazy"
                      className="h-full w-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#09090b] via-[#09090b]/15 to-transparent" />
                  </>
                ) : game.title === 'StarCraft' ? (
                  <>
                    <Image
                      src="/games/starcraft.png"
                      alt="StarCraft"
                      fill
                      sizes="(max-width: 767px) calc(100vw - 2rem), (max-width: 1279px) calc(50vw - 2rem), 376px"
                      quality={85}
                      loading="lazy"
                      className="h-full w-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#09090b] via-[#09090b]/15 to-transparent" />
                  </>
                ) : game.title === 'Deus Ex' ? (
                  <>
                    <Image
                      src="/games/deus-ex.png"
                      alt="Deus Ex"
                      fill
                      sizes="(max-width: 767px) calc(100vw - 2rem), (max-width: 1279px) calc(50vw - 2rem), 376px"
                      quality={85}
                      loading="lazy"
                      className="h-full w-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#09090b] via-[#09090b]/15 to-transparent" />
                  </>
                ) : game.title === 'Max Payne' ? (
                  <>
                    <Image
                      src="/games/max-payne.png"
                      alt="Max Payne"
                      fill
                      sizes="(max-width: 767px) calc(100vw - 2rem), (max-width: 1279px) calc(50vw - 2rem), 376px"
                      quality={85}
                      loading="lazy"
                      className="h-full w-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#09090b] via-[#09090b]/15 to-transparent" />
                  </>
                ) : game.title === 'Morrowind' ? (
                  <>
                    <Image
                      src="/games/morrowind.png"
                      alt="Morrowind"
                      fill
                      sizes="(max-width: 767px) calc(100vw - 2rem), (max-width: 1279px) calc(50vw - 2rem), 376px"
                      quality={85}
                      loading="lazy"
                      className="h-full w-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#09090b] via-[#09090b]/15 to-transparent" />
                  </>
                ) : game.title === 'Gothic' ? (
                  <>
                    <Image
                      src="/games/gothic.png"
                      alt="Gothic"
                      fill
                      sizes="(max-width: 767px) calc(100vw - 2rem), (max-width: 1279px) calc(50vw - 2rem), 376px"
                      quality={85}
                      loading="lazy"
                      className="h-full w-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#09090b] via-[#09090b]/15 to-transparent" />
                  </>
                ) : game.title === 'Warcraft III' ? (
                  <>
                    <Image
                      src="/games/warcraft-3.png"
                      alt="Warcraft III"
                      fill
                      sizes="(max-width: 767px) calc(100vw - 2rem), (max-width: 1279px) calc(50vw - 2rem), 376px"
                      quality={85}
                      loading="lazy"
                      className="h-full w-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#09090b] via-[#09090b]/15 to-transparent" />
                  </>
                ) : game.title === 'Mafia' ? (
                  <>
                    <Image
                      src="/games/mafia.png"
                      alt="Mafia"
                      fill
                      sizes="(max-width: 767px) calc(100vw - 2rem), (max-width: 1279px) calc(50vw - 2rem), 376px"
                      quality={85}
                      loading="lazy"
                      className="h-full w-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#09090b] via-[#09090b]/15 to-transparent" />
                  </>
                ) : game.title === 'Prince of Persia: The Sands of Time' ? (
                  <>
                    <Image
                      src="/games/prince-of-persia.png"
                      alt="Prince of Persia: The Sands of Time"
                      fill
                      sizes="(max-width: 767px) calc(100vw - 2rem), (max-width: 1279px) calc(50vw - 2rem), 376px"
                      quality={85}
                      loading="lazy"
                      className="h-full w-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#09090b] via-[#09090b]/15 to-transparent" />
                  </>
                ) : game.title === 'Need for Speed: Underground' ? (
                  <>
                    <Image
                      src="/games/need-for-speed-underground.png"
                      alt="Need for Speed: Underground"
                      fill
                      sizes="(max-width: 767px) calc(100vw - 2rem), (max-width: 1279px) calc(50vw - 2rem), 376px"
                      quality={85}
                      loading="lazy"
                      className="h-full w-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#09090b] via-[#09090b]/15 to-transparent" />
                  </>
                ) : game.title === 'Half-Life 2' ? (
                  <>
                    <Image
                      src="/games/half-life-2.png"
                      alt="Half-Life 2"
                      fill
                      sizes="(max-width: 767px) calc(100vw - 2rem), (max-width: 1279px) calc(50vw - 2rem), 376px"
                      quality={85}
                      loading="lazy"
                      className="h-full w-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#09090b] via-[#09090b]/15 to-transparent" />
                  </>
                ) : game.title === 'World of Warcraft' ? (
                  <>
                    <Image
                      src="/games/world-of-warcraft.png"
                      alt="World of Warcraft"
                      fill
                      sizes="(max-width: 767px) calc(100vw - 2rem), (max-width: 1279px) calc(50vw - 2rem), 376px"
                      quality={85}
                      loading="lazy"
                      className="h-full w-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#09090b] via-[#09090b]/15 to-transparent" />
                  </>
                ) : game.title === 'S.T.A.L.K.E.R.: Shadow of Chernobyl' ? (
                  <>
                    <Image
                      src="/games/stalker-shadow-of-chernobyl.png"
                      alt="S.T.A.L.K.E.R.: Shadow of Chernobyl"
                      fill
                      sizes="(max-width: 767px) calc(100vw - 2rem), (max-width: 1279px) calc(50vw - 2rem), 376px"
                      quality={85}
                      loading="lazy"
                      className="h-full w-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#09090b] via-[#09090b]/15 to-transparent" />
                  </>
                ) : game.title === 'BioShock' ? (
                  <>
                    <Image
                      src="/games/bioshock.png"
                      alt="BioShock"
                      fill
                      sizes="(max-width: 767px) calc(100vw - 2rem), (max-width: 1279px) calc(50vw - 2rem), 376px"
                      quality={85}
                      loading="lazy"
                      className="h-full w-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#09090b] via-[#09090b]/15 to-transparent" />
                  </>
                ) : game.title === 'Assassin’s Creed' ? (
                  <>
                    <Image
                      src="/games/assassins-creed.png"
                      alt="Assassin’s Creed"
                      fill
                      sizes="(max-width: 767px) calc(100vw - 2rem), (max-width: 1279px) calc(50vw - 2rem), 376px"
                      quality={85}
                      loading="lazy"
                      className="h-full w-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#09090b] via-[#09090b]/15 to-transparent" />
                  </>
                ) : game.title === 'Fallout 3' ? (
                  <>
                    <Image
                      src="/games/fallout-3.png"
                      alt="Fallout 3"
                      fill
                      sizes="(max-width: 767px) calc(100vw - 2rem), (max-width: 1279px) calc(50vw - 2rem), 376px"
                      quality={85}
                      loading="lazy"
                      className="h-full w-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#09090b] via-[#09090b]/15 to-transparent" />
                  </>
                ) : game.title === 'Mass Effect' ? (
                  <>
                    <Image
                      src="/games/mass-effect.png"
                      alt="Mass Effect"
                      fill
                      sizes="(max-width: 767px) calc(100vw - 2rem), (max-width: 1279px) calc(50vw - 2rem), 376px"
                      quality={85}
                      loading="lazy"
                      className="h-full w-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#09090b] via-[#09090b]/15 to-transparent" />
                  </>
                ) : game.title === 'Dead Space' ? (
                  <>
                    <Image
                      src="/games/dead-space.png"
                      alt="Dead Space"
                      fill
                      sizes="(max-width: 767px) calc(100vw - 2rem), (max-width: 1279px) calc(50vw - 2rem), 376px"
                      quality={85}
                      loading="lazy"
                      className="h-full w-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#09090b] via-[#09090b]/15 to-transparent" />
                  </>
                ) : game.title === 'Mirror’s Edge' ? (
                  <>
                    <Image
                      src="/games/mirrors-edge.png"
                      alt="Mirror’s Edge"
                      fill
                      sizes="(max-width: 767px) calc(100vw - 2rem), (max-width: 1279px) calc(50vw - 2rem), 376px"
                      quality={85}
                      loading="lazy"
                      className="h-full w-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#09090b] via-[#09090b]/15 to-transparent" />
                  </>
                ) : game.title === 'Minecraft' ? (
                  <>
                    <Image
                      src="/games/minecraft.png"
                      alt="Minecraft"
                      fill
                      sizes="(max-width: 767px) calc(100vw - 2rem), (max-width: 1279px) calc(50vw - 2rem), 376px"
                      quality={85}
                      loading="lazy"
                      className="h-full w-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#09090b] via-[#09090b]/15 to-transparent" />
                  </>
                ) : game.title === 'The Elder Scrolls V: Skyrim' ? (
                  <>
                    <Image
                      src="/games/skyrim.png"
                      alt="The Elder Scrolls V: Skyrim"
                      fill
                      sizes="(max-width: 767px) calc(100vw - 2rem), (max-width: 1279px) calc(50vw - 2rem), 376px"
                      quality={85}
                      loading="lazy"
                      className="h-full w-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#09090b] via-[#09090b]/15 to-transparent" />
                  </>
                ) : game.title === 'Dark Souls' ? (
                  <>
                    <Image
                      src="/games/dark-souls.png"
                      alt="Dark Souls"
                      fill
                      sizes="(max-width: 767px) calc(100vw - 2rem), (max-width: 1279px) calc(50vw - 2rem), 376px"
                      quality={85}
                      loading="lazy"
                      className="h-full w-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#09090b] via-[#09090b]/15 to-transparent" />
                  </>
                ) : game.title === 'Dishonored' ? (
                  <>
                    <Image
                      src="/games/dishonored.png"
                      alt="Dishonored"
                      fill
                      sizes="(max-width: 767px) calc(100vw - 2rem), (max-width: 1279px) calc(50vw - 2rem), 376px"
                      quality={85}
                      loading="lazy"
                      className="h-full w-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#09090b] via-[#09090b]/15 to-transparent" />
                  </>
                ) : game.title === 'Far Cry 3' ? (
                  <>
                    <Image
                      src="/games/far-cry-3.png"
                      alt="Far Cry 3"
                      fill
                      sizes="(max-width: 767px) calc(100vw - 2rem), (max-width: 1279px) calc(50vw - 2rem), 376px"
                      quality={85}
                      loading="lazy"
                      className="h-full w-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#09090b] via-[#09090b]/15 to-transparent" />
                  </>
                ) : game.title === 'The Last of Us' ? (
                  <>
                    <Image
                      src="/games/the-last-of-us.png"
                      alt="The Last of Us"
                      fill
                      sizes="(max-width: 767px) calc(100vw - 2rem), (max-width: 1279px) calc(50vw - 2rem), 376px"
                      quality={85}
                      loading="lazy"
                      className="h-full w-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#09090b] via-[#09090b]/15 to-transparent" />
                  </>
                ) : game.title === 'GTA V' ? (
                  <>
                    <Image
                      src="/games/gta-5.png"
                      alt="GTA V"
                      fill
                      sizes="(max-width: 767px) calc(100vw - 2rem), (max-width: 1279px) calc(50vw - 2rem), 376px"
                      quality={85}
                      loading="lazy"
                      className="h-full w-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#09090b] via-[#09090b]/15 to-transparent" />
                  </>
                ) : game.title === 'Cyberpunk 2077' ? (
                  <>
                    <Image
                      src="/games/cyberpunk-2077.png"
                      alt="Cyberpunk 2077"
                      fill
                      sizes="(max-width: 767px) calc(100vw - 2rem), (max-width: 1279px) calc(50vw - 2rem), 376px"
                      quality={85}
                      loading="lazy"
                      className="h-full w-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#09090b] via-[#09090b]/15 to-transparent" />
                  </>
                ) : (
                  <>
                    <div className="absolute inset-0 opacity-40 [background-image:linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)] [background-size:18px_18px]" />
                    <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-[#09090b] via-[#09090b]/40 to-transparent" />
                  </>
                )}
                <FavoriteToggle title={game.title} />
                <div className="absolute left-4 top-4 rounded-full border border-white/15 bg-black/20 px-2 py-1 text-[9px] uppercase tracking-[0.22em] text-white/60 backdrop-blur-sm">{game.year}</div>
                <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between">
                  <span className="text-[10px] uppercase tracking-[0.2em] text-white/55">Classic era</span>
                  <span className="font-serif text-3xl tracking-[-0.06em] text-amber-100/90">{game.title === 'Heroes of Might and Magic III' ? 'Heroes III' : game.title === 'Prince of Persia: The Sands of Time' ? 'Sands of Time' : game.title === 'Need for Speed: Underground' ? 'Underground' : game.title === 'S.T.A.L.K.E.R.: Shadow of Chernobyl' ? 'S.T.A.L.K.E.R.' : game.title === 'The Elder Scrolls V: Skyrim' ? 'Skyrim' : game.title}</span>
                </div>
              </div>

              <div className="flex flex-1 flex-col p-5">
                <div className="flex items-start justify-between gap-3">
                  <h3 className="font-serif text-2xl tracking-[-0.06em] text-white">{game.title}</h3>
                  <span className="mt-1 text-xs uppercase tracking-[0.18em] text-amber-200/90">{game.year}</span>
                </div>

                <p className="mt-3 text-[10px] font-medium uppercase tracking-[0.24em] text-white/45">{game.genre}</p>
                <p className="mt-4 text-sm leading-6 text-white/70">{game.description}</p>

                <div className="mt-auto pt-6">
                  {game.title === 'DOOM' ? (
                    <Link href="/games/doom" className="inline-flex items-center gap-3 border border-amber-200/45 bg-amber-200/5 px-4 py-2.5 text-[10px] font-semibold uppercase tracking-[0.18em] text-amber-100 transition-colors hover:border-amber-200 hover:bg-amber-200 hover:text-[#08090b]">
                      Подробнее
                      <span className="text-base leading-none">↗</span>
                    </Link>
                  ) : (
                    <Link href={gamePages[game.title]} className="inline-flex items-center gap-3 border border-amber-200/45 bg-amber-200/5 px-4 py-2.5 text-[10px] font-semibold uppercase tracking-[0.18em] text-amber-100 transition-colors hover:border-amber-200 hover:bg-amber-200 hover:text-[#08090b]">
                      Подробнее
                      <span className="text-base leading-none">↗</span>
                    </Link>
                  )}
                </div>
              </div>
            </FavoriteGameCard>
          ))}
          </SortedGameGrid>
        </FavoriteGamesSection>
    </main>
    </GameDecadeProvider>
  );
}