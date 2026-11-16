import { existsSync } from 'node:fs';
import path from 'node:path';
import { moreProjectsHref, projects } from '@/content';
import { ProjectCard } from './project-card';
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
      <ul className='grid grid-cols-1 gap-3.5 sm:grid-cols-2'>
        {projects.map((project) => (
          <li key={project.slug}>
            <ProjectCard
              project={project}
              hasImage={publicFileExists(project.image)}
            />
          </li>
        ))}
      </ul>
    </Section>
  );
}
