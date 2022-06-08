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
const Footer = () => {
  const router = useRouter();
  return (
    <footer className="bg-[#383f56] h-[300px] w-full py-8">
      <div className="max-w-screen-xl px-4 mx-auto">
        <div className="flex items-center justify-center space-x-1 text-white opacity-75"></div>
        <div className="items-center justify-center pt-8 md:space-x-10 md:flex ">
          <div className="flex items-center justify-center space-x-10">
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
          </div>

          <div className="flex items-center justify-center mt-10 space-x-10 md:mt-0">
            <div>
              <a href="https://www.innovation.uzh.ch/de/stories/allspinoffs-startups.html">
                <Image
                  src="/img/uzhcircle.png"
                  alt=""
                  width="70px"
                  height="70px"
                />
              </a>
            </div>
            <div>
              <a href="https://www.wko.at/service/innovation-technologie-digitalisierung/austrian-blockchain-award-2021.html">
                <Image
                  src="/img/austrianreward.png"
                  alt=""
                  width="70px"
                  height="70px"
                />
              </a>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center mt-8 space-y-1 text-white opacity-50">
          <div
            onClick={() => router.push("/privacy-policy")}
            className="cursor-pointer"
          >
            Privacy Policy
          </div>
          <div
            onClick={() => router.push("/terms-of-use")}
            className="cursor-pointer"
          >
            Terms of Use
          </div>
        </div>
        <div className="pt-5 text-center text-white opacity-50 ">
          <a href="mailto:info@blockchainpresence.net">
            info@blockchainpresence.net
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
