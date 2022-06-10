import { AnimationOnScroll } from "react-animation-on-scroll";
import Feature from "./Feature";

const Timeline = (props) => {
  return (
    <>
      <div className="relative bg-[#5870a11c] h-full mx-auto mt-1 py-32">
        <div className="custom-shape-divider-top-1650993069">
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
        <h1 className="text-3xl font-bold text-center text-gray-800 sm:text-center sm:text-4xl">
          {props.title}
        </h1>
        <div className="w-full m-auto mt-6 lg:w-1/2">
          <p className="px-4 py-4 text-center text-gray-500 text-md sm:text-lg">
            {props.subTitle}
          </p>
        </div>
        <div className="relative h-full p-10 m-auto overflow-hidden 2xl:w-2/3 wrap">
          <div
            className="absolute border border-gray-700 md:h-[85%] h-[80%] border-2-2 border-opacity-20"
            style={{ left: "50%" }}
          ></div>
          {/* <!-- right timeline --> */}
          <div className="flex items-center justify-between w-full mb-8 md:right-timeline">
            <div className="order-1 hidden w-5/12 md:block"></div>
            <div className=" hidden z-10 md:flex items-center order-1  w-[150px]  h-8 bg-[#BDC5D8] rounded-full shadow-xl">
              <h1 className="mx-auto text-sm font-semibold text-gray-900">
                Early 2019
              </h1>
            </div>
            <div className="order-1 md:w-5/12">
              <AnimationOnScroll
                className="bg-[#384056] px-6 md:ml-5 flex flex-col justify-center rounded-lg pb-6 pt-1 shadow-xl"
                animateOnce
                animateIn="animate__fadeInRight"
              >
                <h3 className="mb-3 text-xl font-bold text-white ">
                  Basic Concept
                </h3>
                <p className="text-sm leading-snug tracking-wide text-white text-opacity-100 ">
                  The idea of an oracle with on-chain authentication was
                  conceptualized by a research group at the University of
                  Zurich.
                </p>
              </AnimationOnScroll>
            </div>
          </div>
          {/* <!-- left timeline --> */}
          <div className="flex flex-row-reverse items-center justify-between w-full left-timeline">
            <div className="order-1 hidden w-5/12 md:block"></div>
            <div className=" hidden z-10 md:flex items-center order-1  w-[150px]  h-8 bg-[#BDC5D8] rounded-full shadow-xl">
              <h1 className="mx-auto text-sm font-semibold text-gray-900">
                December 2020
              </h1>
            </div>
            <div className="order-1 md:w-5/12">
              <AnimationOnScroll
                animateOnce
                animateIn="animate__fadeInLeft"
                className="order-1 md:mr-5   md:mt-0 px-6 pb-6 pt-1 bg-[#384056] rounded-lg shadow-xl"
              >
                <h3 className="mb-3 text-xl font-bold text-white">
                  Spin-off of the University of Zurich
                </h3>
                <p className="text-sm font-medium leading-snug tracking-wide text-white text-opacity-100">
                  Blockchain Presence was incorporated in Zurich, Switzerland,
                  and became an official spin-off of the University of Zurich.
                </p>
              </AnimationOnScroll>
            </div>
          </div>
          {/* <!-- right timeline --> */}
          <div className="flex items-center justify-between w-full mb-8 right-timeline">
            <div className="order-1 hidden w-5/12 md:block"></div>
            <div className=" hidden z-10 md:flex items-center order-1  w-[150px]  h-8 bg-[#BDC5D8] rounded-full shadow-xl">
              <h1 className="mx-auto text-sm font-semibold text-gray-900">
                September 2021
              </h1>
            </div>{" "}
            <div className="order-1 md:w-5/12">
              <AnimationOnScroll
                className="order-1 md:ml-5 mt-8 md:mt-0 px-6 pb-6 pt-1 bg-[#384056] rounded-lg shadow-xl"
                animateOnce
                animateIn="animate__fadeInRight"
              >
                <h3 className="mb-3 text-xl font-bold text-white">
                  Austrian Blockchain Award
                </h3>
                <p className="text-sm leading-snug tracking-wide text-white text-opacity-100">
                  Blockchain Presence AG won the third prize of the Austrian
                  Blockchain Award in the category of business.
                </p>
              </AnimationOnScroll>
            </div>
          </div>

          {/* <!-- left timeline --> */}
          <div className="flex flex-row-reverse items-center justify-between w-full mb-8 left-timeline">
            <div className="order-1 hidden w-5/12 md:block"></div>
            <div className=" hidden z-10 md:flex items-center order-1  w-[150px]  h-8 bg-[#BDC5D8] rounded-full shadow-xl">
              <h1 className="mx-auto text-sm font-semibold text-gray-900">
                May 2022
              </h1>
            </div>
            <div className="order-1 md:w-5/12">
              <AnimationOnScroll
                animateOnce
                animateIn="animate__fadeInLeft"
                className="order-1 md:mr-5 md:mt-0 px-6 pb-6 pt-1 bg-[#384056] rounded-lg shadow-xl"
              >
                {" "}
                <h3 className="mb-3 text-xl font-bold text-white">
                  Dividends via Smart Contract
                </h3>
                <p className="text-sm font-medium leading-snug tracking-wide text-white text-opacity-100">
                  Following the decision of the general assembly, Blockchain
                  Presence AG distributed the dividend for the business year
                  2021 to its shareholders in the form of MATIC using a smart
                  contract on the Polygon network.
                </p>
              </AnimationOnScroll>
            </div>
          </div>
        </div>
        <div className="custom-shape-divider-bottom-1650993162">
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

      <div
        id="whyus"
        className="relative p-6 py-32 sm:flex sm:justify-center sm:space-x-32 sm:items-center "
      >
        <div className="">
          <h1 className="text-3xl font-bold text-center text-gray-800 sm:text-center sm:text-4xl">
            What makes Blockchain Presence special?
          </h1>
          <div className="flex-wrap items-center justify-center gap-8 mt-10 text-center sm:flex">
            <Feature
              title={props.featureOneTitle}
              description={props.featureOneDescription}
              // icon={props.featureOneIcon}
            />
            <Feature
              title={props.featureTwoTitle}
              description={props.featureTwoDescription}
              // icon={props.featureTwoIcon}
            />
            <Feature
              title={props.featureThreeTitle}
              description={props.featureThreeDescription}
              // icon={props.featureThreeIcon}
            />
          </div>
        </div>
      </div>

      {/* Timeline starts */}
      <div className="relative h-full py-32 mx-auto mt-1">
        <div className="custom-shape-divider-top-1650993069">
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
        <h1 className="text-3xl font-bold text-center text-gray-800 sm:text-center sm:text-4xl">
          Upcoming Milestones
        </h1>
        <div className="w-full m-auto mt-6 lg:w-1/2">
          <p className="px-4 py-4 text-center text-gray-500 text-md sm:text-lg">
            {props.subTitle}
          </p>
        </div>
        <div className="relative h-full p-10 m-auto overflow-hidden 2xl:w-2/3 wrap">
          <div
            className="absolute border border-gray-700 md:h-[85%] h-[80%] border-2-2 border-opacity-20"
            style={{ left: "50%" }}
          ></div>
          {/* <!-- right timeline --> */}
          <div className="flex items-center justify-between w-full mb-8 0 md:right-timeline">
            <div className="order-1 hidden w-5/12 md:block"></div>
            <div className=" hidden z-10 md:flex items-center order-1  w-[150px]  h-8 bg-[#384056] rounded-full shadow-xl">
              <h1 className="mx-auto text-sm font-semibold text-white">
                ~ August 2022
              </h1>
            </div>
            <div className="order-1 md:w-5/12">
              <AnimationOnScroll
                className="bg-[#BDC5D8] md:ml-5 px-6 rounded-lg pb-6 pt-1 shadow-xl"
                animateOnce
                animateIn="animate__fadeInRight"
              >
                <h3 className="mb-3 text-xl font-bold text-gray-800">
                  Platform Launch
                </h3>
                <p className="text-sm leading-snug tracking-wide text-gray-900 text-opacity-100">
                  The oracle dapp is scheduled to be launched on selected smart
                  contact platforms.
                </p>
              </AnimationOnScroll>
            </div>
          </div>
          {/* <!-- left timeline --> */}
          <div className="flex flex-row-reverse items-center justify-between w-full left-timeline">
            <div className="order-1 hidden w-5/12 md:block"></div>
            <div className=" hidden z-10 md:flex items-center order-1  w-[150px]  h-8 bg-[#384056] rounded-full shadow-xl">
              <h1 className="mx-auto text-sm font-semibold text-white">
                ~ December 2022
              </h1>
            </div>
            <div className="order-1 md:w-5/12">
              <AnimationOnScroll
                animateOnce
                animateIn="animate__fadeInLeft"
                className="order-1  md:mr-5  md:mt-0 px-6 pb-6 pt-1 bg-[#BDC5D8] rounded-lg shadow-xl"
              >
                <h3 className="mb-3 text-xl font-bold text-gray-800">
                  Tokenization
                </h3>
                <p className="text-sm font-medium leading-snug tracking-wide text-gray-900 text-opacity-100">
                  The shares of Blockchain Presence AG are scheduled to be
                  tokenized on the Polygon mainnet.
                </p>
              </AnimationOnScroll>
            </div>
          </div>
          {/* <!-- right timeline --> */}
          <div className="flex items-center justify-between w-full mb-8 right-timeline">
            <div className="order-1 hidden w-5/12 md:block"></div>
            <div className=" hidden z-10 md:flex items-center order-1  w-[150px]  h-8 bg-[#384056] rounded-full shadow-xl">
              <h1 className="mx-auto text-sm font-semibold text-white">
                ~ June 2023
              </h1>
            </div>{" "}
            <div className="order-1 md:w-5/12">
              <AnimationOnScroll
                className="order-1 md:ml-5 mt-8 md:mt-0 px-6 pb-6 pt-1 bg-[#BDC5D8] rounded-lg shadow-xl"
                animateOnce
                animateIn="animate__fadeInRight"
              >
                <h3 className="mb-3 text-xl font-bold text-gray-800">
                  Equity Token Offering
                </h3>
                <p className="text-sm leading-snug tracking-wide text-gray-900 text-opacity-100">
                  A limited quantity of equity tokens of Blockchain Presence AG
                  is foreseen to be offered on decentralized exchanges.
                </p>
              </AnimationOnScroll>
            </div>
          </div>

          {/* <!-- left timeline --> */}
          {/* <div className="flex flex-row-reverse items-center justify-between w-full mb-8 left-timeline">
            <div className="order-1 hidden w-5/12 md:block"></div>
            <div className=" hidden z-10 md:flex items-center order-1  w-[150px]  h-8 bg-[#384056] rounded-full shadow-xl">
              <h1 className="mx-auto text-sm font-semibold text-white">
                May 2022
              </h1>
            </div>
            <div className="order-1 md:w-5/12">
              <AnimationOnScroll
                animateOnce
                animateIn="animate__fadeInLeft"
                className="order-1  md:mt-0 px-6 py-4 bg-[#384056] rounded-lg shadow-xl"
              >
                {" "}
                <h3 className="mb-3 text-xl font-bold text-white">
                  Dividends via Smart Contract
                </h3>
                <p className="text-sm font-medium leading-snug tracking-wide text-white text-opacity-100">
                  Following the decision of the general assembly, Blockchain
                  Presence AG distributed the dividend via a smart contract on
                  Polygon, making the company one of the very first
                  corporations.
                </p>
              </AnimationOnScroll>
            </div>
          </div> */}
        </div>
        <div className="custom-shape-divider-bottom-1650993162">
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
    </>
  );
};

export default Timeline;
