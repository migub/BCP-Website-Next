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
      <div className="container mx-auto px-6 p-6 bg-transparent pt-12 pb-12 ">
        <div className="mb-16 text-center">
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900  sm:text-4xl">
            Why should you invest in BCP?
          </p>
        </div>
        <div className="flex flex-wrap my-12 ">
          <div className="w-full border-b md:w-1/2 md:border-r lg:w-1/3 p-8">
            <div className="flex items-center mb-6">
              <div
                style={{ color: "white" }}
                className="flex items-center  justify-center h-12 w-12 rounded-md bg-[#383f56] text-2xl text-white"
              >
                <GiReceiveMoney />
              </div>
              <div className="ml-4 text-xl">Essential for Web3</div>
            </div>
            <p className="leading-loose text-gray-500  text-md">
              Smart Contracts themselves can not access real-world data. BCP
              solves this issue with oracles.
            </p>
          </div>
          <div className="w-full border-b md:w-1/2 lg:w-1/3 lg:border-r p-8">
            <div className="flex items-center mb-6">
              <div
                style={{ color: "white" }}
                className="flex items-center  justify-center h-12 w-12 rounded-md bg-[#383f56] text-2xl text-white"
              >
                <IoSchoolSharp />
              </div>
              <div className="ml-4 text-xl">Backed by University of Zurich</div>
            </div>
            <p className="leading-loose text-gray-500  text-md">
              We have access to young talents at University of Zurich who are
              motivated developers and marketing experts.
            </p>
          </div>
          <div className="w-full border-b md:w-1/2 md:border-r lg:w-1/3 lg:border-r-0 p-8">
            <div className="flex items-center mb-6">
              <div
                style={{ color: "white" }}
                className="flex items-center  justify-center h-12 w-12 rounded-md bg-[#383f56] text-2xl text-white"
              >
                <IoTrendingUpSharp />
              </div>
              <div className="ml-4 text-xl">Strong growing global market</div>
            </div>
            <p className="leading-loose text-gray-500  text-md">
              The market for Web3 and blockchain oracle services has been
              growing at exceptional rates and thus immense potential is
              available.
            </p>
          </div>
          <div className="w-full border-b md:w-1/2 lg:w-1/3 lg:border-r lg:border-b-0 p-8">
            <div className="flex items-center mb-6">
              <div
                style={{ color: "white" }}
                className="flex items-center  justify-center h-12 w-12 rounded-md bg-[#383f56] text-2xl text-white"
              >
                <IoServerSharp />
              </div>
              <div className="ml-4 text-xl">Equity token</div>
            </div>
            <p className="leading-loose text-gray-500  text-md">
              Receive dividends through our unique equity token and trade our
              BCP stock at decentralized exchanges.
            </p>
          </div>
          <div className="w-full border-b md:w-1/2 md:border-r md:border-b-0 lg:w-1/3 lg:border-b-0 p-8">
            <div className="flex items-center mb-6">
              <div
                style={{ color: "white" }}
                className="flex items-center  justify-center h-12 w-12 rounded-md bg-[#383f56] text-2xl text-white"
              >
                <IoAccessibilitySharp />
              </div>
              <div className="ml-4 text-xl">Convenient user experience</div>
            </div>
            <p className="leading-loose text-gray-500  text-md">
              {`We have created the application SCA (Sender Convenience
              Application), which makes it for nodes as easy as possible to
              provide data to a receiver. Learn more at "Our Service".`}
            </p>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/3 p-8">
            <div className="flex items-center mb-6">
              <div
                style={{ color: "white" }}
                className="flex items-center  justify-center h-12 w-12 rounded-md bg-[#383f56] text-2xl text-white"
              >
                <IoEarthSharp />
              </div>
              <div className="ml-4 text-xl">Unique business model</div>
            </div>
            <p className="leading-loose text-gray-500  text-md">
              BCP is offering an on-chain authentification service which is a
              decentralized run-time protocol that verifies the identity of a
              commited cryprtographic signee.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
export default WhyYouShouldInvest;
