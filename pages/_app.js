import Navbar from "../components/Layout/Navbar";
import "../styles/globals.css";
import "animate.css/animate.min.css";
import Footer2 from "../components/Layout/Footer2";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <div className="font-montserrat">
        <Navbar
          title1="Student Internship"
          link1="/student-internship"
          title2="Investors"
          link2="/investors"
          title3="Whitepaper"
          link3="/whitepaper"
          title4="Contact"
          link4="/contact"
        />
        <div style={{ minHeight: "calc(100vh - 384px)" }}>
          <Component {...pageProps} />
        </div>
        <Footer2 />
      </div>
    </>
  );
}

export default MyApp;
