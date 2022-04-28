import { useRouter } from "next/router";

const SidebarItem = (props) => {
  const router = useRouter();

  return (
    <>
      <a
        onClick={() => {
          props.onClose(false);
          router.push(props.link);
        }}
        className="flex items-center p-2 my-6 transition-colors duration-200 rounded-lg hover:text-gray-800 hover:bg-gray-100 "
      >
        <span className="mx-4 text-lg font-normal">{props.title}</span>
        <span className="flex-grow text-right"></span>
      </a>
    </>
  );
};

export default SidebarItem;
