const Button = (props) => {
  return (
    <>
      {!props.outlined ? (
        <button
          onClick={props.onClick}
          type="button"
          className="text-white transition duration-150 ease-in-out transform hover:scale-110 shadow-xl bg-[#5870A1] hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-bold rounded-lg text-sm md:text-md px-5 py-2.5  md:px-7 md:py-3.5 text-center mr-2 mb-2"
        >
          {props.children}
        </button>
      ) : (
        <button
          onClick={props.onClick}
          type="button"
          className=" bg-white border transition duration-150 transform hover:scale-110 ease-in-out w-[250px] shadow-xl border-[#5870A1] hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-bold rounded-lg text-sm md:text-lg px-5 py-2.5 md:px-7 md:py-3.5 text-center mr-2 mb-2"
        >
          {props.children}
        </button>
      )}
    </>
  );
};
export default Button;
