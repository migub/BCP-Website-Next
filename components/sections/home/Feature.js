const Feature = (props) => {
  return (
    <div className="w-full px-4 py-4 mt-6 bg-white rounded-lg shadow-lg sm:w-1/2 xl:h-[400px] 2xl:h-[350px] xl:w-1/4">
      <div className="flex-shrink-0">
        <div
          style={{ color: "white" }}
          className="flex items-center mx-auto justify-center h-12 w-12 rounded-md bg-[#383f56] text-2xl text-white"
        >
          {props.icon}
        </div>
      </div>
      <h3 className="py-4 text-2xl font-semibold text-gray-700 md:h-[70px] sm:text-3xl">
        {props.title}
      </h3>
      <p className="py-4 text-lg text-gray-500">{props.description}</p>
    </div>
  );
};

export default Feature;
