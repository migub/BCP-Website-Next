import Image from "next/image";
import { useRouter } from "next/router";
import { IoPlayCircle } from "react-icons/io5";
import { AnimationOnScroll } from "react-animation-on-scroll";
import Button from "../../Button";
const Hero = (props) => {
  const router = useRouter();

  return (
    <>
      <div className="relative space-x-32 md:px-32  overflow-hidden shadow-xl h-[650px] md:h-[800px] 2xl:h-[800px]  p-6 pt-24 md:pt-32  sm:flex justify-center items-center herobackground">
        <div className="md:w-[960px] mt-7 md:mt-0 ">
          <AnimationOnScroll animateOnce animateIn="animate__fadeInUp">
            <h1 className="flex flex-col justify-center items-center text-4xl font-semibold text-left md:text-[3rem] whitespace-nowrap xl:text-[3.5rem] sm:text-left 2xl:text-[3.5rem]">
              {/* <div>Reliable.</div>
              <div className="text-[#5870A1] ">Convenient.</div>{" "}
              <div>Cost-Efficient.</div> */}
              <div className="leading-[50px] md:leading-[65px] w-[350px] ">
                <div className="flex mb-5 ">
<<<<<<< HEAD
                  <div className="w-full ">
                    {/* <span className="">
                      Blockchain Presence is a <br className="lg:hidden" />
                    </span>{" "} */}
                    <span className="text-[#5870A1]  ">
=======
                  <div className="">

                    <span className="text-[#5870A1]">
>>>>>>> 20ef378f300083d636b1e1b5542ff6eebd85e2c3
                      <div className="inline-flex h-12 carousel">
                        <div className="md:mt-2 xl:mt-3 2xl:mt-2 change_outer">
                          <div className="text-center change_inner">
                            <div>Reliable</div>
                            <div>Convenient</div>
                            <div className="w-[350px] md:w-auto">
                              Cost-Efficient
                            </div>
                          </div>
                        </div>
                      </div>
                    </span>{" "}
<<<<<<< HEAD
                    {/* <br className="lg:hidden" />
                    Decentralized Oracle */}
=======
                    <br className="lg:hidden" />
>>>>>>> 20ef378f300083d636b1e1b5542ff6eebd85e2c3
                  </div>
                </div>
              </div>
            </h1>
            {/* <p
              className="my-8 text-sm font-semibold text-left opacity-70 sm:text-xl sm:text-left"
            >
              {props.subTitle}
            </p> */}
          </AnimationOnScroll>
<<<<<<< HEAD
          {/* <div className="flex justify-start space-x-5 sm:justify-start">
            <Button
              onClick={() => {
                router.push("/investors");
              }}
            >
              {props.buttonOneTitle}
            </Button>
            <Button
              outlined
              onClick={() => {
                router.push("/investors");
              }}
            >
              {props.buttonTwoTitle}
            </Button>
          </div>
          <div className="text-sm mt-7">
            <span className="opacity-75 "> Need help?</span>{" "}
            <span
              onClick={() => router.push("/contact")}
              className="font-semibold underline cursor-pointer"
            >
              Contact us!
            </span>
          </div> */}
=======
          <div className="flex justify-start space-x-5 sm:justify-start">

          </div>

>>>>>>> 20ef378f300083d636b1e1b5542ff6eebd85e2c3
        </div>
        <AnimationOnScroll
          className="relative  hidden xl:flex justify-center items-center w-[650px] h-[650px]"
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
