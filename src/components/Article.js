import React from 'react'
import { motion } from 'framer-motion';
import { format } from "date-fns";
import MovingImage from './MovingImage';

const Article = ({ img, title, date, slug }) => {
  const published = format(new Date(date), "MMM YYY");

  return (
    <motion.li
      className="relative flex items-center justify-between w-full p-6 border border-b-4 border-r-4 border-solid rounded-xl border-dark dark:border-light bg-light dark:bg-dark first:mt-0 text-dark dark:text-light sm:flex-col"
      initial={{ y: 200 }}
      whileInView={{ y: 0, transition: { duration: 0.5, ease: "easeInOut" } }}
      viewport={{ once: true }}
    >
      <MovingImage title={title} img={img} slug={slug} />
      <span className="pl-4 font-semibold text-primary dark:text-primaryDark sm:self-start sm:pl-0 xs:text-sm">
        {published}
      </span>
    </motion.li>
  );
};

export default Article