'use client';

import { useState } from 'react';
import FallbackImage from '../../components/FallbackImage';
import PageTransition from '@/src/components/effects/PageTransition';

const books = [
  {
    title: 'A Brief History of Time',
    author: 'Stephen Hawking',
    year: '1988',
    description: 'An accessible introduction to cosmology, black holes, and time. One of the most popular science books ever written.',
    link: 'https://archive.org/details/brevhistoryof00hawk',
    pdfLink: 'https://archive.org/download/brevhistoryof00hawk/brevhistoryof00hawk.pdf',
    readOnlineLink: 'https://archive.org/embed/brevhistoryof00hawk',
    source: 'Archive.org',
    topics: 'Black Holes, Cosmology, Time, Universe',
    cover: 'https://source.unsplash.com/featured/400x600/?cosmos,book',
  },
  {
    title: 'The Elegant Universe',
    author: 'Brian Greene',
    year: '1999',
    description: 'Explores string theory and the hidden dimensions of physics. A fascinating journey through modern theoretical physics.',
    link: 'https://archive.org/details/elegantuniverse0000gree',
    pdfLink: 'https://archive.org/download/elegantuniverse0000gree/elegantuniverse0000gree.pdf',
    readOnlineLink: 'https://archive.org/embed/elegantuniverse0000gree',
    source: 'Archive.org',
    topics: 'String Theory, Dimensions, Quantum Mechanics',
    cover: 'https://source.unsplash.com/featured/400x600/?string-theory,book',
  },
  {
    title: 'Cosmos',
    author: 'Carl Sagan',
    year: '1980',
    description: 'A powerful journey through the universe and human discovery. Connects science with philosophy and human destiny.',
    link: 'https://archive.org/details/cosmos00saga',
    pdfLink: 'https://archive.org/download/cosmos00saga/cosmos00saga.pdf',
    readOnlineLink: 'https://archive.org/embed/cosmos00saga',
    source: 'Archive.org',
    topics: 'Astronomy, Cosmology, Life, Civilization',
    cover: 'https://source.unsplash.com/featured/400x600/?astronomy,book',
  },
  {
    title: 'Introduction to Classical Mechanics',
    author: 'MIT OpenCourseWare (David Morin)',
    year: '2007',
    description: 'Free MIT course readings on classical mechanics with detailed problems and solutions.',
    link: 'https://ocw.mit.edu/courses/8-01sc-classical-mechanics-fall-2016/',
    pdfLink: 'https://ocw.mit.edu/courses/8-01sc-classical-mechanics-fall-2016/resources/mit8_01scf16_classicalmechanics.pdf',
    readOnlineLink: 'https://ocw.mit.edu/courses/8-01sc-classical-mechanics-fall-2016/resource_index/',
    source: 'MIT OCW',
    topics: 'Classical Mechanics, Forces, Motion, Energy',
    cover: 'https://source.unsplash.com/featured/400x600/?mechanics,book',
  },
  {
    title: 'Electricity and Magnetism',
    author: 'MIT OpenCourseWare (Walter Lewin)',
    year: '2013',
    description: "OpenCourseWare materials on electromagnetism and circuits from MIT's famous E&M course.",
    link: 'https://ocw.mit.edu/courses/8-02sc-electricity-and-magnetism-spring-2013/',
    pdfLink: 'https://ocw.mit.edu/courses/8-02sc-electricity-and-magnetism-spring-2013/resources/mit8_02scf13_lecture_notes.pdf',
    readOnlineLink: 'https://ocw.mit.edu/courses/8-02sc-electricity-and-magnetism-spring-2013/resource_index/',
    source: 'MIT OCW',
    topics: 'Electricity, Magnetism, Circuits, Waves',
    cover: 'https://source.unsplash.com/featured/400x600/?electricity,book',
  },
  {
    title: 'Relativity: The Special and General Theory',
    author: 'Albert Einstein',
    year: '1920',
    description: "Einstein's own explanation of relativity. Written for the general public by the physicist himself.",
    link: 'https://www.gutenberg.org/ebooks/5001',
    pdfLink: 'https://www.gutenberg.org/cache/epub/5001/pg5001-images.html',
    readOnlineLink: 'https://www.gutenberg.org/ebooks/5001.txt.utf-8',
    source: 'Project Gutenberg',
    topics: 'Special Relativity, General Relativity, Gravity, Time',
    cover: 'https://source.unsplash.com/featured/400x600/?relativity,book',
  },
  {
    title: 'The Origin of Species',
    author: 'Charles Darwin',
    year: '1859',
    description: 'Foundational scientific writing on evolution. This book changed how we understand life on Earth.',
    link: 'https://www.gutenberg.org/ebooks/1228',
    pdfLink: 'https://www.gutenberg.org/cache/epub/1228/pg1228-images.html',
    readOnlineLink: 'https://www.gutenberg.org/ebooks/1228.txt.utf-8',
    source: 'Project Gutenberg',
    topics: 'Evolution, Natural Selection, Biology, Life',
    cover: 'https://source.unsplash.com/featured/400x600/?biology,book',
  },
  {
    title: 'Optics',
    author: 'Isaac Newton',
    year: '1704',
    description: "Newton's classic work on light and optics. A foundational text in physics written by one of history's greatest scientists.",
    link: 'https://www.gutenberg.org/ebooks/33504',
    pdfLink: 'https://www.gutenberg.org/cache/epub/33504/pg33504-images.html',
    readOnlineLink: 'https://www.gutenberg.org/ebooks/33504.txt.utf-8',
    source: 'Project Gutenberg',
    topics: 'Light, Optics, Prisms, Reflection, Refraction',
    cover: 'https://source.unsplash.com/featured/400x600/?optics,book',
  },
  {
    title: 'Quantum Mechanics I',
    author: 'MIT OpenCourseWare (Barton Zwiebach)',
    year: '2013',
    description: 'MIT lecture notes and readings for introductory quantum mechanics. Foundation of modern physics.',
    link: 'https://ocw.mit.edu/courses/8-04-quantum-physics-i-spring-2013/',
    pdfLink: 'https://ocw.mit.edu/courses/8-04-quantum-physics-i-spring-2013/resources/mit8_04s13_lec_notes_all.pdf',
    readOnlineLink: 'https://ocw.mit.edu/courses/8-04-quantum-physics-i-spring-2013/resource_index/',
    source: 'MIT OCW',
    topics: 'Quantum Mechanics, Schrödinger Equation, Atoms',
    cover: 'https://source.unsplash.com/featured/400x600/?quantum,book',
  },
  {
    title: 'Statistical Mechanics I',
    author: 'MIT OpenCourseWare (Frank Wilczek)',
    year: '2013',
    description: 'MIT course materials on thermodynamics and statistical mechanics. Understanding matter and temperature.',
    link: 'https://ocw.mit.edu/courses/8-333-statistical-mechanics-i-statistical-mechanics-of-particles-fall-2013/',
    pdfLink: 'https://ocw.mit.edu/courses/8-333-statistical-mechanics-i-statistical-mechanics-of-particles-fall-2013/resources/mit8_333f13_lec_notes.pdf',
    readOnlineLink: 'https://ocw.mit.edu/courses/8-333-statistical-mechanics-i-statistical-mechanics-of-particles-fall-2013/resource_index/',
    source: 'MIT OCW',
    topics: 'Thermodynamics, Entropy, Statistical Physics',
    cover: 'https://source.unsplash.com/featured/400x600/?thermodynamics,book',
  },
];

export default function Books() {
  const [selectedBook, setSelectedBook] = useState(0);
  const book = books[selectedBook];

  return (
    <PageTransition>
      <div className="container mx-auto p-8">
      <h1 className="text-3xl font-bold mb-4 text-slate-900 dark:text-white">Free Physics & Astronomy Books</h1>
      <p className="text-slate-600 dark:text-slate-300 mb-8 max-w-3xl">
        Explore free physics and astronomy books with verified online access, PDF downloads, and course resources from Archive.org, MIT OpenCourseWare, and Project Gutenberg.
      </p>

      <div className="grid gap-6 lg:grid-cols-[320px_1fr]">
        <aside className="space-y-4 rounded-[2rem] border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900 p-6 shadow-sm sticky top-8">
          <h2 className="text-xl font-semibold text-slate-900 dark:text-white">Books</h2>
          <p className="text-sm text-slate-600 dark:text-slate-300">Select a title to preview details, download the PDF, or read online.</p>
          <div className="space-y-3 mt-4">
            {books.map((item, index) => (
              <button
                key={item.title}
                type="button"
                onClick={() => setSelectedBook(index)}
                className={`flex w-full items-center gap-4 rounded-3xl border p-4 text-left transition ${
                  selectedBook === index
                    ? 'border-sky-400 bg-sky-50 dark:bg-sky-900/20 text-slate-900 dark:text-white shadow-inner'
                    : 'border-slate-200 bg-white dark:bg-slate-950 text-slate-900 dark:text-white hover:border-slate-300 dark:hover:border-slate-600 hover:bg-slate-100 dark:hover:bg-slate-800'
                }`}
              >
                <FallbackImage
                  src={item.cover}
                  alt={`${item.title} cover`}
                  className="h-16 w-12 rounded-xl object-cover"
                />
                <div className="min-w-0">
                  <p className="font-semibold truncate">{item.title}</p>
                  <p className="text-sm text-slate-500 truncate">{item.author}</p>
                </div>
              </button>
            ))}
          </div>
        </aside>

        <section className="rounded-[2rem] border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-950 p-8 shadow-sm">
          <div className="grid gap-8 lg:grid-cols-[1fr_220px]">
            <div className="space-y-4">
              <div className="overflow-hidden rounded-[1.75rem] border border-slate-200 bg-slate-950">
                <FallbackImage
                  src={book.cover}
                  alt={`${book.title} cover`}
                  className="h-full w-full object-cover"
                />
              </div>
              <div>
                <h2 className="text-3xl font-bold text-slate-900 dark:text-white">{book.title}</h2>
                <p className="text-blue-600 font-semibold mt-1">by {book.author}</p>
                <p className="text-sm text-slate-500 dark:text-slate-300 mt-2">Published: {book.year} · Source: {book.source}</p>
                <p className="mt-4 text-slate-700 dark:text-slate-300">{book.description}</p>
                <p className="mt-4 text-sm text-slate-600 dark:text-slate-300"><strong>Topics:</strong> {book.topics}</p>
              </div>
            </div>

            <div className="space-y-4 rounded-[1.75rem] border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900 p-6">
              <h3 className="text-xl font-semibold text-slate-900 dark:text-white">Quick actions</h3>
              <div className="space-y-3">
                <a
                  href={book.readOnlineLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block rounded-full bg-blue-600 px-4 py-3 text-center text-sm font-semibold text-white transition hover:bg-blue-700"
                >
                  📖 Read Online
                </a>
                <a
                  href={book.pdfLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block rounded-full bg-emerald-600 px-4 py-3 text-center text-sm font-semibold text-white transition hover:bg-emerald-700"
                >
                  📥 Download PDF
                </a>
                <a
                  href={book.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block rounded-full bg-slate-900 px-4 py-3 text-center text-sm font-semibold text-white transition hover:bg-slate-800"
                >
                  🌐 Visit Resource
                </a>
              </div>
            </div>
          </div>

          <div className="mt-10 rounded-[1.75rem] border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900 p-6">
            <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-3">How to use these resources</h3>
            <ul className="space-y-3 text-slate-700 dark:text-slate-300 text-sm">
              <li>✅ <strong>Archive.org:</strong> Read online, borrow free for 14 days, or download the PDF.</li>
              <li>✅ <strong>MIT OpenCourseWare:</strong> Free course notes and textbook-style readings.</li>
              <li>✅ <strong>Project Gutenberg:</strong> Public domain classics that are free to download and read.</li>
              <li>✅ Choose the best format for learning: text, interactive notes, or a downloadable PDF.</li>
            </ul>
          </div>
        </section>
      </div>
    </div>
    </PageTransition>
  );
}
