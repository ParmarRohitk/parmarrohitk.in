// app/page.tsx
"use client";

import Header from "@/src/components/Header";
import ScrollBar from "@/src/components/ScrollBar";
import About from "@/src/components/sections/About";
import Blog from "@/src/components/sections/Blog";
import Clients from "@/src/components/sections/Clients";
import Contact from "@/src/components/sections/Contact";
import Copyright from "@/src/components/sections/Copyright";
import Facts from "@/src/components/sections/Facts";
import Home1 from "@/src/components/sections/Home1";
import Portfolio from "@/src/components/sections/Portfolio";
import Testimonials from "@/src/components/sections/Testimonials";
import Separator from "@/src/components/Separator";
// import { jqueryFuntion } from "@/src/utilits";
import { Fragment, useEffect } from "react";
import { jqueryFuntion } from "@/src/utilits/jqueryFuntion";


export default function HomePage() {
  useEffect(() => {
    // Dynamically import jQuery and the plugin only in browser
    import("jquery").then(($) => {
      import("jquery-mousewheel").then(() => {
        // Now jQuery is loaded, and mousewheel plugin is applied
        // You can call your jqueryFunction safely here
        jqueryFuntion();
      });
    });
  }, []);


  return (
    <Fragment>
      <div className="page-content">
        <Header />
        <div id="wrapper">
          <main className="flex-column-mobile">
            <Home1 />
            <About />
            <Separator type="down" />
            <Facts />
            <Separator type="up" />
            <Portfolio />
            <Separator type="down" />
            <Testimonials />
            <Separator type="up" />
            <Contact />
            <Separator type="down" />
            <Clients />
            <Separator type="up" />
            <Blog />
            <Separator type="down" />
            <Copyright />
          </main>
        </div>
        <ScrollBar />
      </div>
    </Fragment>
  );
}
