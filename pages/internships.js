import { useRouter } from "next/router";
import { AnimationOnScroll } from "react-animation-on-scroll";
import Image from "next/image";
import HowDoesItWork from "../components/sections/ourservice/HowDoesItWork";
import TitleSection from "../components/TitleSection";
import Application from "../components/sections/application/Application";
import StudentExperience from "../components/sections/application/StudentExperience";
import StudentExperience2 from "../components/sections/application/StudentExperience2";
import Iframe from "react-iframe";
const StudentIntership = () => {
  const router = useRouter();
  return (
    <>
      <TitleSection
        title="Internships"
        subTitle={`Blockchain Presence gives students the opportunity to write their master's or bachelor's thesis by working in teams together with other students and contributing to this project.`}
        buttonExternTitle="Start Application"
        buttonExternLink="https://forms.office.com/Pages/ResponsePage.aspx?id=2zjkx2LkIkypCsNYsWmAs7Ovbd1yb0BMjRrifH1U99BURDgyRU0xTExKWjI2MU1NUEVOQ084T0g5Ny4u"
      />
      <div className="flex items-center justify-center w-full mt-20">
        <div className="flex items-center justify-center w-[400px] h-[220px] lg:w-[800px] lg:h-[400px] mt-10 sm:mt-0">
          <Iframe
            url="https://www.youtube.com/embed/l6zENWETpNA"
            id="myId"
            className="w-full h-full shadow-xl rounded-xl"
            display="initial"
            position="relative"
          />
        </div>
      </div>

      <StudentExperience
        quote1={`“Developing a product at the frontline of blockchain technology, Blockchain Presence challenged me to go beyond 
        the scope of my studies to work on solutions for its disruptive oracle model.”
        `}
        quote1b={`Mario Beer
        `}
        quote1c={`Bachelor Student at UZH
        Junior Analyst at Blockchain Presence (2021)
        Winner of the UZH Semester Prize 2021
        `}
        quote2={`“Blockchain Presence was one of the best experiences in my academic career! Each opinion gets considered & appreciated. One gets the chance to actively help BCP.
        This allowed me to take initiative and responsibility to develop myself.”
        `}
        quote2b={`Subajini Satgunarajah
        `}
        quote2c={`Master Student at UZH
        Digital Marketing Associate at Blockchain Presence (2021)
        `}
      />
    </>
  );
};

export default StudentIntership;
