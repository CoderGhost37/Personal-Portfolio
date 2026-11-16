'use client';

import { useTheme } from 'next-themes';
import type { MouseEvent } from 'react';
import { flushSync } from 'react-dom';
import { FiMoon, FiSun } from 'react-icons/fi';

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();

  const toggle = (event: MouseEvent<HTMLButtonElement>) => {
    const next = resolvedTheme === 'light' ? 'dark' : 'light';
    const reduceMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)',
    ).matches;
    if (!document.startViewTransition || reduceMotion) {
      setTheme(next);
      return;
    }

    const { left, top, width, height } =
      event.currentTarget.getBoundingClientRect();
    const x = left + width / 2;
    const y = top + height / 2;
    const radius = Math.hypot(
      Math.max(x, innerWidth - x),
      Math.max(y, innerHeight - y),
    );

    // flushSync lets next-themes swap the html class before the new snapshot is taken.
    const transition = document.startViewTransition(() =>
      flushSync(() => setTheme(next)),
    );
    transition.ready.then(() => {
      document.documentElement.animate(
        {
          clipPath: [
            `circle(0px at ${x}px ${y}px)`,
            `circle(${radius}px at ${x}px ${y}px)`,
          ],
        },
        {
          duration: 550,
          easing: 'cubic-bezier(0.4, 0, 0.2, 1)',
          pseudoElement: '::view-transition-new(root)',
        },
      );
    });
  };

  return (
    <button
      type='button'
      aria-label='Toggle color theme'
      onClick={toggle}
      className='border-line bg-surface-2 text-muted hover:text-fg grid size-8 place-items-center rounded-full border transition-colors'
    >
      <FiSun className='hidden size-3.5 dark:block' aria-hidden />
      <FiMoon className='size-3.5 dark:hidden' aria-hidden />
    </button>
  );
}
