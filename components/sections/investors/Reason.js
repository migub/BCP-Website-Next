const Reason = (props) => {
  return (
    <div className="w-full p-8 md:w-1/2 lg:w-1/3 ">
      <div className="flex items-center h-16 mb-6 font-semibold">
        <div>
          <div
            style={{ color: "white" }}
            className="flex mr-4 items-center  justify-center h-12 w-12 rounded-md bg-[#383f56] text-2xl text-white"
          >
            {props.icon}
          </div>
        </div>
        <div className="text-xl ">{props.title}</div>
      </div>
      <p className="leading-loose text-black text-md">{props.description}</p>
    </div>
  );
};

export default Reason;
