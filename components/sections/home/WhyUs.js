import Image from "next/image";
import { AnimationOnScroll } from "react-animation-on-scroll";
import Features from "../../Features";

const Earn = () => {
  return (
    <>
      <div
        id="whyus"
        className="relative p-6 pt-28 pb-28 sm:flex sm:justify-center sm:space-x-32 sm:items-center "
      >
        <div className="">
          <h1 className="text-4xl font-bold text-center text-gray-800 sm:text-center sm:text-6xl">
            Why Blockchain Presence?
          </h1>
          <Features />
        </div>
      </div>
    </>
  );
};

export default Earn;
