'use client'
import { useTextSize } from '@/src/hooks/useTextSize'

export default function TextSizeToggle() {
  const { size, setTextSize } = useTextSize()

  return (
    <div className="flex items-center gap-1 bg-gray-800 rounded-xl p-1">
      {(['small', 'medium', 'large'] as const).map((s) => (
        <button
          key={s}
          onClick={() => setTextSize(s)}
          className={`px-3 py-1 rounded-lg text-sm font-medium transition-all
            ${size === s
              ? 'bg-indigo-600 text-white'
              : 'text-gray-400 hover:text-white'
            }`}
        >
          {s === 'small' ? 'A' : s === 'medium' ? 'A' : 'A'}
        </button>
      ))}
    </div>
  )
}
