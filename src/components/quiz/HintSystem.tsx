'use client'
import { useState } from 'react'

export default function HintSystem({ hints }: { 
  hints: [string, string, string] 
}) {
  const [revealed, setRevealed] = useState(0)

  const hintColors = [
    'border-green-800/40 bg-green-950/20 text-green-300',
    'border-yellow-800/40 bg-yellow-950/20 text-yellow-300',
    'border-red-800/40 bg-red-950/20 text-red-300',
  ]

  const hintLabels = ['Gentle hint', 'Bigger hint', 'Almost the answer']

  return (
    <div className="space-y-2 my-3">
      {revealed === 0 && (
        <button
          onClick={() => setRevealed(1)}
          className="flex items-center gap-2 px-4 py-2 bg-gray-800 hover:bg-gray-700 border border-gray-700 text-gray-300 rounded-xl text-sm transition-all"
        >
          💡 Show hint
        </button>
      )}
      {Array.from({ length: revealed }).map((_, i) => (
        <div key={i} className={`p-3 border rounded-xl text-sm ${hintColors[i]}`}>
          <span className="text-xs font-semibold uppercase opacity-60 block mb-1">
            {hintLabels[i]}
          </span>
          {hints[i]}
        </div>
      ))}
      {revealed > 0 && revealed < 3 && (
        <button
          onClick={() => setRevealed(prev => prev + 1)}
          className="flex items-center gap-2 px-4 py-2 bg-gray-800 hover:bg-gray-700 border border-gray-700 text-gray-300 rounded-xl text-sm transition-all"
        >
          💡 Next hint ({revealed}/3 used)
        </button>
      )}
      {revealed === 3 && (
        <button
          onClick={() => setRevealed(0)}
          className="text-gray-600 hover:text-gray-400 text-xs"
        >
          Hide hints
        </button>
      )}
    </div>
  )
}
