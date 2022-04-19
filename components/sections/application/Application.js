import Link from "next/link";
import Image from "next/image";
const Application = (props) => {
  return (
    <div className="py-20">
      <h1 className="text-2xl font-bold text-center text-gray-800 sm:text-center sm:text-4xl">
        {props.title}
      </h1>
      <div className="w-full m-auto mt-6 mb-6 lg:w-2/3">
        <div className="relative w-full h-96">
          <Image
            src="/img/application-process.jpg"
            layout="fill"
            objectFit="contain"
          />
        </div>
      </div>
    </div>
  );
};

export default Application;
