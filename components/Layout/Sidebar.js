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
import SidebarItem from "./SidebarItem";

const Sidebar = (props) => {
  const router = useRouter();
  console.log("sb", props);
  return (
    <div className="fixed z-20 w-full mt-20 bg-white">
      <div className="flex flex-col sm:flex-row sm:justify-around">
        <div className="h-screen w-62">
          <nav className="px-6 mt-10 ">
            <SidebarItem link={props.link1} title={props.title1} />
            <SidebarItem link={props.link2} title={props.title2} />
            <SidebarItem link={props.link3} title={props.title3} />
            <SidebarItem link={props.link4} title={props.title4} />
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
