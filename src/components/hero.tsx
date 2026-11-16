'use client';

import { motion } from 'motion/react';
import Image from 'next/image';
import type { ReactNode } from 'react';
import { FiClock, FiCode, FiMapPin } from 'react-icons/fi';
import { experience, profile, socials } from '@/content';
import { externalLinkProps } from '@/lib/links';
import { EASE_OUT, rise } from '@/lib/motion';
import { LocalTime } from './local-time';
import { RichText } from './rich-text';
import { socialIcons } from './social-icon';

const current = experience.find((role) => role.end === 'present');

// Load sequence, in seconds: avatar, then the name word by word, then the
// rest at 60ms steps. The last item settles at about 1.09s.
const NAME_START = 0.12;
const WORD_STEP = 0.07;
const REST_START = 0.28;
const STEP = 0.06;

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
  ...(current
    ? [
        {
          key: 'role',
          icon: (
            <MetaIcon>
              <FiCode className='size-3' />
            </MetaIcon>
          ),
          label: `${current.title} @ ${current.company}`,
        },
      ]
    : []),
  ...(profile.openToWork
    ? [
        {
          key: 'availability',
          icon: (
            <span
              aria-hidden
              className='grid size-5 shrink-0 place-items-center'
            >
              <span className='bg-signal size-[7px] rounded-full shadow-[0_0_0_3px_color-mix(in_oklab,var(--signal)_18%,transparent)]' />
            </span>
          ),
          label: profile.availability,
        },
      ]
    : []),
];

const step = (index: number) => REST_START + index * STEP;

export function Hero() {
  const nameWords = profile.name.split(' ');

  return (
    <motion.div
      initial='hidden'
      animate='show'
      className='pt-12 pb-10 sm:pt-16 sm:pb-14'
    >
      <div className='flex items-center gap-4'>
        <motion.div
          variants={{
            hidden: { opacity: 0, scale: 0.8 },
            show: {
              opacity: 1,
              scale: 1,
              transition: { duration: 0.45, ease: EASE_OUT },
            },
          }}
          className='rise shrink-0'
        >
          <Image
            src={profile.avatar}
            alt={profile.name}
            width={60}
            height={60}
            priority
            className='border-line size-[60px] rounded-full border-2 object-cover'
          />
        </motion.div>
        <div>
          <h1
            aria-label={profile.name}
            className='font-serif text-[34px] leading-none tracking-[-0.01em] italic'
          >
            {nameWords.map((word, i) => (
              <motion.span
                key={i}
                aria-hidden
                variants={rise}
                custom={NAME_START + i * WORD_STEP}
                className='rise inline-block pr-[0.06em]'
              >
                {word}
                {i < nameWords.length - 1 && ' '}
              </motion.span>
            ))}
          </h1>
          <motion.p
            variants={rise}
            custom={step(0)}
            className='rise text-muted mt-1.5 text-[14px] leading-none'
          >
            {profile.role}
          </motion.p>
        </div>
      </div>

      <ul className='text-muted mt-7 mb-6 grid grid-cols-1 gap-x-6 gap-y-2 font-mono text-[12px] min-[420px]:grid-cols-2'>
        {meta.map(({ key, icon, label }, i) => (
          <motion.li
            key={key}
            variants={rise}
            custom={step(1 + i)}
            className='rise flex min-w-0 items-center gap-2.5'
          >
            {icon}
            <span className='truncate'>{label}</span>
          </motion.li>
        ))}
      </ul>

      <motion.p
        variants={rise}
        custom={step(1 + meta.length)}
        className='rise text-muted'
      >
        <RichText text={profile.bio} />
      </motion.p>

      <motion.ul
        variants={rise}
        custom={step(2 + meta.length)}
        className='rise mt-6 flex flex-wrap gap-2'
      >
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
      </motion.ul>
    </motion.div>
  );
}
