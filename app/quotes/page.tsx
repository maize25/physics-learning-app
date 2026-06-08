'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { Heart, Share2 } from 'lucide-react';
import ShootingStarLoader from '@/src/components/effects/ShootingStarLoader';

const quotes = [
  { id: 1, text: 'Imagination is more important than knowledge.', author: 'Albert Einstein', year: 1929 },
  { id: 2, text: 'The important thing is not to stop questioning.', author: 'Albert Einstein', year: 1955 },
  { id: 3, text: 'The only source of knowledge is experience.', author: 'Albert Einstein', year: 1931 },
  { id: 4, text: 'Science is a way of trying not to fool yourself.', author: 'Richard Feynman', year: 1963 },
  { id: 5, text: 'Nature uses only the longest threads to weave her patterns.', author: 'Richard Feynman', year: 1961 },
  { id: 6, text: 'The first principle is that you must not fool yourself and you are the easiest person to fool.', author: 'Richard Feynman', year: 1974 },
  { id: 7, text: 'Black holes are where God divided by zero.', author: 'Stephen Hawking', year: 1988 },
  { id: 8, text: 'The greatest enemy of knowledge is not ignorance, it is the illusion of knowledge.', author: 'Stephen Hawking', year: 2001 },
  { id: 9, text: 'We are just an advanced breed of monkeys on a minor planet of a very average star.', author: 'Stephen Hawking', year: 1996 },
  { id: 10, text: 'Intelligence is the ability to adapt to change.', author: 'Stephen Hawking', year: 1993 },
  { id: 11, text: 'Somewhere, something incredible is waiting to be known.', author: 'Carl Sagan', year: 1980 },
  { id: 12, text: 'We are a way for the cosmos to know itself.', author: 'Carl Sagan', year: 1980 },
  { id: 13, text: 'Extraordinary claims require extraordinary evidence.', author: 'Carl Sagan', year: 1980 },
  { id: 14, text: 'Science is not only compatible with spirituality; it is a profound source of spirituality.', author: 'Carl Sagan', year: 1980 },
  { id: 15, text: 'Nothing in life is to be feared. It is only to be understood.', author: 'Marie Curie', year: 1937 },
  { id: 16, text: 'One never notices what has been done; one can only see what remains to be done.', author: 'Marie Curie', year: 1911 },
  { id: 17, text: "An experiment is a question which science poses to Nature, and a measurement is the recording of Nature's answer.", author: 'Werner Heisenberg', year: 1927 },
  { id: 18, text: 'Prediction is very difficult, especially if it’s about the future.', author: 'Niels Bohr', year: 1918 },
  { id: 19, text: 'The present is theirs; the future, for which I really worked, is mine.', author: 'Nikola Tesla', year: 1916 },
  { id: 20, text: 'If I have seen further it is by standing on the shoulders of Giants.', author: 'Isaac Newton', year: 1675 },
];

export default function Quotes() {
  const [likedQuotes, setLikedQuotes] = useState<number[]>([]);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem('likedQuotes');
    if (saved) {
      setLikedQuotes(JSON.parse(saved));
    }
    setMounted(true);
  }, []);

  const toggleLike = (id: number) => {
    setLikedQuotes((prev) => {
      const updated = prev.includes(id) ? prev.filter((quoteId) => quoteId !== id) : [...prev, id];
      localStorage.setItem('likedQuotes', JSON.stringify(updated));
      return updated;
    });
  };

  const handleShare = async (text: string) => {
    const sharePayload = {
      title: 'Physics Atlas Quote',
      text,
      url: window.location.href,
    };

    try {
      if (navigator.share) {
        await navigator.share(sharePayload);
      } else {
        await navigator.clipboard.writeText(`${text} — Shared from Physics Atlas: ${window.location.href}`);
        alert('Quote link copied to clipboard!');
      }
    } catch {
      alert('Unable to share right now. Please copy the quote manually.');
    }
  };

  if (!mounted) {
    return (
      <div className="container mx-auto p-8">
        <ShootingStarLoader message="Loading physics quotes..." />
      </div>
    );
  }

  return (
    <div className="container mx-auto p-8">
      <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-4xl font-bold text-white">Physics Quotes</h1>
          <p className="mt-2 max-w-3xl text-slate-400">Daily inspiration from the greatest minds in science. Save your favorites and share them with friends.</p>
        </div>
        <Link href="/liked-quotes" className="inline-flex items-center gap-2 rounded-full bg-slate-800 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-700">
          <Heart className="h-4 w-4" /> Liked Quotes ({likedQuotes.length})
        </Link>
      </div>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {quotes.map((item) => (
          <div key={item.id} className="overflow-hidden rounded-[2rem] bg-gradient-to-br from-sky-500 to-indigo-600 p-[1px] shadow-xl transition glow-card hover:-translate-y-1 hover:shadow-2xl">
            <div className="h-full rounded-[1.75rem] bg-slate-950 p-6 text-slate-100">
              <div className="mb-6 space-y-3">
                <p className="text-lg italic leading-relaxed">“{item.text}”</p>
                <div className="flex flex-wrap items-center gap-2 text-sm text-slate-400">
                  <span className="font-semibold text-white">{item.author}</span>
                  <span>•</span>
                  <span>{item.year}</span>
                </div>
              </div>
              <div className="mt-6 flex items-center justify-between gap-3">
                <button
                  type="button"
                  onClick={() => toggleLike(item.id)}
                  className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold transition ${
                    likedQuotes.includes(item.id)
                      ? 'bg-rose-500 text-white'
                      : 'bg-slate-900 text-slate-200 hover:bg-slate-800'
                  }`}
                >
                  <Heart className="h-4 w-4" /> {likedQuotes.includes(item.id) ? 'Liked' : 'Like'}
                </button>
                <button
                  type="button"
                  onClick={() => handleShare(`"${item.text}" — ${item.author}`)}
                  className="inline-flex items-center gap-2 rounded-full bg-slate-800 px-4 py-2 text-sm font-semibold text-slate-200 hover:bg-slate-700 transition"
                >
                  <Share2 className="h-4 w-4" /> Share
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
