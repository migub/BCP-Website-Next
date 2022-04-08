const applicationprocess = (props) => {
    return (
      <>
        <div
          id="earn"
          className="relative bg-[#BDC5D8] p-6 pt-36 pb-28 sm:flex sm:justify-center sm:space-x-32 sm:items-center "
        >
          <div className="">
            <div className="custom-shape-divider-top-1648170642">
              <svg
                data-name="Layer 1"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 1200 120"
                preserveAspectRatio="none"
              >
                <path
                  d="M1200 120L0 16.48 0 0 1200 0 1200 120z"
                  className="shape-fill"
                ></path>
              </svg>
            </div>
            <h1 className="text-4xl font-bold text-center text-gray-800 sm:text-center sm:text-6xl">
              {props.title}
            </h1>
            <div className="w-full m-auto mt-16 lg:w-1/2">
              <p className="px-4 py-4 text-xl text-gray-500">
                {props.description}
              </p>
            </div>
          </div>
        </div>
      </>
    );
  };
  
  export default applicationprocess;v