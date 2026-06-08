'use client'
import { useState, useEffect, useRef } from 'react'

export default function ProblemTimer() {
  const [active, setActive] = useState(false)
  const [seconds, setSeconds] = useState(0)
  const [limit, setLimit] = useState(300)
  const intervalRef = useRef<NodeJS.Timeout | null>(null)

  useEffect(() => {
    if (active) {
      intervalRef.current = setInterval(() => {
        setSeconds(prev => {
          if (prev >= limit) {
            setActive(false)
            clearInterval(intervalRef.current!)
            return prev
          }
          return prev + 1
        })
      }, 1000)
    } else {
      clearInterval(intervalRef.current!)
    }
    return () => clearInterval(intervalRef.current!)
  }, [active, limit])

  const reset = () => { setSeconds(0); setActive(false) }
  const remaining = limit - seconds
  const pct = (seconds / limit) * 100
  const mins = Math.floor(remaining / 60)
  const secs = remaining % 60
  const urgent = remaining <= 60

  return (
    <div className="flex items-center gap-3 p-3 bg-gray-900 border border-gray-700 rounded-xl">
      <div className="relative w-12 h-12">
        <svg viewBox="0 0 36 36" className="w-12 h-12 -rotate-90">
          <circle cx="18" cy="18" r="15.9" fill="none" stroke="#1f2937" strokeWidth="3"/>
          <circle cx="18" cy="18" r="15.9" fill="none"
            stroke={urgent ? '#ef4444' : '#6366f1'}
            strokeWidth="3"
            strokeDasharray={`${pct} 100`}
            strokeLinecap="round"
          />
        </svg>
        <span className={`absolute inset-0 flex items-center justify-center text-xs font-bold ${urgent ? 'text-red-400' : 'text-white'}`}>
          {mins}:{secs.toString().padStart(2,'0')}
        </span>
      </div>
      <div className="flex flex-col gap-1">
        <div className="flex items-center gap-2">
          <select
            value={limit}
            onChange={e => { setLimit(Number(e.target.value)); reset() }}
            className="bg-gray-800 text-white text-xs rounded-lg px-2 py-1 border border-gray-700"
            disabled={active}
          >
            <option value={60}>1 min</option>
            <option value={120}>2 min</option>
            <option value={300}>5 min</option>
            <option value={600}>10 min</option>
            <option value={900}>15 min</option>
          </select>
        </div>
        <div className="flex gap-2">
          <button onClick={() => setActive(!active)}
            className={`px-3 py-1 rounded-lg text-xs font-medium transition-all
              ${active ? 'bg-red-600 hover:bg-red-500 text-white' : 'bg-indigo-600 hover:bg-indigo-500 text-white'}`}>
            {active ? '⏸ Pause' : '▶ Start'}
          </button>
          <button onClick={reset}
            className="px-3 py-1 rounded-lg text-xs font-medium bg-gray-800 hover:bg-gray-700 text-gray-300">
            ↺ Reset
          </button>
        </div>
      </div>
    </div>
  )
}
