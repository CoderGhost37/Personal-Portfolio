'use client';

import { motion } from 'motion/react';
import Image from 'next/image';
import { profile } from '@/content';
import { EASE_OUT, rise } from '@/lib/motion';
import { Cross } from './cross';
import { RichText } from './rich-text';
import { SocialPills } from './social-pills';

// Load sequence, in seconds: avatar, then the name word by word, then the
// rest at 60ms steps. The last item settles at about 0.85s.
const NAME_START = 0.12;
const WORD_STEP = 0.07;
const REST_START = 0.28;
const STEP = 0.06;

const step = (index: number) => REST_START + index * STEP;

export function Hero() {
  const nameWords = profile.name.split(' ');

  return (
    <motion.div initial='hidden' animate='show'>
      <div aria-hidden className='dots rule' />

      <div className='rule flex'>
        <Cross at='top-left' desktopOnly />
        <Cross at='top-right' desktopOnly />
        <Cross at='bottom-left' />
        <Cross at='bottom-right' />
        <div className='w-[35%] shrink-0 p-2 sm:w-auto sm:p-5'>
          <motion.div
            variants={{
              hidden: { opacity: 0, scale: 0.8 },
              show: {
                opacity: 1,
                scale: 1,
                transition: { duration: 0.45, ease: EASE_OUT },
              },
            }}
            className='rise border-line aspect-square rounded-[12px] border p-1 sm:size-32'
          >
            <Image
              src={profile.avatar}
              alt={profile.name}
              width={120}
              height={120}
              priority
              className='size-full rounded-[8px] object-cover'
            />
          </motion.div>
        </div>
        <div className='flex min-w-0 flex-1 flex-col justify-center gap-2 py-3 pr-4 pl-2'>
          <h1
            aria-label={profile.name}
            className='font-serif text-[30px] leading-none tracking-[-0.01em] italic sm:text-[40px]'
          >
            {nameWords.map((word, i) => (
              <motion.span
                key={i}
                aria-hidden
                variants={rise}
                custom={NAME_START + i * WORD_STEP}
                className='rise mr-[0.22em] inline-block last:mr-0'
              >
                {word}
              </motion.span>
            ))}
          </h1>
          <motion.p
            variants={rise}
            custom={step(0)}
            className='rise text-muted text-[14px] leading-none'
          >
            {profile.role}
          </motion.p>
        </div>
      </div>

      <div className='rule p-4'>
        <motion.p variants={rise} custom={step(1)} className='rise text-muted'>
          <RichText text={profile.bio} />
        </motion.p>
        <motion.div variants={rise} custom={step(2)} className='rise mt-4'>
          <SocialPills />
        </motion.div>
      </div>
    </motion.div>
  );
}
