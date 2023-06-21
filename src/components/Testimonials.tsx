import React from 'react';
import Layout from './Layout';
import AnimatedText from './AnimatedText';
import { motion } from 'framer-motion';
import { urlFor } from '../../lib/sanity.client';
import Image from 'next/image';

const fadeIn = (
  direction: string,
  type: any,
  delay: number,
  duration: number
) => {
  return {
    hidden: {
      x: direction === 'left' ? 100 : direction === 'right' ? -100 : 0,
      y: direction === 'up' ? 100 : direction === 'down' ? -100 : 0,
      opacity: 0,
    },
    show: {
      x: 0,
      y: 0,
      opacity: 1,
      transition: {
        type: type,
        delay: delay,
        duration: duration,
        ease: 'easeOut',
      },
    },
  };
};

const TestimonialCard = ({
  index,
  feedback,
  desgn,
  name,
  company,
  imgurl,
}: {
  index: number;
  feedback: any;
  desgn: string;
  name: string;
  company: string;
  imgurl: string;
}) => {
  return (
    <motion.div
      variants={fadeIn('', 'spring', index * 0.5, 0.75)}
      className='bg-white dark:bg-[#24252D] shadow-lg p-10 md:p-5 rounded-3xl w-full'
    >
      <p className='text-dark dark:text-light text-5xl'>"</p>
      <div className='mt-1'>
        <p className='text-dark dark:text-light tracking-wider text-lg sm:text-base xs:text-sm'>
          {feedback}
        </p>
        <div className='mt-7 flex justify-center items-center gap-1'>
          <div className='flex-1 flex flex-col'>
            <p className='text-dark dark:text-light font-medium text-base sm:text-sm'>
              <span className='text-blue-700'>@</span> {name}
            </p>
            <p className='mt-1 text-gray-400 text-sm sm:text-xs'>
              {desgn} of {company}
            </p>
          </div>
          <Image
            src={urlFor(imgurl).url()}
            alt={name}
            className='w-12 h-12 rounded-full object-cover'
            width={50}
            height={50}
          />
        </div>
      </div>
    </motion.div>
  );
};

const Testimonials = ({ testimonials }: { testimonials: any }) => {
  return (
    <Layout classStyles='pt-16 px-5 sm:px-10 md:px-20'>
      <AnimatedText
        text='Testimonials'
        classStyles='xl:!text-7xl lg:!text-6xl md:!text-5xl xs:!text-4xl mb-10'
      />
      <div className='flex flex-wrap gap-7'>
        {testimonials.map((testimonial: any, index: number) => (
          <TestimonialCard
            index={index}
            key={testimonial.name}
            {...testimonial}
          />
        ))}
      </div>
    </Layout>
  );
};

export default Testimonials;
