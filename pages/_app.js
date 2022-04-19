import Navbar from "../components/Layout/Navbar";
import "../styles/globals.css";
import "animate.css/animate.min.css";
import Footer from "../components/Layout/Footer";

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
        <Footer />
      </div>
    </>
  );
}

export default MyApp;
