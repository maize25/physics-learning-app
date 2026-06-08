'use client'
import { useState, useEffect } from 'react'

export interface QuizResult {
  id: string
  topic: string
  score: number
  total: number
  percentage: number
  date: string
  timeTaken?: number
}

export function useQuizHistory() {
  const [history, setHistory] = useState<QuizResult[]>([])

  useEffect(() => {
    const saved = localStorage.getItem('quiz-history')
    if (saved) setHistory(JSON.parse(saved))
  }, [])

  const addResult = (result: Omit<QuizResult, 'id' | 'date'>) => {
    const entry: QuizResult = {
      ...result,
      id: Date.now().toString(),
      date: new Date().toLocaleDateString()
    }
    const updated = [entry, ...history].slice(0, 50)
    setHistory(updated)
    localStorage.setItem('quiz-history', JSON.stringify(updated))
  }

  const clearHistory = () => {
    setHistory([])
    localStorage.removeItem('quiz-history')
  }

  const avgScore = history.length > 0
    ? Math.round(history.reduce((a, b) => a + b.percentage, 0) / history.length)
    : 0

  return { history, addResult, clearHistory, avgScore }
}
