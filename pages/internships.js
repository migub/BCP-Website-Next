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
        subTitle={`Blockchain Presence gives students the opportunity to write their master's or bachelor's thesis by working in teams together with other students and contributing to this project.`}
        buttonExternTitle="Start Application"
        buttonExternLink="https://forms.office.com/Pages/ResponsePage.aspx?id=2zjkx2LkIkypCsNYsWmAs7Ovbd1yb0BMjRrifH1U99BURDgyRU0xTExKWjI2MU1NUEVOQ084T0g5Ny4u"
      />
      {/* <Application
        title="Application Process"
        subTitle="University students have the opportunity to write their masters thesis, bachelors thesis, or Individual Lerning Unit at BCP. Interested students first have to attend one of the Info Sessions that are held regularly on Zoom. These Info Session provide the students with  informations about BCP and the opportunity to write their thesis with us. 
        The participants of the Info Session are provided a link to submit their application. After reviewing the applications, the HR team of BCP conducts interviews with the students. The qualified students receive an offer to work with BCP and in case of an acceptance, they are ready to start working with us."
        buttonTitle="Start Application"
        buttonLink="https://forms.office.com/Pages/ResponsePage.aspx?id=2zjkx2LkIkypCsNYsWmAs7Ovbd1yb0BMjRrifH1U99BURDgyRU0xTExKWjI2MU1NUEVOQ084T0g5Ny4u"
      /> */}
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
