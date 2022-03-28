import { AnimationOnScroll } from "react-animation-on-scroll";
import Image from "next/image";
import ContactForm from "../components/sections/contact/ContactForm";
const Contact = () => {
  return (
    <>
      <div className="relative p-6 pt-44 pb-28 sm:flex sm:justify-center sm:items-center bg-gradient-to-t to-[#BDC5D8] from-[#BDC5D8]">
        <div className=" sm:w-1/4 pb-12 sm:min-w-[300px]">
          <h1 className="text-4xl font-bold text-center text-gray-800 sm:text-center sm:text-6xl">
            Contact Us
          </h1>
        </div>
        <div className="custom-shape-divider-bottom-1648168505">
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M1200 120L0 16.48 0 0 1200 0 1200 120z"
              className="shape-fill"
            ></path>
          </svg>
        </div>
      </div>
      {/* <Offer /> */}
      <div className="bg-gradient-to-t to-white from-[#BDC5D8] pt-12 pb-20">
        <ContactForm />
      </div>
    </>
  );
};

export default Contact;
