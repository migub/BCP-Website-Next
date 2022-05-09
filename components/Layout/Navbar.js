import Image from "next/image";
import { useRouter } from "next/router";

import { useState, useEffect } from "react";
import { IoMenu, IoClose } from "react-icons/io5";
import Sidebar from "./Sidebar";

const Navbar = (props) => {
  const [navBackground, setNavBackground] = useState("");
  const [mobileMenuColor, setMobileMenuColor] = useState("");
  const router = useRouter();
  console.log(router.pathname);

  // useEffect(() => {
  //   if (router.pathname == "/") {
  //     setNavBackground("bg-transparent text-black");
  //     setMobileMenuColor("white");
  //   } else {
  //     setNavBackground("bg-white shadow-lg text-black");
  //     setMobileMenuColor("black");
  //   }
  // }, []);

  useEffect(() => {
    const handleScroll = () => {
      const show = window.scrollY > 150;
      if (show) {
        setNavBackground("bg-white shadow-lg text-black");
        setMobileMenuColor("black");
      } else {
        setNavBackground("bg-transparent text-black");
        setMobileMenuColor("white");
      }
    };
    document.addEventListener("scroll", handleScroll);
    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, [router.pathname]);

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
      <div
        className={`fixed z-20 flex items-center justify-between w-full p-2 ${navBackground} md:h-[110px]`}
      >
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
            <h1 className="hidden text-xl font-bold text-left whitespace-nowrap md:block sm:text-left sm:text-xl">
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
              <IoMenu
                style={{ color: { mobileMenuColor }, fontSize: "25px" }}
              />
            ) : (
              <IoClose
                style={{ color: { mobileMenuColor }, fontSize: "25px" }}
              />
            )}
          </div>
        </div>
        <div className="hidden pr-8 space-x-16 whitespace-nowrap sm:flex ">
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
        </div>
      </div>
      {modal && (
        <Sidebar
          onClose={setModal}
          title1={props.title1}
          link1={props.link1}
          title2={props.title2}
          link2={props.link2}
          title3={props.title3}
          link3={props.link3}
          title4={props.title4}
          link4={props.link4}
        />
      )}
    </>
  );
};

export default Navbar;
