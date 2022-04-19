import { AnimationOnScroll } from "react-animation-on-scroll";

const Numbers = () => {
  return (
    <div className="bg-[#384054]">
      <AnimationOnScroll
        className="flex items-center w-full h-40 mt-10 justify-evenly"
        animateOnce
        animateIn="animate__fadeInRight"
      >
        <div className="flex flex-col items-center justify-center h-full w-52 ">
          <div className="text-4xl font-bold text-center text-white">#1</div>
          <div className="pt-3 text-sm text-center text-white">
            University for Blockchain research in Europe
          </div>
        </div>
        <div className="flex flex-col items-center justify-center h-full w-52 ">
          <div className="text-4xl font-bold text-center text-white">60+</div>
          <div className="pt-3 text-sm text-center text-white">Students</div>
        </div>
        <div className="flex flex-col items-center justify-center h-full w-52 ">
          <div className="text-4xl font-bold text-center text-white">7</div>
          <div className="pt-3 text-sm text-center text-white">Co-Founders</div>
        </div>
      </AnimationOnScroll>
    </div>
  );
};
export default Numbers;
