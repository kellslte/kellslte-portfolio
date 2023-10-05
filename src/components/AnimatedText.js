import React from 'react'
import { motion } from 'framer-motion'
import localFont from 'next/font/local';

const monument = localFont( {
  src: "../fonts/MonumentExtended-Regular.otf",
  weight: '400',
  variable: '--font-monument',
})

const quote = {
    initial: {
        opacity: 1
    },
    animate: {
        opacity: 1,
        transition: {
            delay: 0.5,
            staggerChildren: 0.08
        }
    }
}

const word = {
  initial: {
        opacity: 0,
      y: 50
  },
  animate: {
      opacity: 1,
      y: 0,
      transition: {
          duration: 1
      }
  },
};

export const AnimatedText = ({ text, className='', emorji=''}) => {
  return (
    <div className="flex items-center justify-center w-full py-2 mx-auto overflow-hidden text-center sm:py-0">
      <motion.h1
        className={`${monument.variable} inline-block font-bold capitalize text-8xl w-full text-stroke-light dark:text-stroke-dark dark:text-dark text-transparent ${className}`}
        variants={quote}
        initial="initial"
        animate="animate"
      >
        {text.split("").map((letter, index) => {
          return (
            <motion.span key={index} className="inline-block" variants={word}>
              {letter}&nbsp;
            </motion.span>
          );
        })}
      </motion.h1>
    </div>
  );
}
