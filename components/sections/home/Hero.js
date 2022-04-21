import Image from "next/image";
import { useRouter } from "next/router";
import { IoPlayCircle } from "react-icons/io5";
import { AnimationOnScroll } from "react-animation-on-scroll";
const Hero = (props) => {
  const router = useRouter();

  return (
    <>
      <div className="relative overflow-hidden space-x-3  md:h-[75vh] p-6 pt-32 pb-24 sm:pt-52 sm:flex justify-center items-center herobackground">
        <div className="xl:ml-52 mt-7 md:mt-0 xl:w-1/3   md:pb-12 sm:min-w-[450px]">
          <AnimationOnScroll animateOnce animateIn="animate__fadeInUp">
            <h1 className="flex flex-col space-y-4 text-4xl font-extrabold text-left text-white 2xl:text-8xl sm:text-left md:text-8xl">
              <div>Reliable.</div>
              <div className="text-[#5870A1] ">Convenient.</div>{" "}
              <div>Cost-Efficient.</div>
            </h1>
            <p
              // style={{ lineHeight: "1.1" }}
              className="my-8 text-sm text-left text-white opacity-75 sm:text-xl sm:text-left"
            >
              {props.subTitle}
            </p>
          </AnimationOnScroll>

          <div className="flex justify-start space-x-5 sm:justify-start">
            <button
              onClick={() => {
                router.push("/investors");
              }}
              className="px-6 py-3 text-sm font-bold text-white shadow-lg rounded-2xl bg-[#383F57] md:bg-[#5870A1] hover:bg-white hover:text-[#5870A1] border-[0.5px] border-[#5870A1] "
            >
              {props.buttonOneTitle}
            </button>
            <button
              onClick={() => {
                router.push("#whyus");
              }}
              className="px-4 py-2 font-semibold  text-sm text-white border border-white rounded-2xl bg-[#383F57] hover:bg-white hover:text-[#5870A1]"
            >
              {props.buttonTwoTitle}
            </button>
          </div>
        </div>
        <AnimationOnScroll
          className="relative hidden xl:flex justify-center items-center mb-20 w-2/5 h-[700px]"
          animateOnce
          animateIn="animate__fadeIn"
        >
          <Image src="/img/hero.png" layout="fill" objectFit="contain" />
        </AnimationOnScroll>
      </div>
    </>
  );
};

export default Hero;
