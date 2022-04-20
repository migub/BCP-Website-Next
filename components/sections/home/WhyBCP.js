import Feature from "./Feature";

const WhyBCP = (props) => {
  return (
    <>
      <div
        id="whyus"
        className="relative p-6 pt-28 pb-28 sm:flex sm:justify-center sm:space-x-32 sm:items-center "
      >
        <div className="">
          <h1 className="text-3xl font-bold text-center text-gray-800 sm:text-center sm:text-4xl">
            Why Blockchain Presence?
          </h1>
          <div className="flex-wrap items-center justify-center gap-8 mt-24 text-center sm:flex">
            <Feature
              title={props.featureOneTitle}
              description={props.featureOneDescription}
              icon={props.featureOneIcon}
            />
            <Feature
              title={props.featureTwoTitle}
              description={props.featureTwoDescription}
              icon={props.featureTwoIcon}
            />
            <Feature
              title={props.featureThreeTitle}
              description={props.featureThreeDescription}
              icon={props.featureThreeIcon}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default WhyBCP;
