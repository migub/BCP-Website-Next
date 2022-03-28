import Image from "next/image";
import {
  FaInstagram,
  FaTwitter,
  FaLinkedin,
  FaTiktok,
  FaYoutube,
  FaMedium,
} from "react-icons/fa";
const Footer = () => {
  return (
    <footer className="bg-[#383f56] w-full py-8">
      <div className="max-w-screen-xl px-4 mx-auto">
        {/* <ul className="flex flex-wrap justify-between max-w-screen-md mx-auto text-lg font-light">
          <li className="my-2">
            <a
              className="text-gray-300 transition-colors duration-200 hover:text-gray-800"
              href="#"
            >
              FAQ
            </a>
          </li>
          <li className="my-2">
            <a
              className="text-gray-300 transition-colors duration-200 hover:text-gray-800"
              href="#"
            >
              Configuration
            </a>
          </li>
          <li className="my-2">
            <a
              className="text-gray-300 transition-colors duration-200 hover:text-gray-800"
              href="#"
            >
              Github
            </a>
          </li>
          <li className="my-2">
            <a
              className="text-gray-300 transition-colors duration-200 hover:text-gray-800"
              href="#"
            >
              LinkedIn
            </a>
          </li>
        </ul> */}
        <div className="flex items-center justify-between max-w-xs pt-8 mx-auto">
          <a
            title="bcp-instagram"
            target="_blank"
            href="https://www.instagram.com/blockchain_presence/"
            className="text-gray-300 transition-colors duration-200 hover:text-gray-800"
          >
            <FaInstagram style={{ fontSize: "20px" }} />
          </a>
          <a
            title="bcp-twitter"
            target="_blank"
            href="https://twitter.com/BCpresence"
            className="text-gray-300 transition-colors duration-200 hover:text-gray-800"
          >
            <FaTwitter style={{ fontSize: "20px" }} />
          </a>
          <a
            target="_blank"
            data-type="LinkedIn"
            title="bcp-linkedIn"
            href="https://www.linkedin.com/company/blockchain-presence/"
            className="text-gray-300 transition-colors duration-200 hover:text-gray-800"
          >
            <FaLinkedin style={{ fontSize: "20px" }} />
          </a>
          <a
            target="_blank"
            data-type="Custom"
            title="bcp-tiktok"
            href="https://www.tiktok.com/@blockchain_presence"
            className="text-gray-300 transition-colors duration-200 hover:text-gray-800"
          >
            <FaTiktok style={{ fontSize: "20px" }} />
          </a>
          <a
            target="_blank"
            data-type="YouTube"
            title="bcp-youtube"
            href="https://www.youtube.com/channel/UC5CXdL-Lzik6ks3Iq4g_GIQ"
            className="text-gray-300 transition-colors duration-200 hover:text-gray-800"
          >
            <FaYoutube style={{ fontSize: "20px" }} />
          </a>
          <a
            target="_blank"
            data-type="Medium"
            title="bcp-medium"
            href="https://medium.com/@BCPresence"
            className="text-gray-300 transition-colors duration-200 hover:text-gray-800"
          >
            <FaMedium style={{ fontSize: "20px" }} />
          </a>
        </div>
        <div className="flex justify-center mt-10 space-x-10">
          <div>
            <Image
              src="/img/austrianreward.png"
              alt=""
              width="75px"
              height="75px"
            />
          </div>
          <div>
            <Image src="/img/uzhcircle.png" alt="" width="75px" height="75px" />
          </div>
        </div>
        <div className="flex items-center justify-center pt-10 font-light text-center text-gray-500 sm:pt-12">
          Created by Blockchain Presence AG
        </div>
        <div className="text-center text-gray-500">
          <a href="mailto:info@blockchainpresence.net">
            info@blockchainpresence.net
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
