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
        <div className="boxsenderreceiver">
          <Image
            style="margin-top: 20px; margin-bottom: 20px;"
            className="imgsendersreceivers"
            src="/img/senderreceiver.png"
            width="9642px"
            height="2446px"
            alt=""
          />
        </div>
      </div>
    </>
  );
};

export default HowDoesItWork;
