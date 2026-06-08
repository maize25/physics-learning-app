'use client'
import Fuse from 'fuse.js'
import { useState, useMemo } from 'react'
import { searchIndex } from '../data/searchIndex'

export function useSearch() {
  const [query, setQuery] = useState('')

  const fuse = useMemo(() => new Fuse(searchIndex, {
    keys: ['title', 'description', 'tags'],
    threshold: 0.4,
    includeScore: true
  }), [])

  const results = useMemo(() => {
    if (!query.trim()) return []
    return fuse.search(query).map(r => r.item)
  }, [query, fuse])

  return { query, setQuery, results }
}
