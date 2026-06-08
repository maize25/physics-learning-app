import Link from 'next/link';
import { physicsTimeline } from '../data/timeline';

export default function Timeline() {
  return (
    <div className="max-w-6xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
      <div className="mb-10 rounded-[2rem] border border-slate-200 bg-gradient-to-r from-slate-950 via-blue-950 to-slate-900 p-10 shadow-2xl text-white dark:border-slate-700">
        <h2 className="text-4xl font-bold">Explore the physics discoveries that changed the world</h2>
        <p className="mt-4 max-w-3xl text-lg text-slate-300">
          Each event captures a breakthrough, a name, and the big idea. Use this timeline to connect theory, experiment, and history.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link href="/lessons" className="rounded-full bg-blue-500 px-5 py-3 font-semibold text-white transition hover:bg-blue-400">
            Browse Lessons
          </Link>
          <Link href="/glossary" className="rounded-full bg-slate-200 dark:bg-slate-800 px-5 py-3 font-semibold text-slate-950 dark:text-white transition hover:bg-slate-300 dark:hover:bg-slate-700">
            Learn Glossary Terms
          </Link>
        </div>
      </div>

      <div className="relative">
        <div className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-gradient-to-b from-indigo-500 via-violet-500 to-pink-500"></div>
        <div className="space-y-12">
          {physicsTimeline.map((event, index) => {
            const isLeft = index % 2 === 0;
            return (
              <div
                key={event.year + event.title}
                className={`relative flex flex-col items-center gap-6 sm:flex-row ${isLeft ? 'sm:flex-row' : 'sm:flex-row-reverse'}`}
              >
                <div className="sm:w-1/2" />
                <div className="relative z-10 flex h-14 w-14 items-center justify-center rounded-full bg-slate-900 text-white shadow-xl">
                  {event.year}
                </div>
                <div className="sm:w-1/2 flex justify-center">
                  <div className="w-full sm:max-w-md">
                    <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition hover:shadow-lg dark:border-slate-700 dark:bg-slate-950">
                      <div className="mb-4 inline-flex flex-col gap-1 text-sm font-semibold uppercase tracking-[0.22em] text-slate-500 dark:text-slate-400">
                        <span>{event.scientist}</span>
                      </div>
                      <h3 className="text-2xl font-bold text-slate-900 dark:text-white">{event.title}</h3>
                      <p className="mt-4 text-slate-600 dark:text-slate-300 leading-relaxed">{event.description}</p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="mt-20 p-8 rounded-2xl bg-gradient-to-r from-purple-900 to-indigo-900 text-center">
        <div className="text-4xl mb-4">🔭</div>
        <h3 className="text-2xl font-bold text-white mb-2">Want to explore the universe further?</h3>
        <p className="text-gray-300 mb-6">
          Check out the Observable Universe — A Personal Atlas by Meet Pandya
        </p>
        <a
          href="https://www.notion.so/The-Observable-Universe-A-Personal-Atlas-by-Meet-Pandya-352adc119c4680f0ba33de68a2172529?source=copy_link"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-8 py-3 bg-white dark:bg-slate-900 text-purple-900 dark:text-purple-200 font-bold rounded-full hover:scale-105 dark:hover:bg-slate-800 transition-transform"
        >
          Open the Atlas →
        </a>
      </div>
    </div>
  );
}
