import { ConnectCard } from '@/components/connect';
import { ExperienceList } from '@/components/experience';
import { Footer } from '@/components/footer';
import { Header } from '@/components/header';
import { Hero } from '@/components/hero';
import { Projects } from '@/components/projects';
import { RichText } from '@/components/rich-text';
import { Section } from '@/components/section';
import { about } from '@/content';

export default function Home() {
  return (
    <>
      <Header />
      <main className='mx-auto max-w-[672px] px-4'>
        <Hero />
        <Section id='about'>
          <div className='text-muted space-y-4'>
            {about.paragraphs.map((paragraph) => (
              <p key={paragraph}>
                <RichText text={paragraph} />
              </p>
            ))}
          </div>
        </Section>
        <Section id='experience'>
          <ExperienceList />
        </Section>
        <Projects />
        <Section id='connect'>
          <ConnectCard />
        </Section>
      </main>
      <Footer />
    </>
  );
}
