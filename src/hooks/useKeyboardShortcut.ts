'use client'
import { useEffect } from 'react'

export function useKeyboardShortcut(
  key: string,
  callback: () => void,
  modifier?: 'ctrl' | 'meta'
) {
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      const activeTag = document.activeElement?.tagName.toLowerCase()
      if (activeTag === 'input' || activeTag === 'textarea') return

      if (modifier === 'ctrl' && !e.ctrlKey && !e.metaKey) return
      if (modifier === 'meta' && !e.metaKey) return
      if (e.key.toLowerCase() === key.toLowerCase()) {
        e.preventDefault()
        callback()
      }
    }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [key, callback, modifier])
}
