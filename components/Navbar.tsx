'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X, SunMoon } from 'lucide-react';
import { ThemeToggle } from './theme-toggle';
import TextSizeToggle from '@/src/components/ui/TextSizeToggle';

const navItems = [
  { label: 'Modules', href: '/modules' },
  { label: 'Lessons', href: '/lessons' },
  { label: 'Mathematics', href: '/mathematics' },
  { label: 'Topic Map', href: '/topic-map' },
  { label: 'Tutor', href: '/tutor' },
  { label: 'Research AI Agent', href: '/tutor' },
  { label: 'Computational Labs', href: '/simulations' },
  { label: 'Cosmology Resources', href: '/cosmology-resources' },
  { label: 'About', href: '/about' },
  { label: 'Flashcards', href: '/flashcards' },
  { label: 'Daily', href: '/daily-challenge' },
  { label: 'Tools', href: '/tools' },
  { label: 'Bookmarks', href: '/bookmarks' },
];

export default function Navbar({ onOpenSearch }: { onOpenSearch?: () => void }) {
  const [open, setOpen] = useState(false);

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
            <Link href="/" className="rounded-full border border-white/20 bg-white/10 px-4 py-2 text-white transition hover:bg-white/20 hover:text-cyan-200 font-medium text-sm">
              Home
            </Link>
            {navItems.map((item) => (
              <Link key={item.href} href={item.href} className="text-white hover:text-cyan-200 transition font-medium text-sm">
                {item.label}
              </Link>
            ))}
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
              key={item.href}
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