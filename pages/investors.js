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
        className="lg:pb-12"
        title="Become an Investor"
        subTitle="At the time being, the shareholders of Blockchain Presence AG are its founders, former employees, and individuals that became interested in our activities through the start-up's marketing activities. Our extremely lean cost structure made it possible to distribute a dividend for the first year of business activity. However, to make necessary investments related to its market entry, Blockchain Presence AG is beginning to actively invite seed funding, and we are consequently very open to proposals that aim at expanding the current base of shareholders."
      />
      <div className="">
        <Relations
          title="Interested in becoming a shareholder in Blockchain Presence AG?"
          buttonTitle="Contact Us"
          buttonLink="/contact"
        />
        <WhyYouShouldInvest
          title="Why Blockchain Presence?"
          // First point
          itemThreeTitle="Unique business model"
          itemThreeDescription="Blockchain Presence has developed a unique decentralized protocol capable of ensuring the run-time authentification of reputable and committed information providers."
          itemThreeIcon={<IoEarthSharp />}
          // Second Point
          itemOneTitle="Strongly growing global market"
          itemOneDescription="The global market for blockchain oracle services has been growing at exceptional rates over the last five years. There is vast potential for further growth."
          itemOneIcon={<IoTrendingUpSharp />}
          // Third Point
          itemTwoTitle="Access to young talent"
          itemTwoDescription="The collaboration with the University of Zurich provides us with privileged access to young talent from a variety of disciplines, including economics, banking & finance, management, and informatics."
          itemTwoIcon={<IoSchoolSharp />}
        />
        {/* <Roadmap /> */}
      </div>
    </>
  );
};

export default Investors;
