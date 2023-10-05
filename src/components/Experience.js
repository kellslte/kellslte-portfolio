import React, { useRef } from "react";
import { workHistory } from "@/utils/data";
import { motion, useScroll } from "framer-motion";
import LiIcon from "./LiIcon";

const Details = ({ position, company, url, time, address, work }) => {
  const list = useRef(null);
  return (
    <li
      ref={list}
      className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between md:w-[80%]"
    >
      <LiIcon reference={list} />
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: "spring" }}
      >
        <h3 className="text-2xl font-bold capitalize sm:text-xl xs:text-lg">
          {position}&nbsp;
          <a
            target="_blank"
            className="capitalize text-hospitalBlue"
            href={url}
          >
            @{company}
          </a>
        </h3>
        <span className="font-medium capitalize text-dark/75 dark:text-light/75 xs:text-sm">
          {time} | {address}
        </span>
        <p className="w-full font-medium md:text-sm">{work}</p>
      </motion.div>
    </li>
  );
};

const Experience = () => {
  const scrollTarget = useRef(null);

  const { scrollYProgress } = useScroll({
    target: scrollTarget,
    offset: ["start end", "center start"],
  });

  return (
    <div className="my-64">
      <h2 className="w-full mb-32 font-bold text-center text-8xl md:text-6xl xs:text-4xl md:mb-16">
        Experience
      </h2>
      <div className="w-[75%] mx-auto relative lg:w-[90%] md:w-full">
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className="absolute top-0 left-9 w-[4px] h-full bg-dark origin-top dark:bg-light md:w-[2px] md:left-[30px] xs:left-[20px]"
          ref={scrollTarget}
        />

        <ul className="flex flex-col items-start justify-between w-full ml-4 xs:ml-2">
          {workHistory.map((history, index) => {
            return (
              <Details
                key={index}
                position={history.position}
                company={history.company}
                time={history.time}
                address={history.address}
                work={history.work}
              />
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Experience;
