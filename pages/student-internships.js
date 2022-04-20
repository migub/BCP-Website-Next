import { useRouter } from "next/router";
import { AnimationOnScroll } from "react-animation-on-scroll";
import Image from "next/image";
import HowDoesItWork from "../components/sections/ourservice/HowDoesItWork";
import TitleSection from "../components/TitleSection";
import Application from "../components/sections/application/Application";
const StudentInterships = () => {
  const router = useRouter();
  return (
    <>
      <TitleSection
        title="Student Internships"
        subTitle=""
      />
      <Application
        title="Application Process"
        subTitle="University students have the opportunity to write their masters thesis, bachelors thesis, or Individual Lerning Unit at BCP. Interested students first have to attend one of the Info Sessions that are held regularly on Zoom. These Info Session provide the students with  informations about BCP and the opportunity to write their thesis with us. 
        The participants of the Info Session are provided a link to submit their application. After reviewing the applications, the HR team of BCP conducts interviews with the students. The qualified students receive an offer to work with BCP and in case of an acceptance, they are ready to start working with us."
        buttonTitle="Start Application"
        buttonLink="https://forms.office.com/Pages/ResponsePage.aspx?id=2zjkx2LkIkypCsNYsWmAs7Ovbd1yb0BMjRrifH1U99BURDgyRU0xTExKWjI2MU1NUEVOQ084T0g5Ny4u"
      />
    </>
  );
};

export default StudentInterships;