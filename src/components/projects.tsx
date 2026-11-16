import { existsSync } from 'node:fs';
import path from 'node:path';
import { moreProjectsHref, projects } from '@/content';
import { ProjectCard } from './project-card';
import { Reveal } from './reveal';
import { Section } from './section';

function publicFileExists(src: string) {
  return existsSync(path.join(process.cwd(), 'public', src));
}

export function Projects() {
  return (
    <Section
      id='projects'
      action={
        <a
          href={moreProjectsHref}
          target='_blank'
          rel='noopener noreferrer'
          className='text-muted hover:text-fg text-[13px] transition-colors'
        >
          All projects →
        </a>
      }
    >
      <ul className='sm:before:bg-line relative grid grid-cols-1 sm:grid-cols-2 sm:before:absolute sm:before:inset-y-0 sm:before:left-1/2 sm:before:w-px'>
        {projects.map((project) => (
          <li key={project.slug} className='rule p-3 sm:even:after:hidden'>
            <Reveal className='h-full'>
              <ProjectCard
                project={project}
                hasImage={publicFileExists(project.image)}
              />
            </Reveal>
          </li>
        ))}
      </ul>
    </Section>
  );
}
