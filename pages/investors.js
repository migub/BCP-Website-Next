import { AnimationOnScroll } from "react-animation-on-scroll";
import Image from "next/image";
import { useRouter } from "next/router";
import WhyYouShouldInvest from "../components/sections/investors/WhyYouShouldInvest";
import TitleSection from "../components/TitleSection";
//Icons
import {
  IoSchoolSharp,
  IoTrendingUpSharp,
  IoEarthSharp,
} from "react-icons/io5";

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
        <WhyYouShouldInvest
          title="Why should you invest in BCP"
          // First point
          itemOneTitle="Access to young talents"
          itemOneDescription="We have access to young talents at University of Zurich who are motivated developers and marketing experts."
          itemOneIcon={<IoSchoolSharp />}
          // Second Point
          itemTwoTitle="Strong growing global market"
          itemTwoDescription="The market for blockchain oracle services has been growing at exceptional rates, and thus vast potential is available."
          itemTwoIcon={<IoTrendingUpSharp />}
          // Third Point
          itemThreeTitle="Unique business model"
          itemThreeDescription="BCP is offering an on-chain authentification service which is a decentralized run-time protocol that verifies the identity of a commited cryptographic signee."
          itemThreeIcon={<IoEarthSharp />}
        />
      </div>
    </>
  );
};

export default Investors;
