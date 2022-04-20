import Features from "./Features";

const WhyUs = () => {
  return (
    <>
      <div
        id="whyus"
        className="relative p-6 pt-28 pb-28 sm:flex sm:justify-center sm:space-x-32 sm:items-center "
      >
        <div className="">
          <h1 className="text-4xl font-bold text-center text-gray-800 sm:text-center sm:text-6xl">
            Why Blockchain Presence?
          </h1>
          <div className="w-2/3 2xl:w-1/2 m-auto mt-12 bg-gray-400 h-[0.5px]" />
          <Features />
        </div>
      </div>
    </>
  );
};

export default WhyUs;
