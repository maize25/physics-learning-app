'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { ThemeToggle } from './theme-toggle';
import TextSizeToggle from '@/src/components/ui/TextSizeToggle';

const navItems = [
  { label: 'Home', href: '/' },
  { label: 'Lessons', href: '/lessons' },
  { label: 'Mathematics', href: '/mathematics' },
  { label: 'Labs', href: '/simulations' },
  { label: 'Topic Map', href: '/topic-map' },
  { label: 'Tools', href: '/tools' },
];

const moreItems = [
  { label: 'Research AI Agent', href: '/tutor' },
  { label: 'Quizzes', href: '/quizzes' },
  { label: 'Flashcards', href: '/flashcards' },
  { label: 'Videos', href: '/videos' },
  { label: 'Timeline', href: '/timeline' },
  { label: 'Glossary', href: '/glossary' },
  { label: 'Quotes', href: '/quotes' },
  { label: 'Progress', href: '/progress' },
  { label: 'Daily Challenge', href: '/daily-challenge' },
  { label: 'Bookmarks', href: '/bookmarks' },
  { label: 'Cosmology Resources', href: '/cosmology-resources' },
  { label: 'About', href: '/about' },
];

export default function Navbar({ onOpenSearch }: { onOpenSearch?: () => void }) {
  const [open, setOpen] = useState(false);
  const [moreOpen, setMoreOpen] = useState(false);
  const moreRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (moreOpen && moreRef.current && !moreRef.current.contains(event.target as Node)) {
        setMoreOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [moreOpen]);

  return (
    <nav className="sticky top-0 z-40 bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-600 dark:from-blue-900 dark:via-blue-950 dark:to-indigo-900 text-white shadow-xl transition-colors duration-300 backdrop-blur-sm">
      <div className="container mx-auto flex items-center justify-between px-4 py-4 lg:px-0">
        <div className="flex items-center gap-3">
          <span className="inline-flex items-center rounded-full bg-white/15 px-3 py-2 text-sm font-bold uppercase tracking-[0.3em] text-cyan-200 backdrop-blur-sm">
            ✨ Physics Atlas
          </span>
        </div>

        <div className="flex items-center gap-3">
          <div className="hidden items-center gap-6 lg:flex">
            {navItems.map((item) => (
              <Link key={`${item.href}-${item.label}`} href={item.href} className="text-white hover:text-cyan-200 transition font-medium text-sm">
                {item.label}
              </Link>
            ))}

            <div className="relative" ref={moreRef}>
              <button
                type="button"
                onClick={() => setMoreOpen((v) => !v)}
                className="flex items-center gap-2 text-white hover:text-cyan-200 transition font-medium text-sm"
              >
                More ▾
              </button>

              {moreOpen && (
                <div className="absolute right-0 top-full z-50 mt-2 min-w-[12rem] rounded-xl border border-gray-700 bg-gray-900 shadow-2xl p-2">
                  {moreItems.map((m) => (
                    <Link
                      key={`${m.href}-${m.label}`}
                      href={m.href}
                      onClick={() => setMoreOpen(false)}
                      className="block rounded-md px-3 py-2 text-sm text-slate-200 hover:bg-slate-800"
                    >
                      {m.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </div>

          <ThemeToggle />
          <TextSizeToggle />

          <button
            type="button"
            onClick={() => onOpenSearch?.()}
            className="bg-gray-800 hover:bg-gray-700 text-gray-300 rounded-lg px-3 py-2 text-sm flex items-center gap-2"
          >
            <span>🔍</span>
            <span>Search</span>
            <kbd className="border border-gray-600 rounded px-1 text-xs text-gray-500">⌘K</kbd>
          </button>

          <button
            type="button"
            onClick={() => setOpen((prev) => !prev)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white transition hover:bg-white/20 lg:hidden"
            aria-label="Toggle navigation"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      <div className={`${open ? 'block' : 'hidden'} border-t border-blue-500/30 bg-gradient-to-b from-blue-700 to-blue-800 dark:from-blue-900 dark:to-blue-950 lg:hidden`}>
        <div className="container mx-auto flex flex-col gap-2 px-4 py-4">
          <Link
            href="/"
            className="rounded-2xl px-4 py-3 text-white transition hover:bg-blue-600/50"
            onClick={() => setOpen(false)}
          >
            Home
          </Link>
          {navItems.map((item) => (
            <Link
              key={`${item.href}-${item.label}`}
              href={item.href}
              className="rounded-2xl px-4 py-3 text-white transition hover:bg-blue-600/50"
              onClick={() => setOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          {moreItems.map((item) => (
            <Link
              key={`${item.href}-${item.label}`}
              href={item.href}
              className="rounded-2xl px-4 py-3 text-white transition hover:bg-blue-600/50"
              onClick={() => setOpen(false)}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}