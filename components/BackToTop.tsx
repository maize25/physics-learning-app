'use client'

import { useEffect, useState } from 'react';

export default function BackToTop() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const check = () => setShow(window.scrollY > 400);
    check();
    window.addEventListener('scroll', check);
    return () => window.removeEventListener('scroll', check);
  }, []);

  if (!show) return null;

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      className="fixed bottom-8 right-8 z-50 flex h-12 w-12 items-center justify-center rounded-full bg-purple-600 text-2xl text-white shadow-xl transition hover:scale-110 hover:bg-purple-500"
      aria-label="Back to top"
    >
      🚀
    </button>
  );
}
