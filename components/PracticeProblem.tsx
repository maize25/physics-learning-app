'use client'

import { useState } from 'react'
import HintSystem from '@/src/components/quiz/HintSystem'
import StepSolution from '@/src/components/quiz/StepSolution'

interface Props {
  problem: string
  hint: string
  answer: string
  alternativeExample: string
  tolerance?: number
  difficulty: 'beginner' | 'intermediate' | 'advanced'
}

export default function PracticeProblem({
  problem,
  hint,
  answer,
  alternativeExample,
  tolerance = 0,
  difficulty,
}: Props) {
  const [userAnswer, setUserAnswer] = useState('')
  const [attempts, setAttempts] = useState(0)
  const [status, setStatus] = useState<'idle' | 'correct' | 'wrong' | 'hint' | 'revealed'>('idle')
  const [feedback, setFeedback] = useState('')

  const difficultyStyles = {
    beginner: 'bg-emerald-100 text-emerald-900 dark:bg-emerald-900/30 dark:text-emerald-300',
    intermediate: 'bg-amber-100 text-amber-900 dark:bg-amber-900/30 dark:text-amber-300',
    advanced: 'bg-red-100 text-red-900 dark:bg-red-900/30 dark:text-red-300',
  }

  function checkAnswer() {
    const ua = userAnswer.trim().toLowerCase()
    const ca = answer.trim().toLowerCase()

    const isCorrect = tolerance > 0 && !Number.isNaN(parseFloat(ua))
      ? Math.abs(parseFloat(ua) - parseFloat(ca)) <= tolerance
      : ua === ca

    if (isCorrect) {
      setStatus('correct')
      setFeedback('Perfect! ✅ The reasoning and result are both correct.')
      return
    }

    const newAttempts = attempts + 1
    setAttempts(newAttempts)
    if (newAttempts >= 2) {
      setStatus('revealed')
      setFeedback(`The correct answer is: ${answer}`)
    } else {
      setStatus('hint')
      setFeedback('Not quite yet. Review the similar example below and try again.')
    }
    setUserAnswer('')
  }

  return (
    <div className="border border-gray-700 rounded-xl p-5 mb-4 bg-gray-900">
      <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
        <p className="font-semibold text-white">📝 {problem}</p>
        <span className={`text-xs px-2 py-1 rounded-full font-medium ${difficultyStyles[difficulty]}`}>
          {difficulty.charAt(0).toUpperCase() + difficulty.slice(1)}
        </span>
      </div>

      <div className="bg-gray-800 rounded-lg p-3 mb-4 border-l-4 border-blue-500">
        <p className="text-sm text-blue-300 font-medium mb-1">💡 Partial Solution:</p>
        <p className="text-gray-300 text-sm">{hint}</p>
      </div>

      <StepSolution
        steps={[
          'Read the problem and identify all given values.',
          'Choose the correct formula for this type of problem.',
          'Substitute the known values into the formula.',
          'Solve the equation step by step.',
          'Check your units and verify the answer makes sense.',
        ]}
      />

      {status === 'hint' && (
        <div className="bg-orange-900/30 border border-orange-500 rounded-lg p-3 mb-4">
          <p className="text-orange-300 font-medium mb-1">❌ Not quite! Here's a similar example:</p>
          <p className="text-gray-300 text-sm">{alternativeExample}</p>
          <p className="text-orange-300 text-sm mt-2">Now try again with the original problem ↓</p>
        </div>
      )}

      {status === 'revealed' && (
        <div className="bg-red-900/30 border border-red-500 rounded-lg p-3 mb-4">
          <p className="text-red-300 font-medium">📖 Full Solution:</p>
          <p className="text-white font-bold">Answer: {answer}</p>
        </div>
      )}

      {status === 'correct' && (
        <div className="bg-green-900/30 border border-green-500 rounded-lg p-4 mb-4">
          <p className="text-green-400 font-bold text-lg">✅ Correct! Well done!</p>
          <p className="text-green-200 text-sm mt-1">{feedback}</p>
        </div>
      )}

      <HintSystem
        hints={[
          'Think about what formula connects these variables.',
          'Try drawing a diagram and labeling the known values.',
          'Use F = ma and solve for the unknown variable.',
        ]}
      />

      {status !== 'correct' && status !== 'revealed' && (
        <div className="flex gap-2 mt-3 flex-col sm:flex-row">
          <input
            type="text"
            value={userAnswer}
            onChange={(e) => setUserAnswer(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && checkAnswer()}
            placeholder={status === 'hint' ? 'Try again...' : 'Your answer...'}
            className="flex-1 min-w-0 bg-gray-800 border border-gray-600 rounded-lg px-4 py-2 text-white placeholder-gray-500 focus:border-purple-500 focus:outline-none"
          />
          <button
            onClick={checkAnswer}
            className="w-full sm:w-auto rounded-lg bg-purple-600 hover:bg-purple-500 text-white px-4 py-2 font-medium transition-colors"
          >
            Check
          </button>
        </div>
      )}

      {attempts > 0 && status !== 'correct' && (
        <p className="text-gray-500 text-xs mt-2">
          Attempt {attempts}/2 {attempts >= 2 ? '— Answer revealed' : '— One more try!'}
        </p>
      )}
    </div>
  )
}
