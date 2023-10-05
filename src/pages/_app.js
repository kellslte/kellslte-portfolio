import "@/styles/globals.css";
import Head from "next/head";
import { Lato } from "next/font/google";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import { AnimatePresence } from "framer-motion";
import { useRouter } from "next/router";

const lato = Lato({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-lato",
});

export default function App ( { Component, pageProps } )
{
  const { asPath } = useRouter();

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main
        className={`${lato.variable} font-lato bg-light dark:bg-dark w-full min-h-screen`}
      >
        <NavBar />
        <AnimatePresence mode="wait">
          <Component key={asPath} {...pageProps} />
        </AnimatePresence>
        <Footer />
      </main>
    </>
  );
}
