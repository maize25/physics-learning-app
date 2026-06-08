'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import PageTransition from '@/src/components/effects/PageTransition';

const allQuotes = [
  { id: 1, text: "Life is like riding a bicycle. To keep your balance you must keep moving.", author: "Albert Einstein" },
  { id: 2, text: "The important thing is not to stop questioning. Curiosity has its own reason for existing.", author: "Albert Einstein" },
  { id: 3, text: "Imagination is more important than knowledge.", author: "Albert Einstein" },
  { id: 4, text: "The only source of knowledge is experience.", author: "Albert Einstein" },
  { id: 5, text: "Try not to become a man of success, but rather try to become a man of value.", author: "Albert Einstein" },
  { id: 6, text: "Black holes are where God divided by zero.", author: "Stephen Hawking" },
  { id: 7, text: "The greatest enemy of knowledge is not ignorance, it is the illusion of knowledge.", author: "Stephen Hawking" },
  { id: 8, text: "Intelligence is the ability to adapt to change.", author: "Stephen Hawking" },
  { id: 9, text: "We are just an advanced breed of monkeys on a minor planet of a very average star.", author: "Stephen Hawking" },
  { id: 10, text: "The universe doesn't allow perfection.", author: "Stephen Hawking" },
  { id: 11, text: "If you think you understand quantum mechanics, you don't understand quantum mechanics.", author: "Richard Feynman" },
  { id: 12, text: "Science is the belief in the ignorance of experts.", author: "Richard Feynman" },
  { id: 13, text: "The first principle is that you must not fool yourself and you are the easiest person to fool.", author: "Richard Feynman" },
  { id: 14, text: "I would rather have questions that can't be answered than answers that can't be questioned.", author: "Richard Feynman" },
  { id: 15, text: "Study hard what interests you the most in the most undisciplined, irreverent and original manner possible.", author: "Richard Feynman" },
  { id: 16, text: "Somewhere, something incredible is waiting to be known.", author: "Carl Sagan" },
  { id: 17, text: "We are a way for the cosmos to know itself.", author: "Carl Sagan" },
  { id: 18, text: "Extraordinary claims require extraordinary evidence.", author: "Carl Sagan" },
  { id: 19, text: "The cosmos is within us. We are made of star-stuff.", author: "Carl Sagan" },
  { id: 20, text: "Science is not only compatible with spirituality; it is a profound source of spirituality.", author: "Carl Sagan" },
];

export default function LikedQuotes() {
  const [likedQuotes, setLikedQuotes] = useState<number[]>([]);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem('likedQuotes');
    if (saved) {
      setLikedQuotes(JSON.parse(saved));
    }
    setMounted(true);
  }, []);

  const toggleUnlike = (id: number) => {
    setLikedQuotes((prev) => {
      const updated = prev.filter((q) => q !== id);
      localStorage.setItem('likedQuotes', JSON.stringify(updated));
      return updated;
    });
  };

  const filteredQuotes = allQuotes.filter((q) => likedQuotes.includes(q.id));

  if (!mounted) return null;

  return (
    <PageTransition>
      <div className="container mx-auto p-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-slate-900 dark:text-white">❤️ Your Liked Quotes</h1>
        <Link href="/quotes" className="inline-flex rounded-full bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 font-semibold transition">
          ← Back to All Quotes
        </Link>
      </div>

      {filteredQuotes.length === 0 ? (
        <div className="rounded-3xl bg-gradient-to-r from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-950 p-12 border border-slate-200 dark:border-slate-700 text-center">
          <p className="text-2xl font-semibold text-slate-700 dark:text-slate-300 mb-4">No liked quotes yet</p>
          <p className="text-slate-600 dark:text-slate-300 mb-6">
            Go back to the quotes page and click the heart emoji to like your favorite quotes!
          </p>
          <Link href="/quotes" className="inline-flex rounded-full bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 font-semibold transition">
            Browse Quotes
          </Link>
        </div>
      ) : (
        <>
          <p className="text-slate-600 dark:text-slate-300 mb-8">You have liked {filteredQuotes.length} quote{filteredQuotes.length !== 1 ? 's' : ''}</p>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {filteredQuotes.map((quote) => (
              <div key={quote.id} className="bg-gradient-to-r from-red-50 to-pink-50 dark:from-slate-900 dark:to-slate-950 p-6 rounded-lg border border-red-200 dark:border-red-700 shadow-sm hover:shadow-md transition relative">
                <button
                  onClick={() => toggleUnlike(quote.id)}
                  className="absolute top-4 right-4 text-2xl text-red-500 hover:text-red-700 transition transform hover:scale-125"
                  title="Unlike this quote"
                >
                  ❤️
                </button>
                <p className="italic text-slate-700 dark:text-slate-300 mb-4">"{quote.text}"</p>
                <p className="font-semibold text-slate-900 dark:text-white">— {quote.author}</p>
              </div>
            ))}
          </div>
        </>
      )}

      <div className="mt-12 rounded-3xl border border-slate-200 dark:border-slate-700 bg-blue-50 dark:bg-slate-900 p-8">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-3">💡 Tips:</h2>
        <ul className="space-y-2 text-slate-700">
          <li>✓ Your liked quotes are saved locally in your browser</li>
          <li>✓ Click the heart icon again to unlike any quote</li>
          <li>✓ Your collection will persist even after closing and reopening the app</li>
          <li>✓ Share your favorite quotes with friends!</li>
        </ul>
      </div>
      </div>
    </PageTransition>
  );
}
