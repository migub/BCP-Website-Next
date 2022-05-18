import { useRouter } from "next/router";
import { AnimationOnScroll } from "react-animation-on-scroll";
import Image from "next/image";
import HowDoesItWork from "../components/sections/ourservice/HowDoesItWork";
import TitleSection from "../components/TitleSection";
import Application from "../components/sections/application/Application";
import StudentExperience from "../components/sections/application/StudentExperience";
import StudentExperience2 from "../components/sections/application/StudentExperience2";
const StudentIntership = () => {
  const router = useRouter();
  return (
    <>
      <TitleSection
        title="Internships"
        subTitle="Blockchain Presence gives university students the opportunity to write their
masters or bachelors thesis by working in teams together with other
students and contributing to this project."
        buttonExternTitle="Start Application"
        buttonExternLink="https://forms.office.com/Pages/ResponsePage.aspx?id=2zjkx2LkIkypCsNYsWmAs7Ovbd1yb0BMjRrifH1U99BURDgyRU0xTExKWjI2MU1NUEVOQ084T0g5Ny4u"
      />

      <StudentExperience
        title="Student Experience"
        description={`“Blockchain Presence was one of the best experiences in my academic career! Each opinion gets considered & appreciated. One gets the chance to actively help BCP.
        This allowed me to take initiative and responsibility to develop myself.”
        `}
      />
      <StudentExperience2
        title="Student Experience"
        description={`“Developing a product at the frontline of blockchain technology, Blockchain Presence challenged me to go beyond 
        the scope of my studies to work on solutions for its disruptive oracle model.”
        `}
      />
    </>
  );
};

export default StudentIntership;
