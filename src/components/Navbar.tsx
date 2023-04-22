import Link from "next/link";
import React from "react";
import Logo from "./Logo";
import { useRouter } from "next/router";
import { GithubIcon, LinkedInIcon, MoonIcon, SunIcon, TwitterIcon } from "./Icons";
import { motion } from "framer-motion";
import useThemeSwitcher from "@/hooks/useThemeSwitcher";

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
                className={`h-[2px] inline-block group-hover:w-full transition-[width] ease duration-300 bg-dark dark:bg-light absolute left-0 -bottom-0.5 ${router.asPath === href ? "w-full" : "w-0"
                    }`}
            >
                &nbsp;
            </span>
        </Link>
    );
};

const Navbar = () => {
    const { mode, setMode } = useThemeSwitcher()

    const changeTheme = () => {
        setMode(mode === 'light' ? 'dark' : 'light')
    }

    return (
        <header className="w-full px-24 py-8 font-medium flex justify-between items-center dark:text-light">
            <nav>
                <CustomLink href="/" title="Home" classStyles="mr-4" />
                <CustomLink href="/about" title="About" classStyles="mx-4" />
                <CustomLink href="/experience" title="Experience" classStyles="mx-4" />
                <CustomLink href="/projects" title="Projects" classStyles="mx-4" />
                <CustomLink href="/contact" title="Contact" classStyles="ml-4" />
            </nav>

            <nav className="flex items-center justify-center flex-wrap">
                <motion.a
                    href="https://github.com/CoderGhost37"
                    target="_blank"
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-6 mr-4"
                >
                    <GithubIcon classStyles={""} />
                </motion.a>
                <motion.a
                    href="https://www.linkedin.com/in/kushagramathur37/"
                    target="_blank"
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-6 mx-4"
                >
                    <LinkedInIcon classStyles={""} />
                </motion.a>
                <motion.a
                    href="https://twitter.com/CoderGhost37"
                    target="_blank"
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-6 mx-4"
                >
                    <TwitterIcon classStyles={""} />
                </motion.a>
                <button onClick={changeTheme} className={`ml-4 flex items-center justify-center rounded-full p-1 ${mode === 'light' ? 'bg-dark text-light' : 'bg-light text-dark'}`}>
                    {mode === 'dark' ? (
                        <SunIcon classStyles="fill-dark" />
                    ) : (
                        <MoonIcon classStyles="fill-dark" />
                    )}
                </button>
            </nav>

            <div className="absolute left-[50%] top-2 translate-x-[-50%]">
                <Logo />
            </div>
        </header>
    );
};

export default Navbar;
