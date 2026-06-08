'use client';

import { useMemo, useState } from 'react';
import Fuse from 'fuse.js';
import { SearchItem } from '../data/search-items';

export function useUniversalSearch(data: SearchItem[]) {
  const [query, setQuery] = useState('');

  const fuse = useMemo(
    () =>
      new Fuse(data, {
        keys: ['title', 'description'],
        threshold: 0.4,
        includeScore: true,
        ignoreLocation: true,
        useExtendedSearch: true,
      }),
    [data]
  );

  const results = useMemo(() => {
    if (!query) return data;
    return fuse.search(query).map((result) => result.item);
  }, [query, fuse, data]);

  return { query, setQuery, results };
}
