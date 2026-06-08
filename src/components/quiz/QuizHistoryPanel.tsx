'use client'
import { useQuizHistory } from '../../hooks/useQuizHistory'

export default function QuizHistoryPanel() {
  const { history, clearHistory, avgScore } = useQuizHistory()

  return (
    <div className="bg-gray-900 border border-gray-700 rounded-2xl p-5 mt-6">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-white font-semibold text-lg">📊 Quiz History</h3>
        <div className="flex items-center gap-3">
          <span className="text-gray-400 text-sm">
            Avg: <span className="text-indigo-400 font-bold">{avgScore}%</span>
          </span>
          {history.length > 0 && (
            <button onClick={clearHistory}
              className="text-gray-600 hover:text-red-400 text-xs transition-colors">
              Clear all
            </button>
          )}
        </div>
      </div>
      {history.length === 0 ? (
        <p className="text-gray-500 text-sm text-center py-6">
          No quiz attempts yet. Take a quiz to see your history!
        </p>
      ) : (
        <div className="space-y-2 max-h-64 overflow-y-auto">
          {history.map(result => (
            <div key={result.id}
              className="flex items-center justify-between p-3 bg-gray-800 rounded-xl">
              <div>
                <p className="text-white text-sm font-medium">{result.topic}</p>
                <p className="text-gray-500 text-xs">{result.date}</p>
              </div>
              <div className="text-right">
                <p className={`text-sm font-bold ${
                  result.percentage >= 80 ? 'text-green-400' :
                  result.percentage >= 60 ? 'text-yellow-400' : 'text-red-400'
                }`}>
                  {result.score}/{result.total}
                </p>
                <p className="text-gray-500 text-xs">{result.percentage}%</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
