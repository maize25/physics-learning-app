'use client'

import { useEffect, useState } from 'react';

const RSS_SOURCES = [
  'https://api.rss2json.com/v1/api.json?rss_url=https://www.sciencedaily.com/rss/matter_energy/physics.xml&count=6',
  'https://api.rss2json.com/v1/api.json?rss_url=https://phys.org/rss-feed/physics-news/&count=6',
];

const FALLBACK_ARTICLES = [
  {
    title: 'James Webb Telescope Reveals Earliest Galaxies',
    link: 'https://science.nasa.gov/mission/webb',
    pubDate: '2024-01-01',
    description: 'Webb observes galaxies from just 300 million years after the Big Bang.',
  },
  {
    title: 'CERN Discovers New Subatomic Particles',
    link: 'https://home.cern/news',
    pubDate: '2024-01-01',
    description: 'LHC experiments reveal new exotic hadron states in proton collisions.',
  },
  {
    title: 'Quantum Computer Achieves New Milestone',
    link: 'https://quantumai.google',
    pubDate: '2024-01-01',
    description: 'Google’s quantum processor performs calculation impossible for classical computers.',
  },
  {
    title: 'Dark Energy Survey Completes 6-Year Mission',
    link: 'https://www.darkenergysurvey.org',
    pubDate: '2024-01-01',
    description: 'DES maps 300 million galaxies to understand the accelerating expansion.',
  },
  {
    title: 'Nuclear Fusion Reaches New Energy Record',
    link: 'https://www.iter.org',
    pubDate: '2024-01-01',
    description: 'ITER collaboration reports sustained plasma for record duration.',
  },
  {
    title: 'Gravitational Wave Detectors Upgraded',
    link: 'https://www.ligo.org',
    pubDate: '2024-01-01',
    description: 'LIGO-Virgo-KAGRA network detects dozens of new black hole mergers.',
  },
];

interface FeedItem {
  title: string;
  link: string;
  pubDate: string;
  description: string;
}

export default function NewsFeed() {
  const [articles, setArticles] = useState<FeedItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const cache = window.localStorage.getItem('physics_news_cache');
    if (cache) {
      const parsed = JSON.parse(cache);
      if (Date.now() - parsed.timestamp < 3600000) {
        setArticles(parsed.data);
        setLoading(false);
        return;
      }
    }

    fetch(RSS_SOURCES[0])
      .then((res) => res.json())
      .then((json) => {
        const items = json.items?.slice(0, 6).map((item: any) => ({
          title: item.title,
          link: item.link,
          pubDate: item.pubDate,
          description: item.description,
        })) || FALLBACK_ARTICLES;
        window.localStorage.setItem('physics_news_cache', JSON.stringify({ data: items, timestamp: Date.now() }));
        setArticles(items);
      })
      .catch(() => {
        setArticles(FALLBACK_ARTICLES);
      })
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-950">
      <div className="mb-5 flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Physics News</h2>
          <p className="text-sm text-slate-500 dark:text-slate-400">Latest science headlines with fallback stories if the feed is unavailable.</p>
        </div>
        {loading && <p className="text-sm text-slate-500 dark:text-slate-400 animate-pulse">Fetching latest physics news...</p>}
      </div>
      <div className="space-y-4">
        {articles.map((article) => (
          <a
            key={article.link}
            href={article.link}
            target="_blank"
            rel="noopener noreferrer"
            className="block rounded-3xl border border-slate-100 bg-slate-50 p-4 transition hover:border-blue-300 dark:border-slate-700 dark:bg-slate-900"
          >
            <h3 className="font-semibold text-slate-900 dark:text-white">{article.title}</h3>
            <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">{article.description}</p>
            <p className="mt-3 text-xs uppercase tracking-[0.2em] text-slate-400 dark:text-slate-500">{article.pubDate}</p>
          </a>
        ))}
      </div>
    </div>
  );
}
