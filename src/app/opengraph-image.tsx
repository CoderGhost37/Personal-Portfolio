import { readFile } from 'node:fs/promises';
import path from 'node:path';
import { ImageResponse } from 'next/og';
import { profile } from '@/content';
import logo from '@/lib/logo.json';

export const alt = profile.name;
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default async function OpengraphImage() {
  const [serif, sans] = await Promise.all([
    readFile(path.join(process.cwd(), 'src/assets/InstrumentSerif-Italic.ttf')),
    readFile(
      path.join(
        process.cwd(),
        'node_modules/geist/dist/fonts/geist-sans/Geist-Regular.ttf',
      ),
    ),
  ]);

  return new ImageResponse(
    <div
      style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        padding: '0 96px',
        background: 'radial-gradient(120% 120% at 0% 0%, #1B1B1F, #0B0B0D 60%)',
        color: '#EDEDEF',
      }}
    >
      <svg
        viewBox={logo.viewBox.join(' ')}
        height={64}
        width={(64 * logo.viewBox[2]) / logo.viewBox[3]}
        style={{ marginBottom: 48 }}
      >
        {Object.values(logo.under).map((points) => (
          <polygon key={points} points={points} fill='#8A8A91' />
        ))}
        {Object.values(logo.over).map((points) => (
          <polygon key={points} points={points} fill='#EDEDEF' />
        ))}
      </svg>
      <div
        style={{
          fontFamily: 'Instrument Serif',
          fontStyle: 'italic',
          fontSize: 132,
          lineHeight: 1,
        }}
      >
        {profile.name}
      </div>
      <div
        style={{
          marginTop: 28,
          fontFamily: 'Geist',
          fontSize: 34,
          color: '#9A9AA2',
        }}
      >
        {profile.role}
      </div>
    </div>,
    {
      ...size,
      fonts: [
        { name: 'Instrument Serif', data: serif, style: 'italic', weight: 400 },
        { name: 'Geist', data: sans, style: 'normal', weight: 400 },
      ],
    },
  );
}
