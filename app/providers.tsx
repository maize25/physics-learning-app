'use client';

import { ReactNode, useEffect, useState } from 'react';

export function Providers({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');

  useEffect(() => {
    const storedTheme = localStorage.getItem('theme') as 'dark' | 'light' | null;
    const nextTheme = storedTheme === 'light' ? 'light' : 'dark';
    document.documentElement.classList.toggle('dark', nextTheme === 'dark');
    setTheme(nextTheme);
  }, []);

  return <>{children}</>;
}
