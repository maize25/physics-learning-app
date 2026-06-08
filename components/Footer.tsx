'use client'

import Link from 'next/link';
import { Mail, Code2, Share2 } from 'lucide-react';

const footerSections = [
  {
    title: 'Explore',
    links: [
      { label: 'Lessons', href: '/lessons' },
      { label: 'Simulations', href: '/simulations' },
      { label: 'Glossary', href: '/glossary' },
      { label: 'Timeline', href: '/timeline' },
    ],
  },
  {
    title: 'Learn',
    links: [
      { label: 'Mathematics', href: '/mathematics' },
      { label: 'Tutor', href: '/tutor' },
      { label: 'Quizzes', href: '/quizzes' },
      { label: 'Videos', href: '/videos' },
    ],
  },
  {
    title: 'Resources',
    links: [
      { label: 'Search', href: '/search' },
      { label: 'Quotes', href: '/quotes' },
      { label: 'Progress', href: '/progress' },
      { label: 'Bookmarks', href: '/bookmarks' },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-gradient-to-b from-white to-slate-50 dark:border-slate-700 dark:from-slate-900 dark:to-slate-950">
      <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-4">
          <div className="flex flex-col gap-4">
            <div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white">Physics Atlas</h3>
              <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
                Discover physics, astronomy, and mathematics through interactive learning.
              </p>
            </div>
            <div className="flex gap-3">
              <a href="#" className="rounded-full bg-slate-100 p-2 text-slate-600 transition hover:bg-blue-100 hover:text-blue-600 dark:bg-slate-800 dark:text-slate-400 dark:hover:bg-blue-900 dark:hover:text-blue-300">
                <Code2 className="h-5 w-5" />
              </a>
              <a href="#" className="rounded-full bg-slate-100 p-2 text-slate-600 transition hover:bg-blue-100 hover:text-blue-600 dark:bg-slate-800 dark:text-slate-400 dark:hover:bg-blue-900 dark:hover:text-blue-300">
                <Share2 className="h-5 w-5" />
              </a>
              <a href="mailto:hello@physicsatlas.app" className="rounded-full bg-slate-100 p-2 text-slate-600 transition hover:bg-blue-100 hover:text-blue-600 dark:bg-slate-800 dark:text-slate-400 dark:hover:bg-blue-900 dark:hover:text-blue-300">
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>

          {footerSections.map((section) => (
            <div key={section.title} className="flex flex-col gap-3">
              <h4 className="text-sm font-bold uppercase tracking-[0.2em] text-slate-900 dark:text-white">{section.title}</h4>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="inline-flex items-center gap-2 text-sm text-slate-600 transition hover:text-blue-600 dark:text-slate-400 dark:hover:text-blue-400"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-10 border-t border-slate-200 pt-8 dark:border-slate-700">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-sm text-slate-600 dark:text-slate-400">
              © 2026 Physics Atlas. Built with passion for science education.
            </p>
            <div className="flex gap-6">
              <a href="#" className="text-sm text-slate-600 transition hover:text-blue-600 dark:text-slate-400 dark:hover:text-blue-400">
                Privacy Policy
              </a>
              <a href="#" className="text-sm text-slate-600 transition hover:text-blue-600 dark:text-slate-400 dark:hover:text-blue-400">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
