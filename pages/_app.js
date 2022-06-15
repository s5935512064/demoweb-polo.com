import "../styles/globals.css";
import "../styles/cookieconsent.css";
import { AnimatePresence } from "framer-motion";
import AOS from "aos";
import { useEffect } from "react";
import "aos/dist/aos.css";
import CookieConsent from "../components/CookieConsent";



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
      <CookieConsent />
    </>
  );
}

export default MyApp;
