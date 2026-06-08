'use client'
import { useState } from 'react'

export default function ConfusedButton({ topic }: { topic?: string }) {
  const [open, setOpen] = useState(false)
  const [loading, setLoading] = useState(false)
  const [tip, setTip] = useState('')

  const handleClick = async () => {
    setOpen(true)
    setLoading(true)
    await new Promise(r => setTimeout(r, 800))
    setTip("Let's break this down simply. Focus on the core idea first before the math. Re-read the first paragraph slowly and ask: what is the main thing this section is trying to say? Try relating it to something you already know in real life.")
    setLoading(false)
  }

  return (
    <div className="my-4">
      <button
        onClick={handleClick}
        className="flex items-center gap-2 px-4 py-2 bg-yellow-600/20 hover:bg-yellow-600/30 border border-yellow-600/40 text-yellow-400 rounded-xl text-sm font-medium transition-all"
      >
        😕 I'm confused — simplify this
      </button>
      {open && (
        <div className="mt-3 p-4 bg-yellow-950/30 border border-yellow-800/40 rounded-xl">
          {loading ? (
            <p className="text-yellow-400 text-sm animate-pulse">Finding a simpler explanation...</p>
          ) : (
            <>
              <p className="text-yellow-200 text-sm leading-relaxed">{tip}</p>
              <button onClick={() => setOpen(false)} className="mt-3 text-yellow-600 hover:text-yellow-400 text-xs">
                Got it, close ✕
              </button>
            </>
          )}
        </div>
      )}
    </div>
  )
}
