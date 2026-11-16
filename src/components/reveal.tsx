'use client';

import { motion } from 'motion/react';
import type { ReactNode } from 'react';
import { rise } from '@/lib/motion';

export function Reveal({
  children,
  delay = 0,
  className,
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <motion.div
      className={className ? `rise ${className}` : 'rise'}
      variants={rise}
      custom={delay}
      initial='hidden'
      whileInView='show'
      viewport={{ once: true, margin: '0px 0px -10% 0px' }}
    >
      {children}
    </motion.div>
  );
}
