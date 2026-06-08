'use client'
import { useMistakeTracker } from '../../hooks/useMistakeTracker'

export default function MistakePanel() {
  const { mistakes, topWeakAreas } = useMistakeTracker()

  if (mistakes.length === 0) return null

  return (
    <div className="bg-gray-900 border border-gray-700 rounded-2xl p-5 mt-4">
      <h3 className="text-white font-semibold text-lg mb-4">
        🎯 Your Weak Areas
      </h3>
      <div className="space-y-2 mb-4">
        {topWeakAreas.map(({ topic, count }) => (
          <div key={topic} className="flex items-center gap-3">
            <div className="flex-1 bg-gray-800 rounded-full h-2">
              <div
                className="bg-red-500 h-2 rounded-full transition-all"
                style={{ width: `${Math.min((count / mistakes.length) * 100 * 3, 100)}%` }}
              />
            </div>
            <span className="text-gray-300 text-sm min-w-24">{topic}</span>
            <span className="text-red-400 text-xs font-bold">{count}x</span>
          </div>
        ))}
      </div>
      <p className="text-gray-500 text-xs">
        Based on {mistakes.length} recorded mistakes
      </p>
    </div>
  )
}
