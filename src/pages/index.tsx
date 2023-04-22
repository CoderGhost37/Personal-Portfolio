import AnimatedText from '@/components/AnimatedText';
import Layout from '@/components/Layout';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Home = () => {
  return (
    <main className='flex items-center text-dark dark:text-light w-full min-h-screen'>
      <Layout classStyles='pt-0'>
        <div className='flex items-center justify-between w-full'>
          <div className='w-1/2'>
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
          <div className='w-1/2 flex flex-col items-center self-center'>
            <AnimatedText
              text='Turning Vision Into Reality With Code And Design.'
              classStyles='!text-5xl !text-left'
            />
            <p className='my-4 text-base font-medium'>
              As a skilled full-stack developer, I am dedicated to turning ideas
              into innovative web applications. Explore my latest projects, showcasing my expertise in React.js and web development.
            </p>
            <div className='mt-2'>
              <Link
                href='/Kushagra_Mathur_Resume.pdf'
                download={true}
                target='_blank'
                className='flex items-center bg-dark dark:bg-light text-light dark:text-dark rounded-md text-lg font-semibold py-2 px-4 hover:bg-light hover:dark:bg-dark hover:text-dark hover:dark:text-light border-2 border-solid border-transparent hover:border-dark hover:dark:border-light'
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
