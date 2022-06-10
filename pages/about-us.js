import Image from "next/image";
import TitleSection from "../components/TitleSection";
import TeamItem from "../components/sections/aboutus/TeamItem";

const AboutUs = () => {
  return (
    <div>
      <TitleSection
        title="About Us"
        // className="h-[300px] lg:h-[100px] lg:pt-42 lg:pb-20"
        subTitle=""
      />
      <div className="flex flex-col items-center justify-center w-1/2 py-20 m-auto pb-28">
        <div className="text-3xl font-bold">Core Team</div>
        <div className="flex flex-col w-full mt-10 space-y-10 ">
          <TeamItem
            link="Adi.jpg"
            name="Adi Gol"
            description={
              <div>
                <div className="mt-8">
                  Co-Founder and Chief Operating Officer
                </div>
                <div>
                  BA Economics (Universitity of Zurich), cand. MA Business &
                  Management (Universitiy St. Gallen)
                </div>
              </div>
            }
          />
          <TeamItem
            link="Christian_e.jpg"
            name="Christian Ewerhart"
            description={
              <div>
                <div className="mt-8">
                  Co-Founder and (Interim) Chief Operating Officer
                </div>
                <div>
                  Professor of Information and Contract Economics (University of
                  Zurich) Member of the Steering Committee of the UZH Blockchain
                  Center
                </div>
              </div>
            }
          />
          <TeamItem
            link="andrea_g.jpg"
            name="Andrea Giambonini"
            description={
              <div>
                <div className="mt-8">Co-Founder and Deputy Teamlead SCA </div>
                <div>
                  BA Economics (University of Zurich), MA Economics (University
                  of Zurich)
                </div>
              </div>
            }
          />
          <TeamItem
            link="Pedro.jpg"
            name="Pedro Gianinazzi"
            description={
              <div>
                <div className="mt-8">
                  Co-Founder and Chief Financial Officer
                </div>
                <div>
                  BA Economics (University of Zurich), MA Economics (University
                  of Zurich)
                </div>
              </div>
            }
          />
          <TeamItem
            link="Hulya.jpg"
            name="Hülya Hüsler"
            description={
              <div>
                <div className="mt-8">
                  Co-Founder and Head of Frontend Development
                </div>
                <div>BA Information Systems (University of Zurich)</div>
              </div>
            }
          />
          <TeamItem
            link="Luthi.jpg"
            name="Lutharsanen Kunam"
            description={
              <div>
                <div className="mt-8">
                  Co-Founder, Deputy Chief Technology Officer and Teamlead Web
                  Development
                </div>
                <div>
                  BA Banking & Finance (University of Zurich), MA Data Science
                  (University of Zurich)
                </div>
              </div>
            }
          />
          <TeamItem
            link="Ben.jpg"
            name="Ben Murphy"
            description={
              <div>
                <div className="mt-8">Co-Founder and Teamlead SCA</div>
                <div>
                  BA Economics (University of Zurich), MA Data Science
                  (University of Zurich)
                </div>
              </div>
            }
          />
          <TeamItem
            link="Florian.jpg"
            name="Florian Rüegsegger"
            description={
              <div>
                <div className="mt-8">
                  Co-Founder, Chief Technology Officer and Lead Developer
                </div>
                <div>
                  BA Economics (University of Zurich), MA Data Science
                  (University of Zurich)
                </div>
              </div>
            }
          />
          <TeamItem
            link="Christian.jpg"
            name="Christian Terrier"
            description={
              <div>
                <div className="mt-8">
                  Team Leader Strategy, Member of the Board
                </div>
                <div>
                  BA Economics (University of Zurich), cand. MA Economics
                  (University of Zurich)
                </div>
              </div>
            }
          />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
