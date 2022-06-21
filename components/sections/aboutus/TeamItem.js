import Image from "next/image";

const TeamItem = (props) => {
  return (
    <div className="w-full lg:flex lg:h-52">
      <div className="relative m-auto lg:h-full h-[300px] lg:m-0 lg:w-40 w-52 ">
        <Image
          src={`/img/cofounders/${props.link}`}
          alt=""
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div className="w-full h-full p-5 text-lg lg:text-xl">
        <div className="font-bold">{props.name}</div>
        <div className="mt-8">{props.description}</div>
      </div>
    </div>
  );
};

export default TeamItem;
