'use client';

import { useTheme } from 'next-themes';
import { FiMoon, FiSun } from 'react-icons/fi';

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();

  return (
    <button
      type='button'
      aria-label='Toggle color theme'
      onClick={() => setTheme(resolvedTheme === 'light' ? 'dark' : 'light')}
      className='grid size-8 place-items-center rounded-full border border-line bg-surface-2 text-muted transition-colors hover:text-fg'
    >
      <FiSun className='hidden size-3.5 dark:block' aria-hidden />
      <FiMoon className='size-3.5 dark:hidden' aria-hidden />
    </button>
  );
}
