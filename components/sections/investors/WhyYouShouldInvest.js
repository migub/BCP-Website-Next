import { GiReceiveMoney } from "react-icons/gi";
import {
  IoSchoolSharp,
  IoTrendingUpSharp,
  IoServerSharp,
  IoAccessibilitySharp,
  IoEarthSharp,
} from "react-icons/io5";
const WhyYouShouldInvest = () => {
  return (
    <>
      <div className="container p-6 px-6 pt-12 pb-12 mx-auto bg-transparent ">
        <div className="mb-16 text-center">
          <p className="mt-2 text-3xl font-extrabold leading-8 tracking-tight text-gray-900 sm:text-4xl">
            Why should you invest in BCP?
          </p>
        </div>
        <div className="flex flex-wrap my-12 ">
          <div className="w-full p-8 md:w-1/2 lg:w-1/3 ">
            <div className="flex items-center h-16 mb-6 font-semibold">
              <div>
                <div
                  style={{ color: "white" }}
                  className="flex mr-4 items-center  justify-center h-12 w-12 rounded-md bg-[#383f56] text-2xl text-white"
                >
                  <IoSchoolSharp />
                </div>
              </div>
              <div className="text-xl ">Access to young talents</div>
            </div>
            <p className="leading-loose text-black text-md">
              We have access to young talents at University of Zurich who are
              motivated developers and marketing experts.
            </p>
          </div>
          <div className="w-full p-8 md:w-1/2 lg:w-1/3">
            <div className="flex items-center mb-6 font-semibold">
              <div>
                <div
                  style={{ color: "white" }}
                  className="flex mr-4 items-center  justify-center h-12 w-12 rounded-md bg-[#383f56] text-2xl text-white"
                >
                  <IoTrendingUpSharp />
                </div>
              </div>
              <div className="text-xl">Strong growing global market</div>
            </div>
            <p className="leading-loose text-black text-md">
              The market for blockchain oracle services has been growing at
              exceptional rates, and thus vast potential is available.
            </p>
          </div>
          <div className="w-full p-8 md:w-1/2 lg:w-1/3">
            <div className="flex items-center mb-6 font-semibold">
              <div>
                <div
                  style={{ color: "white" }}
                  className="flex mr-4 items-center  justify-center h-12 w-12 rounded-md bg-[#383f56] text-2xl text-white"
                >
                  <IoEarthSharp />
                </div>
              </div>
              <div className="text-xl">Unique business model</div>
            </div>
            <p className="leading-loose text-black text-md">
              BCP is offering an on-chain authentification service which is a
              decentralized run-time protocol that verifies the identity of a
              commited cryptographic signee.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
export default WhyYouShouldInvest;
