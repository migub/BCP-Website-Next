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
                {props.quote1}
              </p>
              <p className="px-4 font-semibold text-lg text-gray-500 md:py-4 sm:text-xl">
                {props.quote1b}
              </p>
              <p className="px-4 text-lg text-gray-500 sm:text-xl">
                {props.quote1c}
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center mt-20 md:flex-row md:space-x-20">
            <div className="order-2 w-full md:order-1 lg:w-1/3">
              <p className="px-4 py-10 text-lg text-gray-500 md:py-4 sm:text-xl">
                {props.quote2}
              </p>
              <p className="px-4 font-semibold text-lg text-gray-500 md:py-4 sm:text-xl">
                {props.quote2b}
              </p>
              <p className="px-4 text-lg text-gray-500 sm:text-xl">
                {props.quote2c}
              </p>
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
