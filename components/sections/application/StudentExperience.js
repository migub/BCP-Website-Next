import { AnimationOnScroll } from "react-animation-on-scroll";
import Image from "next/image";
const StudentExperience = (props) => {
  return (
    <>
      <div className="relative p-6 py-20 pb-28 sm:flex sm:justify-center sm:items-center">
        <div className="">
          <h1 className="text-3xl font-bold text-center text-gray-800 sm:text-center sm:text-4xl">
            {props.title}
          </h1>
          <div className="items-center justify-center mt-20 md:space-x-20 md:flex">
            <div className="w-[300px]  shadow-xl h-[400px] rounded-xl m-auto md:m-0 overflow-hidden flex relative justify-center items-center">
              <Image
                src="/img/mario.jpg"
                alt=""
                layout="fill"
                objectFit="cover"
              />
            </div>
            <div className="w-full lg:w-1/3">
              <p className="px-4 py-10 text-lg text-gray-500 md:py-4 sm:text-xl">
                “Developing a product at the frontline of blockchain technology,
                Blockchain Presence challenged me to go beyond the scope of my
                studies to work on solutions for its disruptive oracle model.”
              </p>
              <p className="px-4 text-lg font-semibold text-gray-500 md:py-4 sm:text-xl">
                Mario Beer
              </p>
              <ul className="px-4 text-lg text-gray-500 sm:text-xl">
                <li>• Bachelor Student at UZH </li>
                <li>• Junior Analyst at Blockchain Presence (2021)</li>
                <li>• Winner of the UZH Semester Prize 2021</li>
              </ul>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center mt-20 md:flex-row md:space-x-20">
            <div className="order-2 w-full md:order-1 lg:w-1/3">
              <p className="px-4 py-10 text-lg text-gray-500 md:py-4 sm:text-xl">
                “Blockchain Presence was one of the best experiences in my
                academic career! Each opinion gets considered & appreciated. One
                gets the chance to actively help BCP. This allowed me to take
                initiative and responsibility to develop myself.”
              </p>
              <p className="px-4 text-lg font-semibold text-gray-500 md:py-4 sm:text-xl">
                Subajini Satgunarajah
              </p>
              <ul className="px-4 text-lg text-gray-500 sm:text-xl">
                <li>• Master Student at UZH </li>
                <li>• Digital Marketing Associate at Blockchain Presence (2021)</li>
              </ul>
            </div>{" "}
            <div className="w-[300px] order-1 md:order-2 shadow-xl h-[400px] rounded-xl overflow-hidden flex relative justify-center items-center">
              <Image
                src="/img/suba.jpg"
                alt=""
                layout="fill"
                objectFit="cover"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default StudentExperience;
