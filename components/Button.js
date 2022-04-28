const Button = (props) => {
  return (
    <>
      {!props.outlined ? (
        <button
          onClick={props.onClick}
          type="button"
          class="text-white shadow-xl bg-[#5870A1] hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-bold rounded-lg text-sm md:text-md px-5 py-2.5  md:px-7 md:py-3.5 text-center mr-2 mb-2"
        >
          {props.children}
        </button>
      ) : (
        <button
          onClick={props.onClick}
          type="button"
          class=" bg-white border shadow-xl border-[#5870A1] hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-bold rounded-lg text-sm md:text-md px-5 py-2.5 md:px-7 md:py-3.5 text-center mr-2 mb-2"
        >
          {props.children}
        </button>
      )}
    </>
  );
};
export default Button;
