import React from 'react';
import { motion } from 'framer-motion';

const quote = {
  initial: {
    opacity: 1,
  },
  animate: {
    opacity: 1,
    transition: {
      delay: 0.5,
      staggerChildren: 0.08,
    },
  },
};

const singleWord = {
  initial: {
    opacity: 0,
    y: 50,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
    },
  },
};

const AnimatedText = ({
  text,
  classStyles,
}: {
  text: string;
  classStyles?: string;
}) => {
  return (
    <div className='w-full mx-auto py-2 sm:py-0 flex justify-center items-center overflow-hidden text-center'>
      <motion.h1
        className={`inline-block w-full text-dark dark:text-light font-bold capitalize text-8xl ${classStyles}`}
        variants={quote}
        initial='initial'
        animate='animate'
      >
        {text.split(' ').map((word, index) => (
          <motion.span
            key={index}
            className='inline-block py-1'
            variants={singleWord}
          >
            {word}&nbsp;
          </motion.span>
        ))}
      </motion.h1>
    </div>
  );
};

export default AnimatedText;
