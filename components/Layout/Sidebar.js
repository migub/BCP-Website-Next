import {
  IoHome,
  IoFlash,
  IoAccessibility,
  IoRibbon,
  IoMenu,
  IoClose,
  IoHomeSharp,
  IoSettingsSharp,
  IoStatsChartSharp,
  IoPersonCircleSharp,
  IoMapSharp,
  IoCashSharp,
  IoCreateSharp,
} from "react-icons/io5";
import { useRouter } from "next/router";
import { FaCoins } from "react-icons/fa";

const Sidebar = (props) => {
  const router = useRouter();
  return (
    <div className="fixed z-20 w-full bg-[#383f56] mt-20">
      <div className="flex flex-col sm:flex-row sm:justify-around">
        <div className="h-screen w-62">
          <nav className="px-6 mt-10 ">
            <a
              onClick={() => {
                props.onClose(false);
                router.push("/ourservice");
              }}
              className="flex items-center p-2 my-6 text-white transition-colors duration-200 rounded-lg hover:text-gray-800 hover:bg-gray-100 "
            >
              <IoFlash />
              <span className="mx-4 text-lg font-normal">Our Service</span>
              <span className="flex-grow text-right"></span>
            </a>
            <a
              onClick={() => {
                props.onClose(false);
                router.push("/investors");
              }}
              className="flex items-center p-2 my-6 text-white transition-colors duration-200 rounded-lg hover:text-gray-800 hover:bg-gray-100 "
            >
              <IoCashSharp />
              <span className="mx-4 text-lg font-normal">Investors</span>
              <span className="flex-grow text-right">
                {/* <button
                    type="button"
                    className="w-6 h-6 text-xs text-white bg-red-500 rounded-full"
                  >
                    <span className="p-1">7</span>
                  </button> */}
              </span>
            </a>
            <a
              onClick={() => {
                props.onClose(false);
                router.push("/faq");
              }}
              className="flex items-center p-2 my-6 text-white transition-colors duration-200 rounded-lg hover:text-gray-800 hover:bg-gray-100 "
              href="#coin"
            >
              <FaCoins />
              <span className="mx-4 text-lg font-normal">FAQ</span>
              <span className="flex-grow text-right"></span>
            </a>
            <a
              onClick={() => {
                props.onClose(false);
                router.push("/contact");
              }}
              className="flex items-center p-2 my-6 text-white transition-colors duration-200 rounded-lg hover:text-gray-800 hover:bg-gray-100 "
            >
              <IoMapSharp />
              <span className="mx-4 text-lg font-normal">Contact</span>
              <span className="flex-grow text-right"></span>
            </a>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
