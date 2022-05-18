import Head from "next/head";
import Hero from "../components/sections/home/Hero";
import WhyBCP from "../components/sections/home/WhyBCP";
import WhatIsBCP from "../components/sections/home/WhatIsBCP";
// Icons
import { AiFillSafetyCertificate } from "react-icons/ai";
import { GiReceiveMoney } from "react-icons/gi";
import { IoAccessibilitySharp } from "react-icons/io5";
import Numbers from "../components/sections/home/Numbers";
import HowDoesItWork from "../components/sections/home/HowDoesItWork";
import Timeline from "../components/sections/home/Timeline";

export default function Home() {
  return (
    <>
      <Head>
        <title>Blockchain Presence</title> A Low cost oracle with on-chain
        authentication
        <meta
          name="description"
          content="Our solution is the further development of the oracle model. The most important innovation is a novel, three-step protocol for on-chain authentication."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/********************** Start editing home page here **********************/}
      <Hero
        title="Reliable, Convenient and Cost-Efficient"
        buttonOneTitle="Learn More"
        buttonTwoTitle="Apply for Internship"
        buttonThreeTitle="Invest in BCP"
      />
      <Numbers />
      <WhatIsBCP
        title="What is Blockchain Presence?"
        description="Blockchain Presence AG is a Swiss corporation founded in December 2020. In close collaboration with the University of Zurich, the start-up strives to develop and operate a universal oracle platform for smart contracts."
      />

      <Timeline
        title="Our history so far"
        // First Feature (component defined under "WhyBCP")
        featureOneTitle="Reliable and secure"
        featureOneDescription="Providers of information (senders) build up reputation by offering the best service for smart contract developers. Every sender on the Blockchain Presence platform is registered on-chain. This makes the delivery as secure as the underlying blockchain protocol."
        featureOneIcon={<AiFillSafetyCertificate />}
        // Second Feature
        featureTwoTitle="Cost-efficient"
        featureTwoDescription="The lean design of our platform ensures minimum gas consumption for contract deployment as well as for order and delivery transactions. No token is needed to order data from our committed senders."
        featureTwoIcon={<GiReceiveMoney />}
        // Third Feature
        featureThreeTitle="Convenient"
        featureThreeDescription="Our website provides users with real-time information on the status of the order and delivery process. Further, mainnet information regarding registrations and commitments is passed on to the testnet, facilitating development and testing."
        featureThreeIcon={<IoAccessibilitySharp />}
      />
      {/* <HowDoesItWork
        title="Oracle Service"
        subTitle="Oracles can be thought of as a mechanism for bridging the gap between
          the off-chain and the on-chain world."
      /> */}
    </>
  );
}
