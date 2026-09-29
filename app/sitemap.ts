import type { MetadataRoute } from 'next';
import { seoGames, SITE_URL } from './seo';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: SITE_URL,
      changeFrequency: 'weekly',
      priority: 1,
    },
    ...seoGames.map((game) => ({
      url: `${SITE_URL}/games/${game.slug}`,
      images: [`${SITE_URL}/games/${game.slug}.png`],
      changeFrequency: 'yearly' as const,
      priority: 0.7,
    })),
  ];
}