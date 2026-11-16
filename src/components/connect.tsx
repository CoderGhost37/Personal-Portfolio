'use client';

import { AnimatePresence, motion } from 'motion/react';
import { useEffect, useState } from 'react';
import { FiCheck, FiCopy, FiMail } from 'react-icons/fi';
import { connect, profile, socials } from '@/content';
import { externalLinkProps } from '@/lib/links';
import { socialIcons } from './social-icon';

function CopyEmail() {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (!copied) return;
    const timeout = setTimeout(() => setCopied(false), 1500);
    return () => clearTimeout(timeout);
  }, [copied]);

  return (
    <div className='border-line bg-surface-2 my-5 flex items-center gap-2.5 rounded-xl border py-1.5 pr-1.5 pl-3 font-mono text-[12.5px]'>
      <FiMail aria-hidden className='text-dim size-3.5 shrink-0' />
      <span className='min-w-0 flex-1 truncate'>{profile.email}</span>
      <motion.button
        layout
        type='button'
        onClick={async () => {
          await navigator.clipboard.writeText(profile.email);
          setCopied(true);
        }}
        transition={{ layout: { duration: 0.25, ease: [0.2, 0.7, 0.2, 1] } }}
        className='bg-fg text-bg inline-flex h-7 shrink-0 items-center overflow-hidden rounded-lg px-2.5 font-sans text-[12px] font-medium motion-safe:active:scale-[0.96]'
      >
        <AnimatePresence mode='popLayout' initial={false}>
          <motion.span
            key={copied ? 'copied' : 'copy'}
            layout='position'
            initial={{ opacity: 0, y: 8, filter: 'blur(4px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            exit={{ opacity: 0, y: -8, filter: 'blur(4px)' }}
            transition={{ duration: 0.2 }}
            className='rise inline-flex items-center gap-1.5'
          >
            {copied ? (
              <FiCheck aria-hidden className='size-3.5' />
            ) : (
              <FiCopy aria-hidden className='size-3.5' />
            )}
            {copied ? 'Copied' : 'Copy'}
          </motion.span>
        </AnimatePresence>
      </motion.button>
      <span aria-live='polite' className='sr-only'>
        {copied ? 'Email copied to clipboard' : ''}
      </span>
    </div>
  );
}

export function ConnectCard() {
  return (
    <div className='border-line rounded-2xl border bg-[radial-gradient(120%_140%_at_0%_0%,var(--surface-2),var(--surface))] p-5 sm:p-6'>
      <p className='text-fg font-serif text-[34px] leading-[1.05] tracking-[-0.01em] italic'>
        {connect.headline}
      </p>
      <p className='text-muted mt-2'>{connect.copy}</p>
      <CopyEmail />
      <ul className='grid grid-cols-2 gap-2 sm:grid-cols-4'>
        {socials.map(({ kind, label, handle, href }) => {
          const Icon = socialIcons[kind];
          return (
            <li key={kind}>
              <a
                href={href}
                {...externalLinkProps(href)}
                className='group border-line bg-bg/40 block rounded-xl border p-3 transition-colors hover:border-[color-mix(in_oklab,var(--fg)_20%,var(--line))]'
              >
                <span className='text-dim flex items-center justify-between'>
                  <Icon aria-hidden className='size-3.5' />
                  <span
                    aria-hidden
                    className='group-hover:text-fg text-[13px] leading-none transition-transform duration-200 motion-safe:group-hover:translate-x-0.5 motion-safe:group-hover:-translate-y-0.5'
                  >
                    ↗
                  </span>
                </span>
                <span className='text-fg mt-3 block text-[13.5px] leading-tight font-medium'>
                  {label}
                </span>
                <span className='text-dim mt-1 block truncate font-mono text-[11px] leading-tight'>
                  {handle}
                </span>
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
