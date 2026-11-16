'use client';

import Image from 'next/image';
import type { PointerEvent } from 'react';
import type { Project } from '@/content';

function trackPointer(event: PointerEvent<HTMLDivElement>) {
  if (event.pointerType !== 'mouse') return;
  const stage = event.currentTarget;
  const rect = stage.getBoundingClientRect();
  stage.style.setProperty('--mx', `${event.clientX - rect.left}px`);
  stage.style.setProperty('--my', `${event.clientY - rect.top}px`);
}

export function ProjectCard({
  project,
  hasImage,
}: {
  project: Project;
  hasImage: boolean;
}) {
  const [from, via, to] = project.wallpaper;

  return (
    <article className='project-card'>
      <div
        className='project-stage'
        style={{
          backgroundImage: `linear-gradient(140deg, ${from}, ${via} 55%, ${to})`,
        }}
        onPointerMove={trackPointer}
      >
        {hasImage && (
          <div className='project-shot'>
            <Image
              src={project.image}
              alt={`${project.title} screenshot`}
              fill
              sizes='(min-width: 600px) 270px, 84vw'
              className='object-cover'
            />
          </div>
        )}
        <div className='project-fade' />
      </div>

      <div className='px-2.5 pt-3 pb-2.5'>
        <div className='flex items-baseline justify-between gap-3'>
          <h3 className='text-[15px] leading-snug font-medium'>
            <a
              href={project.live}
              target='_blank'
              rel='noopener noreferrer'
              className='project-link'
            >
              {project.title}
            </a>
          </h3>
          <span className='text-dim font-mono text-[11.5px]'>
            {project.year}
          </span>
        </div>
        <div className='project-meta'>
          <p className='project-tagline text-muted text-[13px] leading-snug'>
            {project.tagline}
          </p>
          <div className='project-extras'>
            <ul className='project-chips'>
              {project.stack.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <span aria-hidden className='text-fg'>
              Live ↗
            </span>
            <a
              href={project.code}
              target='_blank'
              rel='noopener noreferrer'
              className='project-code'
            >
              Code
            </a>
          </div>
        </div>
      </div>
    </article>
  );
}
