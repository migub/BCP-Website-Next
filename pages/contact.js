import ContactForm from "../components/sections/contact/ContactForm";
const Contact = () => {
  return (
    <>
      <div className="pt-20 min-h-[1200px] herobackground h-screen mb-[-300px] ">
        <div className="relative p-6 pt-32 sm:pt-40 sm:flex sm:justify-center sm:items-center ">
          <div className=" sm:w-1/2 pb-12 sm:min-w-[300px]">
            <h1 className="text-3xl font-bold text-center text-gray-800 sm:text-center sm:text-4xl">
              Contact Us
            </h1>
          </div>
        </div>
        {/* <Offer /> */}
        <div className="px-4 pb-20">
          <ContactForm
            placeholderOne="Name"
            placeholderTwo="E-Mail"
            placeholderThree="Enter your comment"
          />
        </div>
      </div>
    </>
  );
};

export default Contact;
