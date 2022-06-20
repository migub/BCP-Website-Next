import { useRouter } from "next/router";
import TitleSection from "../components/TitleSection";
import Image from "next/image";
import Button from "../components/Button";
const LearnMore = () => {
  const router = useRouter();
  function download(url) {
    const URL = url;
    if (typeof window !== "undefined") {
      window.location.href = URL;
    }
  }
  return (
    <>
      <TitleSection
        // className="h-[300px]  lg:pt-64 lg:pb-52"
        title="Learn More"
        subTitle={
          <div>
            Below you can find a selection of research documents produced by our
            strategy team. To obtain financial statements of Blockchain Presence
            AG, please contact our{" "}
            <span
              onClick={() => {
                router.push("/investors");
              }}
              className="text-blue-600 cursor-pointer"
            >
              investor relations team
            </span>
            .
          </div>
        }
        subtitleStyle="text-justify sm:text-justify"
      />
      <div className="my-20 overflow-hidden">
        <div className="relative flex w-full h-[300px] space-x-20   justify-center ">
          <div className="flex flex-col items-center justify-center w-1/4 space-y-10 font-bold text-center ">
            <div>Learn how we distribute dividends via smart contract</div>
            <Button
              onClick={() =>
                download("/static/Dividend_Distribution_via_Smart_Contract.pdf")
              }
            >
              View Slide Deck
            </Button>
          </div>
          <div className="relative w-1/4 h-full">
            <Image
              src="/img/dividends.jpg"
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
              Read the report of our strategy team about the top smart contract platforms.</div>
            <Button
              onClick={() =>
                download("/static/top_smart_contract_platforms.pdf")
              }
            >
              View Report
            </Button>
          </div>
        </div>

        <div className="relative flex w-full h-[300px] space-x-20  justify-center mt-20">
          <div className="flex flex-col items-center justify-center w-1/4 space-y-10 font-bold text-center ">
            <div>Read the report of our strategy team about IOTA. </div>
            <Button
              onClick={() =>
                download("/static/IOTA_Research_Report.pdf")
              }
            >
              View Slide Deck
            </Button>
          </div>
          <div className="relative w-1/4 h-full">
            <Image
              src="/img/iota.jpg"
              alt=""
              layout="fill"
              objectFit="contain"
            />
          </div>
        </div>

        <div className="relative flex w-full h-[300px] space-x-20  justify-center mt-20 ">
          <div className="relative w-1/4 h-full">
            <Image
              src="/img/bookmarkers.jpg"
              alt=""
              layout="fill"
              objectFit="contain"
            />
          </div>
          <div className="flex flex-col items-center justify-center w-1/4 space-y-10 font-bold text-center ">
            <div>
              Read the report of our strategy team about the bookmarkers with oracles.
            </div>

            <Button
              onClick={() =>
                download("/static/Bookmarkers.pdf")
              }
            >
              View Report
            </Button>
          </div>
        </div>

        <div className="relative flex w-full h-[300px] space-x-20   justify-center mt-20">
          <div className="flex flex-col items-center justify-center w-1/4 space-y-10 font-bold text-center ">
            <div>Read the report of our strategy team about the Ethereum Layer 2 solution.</div>
            <Button
              onClick={() =>
                download("/static/Ethereum_Layer_2.pdf")
              }
            >
              View Report
            </Button>
          </div>
          <div className="relative w-1/4 h-full">
            <Image
              src="/img/ethereum_layer_2.jpg"
              alt=""
              layout="fill"
              objectFit="contain"
            />
          </div>
        </div>
        <div className="relative flex flex-col items-center justify-center w-full mt-32 lg:flex-row lg:space-x-20 ">
          <div className="flex flex-col items-center justify-center space-y-10 font-bold text-center lg:w-1/4 ">
            <div className="px-10 pb-10 lg:px-0 lg:pb-0">
              View our presentation about layers of smart contract platforms
            </div>
          </div>
          <div className="relative h-full">
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

export default LearnMore;
