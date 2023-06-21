import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const links = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Experience', href: '/experience' },
  { name: 'Projects', href: '/projects' },
  { name: 'Contact', href: '/contact' },
];

const Footer = () => {
  return (
    <footer className='border-t-2 border-solid border-dark dark:border-light bg-gray-200 dark:bg-dark py-8 px-2 flex flex-col items-center justify-center'>
      <Link href='/' className='p-1'>
        <Image
          src='/images/logo.png'
          alt='Kushagra'
          className='dark:invert'
          width={300}
          height={300}
        />
      </Link>
      <div className='flex sm:flex-col justify-center items-center sm:mt-10 sm:gap-2 gap-8 mt-5 font-medium text-lg lg:text-base'>
        {links.map((link) => (
          <Link
            href={link.href}
            key={link.name}
            className='hover:dark:text-light text-gray-700 dark:text-gray-300 hover:text-dark'
          >
            {link.name}
          </Link>
        ))}
      </div>

      <div className='mt-8 flex flex-col justify-center items-center font-medium dark:text-light  text-dark'>
        <p className=''>Kushagra Mathur &copy; {new Date().getFullYear()}</p>
        <p className=''>All rights reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
