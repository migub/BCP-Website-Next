import { AnimationOnScroll } from "react-animation-on-scroll";
import Image from "next/image";
const StudentExperience2 = (props) => {
  return (
    <>
      <div className="relative p-6 py-20 pb-28 sm:flex sm:justify-center sm:items-center">
        <div className="">
          <div className="items-center justify-center mt-0 md:space-x-20 md:flex">
            <div className="md:w-[300px]  w-[200px] h-[200px] shadow-xl md:h-[400px] rounded-xl overflow-hidden flex relative justify-center items-center">
              <Image
                src="/img/mario.png"
                alt=""
                layout="fill"
                objectFit="cover"
              />
            </div>
            <div className="w-full lg:w-1/3">
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

export default StudentExperience2;