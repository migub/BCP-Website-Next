import { IconContext } from "react-icons";
import { AiFillSafetyCertificate } from "react-icons/ai";
import { GiReceiveMoney } from "react-icons/gi";
import { IoAccessibilitySharp } from "react-icons/io5";

const Features = () => {
  return (
    <>
      <div className="flex-wrap items-center justify-center gap-8 mt-24 text-center sm:flex">
        <div className="w-full px-4 py-4 mt-6 bg-white rounded-lg shadow-lg sm:w-1/2 md:w-1/2 lg:w-1/4">
          <div className="flex-shrink-0">
            <div
              style={{ color: "white" }}
              className="flex items-center mx-auto justify-center h-12 w-12 rounded-md bg-[#383f56] text-2xl text-white"
            >
              <AiFillSafetyCertificate />
            </div>
          </div>
          <h3 className="py-4 text-2xl font-semibold text-gray-700 sm:text-3xl">
            Reliable and secure
          </h3>
          <p className="py-4 text-lg text-gray-500">
            Senders build up reputation by offering the best service for smart
            contract developers. Every single sender on the BCP platform is
            registered on-chain. Thereby, we can guarantee that all data comes
            from the original source.
          </p>
        </div>
        <div className="w-full px-4 py-4 mt-6 bg-white rounded-lg shadow-lg sm:w-1/2 md:w-1/2 lg:w-1/4 sm:mt-16 md:mt-20 lg:mt-24">
          <div className="flex-shrink-0">
            <div className="flex items-center mx-auto justify-center h-12 w-12 rounded-md bg-[#383f56] text-2xl text-white">
              <GiReceiveMoney />
            </div>
          </div>
          <h3 className="py-4 text-2xl font-semibold text-gray-700 sm:text-3xl">
            Cost-efficient
          </h3>
          <p className="py-4 text-lg text-gray-500">
            Our lean design ensures minimum gas consumption for contract
            deployment as well as for order and delivery transactions. In
            addition, there are no transaction costs for any utility token.
          </p>
        </div>
        <div className="w-full px-4 py-4 mt-6 bg-white rounded-lg shadow-lg sm:w-1/2 md:w-1/2 lg:w-1/4">
          <div className="flex-shrink-0">
            <div className="flex items-center mx-auto justify-center h-12 w-12 rounded-md bg-[#383f56] text-2xl text-white">
              <IoAccessibilitySharp />
            </div>
          </div>
          <h3 className="py-4 text-2xl font-semibold text-gray-700 sm:text-3xl">
            Convenient
          </h3>
          <p className="py-4 text-lg text-gray-500">
            The BCP website provides users with realtime information on the
            status of the order and delivery process. Mainnet information is
            passed on to the testnet, facilitating development and testing.
          </p>
        </div>
      </div>
    </>
  );
};

export default Features;
