import Image from "next/image";
import { useRouter } from "next/router";
import { IoPlayCircle } from "react-icons/io5";
import { AnimationOnScroll } from "react-animation-on-scroll";
const Hero = (props) => {
  const router = useRouter();

  return (
    <>
      <div className="relative p-6 pt-32 pb-24 h-[100vh] sm:pt-40 lg:space-x-20 lg:px-32 title-background #module lg:flex lg:justify-center lg:items-center ">
        <div className="pb-12 lg:w-2/3">
          <AnimationOnScroll animateOnce animateIn="animate__fadeInUp">
            <h1 className="text-4xl font-bold text-left text-white sm:text-left sm:text-6xl">
              {props.title}
            </h1>
            <p
              // style={{ lineHeight: "1.1" }}
              className="mt-8 text-lg text-left text-white sm:text-xl sm:text-left"
            >
              {props.subTitle}
            </p>
          </AnimationOnScroll>

          <div className="flex justify-start mt-10 space-x-5 sm:justify-start">
            <button
              onClick={() => {
                router.push("/investors");
              }}
              className="px-4 py-2 font-bold text-white rounded bg-[#383f56] hover:bg-gray-600"
            >
              {props.buttonOneTitle}
            </button>
            <button
              onClick={() => {
                router.push("#whyus");
              }}
              className="px-4 py-2 font-semibold text-white border border-white rounded g-transparent hover:text-gray-500 hover:border-gray-600"
            >
              {props.buttonTwoTitle}
            </button>
          </div>
        </div>
        <div className="relative flex items-center justify-center w-full xl:w-1/4 h-96 ">
          <Image src="/img/logo.png" layout="fill" objectFit="contain" alt="" />
        </div>
        {/* <div className="custom-shape-divider-bottom-1648168505">
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
        </div> */}
      </div>
    </>
  );
};

export default Hero;
