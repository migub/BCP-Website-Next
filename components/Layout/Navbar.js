import Image from "next/image";
import { useRouter } from "next/router";

import { useState } from "react";
import {
  IoMenu,
  IoClose,
  IoHomeSharp,
  IoSettingsSharp,
  IoStatsChartSharp,
  IoPersonCircleSharp,
  IoMapSharp,
  IoCreateSharp,
} from "react-icons/io5";
import Sidebar from "./Sidebar";

const Navbar = (props) => {
  const router = useRouter();
  const [modal, setModal] = useState(false);
  const openNavbar = () => {
    if (modal == true) {
      setModal(false);
    } else {
      setModal(true);
    }
  };
  return (
    <>
      <div className="fixed z-20 flex items-center justify-between w-full p-2 bg-[#383F57] shadow-lg lg:pl-[10%] lg:pr-[10%] h-20">
        <div
          onClick={() => router.push("/")}
          className="flex items-center h-16 space-x-2 overflow-hidden cursor-pointer w-96"
        >
          <div className="flex w-16 mx-3 ">
            <Image
              src="/img/logo.png"
              width="400"
              height="400"
              objectFit="contain"
              alt=""
            />
          </div>
          <div>
            <h1 className="hidden text-xl font-bold text-left text-white whitespace-nowrap md:block sm:text-left sm:text-xl">
              Blockchain <br />
              Presence
            </h1>
          </div>
        </div>
        <div className="flex space-x-4 sm:hidden">
          <div
            onClick={() => openNavbar()}
            className="flex items-center justify-center w-12 h-12 rounded-full"
          >
            {!modal ? (
              <IoMenu style={{ color: "white", fontSize: "25px" }} />
            ) : (
              <IoClose style={{ color: "white", fontSize: "25px" }} />
            )}
          </div>
        </div>
        <div className="hidden space-x-16 text-white whitespace-nowrap sm:flex ">
          <div
            onClick={() => router.push(props.link1)}
            className="flex items-center space-x-2 cursor-pointer hover:text-gray-200"
          >
            <p>{props.title1}</p>
          </div>
          <div
            onClick={() => {
              router.push(props.link2);
            }}
            className="flex items-center space-x-2 cursor-pointer hover:text-gray-200"
          >
            <p>{props.title2}</p>
          </div>
          <div
            onClick={() => {
              router.push(props.link3);
            }}
            className="flex items-center space-x-2 cursor-pointer hover:text-gray-200"
          >
            <p>{props.title3}</p>
          </div>
          <div
            onClick={() => {
              router.push(props.link4);
            }}
            className="flex items-center space-x-2 cursor-pointer hover:text-gray-200"
          >
            <p>{props.title4}</p>
          </div>
          {/* <IoPersonCircleSharp className="text-4xl text-gray-500 cursor-pointer hover:text-gray-200" /> */}
          {/* <button className="px-4 py-2 font-bold text-white rounded bg-cyan-500 hover:bg-cyan-700">
            Connect Wallet
          </button> */}
        </div>
      </div>
      {modal && <Sidebar onClose={setModal} />}
    </>
  );
};

export default Navbar;
