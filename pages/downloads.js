import { useRouter } from "next/router";
import TitleSection from "../components/TitleSection";

const Downloads = () => {
  const router = useRouter();

  return (
    <>
      <TitleSection
        title="Downloads"
        subTitle="Here you can find additional information about us"
      />
    </>
  );
};

export default Downloads;
