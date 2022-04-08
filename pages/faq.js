import { AnimationOnScroll } from "react-animation-on-scroll";
import Image from "next/image";
import Questions from "../components/sections/faq/Questions";
import TitleSection from "../components/TitleSection";
const Faq = () => {
  const data = {
    rows: [
      {
        title: (
          <p className="px-4 text-white">What is a blockchain oracle?</p>
        ),
        content: (
          <p className="px-2 pb-2 font-light text-white">
            Whenever a smart contract contains a contingency, like payment
            conditional on an event, the contract needs to be informed in a
            reliable manner. Oracles are needed to inform smart contracts about financial
            data, like interest rates. One of the main applications of oracles
            is currently the reliable creation of random numbers for gambling
            purposes, but Blockchain Presence aims to offer a much broader scope
            of informational input.
          </p>
        ),
      },
      {
        title: (
          <p className="px-4 text-white">
            Why do we need another blockchain oracle?
          </p>
        ),
        content: (
          <p className="px-2 pb-2 font-light text-white">
            Existing smart contract oracles are less secure because they rely on
            off-chain authentication. Blockchain Presence offers a three-step
            on-chain authentication method, and is thereby as secure as the
            underlying smart contract environment.
          </p>
        ),
      },
      {
        title: (
          <p className="px-4 text-white">
            How can I feed data from Blockchain Presence into my smart contract?
          </p>
        ),
        content: (
          <p className="px-2 pb-2 font-light text-white">
            Once you know which data you wish to order from Blockchain Presence,
            you use the provided order function call to implement a callback function. 
            The order function call specifies which data you are
            ordering, and when you wish to have it delivered to your smart
            contract. The callback function in your smart contract will be called
            once the data has been sent by your sender of choice. Coding
            examples for the order and delivery process are provided on Github.
          </p>
        ),
      },
      {
        title: (
          <p className="px-4 text-white">
            How much does it cost to order data from the Blockchain Presence
            platform?
          </p>
        ),
        content: (
          <p className="px-2 pb-2 font-light text-white">
            Using the platform is free. However, any blockchain transaction fees still 
            apply and the sender can also specify fee. 
            We have designed the order and delivery process
            to keep these gas costs at the absolute minimum necessary.
          </p>
        ),
      },
      {
        title: (
          <p className="px-4 text-white">
            Why would senders want to provide data to Blockchain Presence?
          </p>
        ),
        content: (
          <p className="px-2 pb-2 font-light text-white">
            There are three main motivations for becoming a sender. One is that
            becoming a sender is a straightforward way to step-foot into the
            blockchain world. Secondly, a sender can ensure data availability to smart
            contracts. Finally, a sender may earn fees on the data he provides.
          </p>
        ),
      },
     
    ],
  };
  return (
    <>
      <TitleSection
        title="Frequently Asked Questions"
        subTitle="You can find answers to some frequently asked questions below. Feel
            free to reach out to us at info@blockchainpresence.net for any
            additional information."
      />
      <div className="bg-gradient-to-t to-white from-[#BDC5D8] pt-12 pb-20">
        <Questions data={data} />
      </div>
    </>
  );
};

export default Faq;
