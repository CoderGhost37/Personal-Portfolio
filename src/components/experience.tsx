'use client';

import { AnimatePresence, motion, useReducedMotion } from 'motion/react';
import Image from 'next/image';
import { useState } from 'react';
import { FiChevronDown, FiCode } from 'react-icons/fi';
import { experience, type Role } from '@/content';
import { formatRoleDates } from '@/lib/format';
import { Reveal } from './reveal';

const hasDetails = (role: Role) => role.points.length > 0;

const firstWithDetails = experience.findIndex(hasDetails);

function CompanyMark({ role }: { role: Role }) {
  if (role.logo) {
    // The vendored logos are drawn for dark backgrounds, so the tile stays dark in both themes.
    return (
      <span className='border-line size-6 shrink-0 overflow-hidden rounded-md border bg-[#141417]'>
        <Image
          src={role.logo}
          alt=''
          width={24}
          height={24}
          className='size-full object-contain p-0.5'
        />
      </span>
    );
  }
  return (
    <span
      aria-hidden
      className='icon-tile text-muted size-6 rounded-md font-mono text-[11px] font-medium'
    >
      {role.company[0]}
    </span>
  );
}

function RoleSummary({
  role,
  expandable,
}: {
  role: Role;
  expandable: boolean;
}) {
  return (
    <>
      <span className='flex items-center gap-3'>
        <span aria-hidden className='icon-tile size-6 rounded-lg'>
          <FiCode className='size-3.5' />
        </span>
        <span className='text-fg flex-1 text-[15px] leading-snug font-medium'>
          {role.title}
        </span>
        {expandable && (
          <FiChevronDown
            aria-hidden
            className='text-dim group-hover:text-fg size-4 shrink-0 transition-transform duration-300 group-aria-expanded:rotate-180 motion-reduce:transition-none'
          />
        )}
      </span>
      <span className='text-muted mt-1 flex flex-wrap items-center gap-x-2 pl-9 text-[13.5px] leading-snug'>
        {role.location}
        <span aria-hidden className='bg-line h-3.5 w-px' />
        <span className='font-mono text-[12px]'>{formatRoleDates(role)}</span>
      </span>
    </>
  );
}

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
        const expandable = hasDetails(role);
        const expanded = open.has(index);
        const panelId = `role-${index}`;
        return (
          <li key={role.company} className='rule px-4 py-4'>
            <Reveal>
              <div className='flex items-center gap-3'>
                <CompanyMark role={role} />
                <h3 className='text-fg text-[17px] leading-snug font-medium'>
                  {role.company}
                </h3>
                {role.end === 'present' && (
                  <span className='bg-signal/10 text-signal inline-flex items-center gap-1.5 rounded-full px-2 py-0.5 text-[11px] leading-none font-medium'>
                    <span
                      aria-hidden
                      className='bg-signal size-[5px] rounded-full'
                    />
                    Current
                  </span>
                )}
              </div>
              {expandable ? (
                <>
                  <button
                    type='button'
                    aria-expanded={expanded}
                    aria-controls={panelId}
                    onClick={() => toggle(index)}
                    className='group hover:bg-surface-2/70 -mx-2 mt-2 block w-[calc(100%+1rem)] rounded-lg px-2 py-1.5 text-left transition-colors'
                  >
                    <RoleSummary role={role} expandable />
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
                        <ul className='text-muted marker:text-dim list-disc space-y-1 pt-2 pl-13 text-[14px] leading-[1.65]'>
                          {role.points.map((point) => (
                            <li key={point}>{point}</li>
                          ))}
                        </ul>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </>
              ) : (
                <div className='mt-2 py-1.5'>
                  <RoleSummary role={role} expandable={false} />
                </div>
              )}
            </Reveal>
          </li>
        );
      })}
    </ul>
  );
}
