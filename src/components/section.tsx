import type { ReactNode } from 'react';
import { sections, type SectionId } from '@/content';
import { Reveal } from './reveal';

export function Section({
  id,
  action,
  children,
}: {
  id: SectionId;
  action?: ReactNode;
  children: ReactNode;
}) {
  const label = sections.find((s) => s.id === id)?.label;
  return (
    <section
      id={id}
      aria-labelledby={`${id}-title`}
      className='scroll-mt-12 pt-8 pb-10 sm:scroll-mt-10 sm:pt-10 sm:pb-14'
    >
      <Reveal className='mb-5 flex items-baseline justify-between gap-4'>
        <h2
          id={`${id}-title`}
          className='font-serif text-[28px] leading-none tracking-[-0.01em] italic'
        >
          {label}
        </h2>
        {action}
      </Reveal>
      <Reveal delay={0.08}>{children}</Reveal>
    </section>
  );
}

export function Chips({ items }: { items: string[] }) {
  return (
    <ul className='flex flex-wrap gap-1.5'>
      {items.map((item) => (
        <li
          key={item}
          className='border-line text-muted rounded-md border px-2 py-0.5 font-mono text-[11.5px]'
        >
          {item}
        </li>
      ))}
    </ul>
  );
}
