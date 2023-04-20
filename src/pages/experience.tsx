import React from 'react';
import Head from 'next/head';

import 'react-vertical-timeline-component/style.min.css';
import { client } from '../../lib/sanity.client';
import Experience from '@/components/Experience';
import Testimonials from '@/components/Testimonials';

const experience = ({ workExperience, testimonials }: { workExperience: any, testimonials: any }) => {
    return (
        <div>
            <Head>
                <title>Kushagra Mathur | Experience</title>
                <meta name='description' content='About page of my portfolio website' />
            </Head>

            <main className='flex w-full flex-col items-center justify-center'>
                <Experience workExperience={workExperience} />
                <Testimonials testimonials={testimonials} />
            </main>
        </div>
    );
};

export const getStaticProps = async () => {
    const workExperienceQuery = '*[_type == "workExperience"]';
    const workExperience = await client.fetch(workExperienceQuery);

    const testimonialsQuery = '*[_type == "testimonials"]';
    const testimonials = await client.fetch(testimonialsQuery);

    return {
        props: {
            workExperience,
            testimonials
        },
        revalidate: 3 * 60 * 60,
    };
};

export default experience;
