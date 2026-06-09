'use client'

import { useMemo, useState } from 'react';

const flashcards = [
  { category: 'Mechanics', prompt: 'What is Newton’s second law?', answer: 'F = ma; acceleration is proportional to net force and inversely proportional to mass.' },
  { category: 'Mechanics', prompt: 'How do you calculate kinetic energy?', answer: 'KE = 1/2 m v², where the energy grows with the square of speed.' },
  { category: 'Mechanics', prompt: 'What is the formula for gravitational force?', answer: 'F = G m₁ m₂ / r²; gravity weakens with the square of the distance.' },
  { category: 'Mechanics', prompt: 'What does inertia describe?', answer: 'An object’s resistance to changes in its velocity unless acted on by a net force.' },
  { category: 'Mechanics', prompt: 'What is momentum?', answer: 'Momentum is p = mv and is conserved in isolated systems.' },
  { category: 'Relativity', prompt: 'What is time dilation?', answer: 'Moving clocks run slower relative to a stationary observer due to relativistic effects.' },
  { category: 'Relativity', prompt: 'Why can’t massive objects reach the speed of light?', answer: 'Because energy required increases without bound as speed approaches c.' },
  { category: 'Relativity', prompt: 'What is length contraction?', answer: 'Objects moving close to light speed appear shorter along the motion direction.' },
  { category: 'Relativity', prompt: 'What does E = mc² mean?', answer: 'Mass and energy are equivalent; a small mass corresponds to large energy.' },
  { category: 'Relativity', prompt: 'How does GPS use relativity?', answer: 'GPS corrections combine special and general relativity to keep location accurate.' },
  { category: 'Quantum', prompt: 'What is the uncertainty principle?', answer: 'Δx Δp ≥ ħ/2; certain pairs of properties cannot be known simultaneously with arbitrary precision.' },
  { category: 'Quantum', prompt: 'What is a wavefunction?', answer: 'A mathematical description of probability amplitudes for quantum states.' },
  { category: 'Quantum', prompt: 'What is quantum tunneling?', answer: 'Particles can cross barriers even when classically forbidden, with finite probability.' },
  { category: 'Quantum', prompt: 'What is wave-particle duality?', answer: 'Particles like electrons can exhibit both wave-like and particle-like behavior.' },
  { category: 'Quantum', prompt: 'How is energy quantized in atoms?', answer: 'Only discrete energy levels satisfy boundary conditions for the electron wavefunction.' },
  { category: 'Thermodynamics', prompt: 'What is entropy?', answer: 'A measure of microscopic disorder or the number of ways a state can be arranged.' },
  { category: 'Thermodynamics', prompt: 'What is the first law?', answer: 'Energy is conserved; heat added to a system equals internal energy change plus work done.' },
  { category: 'Thermodynamics', prompt: 'What is a reversible process?', answer: 'A process that can be reversed without increasing total entropy.' },
  { category: 'Thermodynamics', prompt: 'What is the second law?', answer: 'Entropy of an isolated system never decreases; natural processes are irreversible.' },
  { category: 'Thermodynamics', prompt: 'What is a heat engine?', answer: 'A device that converts heat into work by exploiting temperature differences.' },
];

const categories = ['All', 'Mechanics', 'Relativity', 'Quantum', 'Thermodynamics'];

export default function FlashcardStudy() {
  const [current, setCurrent] = useState(0);
  const [flipped, setFlipped] = useState(false);
  const [category, setCategory] = useState('All');

  const filtered = useMemo(
    () => (category === 'All' ? flashcards : flashcards.filter((card) => card.category === category)),
    [category]
  );

  const card = filtered[current] || filtered[0];
  const progress = filtered.length ? Math.round(((current + 1) / filtered.length) * 100) : 0;

  const next = () => {
    setFlipped(false);
    setCurrent((prev) => (prev + 1) % filtered.length);
  };

  const prev = () => {
    setFlipped(false);
    setCurrent((prev) => (prev - 1 + filtered.length) % filtered.length);
  };

  const changeCategory = (newCategory: string) => {
    setCategory(newCategory);
    setCurrent(0);
    setFlipped(false);
  };

  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-lg dark:border-slate-700 dark:bg-slate-950">
      <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-sm uppercase tracking-[0.3em] text-cyan-500">Flashcards</p>
          <h2 className="mt-2 text-3xl font-bold text-slate-900 dark:text-white">Study smarter with quick cards</h2>
        </div>
        <div className="rounded-3xl bg-cyan-50 px-4 py-3 text-cyan-700 dark:bg-cyan-900/20 dark:text-cyan-200">
          {filtered.length ? `${current + 1}/${filtered.length}` : '0/0'}
        </div>
      </div>

      <div className="mb-6 flex flex-wrap gap-3">
        {categories.map((cat) => (
          <button
            key={cat}
            type="button"
            onClick={() => changeCategory(cat)}
            className={`rounded-full px-4 py-2 text-sm font-semibold transition ${category === cat ? 'bg-cyan-600 text-white' : 'bg-slate-100 text-slate-700 hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-200 dark:hover:bg-slate-700'}`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="overflow-hidden rounded-[2rem] border border-slate-200 bg-slate-50 p-6 shadow-sm transition-transform duration-500 hover:-translate-y-1 dark:border-slate-700 dark:bg-slate-900">
        <div className="mb-4 h-2 overflow-hidden rounded-full bg-slate-200 dark:bg-slate-800">
          <div className="h-full rounded-full bg-cyan-500 transition-all duration-300" style={{ width: `${progress}%` }} />
        </div>

        <button
          type="button"
          onClick={() => setFlipped((prev) => !prev)}
          className="relative mx-auto block h-64 w-full max-w-3xl rounded-[1.75rem] bg-white p-8 text-left shadow-inner transition-transform duration-500 hover:scale-[1.01] dark:bg-slate-950"
          style={{ transformStyle: 'preserve-3d', perspective: 1200 }}
        >
          <div
            className="relative h-full w-full rounded-[1.75rem] bg-gradient-to-br from-slate-100 to-slate-200 p-6 text-slate-900 shadow-inner dark:from-slate-800 dark:to-slate-900 dark:text-slate-100"
            style={{
              transform: flipped ? 'rotateY(180deg)' : 'rotateY(0deg)',
              transformStyle: 'preserve-3d',
              transition: 'transform 0.6s ease',
            }}
          >
            <div style={{ backfaceVisibility: 'hidden' }}>
              <p className="text-xl font-semibold">{card.prompt}</p>
            </div>
            <div
              style={{
                backfaceVisibility: 'hidden',
                transform: 'rotateY(180deg)',
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                padding: '1.5rem',
              }}
            >
              <p className="text-xl font-semibold">Answer</p>
              <p className="mt-5 text-base leading-7 text-slate-700 dark:text-slate-200">{card.answer}</p>
            </div>
          </div>
        </button>
      </div>

      <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={prev}
            disabled={!filtered.length}
            className="rounded-2xl border border-slate-200 px-5 py-3 text-sm font-medium text-slate-700 transition hover:bg-slate-100 disabled:cursor-not-allowed disabled:opacity-50 dark:border-slate-700 dark:text-slate-200 dark:hover:bg-slate-800"
          >
            Previous
          </button>
          <button
            type="button"
            onClick={next}
            disabled={!filtered.length}
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
