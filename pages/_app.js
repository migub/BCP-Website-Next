import Navbar from "../components/Layout/Navbar";
import "../styles/globals.css";
import "animate.css/animate.min.css";
import Footer from "../components/Layout/Footer";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <div className="font-montserrat">
        <Navbar
          title2="Internships"
          link2="/internships"
          title1="Learn More"
          link1="/downloads"
          title3="Investors"
          link3="/investors"
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
