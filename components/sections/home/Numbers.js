import { AnimationOnScroll } from "react-animation-on-scroll";

const Numbers = () => {
  return (
    <div className="bg-[#384054] ">
      <AnimationOnScroll
        className="flex items-center w-full h-40 mt-10 overflow-hidden justify-evenly"
        animateOnce
        animateIn="animate__fadeInRight"
      >
        <div className="flex flex-col items-center justify-center w-1/3 h-full pt-3 sm:w-52 ">
          <div className="text-3xl font-bold text-center text-white sm:text-4xl">
            #1
          </div>
          <div className="pt-3 text-[9px] text-center text-white sm:text-sm">
            University for Blockchain research in Europe
          </div>
        </div>
        <div className="flex flex-col items-center justify-center w-1/3 h-fullsm:w-52 ">
          <div className="text-3xl font-bold text-center text-white sm:text-4xl">
            60+
          </div>
          <div className="pt-3 text-xs text-center text-white sm:text-sm">
            Students
          </div>
        </div>
        <div className="flex flex-col items-center justify-center w-1/3 h-full sm:w-52 ">
          <div className="text-3xl font-bold text-center text-white sm:text-4xl">
            7
          </div>
          <div className="pt-3 text-xs text-center text-white sm:text-sm">
            Co-Founders
          </div>
        </div>
      </AnimationOnScroll>
    </div>
  );
};
export default Numbers;
