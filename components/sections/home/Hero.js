import Image from "next/image";
import { useRouter } from "next/router";
import { IoPlayCircle } from "react-icons/io5";
import { AnimationOnScroll } from "react-animation-on-scroll";
const Hero = (props) => {
  const router = useRouter();

  return (
    <>
      <div className="relative p-6 pt-32 pb-24 sm:pt-52 sm:flex sm:justify-center sm:items-center bg-gradient-to-b to-white from-[#5870a16e]">
        <div className=" sm:w-2/5 pb-12  sm:min-w-[450px]">
          <AnimationOnScroll animateOnce animateIn="animate__fadeInUp">
            <h1 className="text-4xl font-extrabold text-left text-gray-800 sm:text-left sm:text-5xl">
              {props.title}
            </h1>
            <p
              // style={{ lineHeight: "1.1" }}
              className="mt-8 text-lg text-left text-gray-700 sm:text-xl sm:text-left"
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
              className="px-4 py-2 font-semibold border rounded g-transparent text-[#383f56] hover:text-gray-500 border-[#383f56] hover:border-gray-600"
            >
              {props.buttonTwoTitle}
            </button>
          </div>
        </div>
        <div className="flex justify-center sm:pl-16">
          <Image src="/img/logo.png" width="300" height="300" alt="" />
        </div>
      </div>
    </>
  );
};

export default Hero;
