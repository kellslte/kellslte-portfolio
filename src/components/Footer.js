import React from 'react'
import Layout from './Layout'
import Link from 'next/link'

const Footer = () => {
  return (
    <footer className="w-full text-lg font-medium border-t-2 border-solid border-dark dark:text-light dark:border-light sm:text-base">
      <Layout className="flex items-center justify-between py-8 lg:flex-col lg:py-6">
        <span>{new Date().getFullYear()} &copy; All Rights Reserved.</span>
        <div className="flex items-center lg:py-2">
          Built with{" "}
          <span className="px-1 text-2xl text-red-500">&hearts;</span> by&nbsp;
          <Link
            href={`https://kellslte.com.ng`}
            className="underline underline-offset-2"
            target="_self"
          >
            Kellslte
          </Link>
        </div>
        <Link
          href={`mailto:maxotif@gmail.com`}
          className="underline underline-offset-2"
        >
          Say hello
        </Link>
      </Layout>
    </footer>
  );
}

export default Footer