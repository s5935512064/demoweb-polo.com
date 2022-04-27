import "../styles/globals.css";
import { AnimatePresence } from "framer-motion";
import AOS from "aos";
import { useEffect } from "react";
import "aos/dist/aos.css";
import Cookies from "../components/Cookies";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <AnimatePresence
        exitBeforeEnter
        initial={false}
        onExitComplete={() => window.scrollTo(0, 0)}
      >
        <Component {...pageProps} />
      </AnimatePresence>
      <Cookies />
    </>
  );
}

export default MyApp;
