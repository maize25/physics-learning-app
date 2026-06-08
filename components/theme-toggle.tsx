'use client';

import { Moon, SunMedium } from 'lucide-react';
import { useEffect, useState } from 'react';

export function ThemeToggle() {
  const [isDark, setIsDark] = useState(true);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const currentTheme = document.documentElement.classList.contains('dark');
    setIsDark(currentTheme);
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const toggleTheme = () => {
    const html = document.documentElement;
    if (html.classList.contains('dark')) {
      html.classList.remove('dark');
      localStorage.setItem('theme', 'light');
      setIsDark(false);
    } else {
      html.classList.add('dark');
      localStorage.setItem('theme', 'dark');
      setIsDark(true);
    }
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
