import { useRouter } from "next/router";
import TitleSection from "../components/TitleSection";
import Image from "next/image";
import Button from "../components/Button";
const Downloads = () => {
  const router = useRouter();

  return (
    <>
      <TitleSection
        title="Downloads"
        subTitle="Here you can find additional information about us"
      />
      <div className="my-20">
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
      </div>
    </>
  );
};

export default Downloads;