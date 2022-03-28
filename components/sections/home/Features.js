import { IconContext } from "react-icons";
import { AiFillSafetyCertificate } from "react-icons/ai";
import { GiReceiveMoney } from "react-icons/gi";
import { IoAccessibilitySharp } from "react-icons/io5";

const Features = () => {
  return (
    <>
      <div className="sm:flex mt-24 flex-wrap justify-center items-center text-center gap-8">
        <div className="w-full  sm:w-1/2 md:w-1/2 lg:w-1/4 px-4 py-4 bg-white mt-6  shadow-lg rounded-lg">
          <div className="flex-shrink-0">
            <div
              style={{ color: "white" }}
              className="flex items-center mx-auto justify-center h-12 w-12 rounded-md bg-[#383f56] text-2xl text-white"
            >
              <AiFillSafetyCertificate />
            </div>
          </div>
          <h3 className="text-2xl sm:text-3xl text-gray-700 font-semibold py-4">
            Reliable and secure
          </h3>
          <p className="text-lg  text-gray-500 py-4">
            Senders build up reputation by offering the best service for smart
            contract developers. Every single sender on the BCP platform is
            registered on-chain. Thereby, we can guarantee that all data comes
            from the original source.
          </p>
        </div>
        <div className="w-full sm:w-1/2 md:w-1/2 lg:w-1/4 px-4 py-4 mt-6 sm:mt-16 md:mt-20 lg:mt-24 bg-white shadow-lg rounded-lg">
          <div className="flex-shrink-0">
            <div className="flex items-center mx-auto justify-center h-12 w-12 rounded-md bg-[#383f56] text-2xl text-white">
              <GiReceiveMoney />
            </div>
          </div>
          <h3 className="text-2xl sm:text-3xl text-gray-700 font-semibold py-4">
            Cost efficient
          </h3>
          <p className="text-lg text-gray-500 py-4">
            Our lean design ensures minimum gas consumption for contract
            deployment as well as for order and delivery transactions. In
            addition, there are no transaction costs for any utility token.
          </p>
        </div>
        <div className="w-full sm:w-1/2 md:w-1/2 lg:w-1/4 mt-6  px-4 py-4 bg-white shadow-lg rounded-lg">
          <div className="flex-shrink-0">
            <div className="flex items-center mx-auto justify-center h-12 w-12 rounded-md bg-[#383f56] text-2xl text-white">
              <IoAccessibilitySharp />
            </div>
          </div>
          <h3 className="text-2xl sm:text-3xl text-gray-700 font-semibold py-4">
            Convenient
          </h3>
          <p className="text-lg  text-gray-500 py-4">
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
