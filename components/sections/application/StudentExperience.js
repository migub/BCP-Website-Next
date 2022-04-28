import { AnimationOnScroll } from "react-animation-on-scroll";
import Image from "next/image";
const StudentExperience = (props) => {
  return (
    <>
      <div
        id="earn"
        className="relative p-6 py-20 pb-28 sm:flex sm:justify-center sm:space-x-32 sm:items-center"
      >
        <div className="">
          <h1 className="text-3xl font-bold text-center text-gray-800 sm:text-center sm:text-4xl">
            {props.title}
          </h1>
          <div className="items-center justify-center mt-20 md:flex px-14 ">
            <div className="md:w-[350px] w-[200px] h-[200px] m-auto shadow-xl md:h-[350px] rounded-full overflow-hidden flex relative justify-center items-center">
              <Image
                src="/img/tamara.png"
                alt=""
                layout="fill"
                objectFit="cover"
              />
            </div>
            <div className="w-full m-auto lg:w-1/2">
              <p className="px-4 py-10 text-lg text-gray-500 md:py-4 sm:text-xl">
                {props.description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default StudentExperience;
