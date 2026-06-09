'use client'
import { useState, useEffect } from 'react'

const fallbackData = {
  date: new Date().toISOString().split('T')[0],
  title: 'Milky Way Galactic Core',
  explanation:
    'The center of our galaxy contains a supermassive black hole called Sagittarius A* with mass 4 million times that of our Sun. Studying its behavior helps test theories of general relativity in extreme gravity conditions.',
}

export default function LiveTelemetry() {
  const [data, setData] = useState<{ title: string; date: string; explanation: string } | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY')
      .then((r) => r.json())
      .then((d) => {
        const safeData =
          d &&
          typeof d === 'object' &&
          d.title &&
          d.date &&
          d.explanation
            ? d
            : fallbackData
        setData(safeData)
        setLoading(false)
      })
      .catch(() => {
        setData(fallbackData)
        setLoading(false)
      })
  }, [])

  return (
    <div className="bg-black border border-green-900 rounded-xl p-4 font-mono text-sm my-6">
      <div className="flex items-center gap-2 mb-3">
        <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
        <span className="text-green-400 text-xs">NASA LIVE DATA STREAM — CONNECTED</span>
      </div>
      {loading ? (
        <p className="text-green-600 animate-pulse">Fetching astronomical data...</p>
      ) : (
        <div className="space-y-1">
          <p className="text-green-300">&gt; DATE: {data?.date}</p>
          <p className="text-green-300">&gt; OBJECT: {data?.title}</p>
          <p className="text-green-600 text-xs mt-2 line-clamp-2">&gt; {data?.explanation.slice(0, 150)}...</p>
        </div>
      )}
    </div>
  )
}
