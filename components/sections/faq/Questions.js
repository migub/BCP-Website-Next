import Faq from "react-faq-component";
const styles = {
  bgColor: "#383f56",
  titleTextColor: "white",
  rowTitleColor: "white",
  // rowContentColor: 'grey',
  arrowColor: "white",
  rowContentPaddingLeft: "12px",
};

const Questions = (props) => {
  return (
    <div className=" bg-[#383f56] mx-4 lg:m-auto lg:w-1/2">
      <Faq styles={styles} data={props.data} />
    </div>
  );
};

export default Questions;
