import { GeistMono } from 'geist/font/mono';
import { GeistSans } from 'geist/font/sans';
import type { Metadata } from 'next';
import { Instrument_Serif } from 'next/font/google';
import type { ReactNode } from 'react';
import { profile } from '@/content';
import { stripEmphasis } from '@/lib/format';
import { Providers } from './providers';
import './globals.css';

const instrumentSerif = Instrument_Serif({
  weight: '400',
  style: 'italic',
  subsets: ['latin'],
  variable: '--font-instrument-serif',
});

const description = stripEmphasis(profile.bio);

export const metadata: Metadata = {
  title: profile.name,
  description,
  openGraph: { title: profile.name, description, type: 'website' },
  twitter: { card: 'summary_large_image', title: profile.name, description },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html
      lang='en'
      className={`${GeistSans.variable} ${GeistMono.variable} ${instrumentSerif.variable}`}
      suppressHydrationWarning
    >
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
