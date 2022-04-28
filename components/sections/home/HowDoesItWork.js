import Image from "next/image";

const HowDoesItWork = (props) => {
  return (
    <>
      <div className="bg-white">
        <h1 className="pt-24 text-3xl font-bold text-center text-gray-800 sm:text-center sm:text-4xl">
          {props.title}
        </h1>
        <div className="w-full m-auto mt-6 lg:w-1/2">
          <p className="px-4 py-4 text-center text-gray-500 text-md sm:text-lg">
            {props.subTitle}
          </p>
        </div>
        <div className="relative flex items-center justify-center md:w-full w-4/5 m-auto  md:my-24 h-[300px]">
          <Image
            src="/img/senderreceiver.png"
            layout="fill"
            alt=""
            objectFit="contain"
          />
        </div>
      </div>
    </>
  );
};

export default HowDoesItWork;
