const Reason = (props) => {
  return (
    <div className="w-full px-4 py-4 mt-6 bg-white sm:w-1/2 2xl:w-[30%]">
      <div className="flex-shrink-0">
        {/* <div
          style={{ color: "white" }}
          className="flex items-center mx-auto justify-center h-12 w-12 rounded-md bg-[#383f56] text-2xl text-white"
        >
          {props.icon}
        </div> */}
      </div>
      <h3 className="flex items-center justify-center py-4 text-2xl font-semibold text-gray-700 sm:text-2xl">
        {props.title}
      </h3>
      <p className="py-4 pt-2 text-gray-500 2xl:min-h-[200px] text-md">
        {props.description}
      </p>
    </div>
  );
};

export default Reason;
