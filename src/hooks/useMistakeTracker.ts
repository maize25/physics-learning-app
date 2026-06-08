'use client'
import { useState, useEffect } from 'react'

export interface Mistake {
  topic: string
  question: string
  wrongAnswer: string
  correctAnswer: string
  date: string
}

export function useMistakeTracker() {
  const [mistakes, setMistakes] = useState<Mistake[]>([])

  useEffect(() => {
    const saved = localStorage.getItem('mistake-tracker')
    if (saved) setMistakes(JSON.parse(saved))
  }, [])

  const addMistake = (mistake: Mistake) => {
    const updated = [mistake, ...mistakes].slice(0, 100)
    setMistakes(updated)
    localStorage.setItem('mistake-tracker', JSON.stringify(updated))
  }

  const topWeakAreas = () => {
    const counts: Record<string, number> = {}
    mistakes.forEach(m => {
      counts[m.topic] = (counts[m.topic] || 0) + 1
    })
    return Object.entries(counts)
      .sort((a, b) => b[1] - a[1])
      .slice(0, 5)
      .map(([topic, count]) => ({ topic, count }))
  }

  return { mistakes, addMistake, topWeakAreas: topWeakAreas() }
}
