const Roadmap = () => {
  return (
    <>
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:pb-32 lg:pt-0">
        <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
          <h2 className="max-w-lg mb-6 text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
            <span className="relative inline-block">
              <span className="relative">Our Roadmap</span>
            </span>
          </h2>
          <p className="text-base text-gray-700 md:text-lg">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque rem aperiam, eaque ipsa quae. // Dummy text
          </p>
        </div>
        <div className="relative grid gap-8 row-gap-5 mb-8 md:row-gap-8 lg:grid-cols-4 sm:grid-cols-2">
          <div className="absolute inset-0 flex items-center justify-center sm:hidden lg:flex">
            <div className="w-px h-full bg-gray-300 lg:w-full lg:h-px"></div>
          </div>
          <div className="p-5 duration-300 transform bg-white border rounded shadow-sm hover:-translate-y-2">
            <div className="flex items-center justify-between mb-2">
              <p className="text-lg font-bold leading-5">Idea</p>
              <p className="flex items-center justify-center h-6 px-2 font-bold rounded text-deep-purple-accent-400 bg-indigo-50">
                2019
              </p>
            </div>
            <p className="text-sm text-gray-900">
              Research project started at the University of Zurich
            </p>
          </div>
          <div className="p-5 duration-300 transform bg-white border rounded shadow-sm hover:-translate-y-2">
            <div className="flex items-center justify-between mb-2">
              <p className="text-lg font-bold leading-5">Corporation</p>
              <p className="flex items-center justify-center h-6 px-2 font-bold rounded text-deep-purple-accent-400 bg-indigo-50">
                2020
              </p>
            </div>
            <p className="text-sm text-gray-900">
              BCP became an offical spin-off of the University of Zurich
            </p>
          </div>
          <div className="p-5 duration-300 transform bg-white border rounded shadow-sm hover:-translate-y-2">
            <div className="flex items-center justify-between mb-2">
              <p className="text-lg font-bold leading-5">Accomplishment</p>
              <p className="flex items-center justify-center h-6 px-2 font-bold rounded text-deep-purple-accent-400 bg-indigo-50">
                2021
              </p>
            </div>
            <p className="text-sm text-gray-900">
              BCP won the third place of the Austrian Blockchain Award
            </p>
          </div>
          <div className="p-5 duration-300 transform bg-white border rounded shadow-sm hover:-translate-y-2">
            <div className="flex items-center justify-between mb-2">
              <p className="text-lg font-bold leading-5">Innovation</p>
              <p className="flex items-center justify-center h-6 px-2 font-bold rounded text-deep-purple-accent-400 bg-indigo-50">
                2022
              </p>
            </div>
            <p className="text-sm text-gray-900">
              Successful dividend payment via smart contract
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
export default Roadmap;
