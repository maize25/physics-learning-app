'use client'
import { useTextSize } from '@/src/hooks/useTextSize'

const sizeOptions = [
  { key: 'small', label: 'A', className: 'text-xs' },
  { key: 'medium', label: 'A', className: 'text-base' },
  { key: 'large', label: 'A', className: 'text-xl' },
] as const

export default function TextSizeToggle() {
  const { size, setTextSize } = useTextSize()

  return (
    <div className="flex items-center gap-2 rounded-xl bg-gray-800 p-1">
      {sizeOptions.map((option) => (
        <button
          key={option.key}
          onClick={() => setTextSize(option.key)}
          className={`flex h-9 w-9 items-center justify-center rounded-lg border text-sm font-medium transition ${
            size === option.key
              ? 'border-indigo-500 bg-indigo-600 text-white'
              : 'border-transparent text-gray-400 hover:border-slate-500 hover:text-white'
          }`}
          aria-label={`Set text size ${option.key}`}
        >
          <span className={option.className}>{option.label}</span>
        </button>
      ))}
    </div>
  )
}
