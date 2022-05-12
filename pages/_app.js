import Navbar from "../components/Layout/Navbar";
import "../styles/globals.css";
import "animate.css/animate.min.css";
import Footer2 from "../components/Layout/Footer2";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <div className="font-montserrat">
        <Navbar
          title1="Internships"
          link1="/internships"
          title2="Downloads"
          link2="/downloads"
          title3="Investors"
          link3="/investors"
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
