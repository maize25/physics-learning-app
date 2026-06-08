'use client'

import { useBookmarks } from '../../hooks/useBookmarks'
import { usePathname } from 'next/navigation'

export default function BookmarkButton({ title, subject }: { title: string; subject: string }) {
  const { addBookmark, removeBookmark, isBookmarked, bookmarks } = useBookmarks()
  const pathname = usePathname()
  const bookmarked = isBookmarked(pathname)
  const current = bookmarks.find((b) => b.route === pathname)

  return (
    <button
      onClick={() =>
        bookmarked && current
          ? removeBookmark(current.id)
          : addBookmark(title, pathname, subject)
      }
      className={`flex items-center gap-2 px-4 py-2 rounded-xl border transition-all text-sm font-medium
        ${bookmarked
          ? 'bg-indigo-600 border-indigo-500 text-white'
          : 'bg-gray-800 border-gray-700 text-gray-300 hover:border-indigo-500 hover:text-white'
        }`}
    >
      {bookmarked ? '🔖 Bookmarked' : '🔖 Bookmark'}
    </button>
  )
}
