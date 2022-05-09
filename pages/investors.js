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
          title="Why should you invest in Blockchain Presence?"
          // First point
          itemOneTitle="Unique business model"
          itemOneDescription="Blockchain Presence has developed a unique decentralized protocol capable of ensuring the run-time authentification of reputable and committed information providers."
          itemOneIcon={<IoEarthSharp />}
          // Second Point
          itemTwoTitle="Strongly growing global market"
          itemTwoDescription="The global market for blockchain oracle services has been growing at exceptional rates over the last five years. There is vast potential for further growth."
          itemTwoIcon={<IoTrendingUpSharp />}
          // Third Point
          itemThreeTitle="Access to young talent"
          itemThreeDescription="The collaboration with the University of Zurich provides us with privileged access to young talent from all disciplines, including management, banking & finance, business informatics, and economics."
          itemThreeIcon={<IoSchoolSharp />}
        />
        {/* <Roadmap /> */}
      </div>
    </>
  );
};

export default Investors;
