import { useRouter } from "next/router";
import Link from "next/link";
const TitleSection = (props) => {
  console.log(props.subTitle);
  const router = useRouter();
  return (
    <div className="relative bg-gradient-to-b to-white from-[#5870a11c] p-6 pt-32 sm:pt-40 pb-24 sm:flex sm:justify-center sm:items-center">
      <div className=" xl:w-1/2 sm:w-2/3 flex flex-col justify-center items-center sm:min-w-[300px]">
        <div>
          <h1 className="text-4xl font-bold text-gray-800 sm:text-left sm:text-5xl">
            {props.title}
          </h1>
        </div>
        <div>
          <p
            // style={{ lineHeight: "1.1" }}
            className="mt-8 overflow-hidden text-lg leading-5 text-center text-gray-700 sm:text-lg sm:text-center"
          >
            {props.subTitle}
          </p>
        </div>
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
            <a target="_blank" rel="noreferrer" href={props.buttonExternLink}>
              <button className="px-4 py-2 font-bold text-white rounded bg-[#383f56] hover:bg-gray-600">
                {props.buttonExternTitle}
              </button>
            </a>
          )}
        </div>
      </div>
      {/* <div className="sm:pl-16">
    <Image src="/img/faq2.png" width="400" height="400" alt="" />
  </div> */}
    </div>
  );
};
export default TitleSection;
