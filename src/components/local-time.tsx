'use client';

import { useSyncExternalStore } from 'react';
import { profile } from '@/content';

const MINUTE = 60_000;

function subscribeToMinutes(onTick: () => void) {
  let interval: ReturnType<typeof setInterval> | undefined;
  const timeout = setTimeout(
    () => {
      onTick();
      interval = setInterval(onTick, MINUTE);
    },
    MINUTE - (Date.now() % MINUTE),
  );
  return () => {
    clearTimeout(timeout);
    clearInterval(interval);
  };
}

const time = new Intl.DateTimeFormat('en-US', {
  hour: 'numeric',
  minute: '2-digit',
  timeZone: profile.timeZone,
});
const zone = new Intl.DateTimeFormat('en-IN', {
  timeZoneName: 'short',
  timeZone: profile.timeZone,
});

function format(minute: number) {
  const date = new Date(minute * MINUTE);
  const zoneName = zone
    .formatToParts(date)
    .find((p) => p.type === 'timeZoneName')?.value;
  return `${time.format(date)} ${zoneName}`;
}

export function LocalTime() {
  const minute = useSyncExternalStore(
    subscribeToMinutes,
    () => Math.floor(Date.now() / MINUTE),
    () => null,
  );
  return (
    <span suppressHydrationWarning>
      {minute === null ? ' ' : format(minute)}
    </span>
  );
}
