import Link from 'next/link';
import React, { useState } from 'react';
import Logo from './Logo';
import { useRouter } from 'next/router';
import {
    GithubIcon,
    LinkedInIcon,
    MoonIcon,
    SunIcon,
    TwitterIcon,
} from './Icons';
import { motion } from 'framer-motion';
import useThemeSwitcher from '@/hooks/useThemeSwitcher';

const CustomLink = ({
    href,
    title,
    classStyles,
}: {
    href: string;
    title: string;
    classStyles?: string;
}) => {
    const router = useRouter();

    return (
        <Link href={href} className={`${classStyles} relative group`}>
            {title}
            <span
                className={`h-[2px] inline-block group-hover:w-full transition-[width] ease duration-300 bg-dark dark:bg-light absolute left-0 -bottom-0.5 ${router.asPath === href ? 'w-full' : 'w-0'
                    }`}
            >
                &nbsp;
            </span>
        </Link>
    );
};

const CustomMobileLink = ({
    href,
    title,
    toggle,
    classStyles,
}: {
    href: string;
    title: string;
    toggle: () => void;
    classStyles?: string;
}) => {
    const router = useRouter();

    const handleClick = () => {
        toggle();
        router.push(href);
    };

    return (
        <button onClick={handleClick} className={`${classStyles} relative my-2 text-light dark:text-dark group`}>
            {title}
            <span
                className={`h-[2px] inline-block group-hover:w-full transition-[width] ease duration-300 bg-light dark:bg-dark absolute left-0 -bottom-0.5 ${router.asPath === href ? 'w-full' : 'w-0'
                    }`}
            >
                &nbsp;
            </span>
        </button>
    );
};

const Navbar = () => {
    const { mode, setMode } = useThemeSwitcher();
    const [isOpen, setIsOpen] = useState(false);

    const handleClick = () => {
        if (isOpen) {
            setIsOpen(false);
            document.body.style.overflow = 'auto';
        } else {
            setIsOpen(true);
            document.body.style.overflow = 'hidden';
        }
    };

    const changeTheme = () => {
        setMode(mode === 'light' ? 'dark' : 'light');
    };

    return (
        <header className='w-full px-24 xl:px-10 lg:px-16 md:px-12 sm:px-8 py-8 font-medium flex justify-between items-center dark:text-light relative z-10'>
            <button
                onClick={handleClick}
                className='flex-col justify-center items-center hidden lg:flex'
            >
                <span
                    className={`bg-dark dark:bg-light block transition-all duration-300 ease-out h-1 w-8 rounded-sm ${isOpen ? 'rotate-45 translate-y-2' : '-translate-y-0.5'
                        }`}
                ></span>
                <span
                    className={`bg-dark dark:bg-light block transition-all duration-300 ease-out h-1 w-8 rounded-sm my-1 ${isOpen ? 'opacity-0' : 'opacity-100'
                        }`}
                ></span>
                <span
                    className={`bg-dark dark:bg-light block transition-all duration-300 ease-out h-1 w-8 rounded-sm ${isOpen ? '-rotate-45 -translate-y-2' : 'translate-y-0.5'
                        }`}
                ></span>
            </button>

            {isOpen && (
                <motion.div
                    initial={{ scale: 0, opacity: 0, x: '-50%', y: '-50%' }}
                    animate={{ scale: 1, opacity: 1 }}
                    className='min-w-[70vw] z-30 flex flex-col justify-between items-center fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-dark/90 dark:bg-light/90 rounded-lg backdrop-blur-md py-32'>
                    <nav className='flex items-center flex-col justify-center'>
                        <CustomMobileLink
                            href='/'
                            title='Home'
                            toggle={handleClick}
                        />
                        <CustomMobileLink
                            href='/about'
                            title='About'
                            toggle={handleClick}
                        />
                        <CustomMobileLink
                            href='/experience'
                            title='Experience'
                            toggle={handleClick}
                        />
                        <CustomMobileLink
                            href='/projects'
                            title='Projects'
                            toggle={handleClick}
                        />
                        <CustomMobileLink
                            href='/contact'
                            title='Contact'
                            toggle={handleClick}
                        />
                    </nav>

                    <nav className='flex items-center justify-center flex-wrap mt-5'>
                        <motion.a
                            href='https://github.com/CoderGhost37'
                            target='_blank'
                            whileHover={{ y: -2 }}
                            whileTap={{ scale: 0.9 }}
                            className='w-6 mr-4 bg-light dark:bg-dark rounded-full'
                        >
                            <GithubIcon classStyles={''} />
                        </motion.a>
                        <motion.a
                            href='https://www.linkedin.com/in/kushagramathur37/'
                            target='_blank'
                            whileHover={{ y: -2 }}
                            whileTap={{ scale: 0.9 }}
                            className='w-6 mx-4'
                        >
                            <LinkedInIcon classStyles={''} />
                        </motion.a>
                        <motion.a
                            href='https://twitter.com/CoderGhost37'
                            target='_blank'
                            whileHover={{ y: -2 }}
                            whileTap={{ scale: 0.9 }}
                            className='w-6 mx-4'
                        >
                            <TwitterIcon classStyles={''} />
                        </motion.a>
                        <button
                            onClick={changeTheme}
                            className={`ml-4 flex items-center justify-center rounded-full p-1 ${mode === 'light' ? 'bg-dark text-light' : 'bg-light text-dark'
                                }`}
                        >
                            {mode === 'dark' ? (
                                <SunIcon classStyles='fill-dark' />
                            ) : (
                                <MoonIcon classStyles='fill-dark' />
                            )}
                        </button>
                    </nav>
                </motion.div>
            )}

            <div className='w-full flex justify-between items-center lg:hidden'>
                <nav>
                    <CustomLink href='/' title='Home' classStyles='mr-4' />
                    <CustomLink href='/about' title='About' classStyles='mx-4' />
                    <CustomLink
                        href='/experience'
                        title='Experience'
                        classStyles='mx-4'
                    />
                    <CustomLink href='/projects' title='Projects' classStyles='mx-4' />
                    <CustomLink href='/contact' title='Contact' classStyles='ml-4' />
                </nav>

                <nav className='flex items-center justify-center flex-wrap'>
                    <motion.a
                        href='https://github.com/CoderGhost37'
                        target='_blank'
                        whileHover={{ y: -2 }}
                        whileTap={{ scale: 0.9 }}
                        className='w-6 mr-4'
                    >
                        <GithubIcon classStyles={''} />
                    </motion.a>
                    <motion.a
                        href='https://www.linkedin.com/in/kushagramathur37/'
                        target='_blank'
                        whileHover={{ y: -2 }}
                        whileTap={{ scale: 0.9 }}
                        className='w-6 mx-4'
                    >
                        <LinkedInIcon classStyles={''} />
                    </motion.a>
                    <motion.a
                        href='https://twitter.com/CoderGhost37'
                        target='_blank'
                        whileHover={{ y: -2 }}
                        whileTap={{ scale: 0.9 }}
                        className='w-6 mx-4'
                    >
                        <TwitterIcon classStyles={''} />
                    </motion.a>
                    <button
                        onClick={changeTheme}
                        className={`ml-4 flex items-center justify-center rounded-full p-1 ${mode === 'light' ? 'bg-dark text-light' : 'bg-light text-dark'
                            }`}
                    >
                        {mode === 'dark' ? (
                            <SunIcon classStyles='fill-dark' />
                        ) : (
                            <MoonIcon classStyles='fill-dark' />
                        )}
                    </button>
                </nav>
            </div>

            <div className='absolute left-[50%] top-2 translate-x-[-50%]'>
                <Logo />
            </div>
        </header>
    );
};

export default Navbar;
