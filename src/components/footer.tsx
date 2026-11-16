import { profile } from '@/content';
import { LocalTime } from './local-time';

export function Footer() {
  return (
    <footer className='text-dim mx-auto flex max-w-[672px] flex-wrap justify-between gap-2 px-4 pt-4 pb-10 font-mono text-[11.5px]'>
      <span>
        © {new Date().getFullYear()} {profile.name}
      </span>
      <span>
        <LocalTime /> · {profile.location}
      </span>
    </footer>
  );
}
