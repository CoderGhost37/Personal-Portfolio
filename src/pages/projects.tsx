import Head from 'next/head';
import React from 'react';
import { client, urlFor } from '../../lib/sanity.client';
import Layout from '@/components/Layout';
import AnimatedText from '@/components/AnimatedText';
import Link from 'next/link';
import Image from 'next/image';
import { GithubIcon } from '@/components/Icons';
import { motion } from 'framer-motion'

interface ProjectCardProps {
    title: string;
    projectLink: string;
    codeLink: string;
    description: string;
    img: any;
    tags: string[];
}

const FeaturedProjectCard = ({
    title,
    projectLink,
    codeLink,
    description,
    img,
    tags,
}: ProjectCardProps) => {
    return (
        <div className='w-full relative flex items-center justify-between rounded-3xl rounded-br-2xl border border-solid border-dark bg-light shadow-2xl p-6 md:p-10'>
            <div className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-br-3xl rounded-[2.5rem] bg-dark" />
            <Link
                href={projectLink}
                target='_blank'
                className='w-1/2 cursor-pointer overflow-hidden rounded-lg'
            >
                <Image
                    src={urlFor(img).url()}
                    alt={title}
                    className='w-full h-auto hover:scale-105 transition duration-300'
                    width={600}
                    height={600}
                />
            </Link>
            <div className='w-1/2 flex flex-col justify-between items-start pl-8'>
                <Link
                    href={projectLink}
                    target='_blank'
                    className='hover:underline underline-offset-2'
                >
                    <h2 className='my-2 w-full text-left font-bold text-3xl'>{title}</h2>
                </Link>
                <p className='my-2 font-medium text-dark text-lg'>{description}</p>
                <div className='flex flex-wrap items-center my-2 gap-2'>
                    {tags?.map((tag, index) => (
                        <span
                            key={index}
                            className='text-light bg-gray-500 py-1 px-2 rounded-lg text-sm font-semibold'
                        >
                            {tag}
                        </span>
                    ))}
                </div>
                <div className='mt-2 flex items-center'>
                    <motion.a
                        href={codeLink}
                        target="_blank"
                        whileHover={{ y: -2 }}
                        whileTap={{ scale: 0.9 }}
                        className="w-10"
                    >
                        <GithubIcon classStyles='' />
                    </motion.a>
                    <motion.a
                        href={projectLink}
                        target="_blank"
                        whileHover={{ y: -2 }}
                        whileTap={{ scale: 0.9 }}
                        className="ml-4 rounded bg-dark text-light py-2 px-6 font-semibold"
                    >
                        Visit Project
                    </motion.a>
                </div>
            </div>
        </div>
    );
};

const ProjectCard = ({
    title,
    projectLink,
    codeLink,
    description,
    img,
    tags,
}: ProjectCardProps) => {
    return (
        <div className='w-full flex flex-col items-center justify-center rounded-3xl border border-solid border-dark bg-light shadow-2xl p-6 relative'>
            <div className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] bg-dark" />
            <Link
                href={projectLink}
                target='_blank'
                className='w-full cursor-pointer overflow-hidden rounded-lg'
            >
                <Image
                    src={urlFor(img).url()}
                    alt={title}
                    className='w-full h-auto hover:scale-105 transition duration-300'
                    width={600}
                    height={600}
                />
            </Link>
            <div className='w-full mt-5 flex flex-col justify-between items-start'>
                <Link
                    href={projectLink}
                    target='_blank'
                    className='hover:underline underline-offset-2'
                >
                    <h2 className='my-2 w-full text-left font-bold text-3xl'>{title}</h2>
                </Link>
                <p className='my-2 font-medium text-dark text-lg'>{description}</p>
                <div className='flex flex-wrap items-center my-2 gap-2'>
                    {tags?.map((tag, index) => (
                        <span
                            key={index}
                            className='text-light bg-gray-500  py-1 px-2 rounded-lg text-sm font-semibold'
                        >
                            {tag}
                        </span>
                    ))}
                </div>
                <div className='mt-2 w-full flex justify-between items-center'>
                    <motion.a
                        href={codeLink}
                        target="_blank"
                        whileHover={{ y: -2 }}
                        whileTap={{ scale: 0.9 }}
                        className="w-10"
                    >
                        <GithubIcon classStyles='' />
                    </motion.a>
                    <motion.a
                        href={projectLink}
                        target="_blank"
                        whileHover={{ y: -2 }}
                        whileTap={{ scale: 0.9 }}
                        className="ml-4 rounded bg-dark text-light py-2 px-6 font-semibold"
                    >
                        Visit Project
                    </motion.a>
                </div>
            </div>
        </div>
    );
};

const projects = ({ projects }: { projects: any }) => {
    return (
        <div>
            <Head>
                <title>Kushagra Mathur | Projects</title>
                <meta
                    name='description'
                    content='Projects page of my portfolio website'
                />
            </Head>

            <main className='w-full max-w-7xl mx-auto mb-16 flex flex-col items-center justify-center'>
                <Layout classStyles='pt-16'>
                    <AnimatedText
                        text='Imagination Trumps Knowledge!'
                        classStyles='mb-16'
                    />
                    <div className='grid grid-cols-12 gap-20'>
                        {projects.map((project: any, index: number) => (
                            <div
                                key={index}
                                className={`${(index + 1) % 3 === 1 ? 'col-span-12' : 'col-span-6'
                                    }`}
                            >
                                {(index + 1) % 3 === 1 ? (
                                    <FeaturedProjectCard {...project} />
                                ) : (
                                    <ProjectCard {...project} />
                                )}
                            </div>
                        ))}
                    </div>
                </Layout>
            </main>
        </div>
    );
};

export const getStaticProps = async () => {
    const projectsQuery = '*[_type == "projects"] | order(_createdAt desc)';
    const projects = await client.fetch(projectsQuery);

    return {
        props: {
            projects,
        },
        revalidate: 3 * 60 * 60,
    };
};

export default projects;
