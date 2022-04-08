const Application = (props) => {
    return( <div className="pb-1 bg-gradient-to-t to-white from-[#BDC5D8]">
    <h1 className="pt-24 text-2xl font-bold text-center text-gray-800 sm:text-center sm:text-3xl">{props.title}</h1>
    <div className="w-full m-auto mt-6 mb-6 lg:w-2/3">
              <p className="px-4 py-4 text-xl text-center text-gray-500">
                {props.subTitle}
              </p>
            </div>
            <div className="flex justify-center mb-14 mt-5 space-x-5">
          <a target="_blank" href={props.buttonLink} >
              <button
              className="px-4 py-2 font-bold text-white rounded bg-[#383f56] hover:bg-gray-600"
            >
              {props.buttonTitle}
            </button>
            </a>
        </div>
            </div>)
    }
    
    export default Application