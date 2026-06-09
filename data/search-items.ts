import { lessons } from './lessons';
import { glossaryData } from './glossary';
import { quotes } from './quotes';

export type SearchItem = {
  id: string;
  type: 'lesson' | 'book' | 'quote' | 'glossary';
  title: string;
  description: string;
  url: string;
};

const lessonItems: SearchItem[] = lessons.map((lesson) => ({
  id: `lesson-${lesson.slug}`,
  type: 'lesson',
  title: lesson.title,
  description: lesson.intro,
  url: `/lessons/${lesson.slug}`,
}));

const bookItems: SearchItem[] = lessons.flatMap((lesson) =>
  (lesson.books ?? []).map((book, index) => ({
    id: `book-${lesson.slug}-${index}`,
    type: 'book',
    title: book.title,
    description: `${book.author} — recommended for ${lesson.title.toLowerCase()}`,
    url: book.link,
  }))
);

const glossaryItems: SearchItem[] = glossaryData.map((term) => ({
  id: `glossary-${term.term}`,
  type: 'glossary',
  title: term.term,
  description: term.definition,
  url: '/glossary',
}));

const quoteItems: SearchItem[] = quotes.map((quote) => ({
  id: `quote-${quote.id}`,
  type: 'quote',
  title: `Quote by ${quote.author}`,
  description: quote.text,
  url: '/quotes',
}));

export const searchItems: SearchItem[] = [
  ...lessonItems,
  ...bookItems,
  ...glossaryItems,
  ...quoteItems,
];
