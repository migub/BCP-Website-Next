import { GiReceiveMoney } from "react-icons/gi";

import Reason from "./Reason";
const WhyYouShouldInvest = (props) => {
  return (
    <>
      <div className="container p-6 px-6 pt-12 pb-12 mx-auto bg-transparent ">
        <div className="mb-16 text-center">
          <p className="mt-2 text-3xl font-extrabold leading-8 tracking-tight text-gray-900 sm:text-4xl">
            {props.title}
          </p>
        </div>
        <div className="flex flex-wrap my-12 ">
          <Reason
            title={props.itemOneTitle}
            description={props.itemOneDescription}
            icon={props.itemOneIcon}
          />
          <Reason
            title={props.itemOneTitle}
            description={props.itemOneDescription}
            icon={props.itemOneIcon}
          />
          <Reason
            title={props.itemOneTitle}
            description={props.itemOneDescription}
            icon={props.itemOneIcon}
          />
        </div>
      </div>
    </>
  );
};
export default WhyYouShouldInvest;
