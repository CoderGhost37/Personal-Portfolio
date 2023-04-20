import React from 'react';
import { urlFor } from '../../lib/sanity.client';
import Image from 'next/image';

const Skills = ({ skills }: { skills: any }) => {
    return (
        <div>
            <h2 className='font-semibold text-7xl mt-40 w-full text-center'>
                Skills
            </h2>
            <div className='mt-10 flex flex-row flex-wrap justify-center gap-10'>
                {skills.map((skill: any) => (
                    <div
                        className='w-28 h-28 mt-5 flex flex-col items-center'
                        key={skill._id}
                    >
                        <Image
                            src={urlFor(skill.icon).url()}
                            alt={skill.name}
                            className='rounded-full border-2 shadow-lg hover:shadow-xl hover:bg-gray-200 hover:scale-105 transition duration-500 p-2'
                            width={100}
                            height={100}
                        />
                        <h3 className='font-medium mt-4 font-mont'>{skill.name}</h3>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Skills;