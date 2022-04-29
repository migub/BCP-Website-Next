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
import Roadmap from "../components/sections/investors/Roadmap";
import Relations from "../components/sections/investors/Relations";

const Investors = () => {
  const router = useRouter();

  return (
    <>
      <TitleSection
        title="Become an Investor"
        subTitle="Blockchain Presence AG is a start-up, founded in 2020. Our solution is the further development of the oracle model. The most important innovation is a novel, three-step protocol for on-chain authentication. This opens the door to new use cases, such as the creation of new crypto markets that are compatible with anti-money laundering regulation standards."
      />
      <div className="">
        <Relations
          title="Interested in Investing in BCP?"
          buttonTitle="Contact Us"
        />
        <WhyYouShouldInvest
          title="Why should you invest in BCP"
          // First point
          itemOneTitle="Unique business model"
          itemOneDescription="BCP is offering an on-chain authentification service which is a decentralized run-time protocol that verifies the identity of a commited cryptographic signee."
          itemOneIcon={<IoEarthSharp />}
          // Second Point
          itemTwoTitle="Strong growing global market"
          itemTwoDescription="The market for blockchain oracle services has been growing at exceptional rates, and thus vast potential is available."
          itemTwoIcon={<IoTrendingUpSharp />}
          // Third Point
          itemThreeTitle="Access to young talents"
          itemThreeDescription="We have access to young talents at University of Zurich who are motivated developers and marketing experts."
          itemThreeIcon={<IoSchoolSharp />}
        />
        {/* <Roadmap /> */}
      </div>
    </>
  );
};

export default Investors;
