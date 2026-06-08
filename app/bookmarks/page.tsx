'use client'

import PageTransition from '@/src/components/effects/PageTransition';
import { useBookmarks } from '@/src/hooks/useBookmarks';

export default function BookmarksPage() {
  const { bookmarks, removeBookmark } = useBookmarks();

  return (
    <PageTransition>
      <section className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="mb-10 rounded-[2rem] border border-gray-700 bg-gray-900 p-10 shadow-xl">
          <div className="max-w-3xl">
            <p className="text-sm uppercase tracking-[0.3em] text-cyan-400">Saved items</p>
            <h1 className="mt-4 text-4xl font-bold text-white sm:text-5xl">Your bookmarks</h1>
            <p className="mt-5 text-lg leading-8 text-gray-300">
              Find bookmarked lessons in one place so you can revisit them quickly.
            </p>
          </div>
        </div>

        {bookmarks.length === 0 ? (
          <div className="rounded-3xl border border-gray-700 bg-gray-900 p-10 text-center text-gray-300">
            <p className="text-lg font-medium text-white mb-3">No bookmarks yet.</p>
            <p className="text-sm">Bookmark lessons to find them here.</p>
          </div>
        ) : (
          <div className="grid gap-4">
            {bookmarks.map((bookmark) => (
              <div
                key={bookmark.id}
                className="rounded-3xl border border-gray-700 bg-gray-900 p-6 shadow-sm"
              >
                <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <p className="text-sm uppercase tracking-[0.2em] text-cyan-400">{bookmark.subject}</p>
                    <h2 className="mt-2 text-2xl font-semibold text-white">{bookmark.title}</h2>
                    <p className="mt-3 text-sm text-gray-400">Saved on {bookmark.savedAt}</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <a
                      href={bookmark.route}
                      className="rounded-full border border-gray-700 bg-gray-800 px-4 py-2 text-sm text-white transition hover:bg-gray-700"
                    >
                      Open
                    </a>
                    <button
                      onClick={() => removeBookmark(bookmark.id)}
                      className="rounded-full border border-red-500 bg-red-600 px-4 py-2 text-sm text-white transition hover:bg-red-500"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>
    </PageTransition>
  );
}
