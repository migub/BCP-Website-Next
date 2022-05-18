import { useRouter } from "next/router";
import TitleSection from "../components/TitleSection";
import Image from "next/image";
import Button from "../components/Button";
const Downloads = () => {
  const router = useRouter();

  return (
    <>
      <TitleSection
        title="Learn More"
        subTitle="Here you can find our whitepaper and research documents."
      />
      <div className="my-20 overflow-hidden">
        <div className="relative flex w-full h-[300px] space-x-20   justify-center ">
          <div className="flex flex-col items-center justify-center w-1/4 space-y-10 font-bold text-center ">
            <div>Download our Whitepaper</div>
            <Button>Download</Button>
          </div>
          <div className="relative w-1/4 h-full">
            <Image
              src="/img/whitepaper.jpg"
              alt=""
              layout="fill"
              objectFit="contain"
            />
          </div>
        </div>
        <div className="relative flex w-full h-[300px] space-x-20  justify-center mt-20 ">
          <div className="relative w-1/4 h-full">
            <Image
              src="/img/report.jpg"
              alt=""
              layout="fill"
              objectFit="contain"
            />
          </div>
          <div className="flex flex-col items-center justify-center w-1/4 space-y-10 font-bold text-center ">
            <div>
              Read the report of our strategy team about the top smart contract
              platforms
            </div>
            <Button>Download</Button>
          </div>
        </div>
        <div className="relative flex flex-col justify-center w-full mt-32 lg:flex-row lg:space-x-20 ">
          <div className="flex flex-col items-center justify-center space-y-10 font-bold text-center lg:w-1/4 ">
            <div className="px-10 pb-10 lg:px-0 lg:pb-0">
              View our presentation about layers of smart contract platforms
            </div>
          </div>
          <div className="relative w-1/4 h-full">
            <iframe
              src="https://prezi.com/p/embed/paoqvb8f_ydy/"
              id="iframe_container"
              frameBorder="0"
              webkitallowfullscreen=""
              mozallowfullscreen=""
              allowFullScreen=""
              allow="autoplay; fullscreen"
              height="315"
              width="500"
            ></iframe>
          </div>
        </div>
      </div>
    </>
  );
};

export default Downloads;
