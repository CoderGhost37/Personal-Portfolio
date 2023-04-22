import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className='border-t-2 border-solid border-dark dark:border-light bg-gray-200 dark:bg-dark dark:text-light py-8 px-2 flex flex-col items-center justify-center'>
      <Link href='/' className='p-1'>
        <Image src='/images/logo.png' alt='Kushagra' className='dark:invert' width={300} height={300} />
      </Link>
      <div className='flex justify-center items-center gap-8 mt-5 font-medium text-lg'>
        <Link href='/'>Home</Link>
        <Link href='/about'>About</Link>
        <Link href='/experience'>Experience</Link>
        <Link href='/projects'>Projects</Link>
        <Link href='/contact'>Contact</Link>
      </div>

      <div className='mt-8 flex flex-col justify-center items-center font-medium'>
        <p className=''>
          Kushagra Mathur &copy; {new Date().getFullYear()}
        </p>
        <p className=''>All rights reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
