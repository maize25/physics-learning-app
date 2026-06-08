'use client'
import { useState, useEffect } from 'react'

type TextSize = 'small' | 'medium' | 'large'

export function useTextSize() {
  const [size, setSize] = useState<TextSize>('medium')

  useEffect(() => {
    const saved = localStorage.getItem('text-size') as TextSize
    if (saved) setSize(saved)
    applySize(saved || 'medium')
  }, [])

  const applySize = (s: TextSize) => {
    const root = document.documentElement
    root.classList.remove('text-size-small', 'text-size-medium', 'text-size-large')
    root.classList.add(`text-size-${s}`)
  }

  const setTextSize = (s: TextSize) => {
    setSize(s)
    applySize(s)
    localStorage.setItem('text-size', s)
  }

  return { size, setTextSize }
}
