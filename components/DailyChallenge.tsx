'use client'

import { useMemo, useState } from 'react';
import { addXP } from '../lib/xp';
import { challenges } from '../data/dailyChallenges';

export default function DailyChallenge() {
  const [selected, setSelected] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [correct, setCorrect] = useState(false);
  const [currentChallenge, setCurrentChallenge] = useState(() => challenges[Math.floor(Math.random() * challenges.length)]);

  const onAnswer = (answer: string) => {
    setSelected(answer === currentChallenge.answer ? 1 : 0);
    setCorrect(answer === currentChallenge.answer);
    setShowResult(true);
    if (answer === currentChallenge.answer) {
      addXP(150, 'Daily Challenge');
    }
  };

  const nextChallenge = () => {
    const random = challenges[Math.floor(Math.random() * challenges.length)];
    setCurrentChallenge(random);
    setSelected(null);
    setShowResult(false);
    setCorrect(false);
  };

  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-lg dark:border-slate-700 dark:bg-slate-950">
      <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-sm uppercase tracking-[0.3em] text-fuchsia-500">Challenge</p>
          <h2 className="mt-2 text-3xl font-bold text-slate-900 dark:text-white">Daily physics puzzle</h2>
          <p className="mt-2 max-w-2xl text-slate-600 dark:text-slate-300">Build streaks and earn bonus XP by solving the challenge correctly.</p>
        </div>
        <div className="rounded-3xl bg-fuchsia-50 px-4 py-3 text-fuchsia-700 dark:bg-fuchsia-900/20 dark:text-fuchsia-200">
          {currentChallenge.difficulty}
        </div>
      </div>

      <p className="rounded-3xl border border-slate-200 bg-slate-50 p-6 text-lg font-semibold text-slate-900 shadow-sm dark:border-slate-700 dark:bg-slate-900 dark:text-white">
        {currentChallenge.question}
      </p>

      <div className="mt-6 grid gap-3 sm:grid-cols-2">
        {currentChallenge.options.map((option) => (
          <button
            key={option}
            type="button"
            onClick={() => onAnswer(option)}
            className={`rounded-3xl border px-5 py-4 text-left text-sm transition ${
              showResult && option === currentChallenge.answer
                ? 'border-emerald-400 bg-emerald-50 text-emerald-900 dark:border-emerald-500/80 dark:bg-emerald-950 dark:text-emerald-200'
                : showResult && option !== currentChallenge.answer
                ? 'border-red-400 bg-red-50 text-red-900 dark:border-red-500/80 dark:bg-red-950 dark:text-red-200'
                : 'border-slate-200 bg-white text-slate-900 hover:border-slate-300 hover:bg-slate-50 dark:border-slate-700 dark:bg-slate-900 dark:text-white dark:hover:border-slate-600 dark:hover:bg-slate-800'
            }`}
          >
            {option}
          </button>
        ))}
      </div>

      {showResult && (
        <div className="mt-6 rounded-3xl border border-slate-200 bg-slate-50 p-6 text-slate-900 dark:border-slate-700 dark:bg-slate-900 dark:text-white">
          <h3 className="text-xl font-semibold">{correct ? 'Correct!' : 'Nice try!'}</h3>
          <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-300">{currentChallenge.explanation}</p>
          {correct && <p className="mt-4 text-sm font-semibold text-emerald-700 dark:text-emerald-300">+150 XP added to your progress.</p>}
        </div>
      )}

      <button
        type="button"
        onClick={nextChallenge}
        className="mt-6 inline-flex items-center justify-center rounded-2xl bg-fuchsia-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-fuchsia-500"
      >
        Next challenge
      </button>
    </div>
  );
}
