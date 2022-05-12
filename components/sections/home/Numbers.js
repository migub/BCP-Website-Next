import { AnimationOnScroll } from "react-animation-on-scroll";

const Numbers = () => {
  return (
    <div className="bg-[#384054] overflow-hidden">
      <AnimationOnScroll
        className="flex items-center justify-center shadow-xl w-full h-[140px] overflow-hidden"
        animateOnce
        animateIn="animate__fadeInRight"
      >
        <div className="flex flex-col items-center justify-center w-1/3 sm:w-72">
          <div className="flex items-center text-3xl font-bold text-center text-white sm:text-4xl">
            9
          </div>
          <div className="pt-3 text-xs text-center text-white sm:text-sm">
            Co-Founders
          </div>
        </div>
        <div className="flex flex-col items-center justify-center w-1/3 h-full ">
          <div className="flex justify-center text-3xl font-bold text-center text-white sm:text-4xl">
            30+
          </div>
          <div className="pt-3 text-xs text-center text-white sm:text-sm">
            Interns
          </div>
        </div>
        <div className="flex flex-col items-center justify-center w-1/3 h-full pt-1 sm:w-72">
          <div className="flex justify-center mt-2 text-3xl font-bold text-center text-white sm:text-4xl">
            #4
          </div>
          <div className="pt-3 text-[8px] text-center text-white sm:text-sm">
            Global Blockchain University Ranking
            <div className="text-[8px] sm:text-sm">
              (Coindesk, October 2021)
            </div>
          </div>
        </div>
      </AnimationOnScroll>
    </div>
  );
};
export default Numbers;
