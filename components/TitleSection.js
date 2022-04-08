import { useRouter } from "next/router";
import Link from "next/link";
const TitleSection = (props) => {
  console.log(props.subTitle);
  const router = useRouter();
  return (
    <div className="relative p-6 pt-32 sm:pt-40 pb-28 sm:flex sm:justify-center sm:items-center bg-gradient-to-t to-[#BDC5D8] from-[#BDC5D8]">
      <div className=" xl:w-1/2 sm:w-2/3 pb-12 sm:min-w-[300px]">
        <h1 className="text-4xl font-bold text-left text-gray-800 sm:text-left sm:text-4xl">
          {props.title}
        </h1>
        <p
          // style={{ lineHeight: "1.1" }}
          className="mt-8 overflow-hidden text-lg leading-5 text-left text-gray-700 sm:text-lg sm:text-left"
        >
          {props.subTitle}
        </p>
        <div className="flex justify-start mt-10 space-x-5 sm:justify-start">
          {props.buttonTitle && (
            <button
              onClick={() => {
                router.push(props.buttonLink);
              }}
              className="px-4 py-2 font-bold text-white rounded bg-[#383f56] hover:bg-gray-600"
            >
              {props.buttonTitle}
            </button>
          )}
          {props.buttonExternTitle && (
            <Link
              rel="noreferrer"
              target="_blank"
              href={props.buttonExternLink}
            >
              <button className="px-4 py-2 font-bold text-white rounded bg-[#383f56] hover:bg-gray-600">
                {props.buttonExternTitle}
              </button>
            </Link>
          )}
        </div>
      </div>
      {/* <div className="sm:pl-16">
    <Image src="/img/faq2.png" width="400" height="400" alt="" />
  </div> */}
      <div className="custom-shape-divider-bottom-1648168505">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M1200 120L0 16.48 0 0 1200 0 1200 120z"
            className="shape-fill"
          ></path>
        </svg>
      </div>
    </div>
  );
};
export default TitleSection;
