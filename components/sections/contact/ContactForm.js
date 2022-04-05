import { useState } from "react";

const ContactForm = () => {
  const [ticked, setTicked] = useState(false);

  return (
    <>
      <form
        method="POST"
        encType="multipart/form-data"
        name="EmailForm"
        className="flex w-full max-w-xl m-auto space-x-3"
      >
        <div className="w-full max-w-3xl px-5 py-10 m-auto  bg-[#BDC5D8] rounded-lg shadow">
          {/* <div className="mb-6 text-3xl font-light text-center text-gray-800 dark:text-white">
            Contact us !
          </div> */}
          <div className="grid max-w-xl grid-cols-2 gap-4 m-auto">
            <div className="col-span-2 lg:col-span-1">
              <div className="relative ">
                <input
                  type="text"
                  id="contact-form-name"
                  className="flex-1 w-full px-4 py-2 text-base text-gray-700 placeholder-gray-400 bg-white border border-transparent border-gray-300 rounded-lg shadow-sm appearance-none focus:outline-none focus:ring-2 focus:ring-[#383f56] focus:border-transparent"
                  placeholder="Name"
                />
              </div>
            </div>
            <div className="col-span-2 lg:col-span-1">
              <div className="relative ">
                <input
                  type="text"
                  id="contact-form-email"
                  className="flex-1 w-full px-4 py-2 text-base text-gray-700 placeholder-gray-400 bg-white border border-transparent border-gray-300 rounded-lg shadow-sm appearance-none focus:outline-none focus:ring-2 focus:ring-[#383f56] focus:border-transparent"
                  placeholder="E-Mail"
                />
              </div>
            </div>
            <div className="col-span-2">
              <label className="text-gray-700" htmlFor="name">
                <textarea
                  className="flex-1 w-full px-4 py-2 text-base text-gray-700 placeholder-gray-400 bg-white border border-gray-300 rounded-lg appearance-none focus:outline-none focus:ring-2 focus:ring-[#383f56] focus:border-transparent"
                  id="comment"
                  placeholder="Enter your comment"
                  name="comment"
                  rows="5"
                  cols="40"
                ></textarea>
              </label>
            </div>

            {/*  */}
            {/* <div className="bg-cyan-500 ">
              <div>
                <div className="flex items-center justify-center mt-6">
                  <label className="flex items-center mb-3 space-x-3">
                    <input
                      onClick={() => setTicked(!ticked)}
                      type="checkbox"
                      name="checked-demo"
                      className="w-6 h-6 ml-10 bg-white border border-white rounded-md form-tick bg-check checked:bg-blue-500 checked:border-transparent focus:outline-none"
                    />
                    <span className="font-normal text-gray-700 whitespace-nowrap dark:text-white">
                      Do you want to invest?
                    </span>
                  </label>
                </div>
              </div>
            </div>
            <div className="col-span-2 text-left">
              {ticked && (
                <>
                  <div class="relative pt-1">
                    <label for="customRange2" class="form-label">
                      Example range
                    </label>
                    <input
                      type="range"
                      class="
      form-range
      appearance-none
      w-full
      h-6
      p-0
      bg-transparent
      focus:outline-none focus:ring-0 focus:shadow-none
    "
                      min="0"
                      max="5"
                      id="customRange2"
                    />
                  </div>
                </>
              )}
            </div> */}

            <div className="col-span-2 text-right">
              <button
                type="submit"
                className="py-2 px-4  bg-[#383f56] hover:bg-gray-600 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
              >
                Send
              </button>
            </div>
          </div>
        </div>
      </form>
    </>
  );
};

export default ContactForm;
