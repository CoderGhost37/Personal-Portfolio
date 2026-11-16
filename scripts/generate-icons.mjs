import { writeFile } from 'node:fs/promises';
import sharp from 'sharp';
import logo from '../src/lib/logo.json' with { type: 'json' };

const TILE = '#0B0B0D';
const OVER = '#EDEDEF';
const UNDER = '#8A8A91';

const kWidth = Math.max(
  ...[logo.under.leg, logo.over.kTop]
    .flatMap((points) => points.split(' '))
    .map((pair) => Number(pair.split(',')[0])),
);

function tileSvg({ radius }) {
  const k = 0.6;
  const width = kWidth * k;
  const polygons = [
    `<polygon points="${logo.under.leg}" fill="${UNDER}"/>`,
    `<polygon points="${logo.over.kTop}" fill="${OVER}"/>`,
  ].join('');
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><rect width="100" height="100" rx="${radius}" fill="${TILE}"/><g transform="translate(${(100 - width) / 2} 20) scale(${k})">${polygons}</g></svg>`;
}

const png = (svg, size) =>
  sharp(Buffer.from(svg), { density: 72 * (size / 100) * 4 })
    .resize(size, size)
    .png()
    .toBuffer();

function ico(images) {
  const header = Buffer.alloc(6 + images.length * 16);
  header.writeUInt16LE(1, 2);
  header.writeUInt16LE(images.length, 4);
  let offset = header.length;
  images.forEach(({ size, data }, i) => {
    const entry = 6 + i * 16;
    header.writeUInt8(size, entry);
    header.writeUInt8(size, entry + 1);
    header.writeUInt16LE(1, entry + 4);
    header.writeUInt16LE(32, entry + 6);
    header.writeUInt32LE(data.length, entry + 8);
    header.writeUInt32LE(offset, entry + 12);
    offset += data.length;
  });
  return Buffer.concat([header, ...images.map((image) => image.data)]);
}

const rounded = tileSvg({ radius: 22 });
const sizes = [16, 32, 48];
const icoImages = await Promise.all(
  sizes.map(async (size) => ({ size, data: await png(rounded, size) })),
);

await writeFile('src/app/icon.svg', rounded);
await writeFile('src/app/favicon.ico', ico(icoImages));
await writeFile(
  'src/app/apple-icon.png',
  await png(tileSvg({ radius: 0 }), 180),
);
console.log(
  'wrote src/app/icon.svg, src/app/favicon.ico, src/app/apple-icon.png',
);
