'use client'
import { useState } from 'react'

export default function StepSolution({ steps }: { steps: string[] }) {
  const [shown, setShown] = useState(0)
  const [open, setOpen] = useState(false)

  if (!open) {
    return (
      <button
        onClick={() => setOpen(true)}
        className="flex items-center gap-2 px-4 py-2 bg-gray-800 hover:bg-gray-700 border border-gray-700 text-gray-300 rounded-xl text-sm transition-all mt-2"
      >
        📖 Show solution
      </button>
    )
  }

  return (
    <div className="mt-3 space-y-2">
      <div className="flex items-center justify-between">
        <p className="text-gray-400 text-xs font-semibold uppercase tracking-wide">
          Step-by-step solution
        </p>
        <button onClick={() => { setOpen(false); setShown(0) }}
          className="text-gray-600 hover:text-gray-400 text-xs">
          Hide ✕
        </button>
      </div>
      {steps.slice(0, shown).map((step, i) => (
        <div key={i}
          className="flex gap-3 p-3 bg-blue-950/20 border border-blue-800/30 rounded-xl">
          <span className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-600 text-white text-xs flex items-center justify-center font-bold">
            {i + 1}
          </span>
          <p className="text-blue-100 text-sm leading-relaxed">{step}</p>
        </div>
      ))}
      {shown < steps.length ? (
        <button
          onClick={() => setShown(prev => prev + 1)}
          className="w-full py-2 bg-gray-800 hover:bg-gray-700 border border-gray-700 text-gray-300 rounded-xl text-sm transition-all"
        >
          Next step ({shown}/{steps.length})
        </button>
      ) : (
        <p className="text-green-400 text-sm text-center py-2">
          ✅ Solution complete!
        </p>
      )}
    </div>
  )
}
