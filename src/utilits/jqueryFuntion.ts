'use client';
import { useEffect } from "react";

// Declare the jQuery extension for mCustomScrollbar
declare global {
  interface JQuery {
    mCustomScrollbar: (options?: {
      axis?: string;
      theme?: string;
      keyboard?: object;
      advanced?: object;
      mouseWheel?: object;
      callbacks?: object;
    }) => JQuery<HTMLElement>;
  }
}

const useJQueryFunction = () => {
  useEffect(() => {
    // Check if running in the browser
    if (typeof window === "undefined") return;

    // Dynamically import jQuery, mCustomScrollbar, and WOW.js on the client side
    const loadJQueryAndPlugins = async () => {
      // Import jQuery
      const $ = (await import("jquery")).default;
      (window as Window & typeof globalThis & { $: typeof $ }).$ = $;
      (window as Window & typeof globalThis & { jQuery: typeof $ }).jQuery = $;

      // Dynamically import additional jQuery plugins
      await import("jquery-mousewheel");
      await import("malihu-custom-scrollbar-plugin");

      // Dynamically import WOW.js (correct the import method)
      const WOW = (await import("wowjs")).default;  // Use default import for WOW.js
      const wowInstance = new WOW();
      wowInstance.init();

      // Handle animations
      const animateHeader = () => {
        const headerClass = "animated fadeInDown";
        const introClass = "animated fadeInUp";
        if ($(window).width() ?? 0 > 1024) {
          setTimeout(() => $(".header-inner").addClass(headerClass), 1500);
          setTimeout(() => {
            $(".home>div>div h1 span span").addClass(introClass);
            $(".home>div>div .intro").addClass(introClass);
            $(".home .cta").addClass(introClass);
          }, 2200);
        } else {
          setTimeout(() => $(".header-inner").addClass(headerClass), 1100);
          setTimeout(() => {
            $(".home>div>div h1 span span").addClass(introClass);
            $(".home>div>div .intro").addClass(introClass);
            $(".home .cta").addClass(introClass);
          }, 1800);
        }
      };

      animateHeader();

      const homewidth = $(".home").width()! - 10;
      const aboutwidth = homewidth + $(".about").width()! + $(".facts").width()! - 10;
      const portfoliowidth =
        aboutwidth +
        $(".portfolio .single-item .main-content").width()! +
        $(".portfolio .single-item .details").width()! +
        250 + 65 + 300 +
        $(".clients").width()! - 10;
      const contactwidth =
        portfoliowidth + $(".contact").width()! + $(".testimonials").width()! - 10;
      const blogwidth =
        contactwidth + $(".blog").width()! + $(".copyright").width()! - 10;

      // Handle scroll events
      const checkScroll = () => {
        const pos = Math.abs(parseInt($(".mCSB_container").css("left") || "0"));
        const updateActive = (id: string) => {
          $(".menu ul li span").removeClass("active");
          $(`#${id}`).addClass("active");
        };
        if (pos > homewidth && pos < aboutwidth) updateActive("about-link");
        else if (pos > aboutwidth && pos < portfoliowidth) updateActive("portfolio-link");
        else if (pos > portfoliowidth && pos < contactwidth) updateActive("contact-link");
        else if (pos > contactwidth && pos < blogwidth) updateActive("blog-link");
        else updateActive("home-link");
      };

      // Initialize the scrollbar and animations for larger screens
      if ($("#wrapper").length && $(window).width()! > 1024) {
        $("#wrapper").mCustomScrollbar({
          axis: "x",
          theme: "dark-3",
          keyboard: { enable: true, scrollType: "stepless" },
          advanced: { autoExpandHorizontalScroll: true },
          mouseWheel: { scrollAmount: 400 },
          callbacks: {
            whileScrolling: () => {
              animateContent();
              checkScroll();
            },
          },
        });
      } else {
        new WOW().init();  // Initialize WOW.js for smaller screens or animation triggers
      }
    };

    // Call the function to load and initialize
    loadJQueryAndPlugins();
  }, []); // Empty dependency array to run this effect only once after the component mounts
};

export default useJQueryFunction;
