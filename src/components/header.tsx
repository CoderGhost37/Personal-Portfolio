'use client';

import { motion } from 'motion/react';
import { useEffect, useState } from 'react';
import { sections, type SectionId } from '@/content';
import { Logo } from './logo';
import { ThemeToggle } from './theme-toggle';

function useActiveSection() {
  const [active, setActive] = useState<SectionId | null>(null);
  useEffect(() => {
    const visible = new Set<SectionId>();
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          const id = entry.target.id as SectionId;
          if (entry.isIntersecting) visible.add(id);
          else visible.delete(id);
        }
        setActive(sections.find((s) => visible.has(s.id))?.id ?? null);
      },
      { rootMargin: '-40% 0px -59% 0px' },
    );
    for (const { id } of sections) {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    }
    return () => observer.disconnect();
  }, []);
  return active;
}

export function Header() {
  const active = useActiveSection();

  return (
    <header className='site-header rule sticky top-0 z-40 flex h-14 items-center gap-4 px-4'>
      <a
        href='#top'
        aria-label='Kushagra Mathur, back to top'
        className='-m-1.5 rounded-md p-1.5'
      >
        <Logo className='h-[18px] w-auto' />
      </a>
      <nav aria-label='Sections' className='ml-auto hidden sm:block'>
        <ul className='flex items-center gap-0.5'>
          {sections.map(({ id, label }) => (
            <li key={id}>
              <a
                href={`#${id}`}
                aria-current={active === id ? 'location' : undefined}
                className='text-muted hover:text-fg aria-[current]:text-fg relative block rounded-full px-2.5 py-1 text-[13px] transition-colors'
              >
                {active === id && (
                  <motion.span
                    layoutId='nav-pill'
                    transition={{
                      type: 'spring',
                      bounce: 0.18,
                      duration: 0.45,
                    }}
                    className='border-line bg-surface-2 absolute inset-0 rounded-full border'
                  />
                )}
                <span className='relative'>{label}</span>
              </a>
            </li>
          ))}
        </ul>
      </nav>
      <span aria-hidden className='bg-line hidden h-4 w-px sm:block' />
      <div className='max-sm:ml-auto'>
        <ThemeToggle />
      </div>
    </header>
  );
}
