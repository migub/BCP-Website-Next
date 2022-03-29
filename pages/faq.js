import { AnimationOnScroll } from "react-animation-on-scroll";
import Image from "next/image";
import Questions from "../components/sections/faq/Questions";
const Faq = () => {
  return (
    <>
      <div className="relative p-6 pt-32 sm:pt-40 pb-28 sm:flex sm:justify-center sm:items-center bg-gradient-to-t to-[#BDC5D8] from-[#BDC5D8]">
        <div className=" sm:w-1/4 pb-12 sm:min-w-[300px]">
          <h1 className="text-4xl font-bold text-left text-gray-800 sm:text-left sm:text-6xl">
            Frequently Asked Questions
          </h1>
          <p
            style={{ lineHeight: "1.1" }}
            className="mt-8 overflow-hidden text-2xl text-left text-gray-700 sm:text-left"
          >
            You can find answers to some frequently asked questions below. Feel
            free to reach out to us at info@blockchainpresence.net for any
            additional information.
          </p>
        </div>
        <div className="sm:pl-16">
          <Image src="/img/faq2.png" width="400" height="400" alt="" />
        </div>
        <div className="custom-shape-divider-bottom-1648168505">
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M1200 120L0 16.48 0 0 1200 0 1200 120z"
              className="shape-fill"
            ></path>
          </svg>
        </div>
      </div>
      {/* <Offer /> */}
      <div className="bg-gradient-to-t to-white from-[#BDC5D8] pt-12 pb-20">
        <Questions />
      </div>
    </>
  );
};

export default Faq;
