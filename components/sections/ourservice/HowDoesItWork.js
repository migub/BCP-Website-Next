import Image from "next/image";

const HowDoesItWork = () => {
  return (
    <>
      <div className="mt-12 pb-1 bg-gradient-to-t to-white from-[#BDC5D8]">
        <h1 className="text-4xl font-bold pt-24 text-center text-gray-800 sm:text-center sm:text-6xl">
          How does it work?
        </h1>
        <div className="w-full lg:w-1/2 mt-6 mb-6 m-auto">
          <p className="text-xl text-center text-gray-500  px-4 py-4">
            The main role of the Blockchain Presence blockchain oracle is to
            connect data providers (senders) and data requesters (receivers) and
            create a reliable platform for data transactions.
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
          <div className="boxunderimg">
            Oracles can be thought of as a mechanism for bridging the gap
            between the off-chain world and the on-chain world.
          </div>
        </div>
      </div>
    </>
  );
};

export default HowDoesItWork;
