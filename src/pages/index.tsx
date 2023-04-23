import AnimatedText from '@/components/AnimatedText';
import Layout from '@/components/Layout';
import TransitionEffect from '@/components/TransitionEffect';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Home = () => {
  return (
    <main className='flex items-center text-dark dark:text-light w-full min-h-screen'>
      {/* <TransitionEffect /> */}
      <Layout classStyles='pt-16 sm:pt-8'>
        <div className='flex lg:flex-col items-center justify-between w-full'>
          <div className='w-1/2 lg:w-3/4 md:w-full'>
            <Image
              src='/images/profile/developer-pic-1.png'
              alt='Kushagra'
              className='w-full h-auto'
              width={800}
              height={800}
              priority
              sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw'
            />
          </div>
          <div className='w-1/2 lg:w-full lg:py-10 flex flex-col items-center self-center lg:text-center'>
            <AnimatedText
              text='Turning Vision Into Reality With Code And Design.'
              classStyles='!text-6xl xl:!text-5xl lg:!text-center md:!text-5xl sm:!text-3xl !text-left'
            />
            <p className='my-4 text-base lg:text-lg md:text-base sm:text-sm font-medium'>
              As a skilled full-stack developer, I am dedicated to turning ideas
              into innovative web applications. Explore my latest projects, showcasing my expertise in React.js and web development.
            </p>
            <div className='mt-2 lg:self-center'>
              <Link
                href='/Kushagra_Mathur_Resume.pdf'
                download={true}
                target='_blank'
                className='flex items-center bg-dark dark:bg-light text-light dark:text-dark rounded-md text-lg md:text-base sm:text-sm font-semibold py-2 md:py-1.5 px-4 hover:bg-light hover:dark:bg-dark hover:text-dark hover:dark:text-light border-2 border-solid border-transparent hover:border-dark hover:dark:border-light'
              >
                Resume
              </Link>
            </div>
          </div>
        </div>
      </Layout>
    </main>
  );
};

export default Home;
