// Offsets center the 13px cross on the column line and on the row's top
// rule, which is the last pixel of the row above.
const corners = {
  'top-left': '-top-[7px] -left-[6px]',
  'top-right': '-top-[7px] -right-[6px]',
  'bottom-left': '-bottom-[6px] -left-[6px]',
  'bottom-right': '-bottom-[6px] -right-[6px]',
};

export function Cross({ at }: { at: keyof typeof corners }) {
  return <span aria-hidden className={`cross ${corners[at]}`} />;
}
