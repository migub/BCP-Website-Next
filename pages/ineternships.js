import { useRouter } from "next/router";
import { AnimationOnScroll } from "react-animation-on-scroll";
import Image from "next/image";
import HowDoesItWork from "../components/sections/ourservice/HowDoesItWork";
import TitleSection from "../components/TitleSection";
import Application from "../components/sections/application/Application";
import StudentExperience from "../components/sections/application/StudentExperience";
const StudentIntership = () => {
  const router = useRouter();
  return (
    <>
      <TitleSection
        title="Student Internships"
        subTitle="Blockchain Presence gives university students the opportunity to write their
masters or bachelors thesis by working in teams together with other
students and contributing to this project."
        buttonExternTitle="Start Application"
        buttonExternLink="https://forms.office.com/Pages/ResponsePage.aspx?id=2zjkx2LkIkypCsNYsWmAs7Ovbd1yb0BMjRrifH1U99BURDgyRU0xTExKWjI2MU1NUEVOQ084T0g5Ny4u"
      />
      <Application
        title="Application Process"
        subTitle="University students have the opportunity to write their masters thesis, bachelors thesis, or Individual Lerning Unit at BCP. Interested students first have to attend one of the Info Sessions that are held regularly on Zoom. These Info Session provide the students with  informations about BCP and the opportunity to write their thesis with us. 
        The participants of the Info Session are provided a link to submit their application. After reviewing the applications, the HR team of BCP conducts interviews with the students. The qualified students receive an offer to work with BCP and in case of an acceptance, they are ready to start working with us."
        buttonTitle="Start Application"
        buttonLink="https://forms.office.com/Pages/ResponsePage.aspx?id=2zjkx2LkIkypCsNYsWmAs7Ovbd1yb0BMjRrifH1U99BURDgyRU0xTExKWjI2MU1NUEVOQ084T0g5Ny4u"
      />
      <StudentExperience
        title="Student Experience"
        description={`“I joined BCP in December 2020 to write my
        bachelor’s thesis in the Marketing
        department. Being 9 months at BCP I have
        built up important knowledge about the
        blockchain industry and met great people.
        The experience I have gathered at BCP
        helped me to get a position at Bitcoin Suisse
        where I work until today.”.
        `}
      />
    </>
  );
};

export default StudentIntership;
