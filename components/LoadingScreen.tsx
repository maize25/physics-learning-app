'use client'

import { useEffect, useState } from 'react';
import ShootingStarLoader from '../src/components/effects/ShootingStarLoader';

const quotes = [
  'Imagination is more important than knowledge. — Einstein',
  'The important thing is not to stop questioning. — Einstein',
  'Nature uses only the longest threads to weave her patterns. — Feynman',
  'Physics is like sex: sure it may give practical results, but that is not why we do it. — Feynman',
];

export default function LoadingScreen() {
  const [visible, setVisible] = useState(true);
  const [quote, setQuote] = useState('');

  useEffect(() => {
    // Generate quote only on client side to avoid hydration mismatch
    setQuote(quotes[Math.floor(Math.random() * quotes.length)]);

    const hasSeen = sessionStorage.getItem('physics_loading_shown');
    if (hasSeen) {
      setVisible(false);
      return;
    }

    sessionStorage.setItem('physics_loading_shown', '1');
    const timeout = window.setTimeout(() => setVisible(false), 1500);
    return () => window.clearTimeout(timeout);
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed inset-0 z-[999] flex items-center justify-center bg-slate-950/95 text-white backdrop-blur-md">
      <div className="rounded-[2rem] border border-white/10 bg-slate-900/95 p-10 text-center shadow-2xl">
        <ShootingStarLoader message="Loading the universe..." />
        <h1 className="text-3xl font-bold mb-3 mt-8">Physics Atlas</h1>
        <p className="text-sm text-slate-300 italic" suppressHydrationWarning>{quote}</p>
      </div>
    </div>
  );
}
