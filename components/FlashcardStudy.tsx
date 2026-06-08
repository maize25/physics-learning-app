'use client'

import { useMemo, useState } from 'react';

const flashcards = [
  {
    prompt: 'What is Newton’s second law?',
    answer: 'F = ma, which relates force, mass, and acceleration.',
  },
  {
    prompt: 'How do you calculate kinetic energy?',
    answer: 'KE = 1/2 m v².',
  },
  {
    prompt: 'What is the speed of light?',
    answer: 'Approximately 3.0 × 10⁸ m/s.',
  },
  {
    prompt: 'What is the formula for gravitational force?',
    answer: 'F = G m₁ m₂ / r².',
  },
  {
    prompt: 'What does E = mc² represent?',
    answer: 'Mass-energy equivalence: energy equals mass times the speed of light squared.',
  },
];

export default function FlashcardStudy() {
  const [current, setCurrent] = useState(0);
  const [flipped, setFlipped] = useState(false);

  const card = useMemo(() => flashcards[current], [current]);

  const next = () => {
    setFlipped(false);
    setCurrent((prev) => (prev + 1) % flashcards.length);
  };

  const prev = () => {
    setFlipped(false);
    setCurrent((prev) => (prev - 1 + flashcards.length) % flashcards.length);
  };

  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-lg dark:border-slate-700 dark:bg-slate-950">
      <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-sm uppercase tracking-[0.3em] text-cyan-500">Flashcards</p>
          <h2 className="mt-2 text-3xl font-bold text-slate-900 dark:text-white">Study smarter with quick cards</h2>
        </div>
        <div className="rounded-3xl bg-cyan-50 px-4 py-3 text-cyan-700 dark:bg-cyan-900/20 dark:text-cyan-200">
          {current + 1}/{flashcards.length}
        </div>
      </div>

      <div className="group relative overflow-hidden rounded-[2rem] border border-slate-200 bg-slate-50 p-8 text-center shadow-sm transition hover:border-cyan-300 dark:border-slate-700 dark:bg-slate-900">
        <div className="mb-5 text-sm uppercase tracking-[0.3em] text-slate-500 dark:text-slate-400">Tap to reveal</div>
        <button type="button" onClick={() => setFlipped((prev) => !prev)} className="w-full">
          <div className="min-h-[180px] rounded-[1.75rem] px-6 py-8 text-left transition duration-300 ease-out bg-white shadow-inner dark:bg-slate-950">
            <p className="text-lg font-semibold text-slate-900 dark:text-white">{card.prompt}</p>
            {flipped && (
              <p className="mt-6 text-base leading-7 text-slate-600 dark:text-slate-300">{card.answer}</p>
            )}
          </div>
        </button>
      </div>

      <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={prev}
            className="rounded-2xl border border-slate-200 px-5 py-3 text-sm font-medium text-slate-700 transition hover:bg-slate-100 dark:border-slate-700 dark:text-slate-200 dark:hover:bg-slate-800"
          >
            Previous
          </button>
          <button
            type="button"
            onClick={next}
            className="rounded-2xl bg-cyan-600 px-5 py-3 text-sm font-medium text-white transition hover:bg-cyan-500"
          >
            Next card
          </button>
        </div>
        <button
          type="button"
          onClick={() => setFlipped((prev) => !prev)}
          className="rounded-2xl border border-cyan-500 bg-cyan-50 px-5 py-3 text-sm font-semibold text-cyan-700 transition hover:bg-cyan-100 dark:border-cyan-500/80 dark:bg-cyan-900/20 dark:text-cyan-200"
        >
          {flipped ? 'Hide answer' : 'Show answer'}
        </button>
      </div>
    </div>
  );
}
