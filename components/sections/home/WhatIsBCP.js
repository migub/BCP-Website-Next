import Iframe from "react-iframe";

const WhatIsBCP = (props) => {
  return (
    <>
      <div className="relative p-6 py-20 md:pt-36 md:pb-28 lg:flex sm:justify-center sm:space-x-32 sm:items-center ">
        <div className="2xl:w-2/3">
          <h1 className="text-3xl font-bold text-center text-gray-800 sm:text-center sm:text-4xl">
            {props.title}
          </h1>
          <div className="flex flex-col items-center justify-center mt-20 lg:space-x-32 lg:flex-row sm:px-14 ">
            <div className="w-full m-auto lg:w-1/2">
              <p className="text-lg text-gray-500 sm:p-4 sm:text-xl">
                {props.description}
              </p>
            </div>
            <div className="flex items-center justify-center w-full m-auto mt-10 shadow-xl sm:w-1/2 sm:mt-0">
              <Iframe
                url="http://www.youtube.com/embed/-88c5i5PF0g"
                width="450px"
                height="450px"
                id="myId"
                className="myClassname"
                display="initial"
                position="relative"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WhatIsBCP;
