import { Connect } from '@/components/connect';
import { ExperienceList } from '@/components/experience';
import { Footer } from '@/components/footer';
import { Header } from '@/components/header';
import { Hero } from '@/components/hero';
import { Projects } from '@/components/projects';
import { Reveal } from '@/components/reveal';
import { RichText } from '@/components/rich-text';
import { Section } from '@/components/section';
import { about } from '@/content';

export default function Home() {
  return (
    <div className='overflow-x-clip'>
      <div className='frame'>
        <Header />
        <main>
          <Hero />
          <div aria-hidden className='hatch rule' />
          <Section id='about'>
            <div className='rule p-4'>
              <Reveal delay={0.08}>
                <ul className='text-muted marker:text-dim list-disc space-y-3 pl-5'>
                  {about.paragraphs.map((paragraph) => (
                    <li key={paragraph} className='pl-1'>
                      <RichText text={paragraph} />
                    </li>
                  ))}
                </ul>
              </Reveal>
            </div>
          </Section>
          <div aria-hidden className='hatch rule' />
          <Section id='experience'>
            <div className='rule px-4 py-1'>
              <Reveal delay={0.08}>
                <ExperienceList />
              </Reveal>
            </div>
          </Section>
          <div aria-hidden className='hatch rule' />
          <Projects />
          <div aria-hidden className='hatch rule' />
          <Section id='connect'>
            <Connect />
          </Section>
          <div aria-hidden className='hatch rule' />
        </main>
        <Footer />
      </div>
    </div>
  );
}
