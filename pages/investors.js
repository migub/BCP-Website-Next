import { AnimationOnScroll } from "react-animation-on-scroll";
import Image from "next/image";
import { useRouter } from "next/router";

import WhyYouShouldInvest from "../components/sections/Investors/WhyYouShouldInvest";
const Investors = () => {
  const router = useRouter();

  return (
    <>
      <div className="relative p-6 pt-44 pb-28 sm:flex sm:justify-center sm:items-center bg-gradient-to-t to-[#BDC5D8] from-[#BDC5D8]">
        <div className=" sm:w-1/4 pb-12 sm:min-w-[300px]">
          <AnimationOnScroll animateOnce animateIn="animate__fadeInUp">
            <h1 className="text-4xl font-bold text-left text-gray-800 sm:text-left sm:text-6xl">
              Become an Investor
            </h1>
            <p
              style={{ lineHeight: "1.1" }}
              className="mt-8 text-2xl text-left text-gray-700 sm:text-left"
            >
              Blockchain Presence AG is a start-up, founded in 2020. We aim to
              create a a blockchain oracle for leading smart contract platforms.
              We are an innovative and visionary company where you can be part
              of.
            </p>
          </AnimationOnScroll>
          <div className="flex justify-start mt-10 space-x-5 sm:justify-start">
            <button
              onClick={() => {
                router.push("/contact");
              }}
              className="px-4 py-2 font-bold text-white rounded bg-[#383f56] hover:bg-gray-600"
            >
              Contact Us
            </button>
          </div>
        </div>
        <div className="pl-16">
          <Image src="/img/invest.png" width="400" height="400" alt="" />
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
      <div className="bg-gradient-to-t to-white from-[#BDC5D8]">
        <WhyYouShouldInvest />
      </div>
    </>
  );
};

export default Investors;
