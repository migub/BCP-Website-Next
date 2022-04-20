import { AnimationOnScroll } from "react-animation-on-scroll";
import Timeline from "./Timeline";

const WhoIsBehind = (props) => {
  return (
    <>
      <div
        id="earn"
        className="relative p-6 bg-white pt-36 pb-28 sm:flex sm:justify-center sm:space-x-32 sm:items-center "
      >
        <div className="">
          <AnimationOnScroll animateOnce animateIn="animate__fadeIn">
            <h1 className="text-3xl font-bold text-center text-gray-800 sm:text-center sm:text-4xl">
              {props.title}
            </h1>
            <div className="w-full m-auto mt-16 lg:w-1/2">
              <p className="px-4 py-4 text-lg text-gray-500 sm:text-xl">
                {props.description}
              </p>
            </div>
          </AnimationOnScroll>
          <Timeline />
        </div>
      </div>
    </>
  );
};

export default WhoIsBehind;
