import React from 'react'
import { GithubIcon } from './Icons';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Image from 'next/image';

const FramerImage = motion(Image);

const FeaturedProject = ({
  type,
  title,
  summary,
  img,
  url = "",
  github = "",
}) => {
  return (
    <article className="relative flex items-center justify-between w-full p-12 border border-solid shadow-2xl rounded-3xl border-dark dark:border-light bg-light dark:bg-dark rounded-br-2xl lg:flex-col lg:p-8 xs:rounded-2xl xs:rounded-br-3xl xs:p-4">
      <div className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] bg-dark dark:bg-light rounded-br-3xl xs:-right-2 sm:h-[102%] xs:w-full xs:rounded-[1.5rem]"></div>
      <Link
        href={url}
        target="_blank"
        className="w-1/2 overflow-hidden rounded-lg cursor-pointer lg:w-full"
      >
        <FramerImage
          src={img}
          alt={title}
          className="w-full h-auto"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
          priority
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </Link>
      <div className="flex flex-col items-start justify-between w-1/2 pl-6 dark:text-primaryDark lg:w-full lg:pl-0 lg:pt-6">
        <span className="text-xl font-medium text-primary dark:text-primaryDark xs:text-base">
          {type}
        </span>
        <Link
          href={url}
          target="_blank"
          className="underline-offset-2 hover:underline"
        >
          <h2 className="w-full my-2 text-4xl font-bold text-left sm:text-sm">
            {title}
          </h2>
        </Link>
        <p className="my-2 font-medium text-dark dark:text-light sm:text-sm">
          {summary}
        </p>
        <div className="flex items-center mt-2">
          <Link href={github} target="_blank" className="w-10">
            <GithubIcon className={`dark:fill-light`} />
          </Link>
          <Link
            href={url}
            target="_blank"
            className="px-6 py-2 ml-4 text-lg font-semibold rounded-lg bg-dark dark:bg-light text-hospitalBlue sm:px-4 sm:text-base"
          >
            View API Collection
          </Link>
        </div>
      </div>
    </article>
  );
};

export default FeaturedProject