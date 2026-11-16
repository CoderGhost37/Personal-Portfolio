'use client';

import Image from 'next/image';
import { FiArrowUpRight, FiGithub } from 'react-icons/fi';
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
              sizes='(min-width: 600px) 320px, 88vw'
              className='object-cover'
            />
          </div>
        )}
        <div className='project-fade' />
      </div>

      <div className='flex flex-1 flex-col px-1.5 pt-3'>
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
          <span className='text-dim font-mono text-[12px]'>{project.year}</span>
        </div>
        <p className='text-dim text-[12.5px] leading-snug'>{project.tagline}</p>
        <p className='text-muted mt-2.5 mb-3.5 text-[13.5px] leading-relaxed'>
          {project.summary}
        </p>
        <div className='project-actions'>
          <a href={project.live} target='_blank' rel='noopener noreferrer'>
            Live link
            <FiArrowUpRight aria-hidden className='size-3.5' />
          </a>
          <a href={project.code} target='_blank' rel='noopener noreferrer'>
            GitHub
            <FiGithub aria-hidden className='size-3.5' />
          </a>
        </div>
      </div>
    </article>
  );
}
