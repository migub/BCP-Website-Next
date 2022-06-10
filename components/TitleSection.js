import { useRouter } from "next/router";
import Link from "next/link";
import Button from "./Button";
import Navbar from "./Layout/Navbar";

const TitleSection = (props) => {
  const router = useRouter();
  return (
    <div
      className={`relative herobackground bg-gradient-to-b to-[#5870a11c] from-[#5870a11c] p-6 pt-32 sm:pt-52 sm:pb-32 sm:flex sm:justify-center ${props.className} sm:items-center`}
    >
      <div className=" xl:w-1/2 sm:w-2/3 flex flex-col justify-center items-center sm:min-w-[300px]">
        <div>
          <h1 className="text-4xl font-bold text-center sm:text-5xl">
            {props.title}
          </h1>
        </div>
        <div>
          <p
            // style={{ lineHeight: "1.1" }}
            className="mt-8 overflow-hidden text-lg leading-5 text-center opacity-75 sm:text-lg sm:text-center"
          >
            {props.subTitle}
          </p>
        </div>
        <div className="flex justify-start mt-10 space-x-5 sm:justify-start">
          {props.buttonTitle && (
            <Button
              onClick={() => {
                router.push(props.buttonLink);
              }}
            >
              {props.buttonTitle}
            </Button>
          )}
          {props.buttonExternTitle && (
            <a target="_blank" rel="noreferrer" href={props.buttonExternLink}>
              <Button>{props.buttonExternTitle}</Button>
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
