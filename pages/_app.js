import { useEffect, Fragment } from "react";
import Preloader from "@/src/components/Preloader";
import Switcher from "@/src/components/Switcher";
import "@/styles/globals.css";
import { useRouter } from "next/router";
import ParmarRohitKHead from "@/src/Head";

const App = ({ Component, pageProps }) => {
  const router = useRouter();
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

    // Scrollable behavior for /blog pages
    if (router.pathname.startsWith("/blog")) {
      document.body.classList.add("blog-scrollable");
    } else {
      document.body.classList.remove("blog-scrollable");
    }

    return () => {
      window.removeEventListener("mousemove", moveCursor);
    };
  }, [router.pathname]);

  return (
    <Fragment>
      <ParmarRohitKHead />

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
