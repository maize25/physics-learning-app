'use client'
import { useSearch } from '../../hooks/useSearch'
import { useRouter } from 'next/navigation'
import { useEffect, useRef } from 'react'

export default function GlobalSearch({ onClose }: { onClose: () => void }) {
  const { query, setQuery, results } = useSearch()
  const router = useRouter()
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => { inputRef.current?.focus() }, [])

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [onClose])

  const handleSelect = (route: string) => {
    router.push(route)
    onClose()
  }

  const typeColors: Record<string, string> = {
    lesson: 'bg-blue-900 text-blue-300',
    formula: 'bg-purple-900 text-purple-300',
    glossary: 'bg-green-900 text-green-300',
    topic: 'bg-yellow-900 text-yellow-300',
    math: 'bg-indigo-900 text-indigo-300'
  }

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center p-6 bg-black/50">
      <div className="w-full max-w-2xl bg-gray-900 rounded-lg shadow-lg ring-1 ring-white/5 overflow-hidden">
        <div className="p-4 border-b border-gray-800">
          <div className="flex items-center gap-3">
            <input
              ref={inputRef}
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search lessons, topics, glossary..."
              className="w-full bg-transparent outline-none text-white placeholder-gray-400 px-3 py-2"
            />
            <button onClick={onClose} aria-label="Close" className="text-gray-400 hover:text-white">✕</button>
          </div>
        </div>

        <div className="max-h-80 overflow-auto">
          {results.length === 0 ? (
            <div className="p-6 text-center text-gray-400">No results. Try a different query.</div>
          ) : (
            <ul className="divide-y divide-gray-800">
              {results.map((r) => (
                <li key={r.id} className="p-3 hover:bg-gray-800 cursor-pointer" onClick={() => handleSelect(r.route)}>
                  <div className="flex items-start gap-3">
                    <span className={`inline-flex items-center px-2 py-1 text-xs font-semibold rounded ${typeColors[r.type] || 'bg-gray-800 text-gray-200'}`}>
                      {r.type}
                    </span>
                    <div className="flex-1">
                      <div className="text-white font-medium">{r.title}</div>
                      {r.description ? <div className="text-sm text-gray-400 mt-1">{r.description}</div> : null}
                      <div className="mt-2 flex flex-wrap gap-2">
                        {r.tags?.slice(0,4).map((t: string) => (
                          <span key={t} className="text-xs text-gray-300 bg-gray-800 px-2 py-0.5 rounded">{t}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  )
}
