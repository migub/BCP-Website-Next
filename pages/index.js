import Head from "next/head";
import Hero from "../components/sections/home/Hero";
import WhyBCP from "../components/sections/home/WhyBCP";
import WhatIsBCP from "../components/sections/home/WhatIsBCP";
// Icons
import { AiFillSafetyCertificate } from "react-icons/ai";
import { GiReceiveMoney } from "react-icons/gi";
import { IoAccessibilitySharp } from "react-icons/io5";
import WhoIsBehind from "../components/sections/home/WhoIsBehind";

export default function Home() {
  return (
    <>
      <Head>
        <title>Blockchain Presence</title>
        <meta
          name="description"
          content="Our solution is the further development of the oracle model. The most important innovation is a novel, three-step protocol for on-chain authentication."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/********************** Start editing home page here **********************/}
      <Hero
        title="Verified and Transparent Oracles for the DeFi Economy"
        subTitle="Blockchain Presence AG is a start-up, founded in 2020. Our solution is the further development of the oracle model. The most important innovation is a novel, three-step protocol for on-chain authentication."
        buttonOneTitle="Start Investing in Us"
        buttonTwoTitle="Why Us"
      />
      <WhyBCP
        // First Feature
        featureOneTitle="Reliable and Secure"
        featureOneDescription="Senders build up reputation by offering the best service for smart contract developers. Every sender on the BCP platform is registered on-chain. Thereby, we can guarantee that all data origins from the source."
        featureOneIcon={<AiFillSafetyCertificate />}
        // Second Feature
        featureTwoTitle="Cost-efficient"
        featureTwoDescription="Our lean design ensures minimum gas consumption for contract deployment as well as for order and delivery transactions. In addition, there are no transaction costs for any utility token."
        featureTwoIcon={<GiReceiveMoney />}
        // Third Feature
        featureThreeTitle="Convenient"
        featureThreeDescription="The BCP website provides users with realtime information on the status of the order and delivery process. Mainnet information is passed on to the testnet, facilitating development and testing."
        featureThreeIcon={<IoAccessibilitySharp />}
      />
      <WhatIsBCP
        title="What is Blockchain Presence?"
        description="Blockchain Presence AG is a swiss corporation and an official
              spin-off of the University of Zurich, founded in December 2020. We
              are located near the University of Zurich and the
              Crypto Valley Zug. We strive to develop and operate an oracle
              platform for smart contracts. The Blockchain Presence platform
              connects smart contracts with on-chain authenticated data
              providers."
      />
      <WhoIsBehind title="Who is behind BCP?" />
    </>
  );
}
