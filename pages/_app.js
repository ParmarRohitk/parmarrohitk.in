import { useEffect, Fragment } from "react";
import Preloader from "@/src/components/Preloader";
import Switcher from "@/src/components/Switcher";
import SalimovHead from "@/src/SalimovHead";
import "@/styles/globals.css";

const App = ({ Component, pageProps }) => {
  useEffect(() => {
    const outer = document.getElementById("cursor-outer");
    const inner = document.getElementById("cursor-inner");

    const moveCursor = (e) => {
      const { clientX: x, clientY: y } = e;
      if (outer && inner) {
        outer.style.transform = `translate(${x - 20}px, ${y - 20}px)`;
        inner.style.transform = `translate(${x - 4}px, ${y - 4}px)`;
      }
    };

    window.addEventListener("mousemove", moveCursor);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
    };
  }, []);

  return (
    <Fragment>
      <SalimovHead />

      {/* Custom Cursor Elements */}
      <div id="cursor-outer"></div>
      <div id="cursor-inner"></div>

      {/* <Switcher /> */}
      <Preloader />
      <Component {...pageProps} />
    </Fragment>
  );
};

export default App;
