import React from "react";
import { motion } from "framer-motion";

const Skill = ({ name, x, y }) => {
  return (
    <motion.div
      className="absolute flex items-center justify-center px-6 py-3 font-semibold rounded-full shadow cursor-pointer bg-dark text-light dark:bg-light dark:text-dark lg:py-2 lg:px-4 md:text-sm md:py-1.5 md:px-3 xs:bg-transparent xs:dark:bg-transparent xs:text-dark xs:dark:text-light xs:font-bold"
      whileHover={{ scale: 1.05 }}
      initial={{ x: 0, y: 0 }}
      whileInView={{ x: x, y: y, transition: { duration: 1.5} }}
      viewport={{ once: true }}
    >
      {name}
    </motion.div>
  );
};

const Skills = () => {
  return (
    <>
      <h2 className="w-full mt-64 font-bold text-center text-8xl md:text-6xl md:mt-32">
        Skills
      </h2>
      <div className="relative flex items-center justify-center w-full h-screen rounded-full bg-circularLight dark:bg-circularDark lg:h-[80vh] sm:h-[60vh] xs:h-[50vh] lg:bg-circularLightLg lg:dark:bg-circularDarkLg md:bg-circularLightMd md:dark:bg-circularDarkMd sm:bg-circularLightSm sm:dark:bg-circularDarkSm">
        <motion.div
          className="flex items-center justify-center p-8 font-semibold rounded-full shadow cursor-pointer bg-dark text-light dark:bg-light dark:text-dark lg:p-6 md:p-4 xs:text-xs xs:p-2"
          whileHover={{ scale: 1.05 }}
        >
          Web
        </motion.div>
        <Skill name={`CSS`} x={`-2vw`} y={`-10vw`} />
        <Skill name={`HTML`} x={`-20vw`} y={`2vw`} />
        <Skill name={`JavaScript`} x={`2vw`} y={`9vw`} />
        <Skill name={`Next.js`} x={`0vw`} y={`14vw`} />
        <Skill name={`Node.js`} x={`-18vw`} y={`-15vw`} />
        <Skill name={`Nest.js`} x={`15vw`} y={`-10vw`} />
        <Skill name={`Laravel`} x={`32vw`} y={`-7vw`} />
        <Skill name={`Golang`} x={`0vw`} y={`-23vw`} />
        <Skill name={`Rust`} x={`-25vw`} y={`22vw`} />
        <Skill name={`Machine Learning`} x={`18vw`} y={`18vw`} />
        <Skill name={`Tailwind CSS`} x={`-20vw`} y={`14vw`} />
      </div>
    </>
  );
};

export default Skills;
