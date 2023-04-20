import React from 'react';
import Head from 'next/head';
import {
    VerticalTimeline,
    VerticalTimelineElement,
} from 'react-vertical-timeline-component';

import 'react-vertical-timeline-component/style.min.css';
import Layout from '@/components/Layout';
import AnimatedText from '@/components/AnimatedText';
import { client, urlFor } from '../../lib/sanity.client';
import Image from 'next/image';

const ExperienceCard = ({ exp }: { exp: any }) => {
    return (
        <VerticalTimelineElement
            contentStyle={{ background: '#1d1836', color: '#fff' }}
            contentArrowStyle={{ borderRight: '7px solid #232631' }}
            iconStyle={{ background: exp.imgBg }}
            icon={
                <div className='flex justify-center items-center w-full h-full'>
                    <Image
                        src={urlFor(exp.img).url()}
                        alt={exp.company}
                        className='w-[70%] h-[70%] object-contain'
                        width={50}
                        height={50}
                    />
                </div>
            }
        >
            <div className=''>
                <h3 className='text-light text-2xl font-bold'>{exp.role}</h3>
                <p className='text-gray-400 text-base font-medium' style={{ margin: 0, fontSize: '16px' }}>{exp.company}</p>
            </div>
            <ul className='mt-5 list-disc ml-5 space-y-2'>
                {exp.points?.map((point: string, index: number) => (
                    <li key={`exp-point-${index}`} className='text-sm text-light pl-1 tracking-wider'>
                        {point}
                    </li>
                ))}
            </ul>
            <p className='text-gray-400 font-medium' style={{ fontSize: '14px' }}>{exp.startingDate} - {exp.currentlyWorking ? 'Present' : exp.endingDate}</p>
        </VerticalTimelineElement>
    );
};

const experience = ({ workExperience }: { workExperience: any }) => {
    return (
        <div>
            <Head>
                <title>Kushagra Mathur | Experience</title>
                <meta name='description' content='About page of my portfolio website' />
            </Head>

            <main className='flex w-full flex-col items-center justify-center'>
                <Layout classStyles='pt-16 px-20'>
                    <AnimatedText text='Work Experience' classStyles='!text-6xl mb-16' />
                    <div className='mt-20 flex flex-col'>
                        <VerticalTimeline lineColor='#1d1836'>
                            {workExperience.map((exp: any, index: number) => (
                                <ExperienceCard key={index} exp={exp} />
                            ))}
                        </VerticalTimeline>
                    </div>
                </Layout>
            </main>
        </div>
    );
};

export const getStaticProps = async () => {
    const workExperienceQuery = '*[_type == "workExperience"]';
    const workExperience = await client.fetch(workExperienceQuery);

    return {
        props: {
            workExperience,
        },
        revalidate: 3 * 60 * 60,
    };
};

export default experience;
