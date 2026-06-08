'use client'
import { useState, useEffect } from 'react'

export interface Bookmark {
  id: string
  title: string
  route: string
  subject: string
  savedAt: string
}

export function useBookmarks() {
  const [bookmarks, setBookmarks] = useState<Bookmark[]>([])

  useEffect(() => {
    const saved = localStorage.getItem('physics-bookmarks')
    if (saved) setBookmarks(JSON.parse(saved))
  }, [])

  const addBookmark = (title: string, route: string, subject: string) => {
    const bookmark: Bookmark = {
      id: Date.now().toString(),
      title,
      route,
      subject,
      savedAt: new Date().toLocaleDateString(),
    }
    const updated = [...bookmarks, bookmark]
    setBookmarks(updated)
    localStorage.setItem('physics-bookmarks', JSON.stringify(updated))
  }

  const removeBookmark = (id: string) => {
    const updated = bookmarks.filter((b) => b.id !== id)
    setBookmarks(updated)
    localStorage.setItem('physics-bookmarks', JSON.stringify(updated))
  }

  const isBookmarked = (route: string) => bookmarks.some((b) => b.route === route)

  return { bookmarks, addBookmark, removeBookmark, isBookmarked }
}
