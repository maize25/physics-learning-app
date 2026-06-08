export interface Bookmark {
  id: string;
  type: 'lesson' | 'formula' | 'glossary' | 'timeline' | 'simulation' | 'tool' | 'news';
  title: string;
  href: string;
  savedAt: string;
}

export function toggleBookmark(item: Omit<Bookmark, 'savedAt'>) {
  const bookmarks: Bookmark[] = JSON.parse(localStorage.getItem('physics_bookmarks') || '[]');
  const idx = bookmarks.findIndex((b) => b.id === item.id);
  if (idx >= 0) {
    bookmarks.splice(idx, 1);
    localStorage.setItem('physics_bookmarks', JSON.stringify(bookmarks));
    return false;
  }
  const next = [...bookmarks, { ...item, savedAt: new Date().toISOString() }];
  localStorage.setItem('physics_bookmarks', JSON.stringify(next));
  return true;
}

export function isBookmarked(id: string) {
  const bookmarks: Bookmark[] = JSON.parse(localStorage.getItem('physics_bookmarks') || '[]');
  return bookmarks.some((b) => b.id === id);
}

export function getBookmarks() {
  return JSON.parse(localStorage.getItem('physics_bookmarks') || '[]') as Bookmark[];
}
