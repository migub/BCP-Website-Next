import { AnimationOnScroll } from "react-animation-on-scroll";

const Timeline = () => {
  return (
    <>
      <div className="container w-full h-full mx-auto">
        <div className="relative h-full p-10 overflow-hidden wrap">
          <div
            className="absolute h-full border border-gray-700 border-2-2 border-opacity-20"
            style={{ left: "50%" }}
          ></div>
          {/* <!-- right timeline --> */}
          <div className="flex items-center justify-between w-full mb-8 right-timeline">
            <div className="order-1 w-5/12"></div>
            <div className="z-20 flex items-center order-1 w-8 h-8 bg-[#384056] rounded-full shadow-xl">
              <h1 className="mx-auto text-lg font-semibold text-white">1</h1>
            </div>
            <AnimationOnScroll
              className="order-1 w-5/12 px-6 py-4 bg-[#BDC5D8] rounded-lg shadow-xl"
              animateOnce
              animateIn="animate__fadeInRight"
            >
              <h3 className="mb-3 text-xl font-bold text-gray-800">
                Founding of Blockchain Presence AG
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
            <div className="order-1 w-5/12"></div>
            <div className="z-20 flex items-center order-1 w-8 h-8 bg-[#384056] rounded-full shadow-xl">
              <h1 className="mx-auto text-lg font-semibold text-white">2</h1>
            </div>
            <AnimationOnScroll
              animateOnce
              animateIn="animate__fadeInLeft"
              className="order-1 w-5/12 px-6 py-4 bg-[#384056] rounded-lg shadow-xl"
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
            <div className="order-1 w-5/12"></div>
            <div className="z-20 flex items-center order-1 w-8 h-8 bg-[#384056] rounded-full shadow-xl">
              <h1 className="mx-auto text-lg font-semibold text-white">3</h1>
            </div>
            <AnimationOnScroll
              className="order-1 w-5/12 px-6 py-4 bg-[#BDC5D8] rounded-lg shadow-xl"
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
            <div className="order-1 w-5/12"></div>
            <div className="z-20 flex items-center order-1 w-8 h-8 bg-[#384056] rounded-full shadow-xl">
              <h1 className="mx-auto text-lg font-semibold text-white">4</h1>
            </div>
            <AnimationOnScroll
              animateOnce
              animateIn="animate__fadeInLeft"
              className="order-1 w-5/12 px-6 py-4 bg-[#384056] rounded-lg shadow-xl"
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
