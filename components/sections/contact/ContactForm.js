import { useState } from "react";
import Lottie from "react-lottie";
import * as animationData from "../../../public/lottie/success.json";

const ContactForm = (props) => {
  const defaultOptions = {
    loop: false,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [sendText, setSendText] = useState("Send");
  const [buttonActive, setButtonActive] = useState(true);
  const [sendButton, setSendButton] = useState(
    "py-2 px-4  bg-[#383f56] hover:bg-gray-600 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
  );

  return (
    <>
      <form
        method="POST"
        encType="multipart/form-data"
        name="EmailForm"
        className="flex w-full max-w-xl m-auto space-x-3"
      >
        <div className="w-full max-w-3xl px-5 py-10 m-auto bg-[#EDEFF5] rounded-lg shadow">
          {submitted ? (
            <>
              <Lottie options={defaultOptions} height={200} width={200} />
              <div className="mb-10 text-center">
                Message sent! We will get back to you as soon as possible.
              </div>
            </>
          ) : (
            <div className="grid max-w-xl grid-cols-2 gap-4 m-auto">
              <div className="col-span-2 lg:col-span-1">
                <div className="relative ">
                  <input
                    onChange={(e) => {
                      setName(e.target.value);
                    }}
                    type="text"
                    id="contact-form-name"
                    value={name}
                    className="flex-1 w-full px-4 py-2 text-base text-gray-700 placeholder-gray-400 bg-white border border-transparent border-gray-300 rounded-lg shadow-sm appearance-none focus:outline-none focus:ring-2 focus:ring-[#383f56] focus:border-transparent"
                    placeholder={props.placeholderOne}
                  />
                </div>
              </div>
              <div className="col-span-2 lg:col-span-1">
                <div className="relative ">
                  <input
                    onChange={(e) => setEmail(e.target.value)}
                    type="text"
                    id="contact-form-email"
                    value={email}
                    className="flex-1 w-full px-4 py-2 text-base text-gray-700 placeholder-gray-400 bg-white border border-transparent border-gray-300 rounded-lg shadow-sm appearance-none focus:outline-none focus:ring-2 focus:ring-[#383f56] focus:border-transparent"
                    placeholder={props.placeholderTwo}
                  />
                </div>
              </div>
              <div className="col-span-2">
                <label className="text-gray-700" htmlFor="name">
                  <textarea
                    onChange={(e) => setMessage(e.target.value)}
                    className="flex-1 w-full px-4 py-2 text-base text-gray-700 placeholder-gray-400 bg-white border border-gray-300 rounded-lg appearance-none focus:outline-none focus:ring-2 focus:ring-[#383f56] focus:border-transparent"
                    id="comment"
                    value={message}
                    placeholder={props.placeholderThree}
                    name="comment"
                    rows="5"
                    cols="40"
                  ></textarea>
                </label>
              </div>
              <div className="col-span-2 text-right">
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    let data = { name, email, message };
                    fetch("/api/contact", {
                      method: "POST",
                      headers: {
                        Accept: "application/json, text/plain, */*",
                        "Content-Type": "application/json",
                      },
                      body: JSON.stringify(data),
                    }).then((res) => {
                      console.log("Response received");
                      if (res.status === 200) {
                        console.log("Response succeeded!");
                        setSubmitted(true);
                        setName("");
                        setEmail("");
                        setMessage("");
                        setSendText("Sent!");
                        setButtonActive(false);
                        setSendButton(
                          "py-2 px-4 bg-green-400 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg "
                        );
                      }
                    });
                  }}
                  type="submit"
                  disabled={!buttonActive}
                  className={sendButton}
                >
                  {sendText}
                </button>
              </div>
            </div>
          )}
        </div>
      </form>
    </>
  );
};

export default ContactForm;
