import Image from "next/image";
import { useRouter } from "next/router";
const Relations = (props) => {
  const router = useRouter();
  return (
    <>
      <div className=" py-8 overflow-hidden bg-[#384054] md:flex md:space-x-24 2xl:space-x-0 justify-center items-center ">
        <div className="text-center text-white md:w-2/5 md:text-left">
          <p className="mb-4 text-3xl font-bold leading-8 tracking-tight sm:text-3xl">
            {props.title}
          </p>
          <div className="text-lg text-center md:px-10 md:px-0 md:text-left opacity-80">
            Contact our investor relations office:
            investor.relations@blockchainpresence.net
          </div>
          <button
            onClick={() => {
              router.push(props.buttonLink);
            }}
            className="px-4 py-2 mt-5 font-bold text-black bg-white rounded hover:bg-gray-600"
          >
            {props.buttonTitle}
          </button>
        </div>
        <div className="flex flex-col items-center justify-center ">
          <div className="relative overflow-hidden rounded-full shadow-xl mt-14 md:mt-0 w-44 h-44">
            <Image
              src="/img/tamara.png"
              alt=""
              layout="fill"
              objectFit="cover"
            />
          </div>
          <div className="w-full h-12 mt-3 text-center text-white ">
            <span className="font-semibold">Tamara Weidmann</span> <br />
            Investor Relations Assistant
          </div>
        </div>
      </div>
    </>
  );
};

export default Relations;
