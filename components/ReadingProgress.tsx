'use client'

import { useEffect, useState } from 'react';

export default function ReadingProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const update = () => {
      const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
      const pct = scrollTop / (scrollHeight - clientHeight);
      setProgress(Math.min(100, Math.max(0, pct * 100)));
    };
    update();
    window.addEventListener('scroll', update);
    return () => window.removeEventListener('scroll', update);
  }, []);

  return (
    <div className="fixed top-0 left-0 z-50 h-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-400 transition-all" style={{ width: `${progress}%` }} />
  );
}
