import Reason from "./Reason";

const WhyYouShouldInvest = (props) => {
  return (
    <>
      <div className="container p-6 px-6 pt-24 mx-auto mt-20 mb-24 ">
        <div className="mb-16 text-center">
          <p className="mt-2 text-3xl font-bold leading-8 tracking-tight text-gray-900 sm:text-4xl">
            {props.title}
          </p>
        </div>
        <div className="flex-wrap items-center justify-center gap-8 text-center sm:flex">
          <Reason
            title={props.itemOneTitle}
            description={props.itemOneDescription}
            icon={props.itemOneIcon}
          />
          <Reason
            title={props.itemTwoTitle}
            description={props.itemTwoDescription}
            icon={props.itemTwoIcon}
          />
          <Reason
            title={props.itemThreeTitle}
            description={props.itemThreeDescription}
            icon={props.itemThreeIcon}
          />
        </div>
      </div>
    </>
  );
};
export default WhyYouShouldInvest;
