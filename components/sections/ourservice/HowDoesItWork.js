import Image from "next/image";

const HowDoesItWork = (props) => {
  return (
    <>
      <div className="pb-1 bg-gradient-to-t to-white from-[#BDC5D8]">
        <h1 className="pt-24 text-3xl font-bold text-center text-gray-800 sm:text-center sm:text-4xl">
          {props.title}
        </h1>
        <div className="w-full m-auto mt-6 mb-6 lg:w-1/2">
          <p className="px-4 py-4 text-center text-gray-500 text-md sm:text-lg">
            {props.subTitle}
          </p>
        </div>
        <div className="boxsenderreceiver">
          <div className="largertext">
            Receivers
            <span className="largertext" style={{ float: "right" }}>
              Senders
            </span>
          </div>
          <div className="smallertext">
            Data requesters
            <span className="smallertext" style={{ float: "right" }}>
              Data providers
            </span>
          </div>
          <Image
            style="margin-top: 20px; margin-bottom: 20px;"
            className="imgsendersreceivers"
            src="/img/senderreceiver.png"
            width="9642px"
            height="2446px"
            alt=""
          />
          <div className="text-lg text-center">
            Oracles can be thought of as a mechanism for bridging the gap
            between the off-chain and the on-chain world.
          </div>
        </div>
      </div>
    </>
  );
};

export default HowDoesItWork;
