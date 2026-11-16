import logo from '@/lib/logo.json';

export function Logo({ className }: { className?: string }) {
  return (
    <svg
      viewBox={logo.viewBox.join(' ')}
      className={className}
      aria-hidden
      focusable='false'
    >
      {Object.values(logo.under).map((points) => (
        <polygon key={points} points={points} className='fill-muted' />
      ))}
      {Object.values(logo.over).map((points) => (
        <polygon key={points} points={points} className='fill-fg' />
      ))}
    </svg>
  );
}
