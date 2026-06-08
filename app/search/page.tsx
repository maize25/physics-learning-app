import SearchBar from '../../components/SearchBar';
import PageTransition from '@/src/components/effects/PageTransition';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Search | Physics Learning App',
  description: 'Search lessons, books, quotes, and glossary terms using fuzzy matching.',
};

export default function SearchPage() {
  return (
    <PageTransition>
      <div className="container mx-auto p-8">
        <div className="overflow-hidden rounded-[2rem] bg-gradient-to-r from-slate-950 via-blue-900 to-sky-500 p-8 text-white shadow-2xl mb-10 max-h-[210px] sm:max-h-[240px]">
          <div className="relative h-full">
            <div className="absolute inset-x-0 top-0 h-full bg-[radial-gradient(circle_at_top_left,_rgba(56,189,248,0.22),_transparent_45%)]" />
            <div className="relative z-10 flex h-full flex-col justify-between gap-4">
              <div>
                <h2 className="text-3xl font-bold">Search the app</h2>
                <p className="mt-2 text-gray-200 max-w-2xl">Find lessons, glossary entries, quotes, books, and tools without extra scrolling on mobile.</p>
              </div>
            </div>
          </div>
        </div>

        <SearchBar />
      </div>
    </PageTransition>
  );
}
