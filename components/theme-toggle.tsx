'use client';

import { Moon, SunMedium } from 'lucide-react';
import { useEffect, useState } from 'react';

export function ThemeToggle() {
  const [isDark, setIsDark] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const html = document.documentElement;
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const theme = savedTheme === 'light' || savedTheme === 'dark'
      ? savedTheme
      : prefersDark ? 'dark' : 'light';

    html.classList.remove('light', 'dark');
    html.classList.add(theme);
    setIsDark(theme === 'dark');
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const toggleTheme = () => {
    const html = document.documentElement;
    const nextTheme = isDark ? 'light' : 'dark';
    html.classList.remove('light', 'dark');
    html.classList.add(nextTheme);
    localStorage.setItem('theme', nextTheme);
    setIsDark(nextTheme === 'dark');
  };

  return (
    <button
      onClick={toggleTheme}
      className={`inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-semibold shadow-sm transition ${
        isDark
          ? 'border-gray-700 bg-gray-900 text-gray-100 hover:border-indigo-500 hover:bg-gray-800'
          : 'border-gray-200 bg-gray-50 text-gray-900 hover:bg-gray-100'
      }`}
      aria-label="Toggle theme"
    >
      {isDark ? <SunMedium className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
      {isDark ? 'Light Mode' : 'Dark Mode'}
    </button>
  );
}
