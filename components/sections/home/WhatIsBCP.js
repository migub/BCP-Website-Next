import { AnimationOnScroll } from "react-animation-on-scroll";

const WhatIsBCP = (props) => {
  return (
    <>
      <div className="relative p-6 py-20 md:pt-36 md:pb-28 sm:flex sm:justify-center sm:space-x-32 sm:items-center ">
        <div className="2xl:w-2/3">
          <h1 className="text-3xl font-bold text-center text-gray-800 sm:text-center sm:text-4xl">
            {props.title}
          </h1>
          <div className="flex flex-col items-center justify-center mt-20 sm:space-x-32 sm:flex-row sm:px-14 ">
            <div className="w-full m-auto lg:w-1/2">
              <p className="text-lg text-gray-500 sm:p-4 sm:text-xl">
                {props.description}
              </p>
            </div>
            <div className="sm:w-1/2 mt-10 sm:mt-0 w-full m-auto shadow-xl bg-gray-200 h-[350px] flex justify-center items-center">
              [Video]
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WhatIsBCP;
