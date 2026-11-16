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
    <section id={id} aria-labelledby={`${id}-title`} className='scroll-mt-14'>
      <div className='rule px-4 pt-2 pb-1.5'>
        <Reveal className='flex items-baseline justify-between gap-4'>
          <h2
            id={`${id}-title`}
            className='font-serif text-[30px] leading-[1.15] tracking-[-0.01em] italic'
          >
            {label}
          </h2>
          {action}
        </Reveal>
      </div>
      {children}
    </section>
  );
}
