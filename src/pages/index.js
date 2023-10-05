import Layout from '@/components/Layout'
import Head from 'next/head'
import Image from 'next/image';
import profilePic from '../../public/images/profile/developer-pic-1.png'
import Link from 'next/link';
import { AnimatedText } from '@/components/AnimatedText';
import { LinkArrow } from '@/components/Icons';
import HireMe from '@/components/HireMe';
import lightBulb from '../../public/images/svgs/miscellaneous_icons_1.svg';
import TransitionEffect from '@/components/TransitionEffect';

export default function Home() {
  return (
    <>
      <Head>
        <title>Favour Max-Oti - Backend Software Developer | Welcome!</title>
        <meta
          name="description"
          content="Favour Max-Oti Software Developer Portfolio and Blog"
        />
      </Head>
      <TransitionEffect />
      <main className="flex items-center w-full min-h-screen text-dark dark:text-light">
        <Layout className="pt-0 md:pt-16 sm:pt-8">
          <div className="flex items-center justify-between w-full lg:flex-col">
            <div className="w-1/2 md:w-full">
              <Image
                src={profilePic}
                className="w-full h-auto lg:hidden md:inline-block md:w-full"
                alt="Header Image"
                priority
                sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
              />
            </div>
            <div className="flex flex-col items-center self-center w-1/2 lg:w-full lg:text-center">
              <AnimatedText
                text={`Turning ideas into reality.`}
                className="!text-4xl !text-left lg:!text-center lg:!text-6xl md:!text-4xl sm:!text-3xl"
              />
              <p className="my-4 text-base font-medium md:text-sm sm:text-xs">
                I have a strong background in backend development and a knack
                for problem-solving, which makes me the perfect candidate for
                your next project. I currently work at{" "}
                <Link
                  href={"https://gardeners4africa.com"}
                  className="text-dark dark:text-light"
                >
                  Gardeners For Africa,
                </Link>{" "}
                an Edtech Startup. I am dedicated to turning ideas into
                innovative web applications. Explore my latest projects and
                articles, showcasing my expertise in Laravel(PHP),
                Next.js(React), Node.js, Machine Learning and web development.
              </p>
              <div className="flex items-center self-start mt-2 lg:self-center">
                <Link
                  href="/dummy.pdf"
                  target="_blank"
                  className="flex items-center bg-hospitalBlue text-light p-2.5 px-6 rounded-lg text-md font-semibold hover:bg-light hover:text-dark border-2 border-solid border-transparent hover:border-dark dark:hover:border-light dark:hover:bg-dark dark:hover:text-light md:p-2 md:px-4 md:text-base"
                  download={true}
                >
                  My Resumé
                  <LinkArrow className={`w-6 ml-1`} />
                </Link>
                <Link
                  href={`mailto:work.kellslte@gmail.com?subject=Hey`}
                  target="_blank"
                  className='ml-4 text-lg font-medium underline capitalize underline-offset-4 text-dark dark:text-light md:text-base'
                >
                  Contact Me
                </Link>
              </div>
            </div>
          </div>
        </Layout>
        <HireMe />
        <div className='absolute inline-block w-24 right-8 bottom-8 md:hidden'>
          <Image src={lightBulb} alt='Kellslte' className='w-full h-auto' />
        </div>
      </main>
    </>
  );
}
