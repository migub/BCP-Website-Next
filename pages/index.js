import Head from "next/head";
import Hero from "../components/sections/home/Hero";
import WhyUs from "../components/sections/home/WhyUs";
import WhatIs from "../components/sections/home/WhatIs";

export default function Home() {
  return (
    <>
      <Head>
        <title>Blockchain Presence</title>
        <meta
          name="description"
          content="We aim at creating a blockchain oracle for leading smart contract platforms."
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
