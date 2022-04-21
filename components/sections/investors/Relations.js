const Relations = (props) => {
  return (
    <>
      <div className=" py-10 bg-[#384054] herobackground flex justify-center items-center ">
        <div className="w-2/3 text-left">
          <p className="mb-6 text-3xl font-bold leading-8 tracking-tight text-white sm:text-4xl">
            {props.title}
          </p>
          <div className="text-lg text-left text-white opacity-80">
            Contact our Investor Relations Office:
            investor.relations@blockchainpresence.net
          </div>
          <button
            onClick={() => {
              router.push(props.buttonLink);
            }}
            className="px-4 py-2 mt-6 font-bold bg-white rounded hover:bg-gray-600"
          >
            {props.buttonTitle}
          </button>
        </div>
      </div>
    </>
  );
};

export default Relations;
