import { AnimationOnScroll } from "react-animation-on-scroll";

const Timeline = (props) => {
  return (
    <>
      <div className=" bg-[#5870a11c] h-full mx-auto py-32">
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
            className="absolute border border-gray-700 md:h-full h-[950px] border-2-2 border-opacity-20"
            style={{ left: "50%" }}
          ></div>
          {/* <!-- right timeline --> */}
          <div className="flex items-center justify-between w-full mb-8 0 md:right-timeline">
            <div className="order-1 hidden w-5/12 md:block"></div>
            <div className=" hidden z-10 md:flex items-center order-1  w-8 h-8 bg-[#384056] rounded-full shadow-xl">
              <h1 className="mx-auto text-lg font-semibold text-white">1</h1>
            </div>
            <div className="order-1 md:w-5/12">
              <AnimationOnScroll
                className="bg-[#BDC5D8] px-6 rounded-lg py-4 shadow-xl"
                animateOnce
                animateIn="animate__fadeInRight"
              >
                <h3 className="mb-3 text-xl font-bold text-gray-800">
                  Founding of Blockchain Presence AG
                </h3>
                <p className="text-sm leading-snug tracking-wide text-gray-900 text-opacity-100">
                  Blockchain Presence AG is a swiss corporation and an official
                  spin-off of the University of Zurich, founded in December
                  2020. We are located near the University of Zurich and the
                  Crypto Valley Zug. // Dummy Text
                </p>
              </AnimationOnScroll>
            </div>
          </div>
          {/* <!-- left timeline --> */}
          <div className="flex flex-row-reverse items-center justify-between w-full mb-8 left-timeline">
            <div className="order-1 hidden w-5/12 md:block"></div>
            <div className=" hidden z-10 md:flex items-center order-1 w-8 h-8 bg-[#384056] rounded-full shadow-xl">
              <h1 className="mx-auto text-lg font-semibold text-white">2</h1>
            </div>
            <AnimationOnScroll
              animateOnce
              animateIn="animate__fadeInLeft"
              className="order-1 md:w-5/12 mt-8 md:mt-0 px-6 py-4 bg-[#384056] rounded-lg shadow-xl"
            >
              <h3 className="mb-3 text-xl font-bold text-white">
                Austrian Blockchain Award
              </h3>
              <p className="text-sm font-medium leading-snug tracking-wide text-white text-opacity-100">
                Blockchain Presence AG is a swiss corporation and an official
                spin-off of the University of Zurich, founded in December 2020.
                We are located near the University of Zurich and the Crypto
                Valley Zug. // Dummy Text
              </p>
            </AnimationOnScroll>
          </div>
          {/* <!-- right timeline --> */}
          <div className="flex items-center justify-between w-full mb-8 right-timeline">
            <div className="order-1 hidden w-5/12 md:block"></div>
            <div className=" hidden z-10 md:flex items-center order-1 w-8 h-8 bg-[#384056] rounded-full shadow-xl">
              <h1 className="mx-auto text-lg font-semibold text-white">3</h1>
            </div>
            <AnimationOnScroll
              className="order-1 md:w-5/12 mt-8 md:mt-0 px-6 py-4 bg-[#BDC5D8] rounded-lg shadow-xl"
              animateOnce
              animateIn="animate__fadeInRight"
            >
              <h3 className="mb-3 text-xl font-bold text-gray-800">
                Dividends via Smart Contract
              </h3>
              <p className="text-sm leading-snug tracking-wide text-gray-900 text-opacity-100">
                Blockchain Presence AG is a swiss corporation and an official
                spin-off of the University of Zurich, founded in December 2020.
                We are located near the University of Zurich and the Crypto
                Valley Zug. // Dummy Text
              </p>
            </AnimationOnScroll>
          </div>

          {/* <!-- left timeline --> */}
          <div className="flex flex-row-reverse items-center justify-between w-full mb-8 left-timeline">
            <div className="order-1 hidden w-5/12 md:block"></div>
            <div className=" hidden z-10 md:flex items-center order-1 w-8 h-8 bg-[#384056] rounded-full shadow-xl">
              <h1 className="mx-auto text-lg font-semibold text-white">4</h1>
            </div>
            <AnimationOnScroll
              animateOnce
              animateIn="animate__fadeInLeft"
              className="order-1 md:w-5/12 mt-8 md:mt-0 px-6 py-4 bg-[#384056] rounded-lg shadow-xl"
            >
              {" "}
              <h3 className="mb-3 text-xl font-bold text-white">
                Over 70 contributors
              </h3>
              <p className="text-sm font-medium leading-snug tracking-wide text-white text-opacity-100">
                Blockchain Presence AG is a swiss corporation and an official
                spin-off of the University of Zurich, founded in December 2020.
                We are located near the University of Zurich and the Crypto
                Valley Zug. // Dummy Text
              </p>
            </AnimationOnScroll>
          </div>
        </div>
      </div>
    </>
  );
};

export default Timeline;
