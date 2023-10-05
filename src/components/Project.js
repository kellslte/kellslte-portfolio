import Link from 'next/link';
import React from 'react'
import { motion } from 'framer-motion';
import { GithubIcon } from './Icons';
import Image from "next/image";

const FramerImage = motion(Image);

const Project = ({ type, title, img, url, github }) => {
  return (
    <article className="relative flex flex-col items-center justify-center w-full p-6 border border-solid rounded-2xl border-dark dark:border-light bg-light dark:bg-dark">
      <Link
        href={url}
        target="_blank"
        className="w-full overflow-hidden rounded-lg cursor-pointer"
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
      <div className="flex flex-col items-start justify-between w-full mt-4">
        <span className="text-xl font-medium text-primary dark:text-primaryDark lg:text-lg md:text-base">
          {type}
        </span>
        <Link
          href={url}
          target="_blank"
          className="underline-offset-2 hover:underline"
        >
          <h2 className="w-full my-2 text-3xl font-bold text-left dark:text-primaryDark lg:text-2xl">
            {title}
          </h2>
        </Link>
        <div className="flex items-center justify-between w-full mt-2">
          <Link
            href={url}
            target="_blank"
            className="text-lg text-hospitalBlue hover:underline underline-offset-2 md:text-base"
          >
            View API Collection
          </Link>
          <Link href={github} target="_blank" className="w-8 md:w-6">
            <GithubIcon className={`dark:fill-light`} />
          </Link>
        </div>
      </div>
    </article>
  );
};

export default Project