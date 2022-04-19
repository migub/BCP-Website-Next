import { GiReceiveMoney } from "react-icons/gi";
import Feature from "../home/Feature";

import Reason from "./Reason";
const WhyYouShouldInvest = (props) => {
  return (
    <>
      <div className="container p-6 px-6 pt-24 mx-auto ">
        <div className="mb-16 text-center">
          <p className="mt-2 text-3xl font-bold leading-8 tracking-tight text-gray-900 sm:text-4xl">
            {props.title}
          </p>
        </div>
        <div className="flex-wrap items-center justify-center gap-8 text-center sm:flex">
          <Feature
            title={props.itemOneTitle}
            description={props.itemOneDescription}
            icon={props.itemOneIcon}
          />
          <Feature
            title={props.itemTwoTitle}
            description={props.itemTwoDescription}
            icon={props.itemTwoIcon}
          />
          <Feature
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
