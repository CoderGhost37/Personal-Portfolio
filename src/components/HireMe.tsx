import React from 'react';
import { CircularText } from './Icons';
import Link from 'next/link';

const HireMe = () => {
  return (
    <div className='fixed md:absolute left-4 bottom-4 flex items-center justify-center overflow-hidden md:right-8 md:left-auto md:top-0 md:bottom-auto'>
      <div className='w-48 md:w-24 h-auto flex items-center justify-center relative'>
        <CircularText classStyles='fill-dark dark:fill-light animate-spin-slow' />
        <Link
          href='mailto:kushagram2002@gmail.com'
          className='flex items-center justify-center absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-dark dark:bg-light text-light dark:text-dark border border-solid w-20 md:w-12 h-20 md:h-12 md:text-xs rounded-full font-semibold shadow-md hover:text-dark hover:bg-light hover:dark:bg-dark hover:dark:text-light'
        >
          Hire Me
        </Link>
      </div>
    </div>
  );
};

export default HireMe;
