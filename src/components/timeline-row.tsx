import Image from 'next/image';
import type { ReactNode } from 'react';

export type RowSummary = {
  name: string;
  subtitle: string;
  logo?: string;
  current?: boolean;
  dates: string;
  aside: string;
};

function LogoTile({ name, logo }: { name: string; logo?: string }) {
  return (
    <span className='border-line bg-surface-2 text-muted grid size-9 shrink-0 place-items-center overflow-hidden rounded-[10px] border font-mono text-[12px] font-medium'>
      {logo ? (
        <Image
          src={logo}
          alt=''
          width={36}
          height={36}
          className='size-full object-cover'
        />
      ) : (
        <span aria-hidden>{name[0]}</span>
      )}
    </span>
  );
}

export function RowContent({
  row,
  trailing,
}: {
  row: RowSummary;
  trailing?: ReactNode;
}) {
  return (
    <>
      <LogoTile name={row.name} logo={row.logo} />
      <span className='min-w-0 flex-1'>
        <span className='text-fg flex flex-wrap items-center gap-x-2 gap-y-1 text-[15px] leading-snug font-medium'>
          {row.name}
          {row.current && (
            <span className='bg-signal/10 text-signal inline-flex items-center gap-1.5 rounded-full px-2 py-0.5 text-[11px] leading-none font-medium'>
              <span aria-hidden className='bg-signal size-[5px] rounded-full' />
              Current
            </span>
          )}
        </span>
        <span className='text-muted mt-0.5 block text-[13.5px] leading-snug'>
          {row.subtitle}
        </span>
        <span className='text-dim mt-1 block font-mono text-[11.5px] leading-snug sm:hidden'>
          {row.dates} · {row.aside}
        </span>
      </span>
      <span className='text-dim hidden shrink-0 text-right font-mono text-[11.5px] leading-[1.7] sm:block'>
        {row.dates}
        <br />
        {row.aside}
      </span>
      {trailing}
    </>
  );
}
