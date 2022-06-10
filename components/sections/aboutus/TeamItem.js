import Image from "next/image";

const TeamItem = (props) => {
  return (
    <div className="flex w-full h-52">
      <div className="relative w-40 h-full ">
        <Image
          src={`/img/cofounders/${props.link}`}
          alt=""
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div className="w-full h-full p-5 text-xl">
        <div className="font-bold">{props.name}</div>
        <div className="mt-8">{props.description}</div>
      </div>
    </div>
  );
};

export default TeamItem;
