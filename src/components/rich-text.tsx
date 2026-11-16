export function RichText({ text }: { text: string }) {
  return text.split('*').map((part, i) =>
    i % 2 === 1 ? (
      <em key={i} className='text-fg not-italic'>
        {part}
      </em>
    ) : (
      part
    ),
  );
}
