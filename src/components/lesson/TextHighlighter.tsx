'use client'

import { useState, useEffect } from 'react'
import { useNotes } from '../../hooks/useNotes'
import { usePathname } from 'next/navigation'

export default function TextHighlighter() {
  const [popup, setPopup] = useState<{ x: number; y: number; text: string } | null>(null)
  const { saveNote } = useNotes()
  const pathname = usePathname()

  const colors = ['#3b82f6', '#a855f7', '#22c55e', '#f97316']

  useEffect(() => {
    const handler = () => {
      const selection = window.getSelection()
      const text = selection?.toString().trim()
      if (text && text.length > 10) {
        const range = selection!.getRangeAt(0)
        const rect = range.getBoundingClientRect()
        setPopup({ x: rect.left + rect.width / 2, y: rect.top + window.scrollY - 50, text })
      } else {
        setPopup(null)
      }
    }
    document.addEventListener('mouseup', handler)
    return () => document.removeEventListener('mouseup', handler)
  }, [])

  if (!popup) return null

  return (
    <div
      className="fixed z-50 bg-gray-900 border border-gray-700 rounded-xl shadow-2xl px-3 py-2 flex items-center gap-2"
      style={{ left: popup.x, top: popup.y, transform: 'translateX(-50%)' }}
    >
      <span className="text-gray-400 text-xs mr-1">Save note:</span>
      {colors.map((color) => (
        <button
          key={color}
          onClick={() => {
            saveNote(popup.text, pathname, color)
            setPopup(null)
          }}
          className="w-5 h-5 rounded-full border-2 border-gray-600 hover:scale-125 transition-transform"
          style={{ backgroundColor: color }}
        />
      ))}
      <button onClick={() => setPopup(null)} className="text-gray-500 hover:text-white ml-1 text-xs">
        ✕
      </button>
    </div>
  )
}
