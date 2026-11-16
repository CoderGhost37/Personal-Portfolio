'use client';

import { useEffect, useState } from 'react';
import { sections, type SectionId } from '@/content';
import { ThemeToggle } from './theme-toggle';

function useScrolledPast(px: number) {
  const [past, setPast] = useState(false);
  useEffect(() => {
    const update = () => setPast(window.scrollY > px);
    update();
    window.addEventListener('scroll', update, { passive: true });
    return () => window.removeEventListener('scroll', update);
  }, [px]);
  return past;
}

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
  const scrolled = useScrolledPast(8);
  const active = useActiveSection();

  return (
    <header
      data-scrolled={scrolled}
      className='data-[scrolled=true]:border-line data-[scrolled=true]:bg-bg/70 sticky top-0 z-40 border-b border-transparent transition-[background-color,border-color,backdrop-filter] duration-300 data-[scrolled=true]:backdrop-blur-md'
    >
      <div className='mx-auto flex h-14 max-w-[672px] items-center gap-4 px-4'>
        <a
          href='#top'
          aria-label='Back to top'
          className='bg-fg text-bg grid size-8 place-items-center rounded-lg font-mono text-[11px] font-semibold'
        >
          KM
        </a>
        <nav aria-label='Sections' className='hidden flex-1 sm:block'>
          <ul className='flex items-center gap-0.5'>
            {sections.map(({ id, label }) => (
              <li key={id}>
                <a
                  href={`#${id}`}
                  aria-current={active === id ? 'location' : undefined}
                  className='text-muted hover:text-fg aria-[current]:text-fg relative block rounded-full px-2.5 py-1 text-[13px] transition-colors'
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <div className='ml-auto'>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
