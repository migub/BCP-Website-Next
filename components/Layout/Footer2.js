import Image from "next/image";
import { useRouter } from "next/router";
import Link from "next/link";
import {
  FaInstagram,
  FaTwitter,
  FaLinkedin,
  FaTiktok,
  FaYoutube,
  FaMedium,
} from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";
const Footer2 = () => {
  const router = useRouter();
  return (
    <footer className="bg-[#383f56] h-[300px] w-full py-8">
      <div className="max-w-screen-xl px-4 mx-auto">
        <div className="flex items-center justify-center space-x-1 text-white opacity-75">
          {/* <div
            onClick={() => router.push("/student-internships")}
            className="flex items-center justify-center space-x-1 cursor-pointer"
          >
            <FiExternalLink />
            <div>Student Interships</div>
          </div> */}
        </div>
        <div className="flex items-center justify-center pt-8 mx-auto space-x-10">
          <a
            title="bcp-instagram"
            target="_blank"
            rel="noreferrer"
            href="https://www.instagram.com/blockchain_presence/"
            className="text-gray-300 transition-colors duration-200 hover:text-gray-800"
          >
            <FaInstagram style={{ fontSize: "30px" }} />
          </a>
          <a
            title="bcp-twitter"
            target="_blank"
            rel="noreferrer"
            href="https://twitter.com/BCpresence"
            className="text-gray-300 transition-colors duration-200 hover:text-gray-800"
          >
            <FaTwitter style={{ fontSize: "30px" }} />
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            data-type="LinkedIn"
            title="bcp-linkedIn"
            href="https://www.linkedin.com/company/blockchain-presence/"
            className="text-gray-300 transition-colors duration-200 hover:text-gray-800"
          >
            <FaLinkedin style={{ fontSize: "30px" }} />
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            data-type="Custom"
            title="bcp-tiktok"
            href="https://www.tiktok.com/@blockchainpresence"
            className="text-gray-300 transition-colors duration-200 hover:text-gray-800"
          >
            <FaTiktok style={{ fontSize: "30px" }} />
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            data-type="YouTube"
            title="bcp-youtube"
            href="https://www.youtube.com/channel/UC5CXdL-Lzik6ks3Iq4g_GIQ"
            className="text-gray-300 transition-colors duration-200 hover:text-gray-800"
          >
            <FaYoutube style={{ fontSize: "30px" }} />
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            data-type="Medium"
            title="bcp-medium"
            href="https://medium.com/@BCPresence"
            className="text-gray-300 transition-colors duration-200 hover:text-gray-800"
          >
            <FaMedium style={{ fontSize: "30px" }} />
          </a>
          <div>
            <Image
              src="/img/austrianreward.png"
              alt=""
              width="70px"
              height="70px"
            />
          </div>
          <div>
            <Image src="/img/uzhcircle.png" alt="" width="70px" height="70px" />
          </div>
        </div>
        <div className="flex justify-center mt-10 space-x-10"></div>
        <div className="pt-5 text-center text-white opacity-50">
          <a href="mailto:info@blockchainpresence.net">
            info@blockchainpresence.net
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer2;
