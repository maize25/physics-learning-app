'use client';

export default function BooksReader() {
  return (
    <div className="rounded-3xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-950 p-8 shadow-sm">
      <h2 className="text-2xl font-semibold mb-3">Books and Scientist Stories</h2>
      <p className="text-slate-600 mb-6">
        This page will display embedded PDFs once the book files are added to the project.
        For now, explore the recommended reading list and upload your own PDFs to `public/`.
      </p>

      <div className="space-y-4">
        <div className="rounded-3xl bg-slate-50 dark:bg-slate-900 p-5">
          <h3 className="text-xl font-semibold">Einstein: His Life and Universe</h3>
          <p className="text-slate-600 dark:text-slate-300">A biography of Albert Einstein, his theories, and his scientific journey.</p>
        </div>
        <div className="rounded-3xl bg-slate-50 dark:bg-slate-900 p-5">
          <h3 className="text-xl font-semibold">Stephen Hawking: A Brief History of Time</h3>
          <p className="text-slate-600 dark:text-slate-300">Explore black holes, time, and cosmology through Hawking's classic work.</p>
        </div>
        <div className="rounded-3xl bg-slate-50 dark:bg-slate-900 p-5">
          <h3 className="text-xl font-semibold">Ramanujan: The Man Who Knew Infinity</h3>
          <p className="text-slate-600 dark:text-slate-300">Discover the story of Ramanujan and his extraordinary mathematical insights.</p>
        </div>
      </div>

      <div className="mt-8 rounded-3xl bg-blue-50 dark:bg-slate-900 p-5 border border-blue-100 dark:border-slate-700">
        <p className="text-slate-700 dark:text-slate-300">
          Tip: Add PDF files to `public/` and update the book component to load them for in-app reading.
        </p>
      </div>
    </div>
  );
}
