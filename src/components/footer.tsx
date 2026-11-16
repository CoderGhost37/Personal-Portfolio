import { profile } from '@/content';
import { LocalTime } from './local-time';

export function Footer() {
  return (
    <footer className='rule text-dim flex flex-wrap justify-between gap-x-4 gap-y-1 px-4 pt-6 pb-4 font-mono text-[12px]'>
      <span>
        © {new Date().getFullYear()} {profile.name}
      </span>
      <span>
        <LocalTime /> · {profile.location}
      </span>
    </footer>
  );
}
