'use client'

import { useEffect, useState } from 'react';
import { getBookmarks, Bookmark } from '../lib/bookmarks';

export default function BookmarksManager() {
  const [bookmarks, setBookmarks] = useState<Bookmark[]>([]);

  useEffect(() => {
    setBookmarks(getBookmarks());
  }, []);

  if (!bookmarks.length) {
    return (
      <div className="rounded-3xl border border-slate-200 bg-white p-8 text-center shadow-lg dark:border-slate-700 dark:bg-slate-950">
        <h2 className="text-3xl font-bold text-slate-900 dark:text-white">No bookmarks yet</h2>
        <p className="mt-3 text-slate-600 dark:text-slate-300">Save lessons, tools, or articles as you explore the app and find them here later.</p>
      </div>
    );
  }

  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-lg dark:border-slate-700 dark:bg-slate-950">
      <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-sm uppercase tracking-[0.3em] text-violet-500">Bookmarks</p>
          <h2 className="mt-2 text-3xl font-bold text-slate-900 dark:text-white">Saved learning items</h2>
        </div>
        <p className="rounded-3xl bg-violet-50 px-4 py-3 text-violet-700 dark:bg-violet-900/20 dark:text-violet-200">Keep your favorite resources handy.</p>
      </div>
      <div className="divide-y divide-slate-200 dark:divide-slate-800">
        {bookmarks.map((bookmark) => (
          <a
            key={bookmark.id}
            href={bookmark.href}
            className="flex flex-col gap-2 rounded-3xl border border-slate-200 bg-slate-50 p-5 transition hover:border-violet-300 hover:bg-white dark:border-slate-700 dark:bg-slate-900 dark:hover:border-violet-500/30 dark:hover:bg-slate-800"
            target="_blank"
            rel="noreferrer"
          >
            <div className="flex items-center justify-between gap-4">
              <div>
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{bookmark.title}</h3>
                <p className="text-sm uppercase tracking-[0.25em] text-slate-500 dark:text-slate-400">{bookmark.type}</p>
              </div>
              <span className="rounded-full bg-violet-100 px-3 py-1 text-xs font-semibold text-violet-700 dark:bg-violet-900/40 dark:text-violet-200">Saved</span>
            </div>
            <p className="text-sm text-slate-600 dark:text-slate-300">Added {new Date(bookmark.savedAt).toLocaleDateString()}</p>
          </a>
        ))}
      </div>
    </div>
  );
}
