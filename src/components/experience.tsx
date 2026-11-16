'use client';

import { AnimatePresence, motion, useReducedMotion } from 'motion/react';
import { useState } from 'react';
import { FiChevronDown } from 'react-icons/fi';
import { experience, type Role } from '@/content';
import { formatRoleDates } from '@/lib/format';
import { RowContent } from './timeline-row';

const hasDetails = (role: Role) => role.points.length > 0;

const firstWithDetails = experience.findIndex(hasDetails);

export function ExperienceList() {
  const reduceMotion = useReducedMotion();
  const [open, setOpen] = useState<ReadonlySet<number>>(
    () => new Set([firstWithDetails]),
  );

  const toggle = (index: number) =>
    setOpen((prev) => {
      const next = new Set(prev);
      if (!next.delete(index)) next.add(index);
      return next;
    });

  return (
    <ul>
      {experience.map((role, index) => {
        const row = {
          name: role.company,
          subtitle: role.title,
          logo: role.logo,
          current: role.end === 'present',
          dates: formatRoleDates(role),
          aside: role.location,
        };
        if (!hasDetails(role)) {
          return (
            <li
              key={role.company}
              className='border-line flex items-start gap-3 border-t py-3.5 first:border-t-0'
            >
              <RowContent
                row={row}
                trailing={<span aria-hidden className='mt-1 size-4 shrink-0' />}
              />
            </li>
          );
        }
        const expanded = open.has(index);
        const panelId = `role-${index}`;
        return (
          <li
            key={role.company}
            className='border-line border-t first:border-t-0'
          >
            <button
              type='button'
              aria-expanded={expanded}
              aria-controls={panelId}
              onClick={() => toggle(index)}
              className='group flex w-full items-start gap-3 rounded-lg py-3.5 text-left'
            >
              <RowContent
                row={row}
                trailing={
                  <FiChevronDown
                    aria-hidden
                    className='text-dim group-hover:text-fg mt-1 size-4 shrink-0 transition-transform duration-300 group-aria-expanded:rotate-180 motion-reduce:transition-none'
                  />
                }
              />
            </button>
            <AnimatePresence initial={false}>
              {expanded && (
                <motion.div
                  id={panelId}
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{
                    height: {
                      duration: reduceMotion ? 0 : 0.35,
                      ease: [0.2, 0.7, 0.2, 1],
                    },
                    opacity: { duration: 0.25 },
                  }}
                  className='overflow-hidden'
                >
                  <div className='pb-4 pl-12'>
                    <ul className='text-muted marker:text-dim list-disc space-y-1 pl-4 text-[14px] leading-[1.65]'>
                      {role.points.map((point) => (
                        <li key={point}>{point}</li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </li>
        );
      })}
    </ul>
  );
}
