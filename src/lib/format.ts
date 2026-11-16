import type { Role, YearMonth } from '@/content';

const monthYear = new Intl.DateTimeFormat('en-US', {
  month: 'short',
  year: 'numeric',
  timeZone: 'UTC',
});

function formatYearMonth(value: YearMonth) {
  const [year, month] = value.split('-').map(Number);
  return monthYear.format(Date.UTC(year, month - 1));
}

export function formatRoleDates(role: Role) {
  const end = role.end === 'present' ? 'Now' : formatYearMonth(role.end);
  return `${formatYearMonth(role.start)} → ${end}`;
}

export function stripEmphasis(text: string) {
  return text.replaceAll('*', '');
}
