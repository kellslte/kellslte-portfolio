import { AnimatedText } from "@/components/AnimatedText";
import Layout from "@/components/Layout";
import Head from "next/head";
import Image from "next/image";
import profilePic from "../../public/images/profile/9a99aae3-5560-49d9-a146-8ae2a23540f6-resized.png";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import TransitionEffect from "@/components/TransitionEffect";
import AnimatedNumber from "@/components/AnimatedNumber";

const About = () => {
  return (
    <>
      <Head>
        <title>Favour Max-Oti - Backend Software Developer | About Me</title>
        <meta
          name="description"
          content="I love solving problems and machine learning and software engineering are tools of my trade"
        />
      </Head>
      <TransitionEffect />
      <main className="flex flex-col items-center justify-center w-full dark:text-light">
        <Layout className="pt-16">
          <AnimatedText
            text={`Hi I'm Max`}
            className="mb-16 text-6xl xs:!text-4xl sm:mb-8"
          />
          <div className="grid w-full grid-cols-8 gap-16 sm:gap-8">
            <div className="flex flex-col items-start justify-start col-span-3 xl:col-span-4 md:order-2 md:col-span-8">
              <h2 className="mb-4 text-lg font-bold uppercase text-dark/75 dark:text-light/75">
                Bio
              </h2>
              <p className="font-medium">
                I&apos;m a backend developer with a knack for problem solving
                and creative thinking. I&apos;ve been working in the IT field
                for over four years now, and I am always eager to learn new
                skills. I thrive on challenges, whether it&apos;s figuring out
                how to make a new system work or coming up with a new way to
                solve an old problem.
              </p>
              <p className="my-4 font-medium">
                I believe that it&apos;s important to be open-minded and
                creative when working with technology. In my experience, this
                allows me to think outside the box and come up with creative
                solutions that others might not have thought of.
              </p>
              <p className="font-medium">
                If you need someone to come in and build something completely
                new from the ground up, or if you&apos;d just like some help
                refining an idea that&apos;s already been in your head for a
                while but hasn&apos;t quite come together (yet), I&apos;m here
                for you. I can also help with any of your other needs—like
                finding dead ends in any project and figuring out what it will
                take to fix them.
              </p>
            </div>
            <div className="relative col-span-3 p-8 border-2 border-solid rounded-2xl h-max border-dark bg-light dark:border-light dark:bg-dark xl:col-span-4 md:order-1 md:col-span-8">
              <div className="absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark dark:bg-light"></div>
              <Image
                src={profilePic}
                alt="Favour Max-Oti"
                className="w-full h-auto rounded-2xl"
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>

            <div className="flex flex-col items-end justify-between col-span-2 xl:col-span-8 xl:flex-row xl:items-center md:order-3">
              <div className="flex flex-col items-end justify-center xl:items-center">
                <span className="inline-block font-bold text-7xl md:text-6xl sm:text-5xl xs:text-4xl">
                  <AnimatedNumber value={4} />+
                </span>
                <h2 className="text-xl font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base xs:text-sm">
                  Years of Experience
                </h2>
              </div>
              <div className="flex flex-col items-end justify-center xl:items-center">
                <span className="inline-block font-bold text-7xl md:text-6xl sm:text-5xl xs:text-4xl">
                  <AnimatedNumber value={10} />+
                </span>
                <h2 className="text-xl font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base xs:text-sm">
                  Projects Completed
                </h2>
              </div>
              <div className="flex flex-col items-end justify-center xl:items-center">
                <span className="inline-block font-bold text-7xl md:text-6xl sm:text-5xl xs:text-4xl">
                  <AnimatedNumber value={4} />+
                </span>
                <h2 className="text-xl font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base xs:text-sm">
                  Teams worked with
                </h2>
              </div>
            </div>
          </div>
          <Skills />
          <Experience />
        </Layout>
      </main>
    </>
  );
};

export default About;
