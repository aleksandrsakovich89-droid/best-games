import type { Metadata } from 'next';

export const SITE_URL = 'https://best-games-ten.vercel.app';
export const SITE_NAME = 'BEST GAMES';

export const homeMetadata: Metadata = {
  title: { absolute: 'BEST GAMES — легендарные игры всех времён' },
  description: 'Каталог легендарных видеоигр: истории, жанры и годы выхода классики игровой индустрии от DOOM и Half-Life до The Witcher 3.',
  keywords: ['BEST GAMES', 'легендарные игры', 'классические видеоигры', 'история видеоигр', 'игры по годам'],
  alternates: { canonical: SITE_URL },
  openGraph: {
    title: 'BEST GAMES — легендарные игры всех времён',
    description: 'Исследуйте каталог классических видеоигр с описаниями, жанрами и годами выхода.',
    url: SITE_URL,
    siteName: SITE_NAME,
    locale: 'ru_RU',
    type: 'website',
    images: [{ url: '/games/doom.png', alt: 'Коллекция BEST GAMES' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'BEST GAMES — легендарные игры всех времён',
    description: 'Каталог классических видеоигр с описаниями, жанрами и годами выхода.',
    images: ['/games/doom.png'],
  },
};

export const seoGames = [
  { slug: 'doom', title: 'DOOM', year: 1993, genre: 'Шутер от первого лица', description: 'Бунт против ада, безумная скорость и легендарный геймплей, который изменил индустрию FPS навсегда.' },
  { slug: 'diablo', title: 'Diablo', year: 1996, genre: 'Action RPG', description: 'Сердце ролевого экшена с добычей, прокачкой героя и атмосферой вечного похода в глубины ада.' },
  { slug: 'half-life', title: 'Half-Life', year: 1998, genre: 'Научно-фантастический шутер', description: 'Мастерская история, напряжённая атмосфера и революционный сюжет, который до сих пор вдохновляет разработчиков.' },
  { slug: 'counter-strike', title: 'Counter-Strike', year: 2000, genre: 'Тактический шутер', description: 'Командный дух, точная тактика и адреналин соревновательных сражений, ставшие эталоном жанра.' },
  { slug: 'gta-san-andreas', title: 'GTA: San Andreas', year: 2004, genre: 'Открытый мир', description: 'Культовый город, огромная карта и свобода выбора — игра, которая стала символом эпохи PlayStation 2.' },
  { slug: 'the-witcher-3', title: 'The Witcher 3', year: 2015, genre: 'RPG', description: 'Величественный мир, сложные решения и потрясающая история, которые вывели RPG на новый уровень.' },
  { slug: 'wolfenstein-3d', title: 'Wolfenstein 3D', year: 1992, genre: 'Шутер от первого лица', description: 'Побег из стен замка превращается в стремительный прорыв сквозь лабиринты, где каждый поворот ведёт к новой опасности.' },
  { slug: 'warcraft-2', title: 'Warcraft II', year: 1995, genre: 'Стратегия в реальном времени', description: 'Собирайте ресурсы, возводите крепости и ведите флот через бурные воды, где исход войны людей и орков решает каждый приказ.' },
  { slug: 'heroes-3', title: 'Heroes of Might and Magic III', year: 1999, genre: 'Пошаговая стратегия', description: 'Прокладывайте путь по зачарованным землям, собирайте армию из мифических существ и решайте судьбу королевства ход за ходом.' },
  { slug: 'age-of-empires-2', title: 'Age of Empires II', year: 1999, genre: 'Стратегия в реальном времени', description: 'Проведите цивилизацию сквозь века: развивайте экономику, возводите города и решайте исход сражений на поле боя.' },
  { slug: 'starcraft', title: 'StarCraft', year: 1998, genre: 'Стратегия в реальном времени', description: 'На далёком рубеже галактики три цивилизации ведут борьбу за выживание, где каждый ресурс и каждое решение меняют ход войны.' },
  { slug: 'deus-ex', title: 'Deus Ex', year: 2000, genre: 'Иммерсивный симулятор / RPG', description: 'В мрачном киберпанковом мире технологии переплетаются с тайными заговорами, а каждый выбор открывает свой путь — от скрытной операции до прямого столкновения.' },
  { slug: 'max-payne', title: 'Max Payne', year: 2001, genre: 'Шутер от третьего лица / нуар', description: 'Заснеженный город тонет в тенях, а сломленный детектив идёт по следу заговора сквозь криминальный нуар и собственные кошмары.' },
  { slug: 'morrowind', title: 'Morrowind', year: 2002, genre: 'Ролевая игра / открытый мир', description: 'Странствия по пепельным пустошам Вварденфелла ведут к древним тайнам, необычным культурам и историям, которые вы выбираете сами.' },
  { slug: 'gothic', title: 'Gothic', year: 2001, genre: 'Ролевая игра / экшен', description: 'За магическим Барьером жизнь Колонии подчинена своим суровым законам: найдите место среди лагерей и выберите собственный путь.' },
  { slug: 'warcraft-3', title: 'Warcraft III', year: 2002, genre: 'Стратегия в реальном времени', description: 'Люди, орки, нежить и ночные эльфы сходятся в битве, пока над Азеротом сгущается тень древней угрозы.' },
  { slug: 'mafia', title: 'Mafia', year: 2002, genre: 'Экшен / приключение', description: 'В городе 1930-х таксист Томми Анджело обретает семью и положение, но верность преступному миру неизбежно ведёт к тяжёлому выбору.' },
  { slug: 'prince-of-persia', title: 'Prince of Persia: The Sands of Time', year: 2003, genre: 'Экшен / приключение', description: 'В древней Персии принц проходит сквозь дворцовые ловушки и ожившие пески, пытаясь исправить роковую ошибку и повернуть время вспять.' },
  { slug: 'need-for-speed-underground', title: 'Need for Speed: Underground', year: 2003, genre: 'Аркадные гонки', description: 'Под неоновыми огнями городских улиц ревут моторы: тюнингованные машины мчатся за славой в подпольной гоночной культуре.' },
  { slug: 'half-life-2', title: 'Half-Life 2', year: 2004, genre: 'Шутер от первого лица / приключение', description: 'В оккупированном Сити 17 Гордон Фримен вновь вступает в борьбу, где каждый шаг приближает людей к надежде на освобождение.' },
  { slug: 'world-of-warcraft', title: 'World of Warcraft', year: 2004, genre: 'MMORPG / фэнтези', description: 'Отправляйтесь навстречу древним тайнам Азерота, выберите сторону Альянса или Орды и разделите опасные приключения с союзниками.' },
  { slug: 'stalker-shadow-of-chernobyl', title: 'S.T.A.L.K.E.R.: Shadow of Chernobyl', year: 2007, genre: 'Шутер от первого лица / survival horror', description: 'За ржавыми периметрами Зоны путь к Припяти пролегает через аномалии, мутантов и охоту за артефактами, где любая вылазка может стать последней.' },
  { slug: 'bioshock', title: 'BioShock', year: 2007, genre: 'Шутер от первого лица / immersive sim', description: 'Под океаном мерцает Восторг: плазмиды обещают власть, Большие Папочки охраняют мрачные тайны, а каждый выбор имеет цену.' },
  { slug: 'assassins-creed', title: 'Assassin’s Creed', year: 2007, genre: 'Экшен / приключение / стелс', description: 'Среди шумных городов Святой земли ассасин скрывается в толпе, взбирается на крыши и выслеживает тамплиеров, меняющих ход крестовых походов.' },
  { slug: 'fallout-3', title: 'Fallout 3', year: 2008, genre: 'Ролевая игра / постапокалипсис', description: 'Выйдя из Убежища 101, вы отправляетесь через разрушенную Столичную Пустошь, где встречи с мутантами и решения меняют судьбы людей.' },
  { slug: 'mass-effect', title: 'Mass Effect', year: 2007, genre: 'Action RPG / научная фантастика', description: 'Командир Шепард и экипаж «Нормандии» отправляются исследовать галактику, где каждое решение способно изменить судьбу миров.' },
  { slug: 'dead-space', title: 'Dead Space', year: 2008, genre: 'Survival horror / научная фантастика', description: 'Инженер Айзек Кларк исследует заброшенные отсеки USG Ishimura, где гул пустого корабля скрывает угрозу и не оставляет места для ошибки.' },
  { slug: 'mirrors-edge', title: 'Mirror’s Edge', year: 2008, genre: 'Экшен / паркур', description: 'Курьер Фейт несётся над улицами сияющего мегаполиса, превращая крыши, стены и лестницы в маршрут сквозь погони и неон.' },
  { slug: 'minecraft', title: 'Minecraft', year: 2011, genre: 'Песочница / выживание', description: 'Исследуйте бескрайний кубический мир, добывайте ресурсы, стройте убежища и отправляйтесь в путешествия, ограниченные лишь вашим воображением.' },
  { slug: 'skyrim', title: 'The Elder Scrolls V: Skyrim', year: 2011, genre: 'Ролевая игра / открытый мир', description: 'Станьте Довакином и отправьтесь через древние руины и суровые города Скайрима навстречу драконам, тайнам и решениям, определяющим ваш путь.' },
  { slug: 'dark-souls', title: 'Dark Souls', year: 2011, genre: 'Action RPG / тёмное фэнтези', description: 'Проклятый Лордран хранит взаимосвязанные руины, смертоносных боссов и костры, у которых можно перевести дух перед новой схваткой.' },
  { slug: 'dishonored', title: 'Dishonored', year: 2012, genre: 'Action / стелс / immersive sim', description: 'В охваченном чумой Дануолле Корво сочетает скрытность и сверхъестественные силы, а выбранный путь меняет судьбу города.' },
  { slug: 'far-cry-3', title: 'Far Cry 3', year: 2012, genre: 'Шутер от первого лица / открытый мир', description: 'На тропических островах Джейсон Броди учится выживать: исследует джунгли, охотится и отвоёвывает аванпосты у людей Вааса.' },
  { slug: 'the-last-of-us', title: 'The Last of Us', year: 2013, genre: 'Action-adventure / survival horror', description: 'Джоэл и Элли пересекают заражённую Америку, пробираясь через заброшенные города и опасности, которые меняют их отношения и взгляды на выживание.' },
  { slug: 'gta-5', title: 'GTA V', year: 2013, genre: 'Action-adventure / открытый мир', description: 'Майкл, Франклин и Тревор прокладывают свой путь в Лос-Сантосе через ограбления, погони и опасные решения в огромном открытом мире.' },
  { slug: 'cyberpunk-2077', title: 'Cyberpunk 2077', year: 2020, genre: 'Action RPG / открытый мир / киберпанк', description: 'Наёмник Ви ищет свой путь в Найт-Сити, где импланты меняют тела, мегакорпорации правят улицами, а каждое решение влияет на судьбу города.' },
] as const;

export type SeoGame = (typeof seoGames)[number];

export function getSeoGame(slug: string) {
  const game = seoGames.find((entry) => entry.slug === slug);

  if (!game) {
    throw new Error(`Unknown game SEO route: ${slug}`);
  }

  return game;
}

export function getGameMetadata(slug: string): Metadata {
  const game = getSeoGame(slug);
  const url = `${SITE_URL}/games/${game.slug}`;
  const image = `/games/${game.slug}.png`;
  const title = `${game.title} (${game.year}) — ${game.genre}`;

  return {
    title,
    description: game.description,
    keywords: [game.title, String(game.year), game.genre, 'классические видеоигры'],
    alternates: { canonical: url },
    openGraph: {
      title: `${title} | ${SITE_NAME}`,
      description: game.description,
      url,
      siteName: SITE_NAME,
      locale: 'ru_RU',
      type: 'website',
      images: [{ url: image, alt: `${game.title} (${game.year})` }],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${title} | ${SITE_NAME}`,
      description: game.description,
      images: [image],
    },
  };
}

function jsonLdScript(data: object) {
  return JSON.stringify(data).replace(/</g, '\\u003c');
}

export function SiteStructuredData() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: jsonLdScript({
          '@context': 'https://schema.org',
          '@type': 'WebSite',
          '@id': `${SITE_URL}/#website`,
          name: SITE_NAME,
          url: SITE_URL,
          description: 'Каталог легендарных видеоигр с описаниями, жанрами и годами выхода.',
          inLanguage: 'ru-RU',
        }),
      }}
    />
  );
}

export function GameStructuredData({ slug }: { slug: string }) {
  const game = getSeoGame(slug);

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: jsonLdScript({
          '@context': 'https://schema.org',
          '@type': 'VideoGame',
          name: game.title,
          description: game.description,
          datePublished: String(game.year),
          genre: game.genre,
          image: `${SITE_URL}/games/${game.slug}.png`,
          url: `${SITE_URL}/games/${game.slug}`,
          inLanguage: 'ru-RU',
        }),
      }}
    />
  );
}