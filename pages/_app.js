import Navbar from "../components/Layout/Navbar";
import "../styles/globals.css";
import "animate.css/animate.min.css";
import Footer from "../components/Layout/Footer";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <div className="font-kanit">
        <Navbar />
        <Component {...pageProps} />
        <Footer />
      </div>
    </>
  );
}

export default MyApp;
