import { useRouter } from "next/router";
import { AnimationOnScroll } from "react-animation-on-scroll";
import Image from "next/image";
import HowDoesItWork from "../components/sections/ourservice/HowDoesItWork";
import TitleSection from "../components/TitleSection";
const OurService = () => {
  const router = useRouter();
  return (
    <>
      <TitleSection
        title="Our Service"
        subTitle="Blockchain Presence connects data providers with innovative smart contract applications. We are a blockchain oracle with on-chain authentication."
        buttonTitle="Learn More"
        buttonLink="/ourservice"
      />
      <HowDoesItWork
        title="How does it work?"
        subTitle="The main role of the Blockchain Presence oracle is to connect data providers (senders) to data requesters (receivers) and thus create a reliable platform for data transactions."
      />
    </>
  );
};

export default OurService;
