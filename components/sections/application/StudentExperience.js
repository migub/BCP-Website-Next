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
            <div className="md:w-[300px]  w-[200px] h-[200px] shadow-xl md:h-[400px] rounded-xl overflow-hidden flex relative justify-center items-center">
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
                Blockchain Presence challanged me to go beyond the scope of my
                studies to work on solutions for its disruptive oracle model.”
              </p>
            </div>
          </div>
          <div className="items-center justify-center mt-20 md:space-x-20 md:flex">
            <div className="w-full lg:w-1/3">
              <p className="px-4 py-10 text-lg text-gray-500 md:py-4 sm:text-xl">
                “Blockchain Presence was one of the best experiences in my
                academic career! Each opinion gets considered & appreciated. One
                gets the chance to actively help BCP. This allowed me to take
                initiative and responsibility to develop myself.”
              </p>
            </div>{" "}
            <div className="md:w-[300px]  w-[200px] h-[200px] shadow-xl md:h-[400px] rounded-xl overflow-hidden flex relative justify-center items-center">
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
