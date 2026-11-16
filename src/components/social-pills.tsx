import { socials } from '@/content';
import { externalLinkProps } from '@/lib/links';
import { socialIcons } from './social-icon';

export function SocialPills() {
  return (
    <ul className='flex flex-wrap gap-2'>
      {socials.map(({ kind, label, href }) => {
        const Icon = socialIcons[kind];
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
