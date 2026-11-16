import type { IconType } from 'react-icons';
import { FaGithub, FaLinkedinIn, FaXTwitter } from 'react-icons/fa6';
import { FiMail } from 'react-icons/fi';
import { socials, type SocialKind } from '@/content';
import { externalLinkProps } from '@/lib/links';

const icons: Record<SocialKind, IconType> = {
  x: FaXTwitter,
  linkedin: FaLinkedinIn,
  github: FaGithub,
  email: FiMail,
};

export function SocialPills() {
  return (
    <ul className='flex flex-wrap gap-2'>
      {socials.map(({ kind, label, href }) => {
        const Icon = icons[kind];
        return (
          <li key={kind}>
            <a href={href} {...externalLinkProps(href)} className='pill'>
              <Icon aria-hidden className='size-3.5' />
              {label}
            </a>
          </li>
        );
      })}
    </ul>
  );
}
