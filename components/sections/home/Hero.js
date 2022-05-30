import Image from "next/image";
import { useRouter } from "next/router";
import { IoPlayCircle } from "react-icons/io5";
import { AnimationOnScroll } from "react-animation-on-scroll";
import Button from "../../Button";
const Hero = (props) => {
  const router = useRouter();

  return (
    <>
      <div className="relative space-x-32 lg:px-32  overflow-hidden shadow-xl h-[600px] lg:h-[800px] 2xl:h-[800px]  p-6 pt-24 md:pt-32  lg:flex justify-center items-center herobackground">
        <div className="lg:w-[960px] mt-7 lg:mt-0 ">
          <AnimationOnScroll animateOnce animateIn="animate__fadeInUp">
            <h1 className="flex flex-col font-semibold text-left ">
              {/* <div>Reliable.</div>
              <div className="text-[#5870A1] ">Convenient.</div>{" "}
              <div>Cost-Efficient.</div> */}
              <span className="text-5xl leading-[60px] lg:text-6xl mb-7">
                Blockchain Presence
              </span>
              <div className="">
                <div className="flex mb-5 ">
                  <div className="">
                    <span className="opacity-80  text-[1.5rem] lg:text-[1.7rem]">
                      A Low-Cost Smart Contract Oracle with On-Chain
                      Authentication
                    </span>{" "}
                    {/* <span className="text-[#5870A1]">
                      <div className="inline-flex h-12 carousel">
                        <div className="md:mt-2 xl:mt-3 2xl:mt-2 change_outer">
                          <div className=" change_inner">
                            <div>Reliable</div>
                            <div>Convenient</div>
                            <div className="w-[350px]">Cost-Efficient</div>
                          </div>
                        </div>
                      </div>
                    </span> */}
                  </div>
                </div>
              </div>
            </h1>
            <p
              // style={{ lineHeight: "1.1" }}
              className="my-8 text-sm font-semibold text-left opacity-70 sm:text-xl sm:text-left"
            >
              {props.subTitle}
            </p>
          </AnimationOnScroll>
          <div className="flex justify-start space-x-5 sm:justify-start">
            <Button
              outlined
              onClick={() => {
                router.push(props.buttonOneLink);
              }}
            >
              {props.buttonOneTitle}
            </Button>
            <Button
              outlined
              onClick={() => {
                router.push(props.buttonTwoLink);
              }}
            >
              {props.buttonTwoTitle}
            </Button>
            <Button
              outlined
              onClick={() => {
                router.push(props.buttonThreeLink);
              }}
            >
              {props.buttonThreeTitle}
            </Button>
          </div>
          {/* <div className="text-sm mt-7">
            <span className="opacity-75 "> Need help?</span>{" "}
            <span
              onClick={() => router.push("/contact")}
              className="font-semibold underline cursor-pointer"
            >
              Contact us!
            </span>
          </div> */}
        </div>
        <AnimationOnScroll
          className="relative  hidden xl:flex justify-center items-center w-[750px] h-[750px]"
          animateOnce
          animateIn="animate__fadeIn"
        >
          <Image src="/img/mockup-bcp.png" layout="fill" objectFit="contain" />
        </AnimationOnScroll>
      </div>
    </>
  );
};

export default Hero;
