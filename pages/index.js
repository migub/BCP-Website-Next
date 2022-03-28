import Head from "next/head";
import Hero from "../components/sections/Home/Hero";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import WhyUs from "../components/sections/Home/WhyUs";
import WhatIs from "../components/sections/Home/WhatIs";

export default function Home() {
  return (
    <>
      <Head>
        <title>Blockchain Presence</title>
        <meta
          name="description"
          content="The best decentralized betting of 2022"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div className="">
          <Hero />
          <WhyUs />
          <WhatIs />
        </div>
      </main>
    </>
  );
}
