import { AnimatedText } from "@/components/AnimatedText";
import Layout from "@/components/Layout";
import Head from "next/head";
import React from "react";
import { projects, featuredProjects } from "@/utils/data";
import TransitionEffect from "@/components/TransitionEffect";
import FeaturedProject from "@/components/FeaturedProject";
import Project from "@/components/Project";

const Projects = () => {
  return (
    <>
      <Head>
        <title>Favour Max-Oti - Backend Software Developer | My Projects</title>
        <meta
          name="description"
          content="In the course of my work, I have built a number of projects. Here are some examples"
        />
      </Head>
      <TransitionEffect />
      <main className="flex flex-col items-center justify-center w-full mb-16 dark:text-light">
        <Layout className="pt-16">
          <AnimatedText
            text={`Projects I've worked on`}
            className="!text-6xl mb-16 sm:mb-8 xs:!text-4xl"
          />
          <div className="grid grid-cols-12 gap-24 gap-y-32 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0">
            <div className="col-span-12">
              <FeaturedProject
                type={featuredProjects[0].type}
                title={featuredProjects[0].title}
                summary={featuredProjects[0].summary}
                img={featuredProjects[0].img}
                url={featuredProjects[0].url}
                github={featuredProjects[0].github}
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              {" "}
              <Project
                type={featuredProjects[0].type}
                title={featuredProjects[0].title}
                img={featuredProjects[0].img}
                url={featuredProjects[0].url}
                github={featuredProjects[0].github}
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Project
                type={featuredProjects[0].type}
                title={featuredProjects[0].title}
                img={featuredProjects[0].img}
                url={featuredProjects[0].url}
                github={featuredProjects[0].github}
              />
            </div>
            <div className="col-span-12 sm:col-span-12">
              <FeaturedProject
                type={featuredProjects[0].type}
                title={featuredProjects[0].title}
                summary={featuredProjects[0].summary}
                img={featuredProjects[0].img}
                url={featuredProjects[0].url}
                github={featuredProjects[0].github}
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Project
                type={featuredProjects[0].type}
                title={featuredProjects[0].title}
                img={featuredProjects[0].img}
                url={featuredProjects[0].url}
                github={featuredProjects[0].github}
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Project
                type={featuredProjects[0].type}
                title={featuredProjects[0].title}
                img={featuredProjects[0].img}
                url={featuredProjects[0].url}
                github={featuredProjects[0].github}
              />
            </div>
          </div>
        </Layout>
      </main>
    </>
  );
};

export default Projects;
