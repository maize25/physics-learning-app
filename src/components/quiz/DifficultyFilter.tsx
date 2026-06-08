'use client'

type Difficulty = 'all' | 'beginner' | 'intermediate' | 'advanced'

export default function DifficultyFilter({
  active,
  onChange,
}: {
  active: Difficulty
  onChange: (d: Difficulty) => void
}) {
  const options: { value: Difficulty; label: string; color: string }[] = [
    { value: 'all', label: 'All', color: 'bg-gray-700 text-gray-300' },
    { value: 'beginner', label: '🟢 Beginner', color: 'bg-green-900/50 text-green-300 border-green-700' },
    { value: 'intermediate', label: '🟡 Intermediate', color: 'bg-yellow-900/50 text-yellow-300 border-yellow-700' },
    { value: 'advanced', label: '🔴 Advanced', color: 'bg-red-900/50 text-red-300 border-red-700' },
  ]

  return (
    <div className="flex flex-wrap gap-2 my-4">
      <span className="text-gray-400 text-sm self-center mr-2">Filter:</span>
      {options.map(opt => (
        <button
          key={opt.value}
          onClick={() => onChange(opt.value)}
          className={`px-4 py-2 rounded-xl text-sm font-medium border transition-all
            ${active === opt.value
              ? opt.color + ' border-current scale-105'
              : 'bg-gray-800 text-gray-500 border-gray-700 hover:text-gray-300'
            }`}
        >
          {opt.label}
        </button>
      ))}
    </div>
  )
}
