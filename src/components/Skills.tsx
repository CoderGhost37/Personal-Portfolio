import React from 'react';
import { urlFor } from '../../lib/sanity.client';
import Image from 'next/image';
import AnimatedText from './AnimatedText';

const Skills = ({ skills }: { skills: any }) => {
    return (
        <div className='mt-20 py-20'>
            <AnimatedText text='Skills' classStyles='xl:!text-7xl lg:!text-6xl sm:!text-5xl' />
            <div className='mt-10 flex flex-row flex-wrap justify-center gap-10 md:gap-8'>
                {skills.map((skill: any) => (
                    <div
                        className='w-28 md:w-20 h-28 md:h-20 mt-5 flex flex-col items-center'
                        key={skill._id}
                    >
                        <Image
                            src={urlFor(skill.icon).url()}
                            alt={skill.name}
                            className='rounded-full border-2 shadow-lg hover:shadow-xl hover:bg-gray-200 hover:scale-105 transition duration-500 p-2'
                            width={100}
                            height={100}
                        />
                        <h3 className='font-medium mt-4 font-mont text-base md:text-xs'>{skill.name}</h3>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Skills;
