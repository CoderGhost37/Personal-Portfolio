import Image from 'next/image';
import type { ReactNode } from 'react';
import { FiClock, FiCode, FiDownload, FiMapPin } from 'react-icons/fi';
import { experience, profile, socials } from '@/content';
import { externalLinkProps } from '@/lib/links';
import { LocalTime } from './local-time';
import { RichText } from './rich-text';
import { socialIcons } from './social-icon';

const current = experience.find((role) => role.end === 'present');

function MetaIcon({ children }: { children: ReactNode }) {
  return (
    <span
      aria-hidden
      className='bg-surface-2 text-dim grid size-5 shrink-0 place-items-center rounded-md'
    >
      {children}
    </span>
  );
}

export function Hero() {
  const meta: { key: string; icon: ReactNode; label: ReactNode }[] = [
    {
      key: 'location',
      icon: (
        <MetaIcon>
          <FiMapPin className='size-3' />
        </MetaIcon>
      ),
      label: profile.location,
    },
    {
      key: 'time',
      icon: (
        <MetaIcon>
          <FiClock className='size-3' />
        </MetaIcon>
      ),
      label: <LocalTime />,
    },
  ];
  if (current) {
    meta.push({
      key: 'role',
      icon: (
        <MetaIcon>
          <FiCode className='size-3' />
        </MetaIcon>
      ),
      label: `${current.title} @ ${current.company}`,
    });
  }
  if (profile.openToWork) {
    meta.push({
      key: 'availability',
      icon: (
        <span aria-hidden className='grid size-5 shrink-0 place-items-center'>
          <span className='bg-signal size-[7px] rounded-full shadow-[0_0_0_3px_color-mix(in_oklab,var(--signal)_18%,transparent)]' />
        </span>
      ),
      label: profile.availability,
    });
  }

  return (
    <div className='pt-12 pb-10 sm:pt-16 sm:pb-14'>
      <div className='flex items-center gap-4'>
        <Image
          src={profile.avatar}
          alt={profile.name}
          width={60}
          height={60}
          priority
          className='border-line size-[60px] rounded-full border-2 object-cover'
        />
        <div>
          <h1 className='font-serif text-[34px] leading-none tracking-[-0.01em] italic'>
            {profile.name}
          </h1>
          <p className='text-muted mt-1.5 text-[14px] leading-none'>
            {profile.role}
          </p>
        </div>
      </div>

      <ul className='text-muted mt-7 mb-6 grid grid-cols-1 gap-x-6 gap-y-2 font-mono text-[12px] min-[420px]:grid-cols-2'>
        {meta.map(({ key, icon, label }) => (
          <li key={key} className='flex min-w-0 items-center gap-2.5'>
            {icon}
            <span className='truncate'>{label}</span>
          </li>
        ))}
      </ul>

      <p className='text-muted'>
        <RichText text={profile.bio} />
      </p>

      <ul className='mt-6 flex flex-wrap gap-2'>
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
        <li>
          <a href={profile.resume} download className='pill pill-filled'>
            <FiDownload aria-hidden className='size-3.5' />
            Resume
          </a>
        </li>
      </ul>
    </div>
  );
}
