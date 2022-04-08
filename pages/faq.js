import { AnimationOnScroll } from "react-animation-on-scroll";
import Image from "next/image";
import Questions from "../components/sections/faq/Questions";
import TitleSection from "../components/TitleSection";
import { useRouter } from "next/router";
const Faq = () => {
  const router = useRouter();
  const data = {
    rows: [
      {
        title: (
          <p className="px-4 text-white">What is a smart contract oracle?</p>
        ),
        content: (
          <p className="px-2 pb-2 font-light text-white">
            Whenever a smart contract contains a contingency, like payment
            conditional on an event, the contract needs to be informed in a
            reliable manner. This is what the smart contract oracle does.
            Oracles are also needed to inform smart contracts about financial
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
            Why do we need another smart contract oracle?
          </p>
        ),
        content: (
          <p className="px-2 pb-2 font-light text-white">
            Existing smart contract Oracles are not secure because they rely on
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
            you include an order function call and a mailbox function into your
            smart contract. The order function call specifies which data you are
            ordering, and when you wish to have it delivered to your smart
            contract. The mailbox function in your smart contract will be called
            once the data has been sent by your sender of choice. Coding
            examples for the order & delivery process are provided on Github.
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
            Using the platform is free. However, as with any operation within
            the Ethereum network, the order function call and the delivery
            transaction will be executed only if sufficient gas is provided by
            your smart contract. We have designed the order & delivery process
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
            being a sender is an inexpensive way to get into contact with the
            blockchain world. Another reason is that a sender might wish to
            ensure that data he feels responsible for is available for smart
            contracts. Finally, a sender may choose to charge fees on the
            information he provides.
          </p>
        ),
      },
      {
        title: (
          <p className="px-4 text-white">Is it difficult to become a sender?</p>
        ),
        content: (
          <p className="px-2 pb-2 font-light text-white">
            No. First you register, which is needed for the three-step on-chain
            authentication. Then, you install the Sender Convenience Applet on
            your server. Finally, you upload a description of the data that you
            commit to provide.
          </p>
        ),
      },
    ],
  };
  return (
    <>
      <TitleSection
        title="Frequently Asked Questions"
        subTitle={
          <div>
            You can find answers to some frequently asked questions below. Feel
            free to reach out to us at{" "}
            <a href="mailto:info@blockchainpresence.net">
              info@blockchainpresence.net{" "}
            </a>
            or <a href="/contact">here </a> for any additional information.
          </div>
        }
      />
      <div className="bg-gradient-to-t to-white from-[#BDC5D8] pt-12 pb-20">
        <Questions data={data} />
      </div>
    </>
  );
};

export default Faq;
