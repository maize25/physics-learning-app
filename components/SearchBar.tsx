'use client';

import { useMemo } from 'react';
import { searchItems } from '../data/search-items';
import { useUniversalSearch } from '../hooks/useUniversalSearch';
import { SearchItem } from '../data/search-items';

const getTypeClasses = (type: string) => {
  switch (type) {
    case 'lesson':
      return 'bg-sky-100 text-sky-800 dark:bg-sky-900/50 dark:text-sky-300';
    case 'book':
      return 'bg-emerald-100 text-emerald-800 dark:bg-emerald-900/50 dark:text-emerald-300';
    case 'quote':
      return 'bg-amber-100 text-amber-800 dark:bg-amber-900/50 dark:text-amber-300';
    case 'glossary':
      return 'bg-violet-100 text-violet-800 dark:bg-violet-900/50 dark:text-violet-300';
    default:
      return 'bg-slate-100 text-slate-800 dark:bg-slate-900/50 dark:text-slate-300';
  }
};

export default function SearchBar() {
  const { query, setQuery, results } = useUniversalSearch(searchItems);

  const filtered = useMemo(() => {
    if (!query.trim()) return [];
    return results;
  }, [query, results]);

  return (
    <div className="relative mx-auto w-full max-w-3xl">
      <div className="relative">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search lessons, books, quotes, or glossary terms..."
          className="w-full rounded-3xl border border-slate-300 bg-white px-5 py-4 pr-16 text-lg text-slate-900 shadow-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-200 dark:border-slate-700 dark:bg-slate-950 dark:text-white dark:focus:border-blue-400 dark:focus:ring-blue-900"
        />
        <span className="absolute right-5 top-1/2 -translate-y-1/2 text-slate-400">🔍</span>
      </div>

      <div className="mt-5 rounded-3xl border border-slate-200 bg-white shadow-2xl dark:border-slate-700 dark:bg-slate-950">
        {!query.trim() ? (
          <div className="p-8 text-center text-slate-500 dark:text-slate-400">
            Start typing to search lessons, books, quotes, and glossary entries.
          </div>
        ) : filtered.length === 0 ? (
          <div className="p-8 text-center text-slate-500 dark:text-slate-400">
            No results found for "{query}". Try expanding your search.
          </div>
        ) : (
          <ul className="space-y-3 p-4">
            {filtered.map((item: SearchItem) => (
              <li key={item.id} className="rounded-3xl border border-slate-200 p-4 transition hover:border-blue-300 hover:bg-blue-50 dark:border-slate-700 dark:hover:border-blue-600 dark:hover:bg-slate-900">
                <a href={item.url} className="block">
                  <div className="flex items-center justify-between gap-4">
                    <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{item.title}</h3>
                    <span className={`rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] ${getTypeClasses(item.type)}`}>
                      {item.type}
                    </span>
                  </div>
                  <p className="mt-2 text-slate-600 dark:text-slate-400">{item.description}</p>
                </a>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
