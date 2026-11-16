import { connect, socials } from '@/content';
import { externalLinkProps } from '@/lib/links';
import { socialIcons } from './social-icon';

export function ConnectCard() {
  return (
    <div className='border-line rounded-2xl border bg-[radial-gradient(120%_140%_at_0%_0%,var(--surface-2),var(--surface))] p-5 sm:p-6'>
      <p className='text-fg font-serif text-[34px] leading-[1.05] tracking-[-0.01em] italic'>
        {connect.headline}
      </p>
      <p className='text-muted mt-2'>{connect.copy}</p>
      <ul className='mt-5 grid grid-cols-2 gap-2 sm:grid-cols-4'>
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
