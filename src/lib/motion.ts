import type { Variants } from 'motion/react';

export const EASE_OUT = [0.2, 0.7, 0.2, 1] as const;

// Elements using this variant also carry the `rise` class, which strips the
// blur and offset under prefers-reduced-motion so only the fade remains.
export const rise: Variants = {
  hidden: { opacity: 0, y: 8, filter: 'blur(8px)' },
  show: (delay: number = 0) => ({
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { delay, duration: 0.45, ease: EASE_OUT },
    transitionEnd: { filter: 'none' },
  }),
};
