import { AnimationOnScroll } from "react-animation-on-scroll";
import Image from "next/image";
import { useRouter } from "next/router";
import WhyYouShouldInvest from "../components/sections/investors/WhyYouShouldInvest";
import TitleSection from "../components/TitleSection";

const Investors = () => {
  const router = useRouter();

  return (
    <>
      <TitleSection
        title="Become an Investor"
        subTitle="Blockchain Presence AG is a start-up, founded in 2020. We create a blockchain oracle for leading smart contract platforms. We are an innovative and visionary company where you can be part of."
        buttonTitle="Contact Us"
        buttonLink="/contact"
      />
      <div className="bg-gradient-to-t to-white from-[#BDC5D8]">
        <WhyYouShouldInvest />
      </div>
    </>
  );
};

export default Investors;
