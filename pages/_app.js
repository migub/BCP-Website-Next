import Navbar from "../components/Layout/Navbar";
import "../styles/globals.css";
import "animate.css/animate.min.css";
import Footer from "../components/Layout/Footer";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <div className="overflow-hidden font-montserrat">
        <Navbar
          title2="Internships"
          link2="/internships"
          title1="Learn More"
          link1="/learn-more"
          title3="Investors"
          link3="/investors"
          title4="About Us"
          link4="/about-us"
          title5="Contact"
          link5="/contact"
        />
        <div className="" style={{ minHeight: "calc(100vh - 384px)" }}>
          <Component {...pageProps} />
        </div>
        <Footer />
      </div>
    </>
  );
}

export default MyApp;
