import { AnimationOnScroll } from "react-animation-on-scroll";

const StudentExperience = (props) => {
  return (
    <>
      <div
        id="earn"
        className="relative p-6 py-20  pb-28 sm:flex sm:justify-center sm:space-x-32 sm:items-center"
      >
        <div className="">
          <h1 className="text-3xl font-bold text-center text-gray-800 sm:text-center sm:text-4xl">
            {props.title}
          </h1>
          <div className="flex items-center justify-center mt-20 px-14 ">
            <div className="w-[350px] m-auto shadow-xl bg-gray-200 h-[350px] flex justify-center items-center">
              [Portrait von Julia]
            </div>
            <div className="w-full m-auto lg:w-1/2">
              <p className="px-4 py-4 text-lg text-gray-500 sm:text-xl">
                {props.description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default StudentExperience;
