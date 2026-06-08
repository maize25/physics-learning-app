'use client'

import { useState } from 'react';
import { constants } from '../data/constants';

const conversions = [
  { label: 'Mass to Energy', value: 'massToEnergy' },
  { label: 'Kinetic Energy', value: 'kineticEnergy' },
  { label: 'Potential Energy', value: 'potentialEnergy' },
];

function formatNumber(value: number) {
  return value.toLocaleString(undefined, { maximumFractionDigits: 3 });
}

export default function PhysicsTools() {
  const [mode, setMode] = useState('massToEnergy');
  const [input, setInput] = useState('1');

  const value = Number(input) || 0;
  let result = 0;
  let formula = '';

  if (mode === 'massToEnergy') {
    result = value * 8.988e16;
    formula = 'E = mc²';
  } else if (mode === 'kineticEnergy') {
    result = 0.5 * value * 10 ** 2;
    formula = 'KE = ½ m v² (with v = 10 m/s)';
  } else if (mode === 'potentialEnergy') {
    result = value * 9.8 * 10;
    formula = 'PE = m g h (with g = 9.8 m/s², h = 10 m)';
  }

  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-lg dark:border-slate-700 dark:bg-slate-950">
      <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-sm uppercase tracking-[0.3em] text-emerald-500">Tools</p>
          <h2 className="mt-2 text-3xl font-bold text-slate-900 dark:text-white">Physics calculator & constants</h2>
          <p className="mt-2 max-w-2xl text-slate-600 dark:text-slate-300">Quick conversions and useful constants for solving physics problems.</p>
        </div>
        <div className="rounded-3xl bg-emerald-50 px-4 py-3 text-emerald-700 dark:bg-emerald-900/20 dark:text-emerald-200">
          {conversions.find((item) => item.value === mode)?.label}
        </div>
      </div>

      <div className="grid gap-6 xl:grid-cols-[1.5fr_1fr]">
        <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6 dark:border-slate-700 dark:bg-slate-900">
          <p className="mb-4 text-sm font-medium text-slate-500 dark:text-slate-400">Conversion</p>
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
            <select
              value={mode}
              onChange={(event) => setMode(event.target.value)}
              className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-slate-900 shadow-sm outline-none dark:border-slate-700 dark:bg-slate-950 dark:text-white"
            >
              {conversions.map((item) => (
                <option key={item.value} value={item.value}>
                  {item.label}
                </option>
              ))}
            </select>
            <input
              type="number"
              value={input}
              onChange={(event) => setInput(event.target.value)}
              className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-slate-900 shadow-sm outline-none dark:border-slate-700 dark:bg-slate-950 dark:text-white"
              placeholder="Enter value"
            />
          </div>
          <div className="mt-6 rounded-3xl bg-white p-5 shadow-sm dark:bg-slate-950">
            <p className="text-sm uppercase tracking-[0.25em] text-slate-500 dark:text-slate-400">Result</p>
            <p className="mt-3 text-3xl font-semibold text-slate-900 dark:text-white">{formatNumber(result)}</p>
            <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">{formula}</p>
          </div>
        </div>
        <div className="space-y-4 rounded-3xl border border-slate-200 bg-slate-50 p-6 dark:border-slate-700 dark:bg-slate-900">
          <div>
            <h3 className="text-lg font-semibold text-slate-900 dark:text-white">Key constants</h3>
            <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">Reference values used often in physics calculations.</p>
          </div>
          <div className="grid gap-3">
            {constants.slice(0, 6).map((item) => (
              <div key={item.symbol} className="rounded-3xl border border-slate-200 bg-white p-4 text-sm text-slate-900 shadow-sm dark:border-slate-700 dark:bg-slate-950 dark:text-white">
                <div className="flex items-center justify-between gap-4">
                  <span className="font-semibold">{item.symbol}</span>
                  <span className="text-slate-500 dark:text-slate-400">{item.category}</span>
                </div>
                <p className="mt-2 text-base">{item.value} {item.unit}</p>
                <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">{item.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
