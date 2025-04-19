export const jqueryFuntion = async () => {
  // Ensure this only runs in the browser
  if (typeof window === "undefined") return;

  // Dynamically import jQuery and plugins
  const $ = (await import("jquery")).default;
  (window as any).$ = $;
  (window as any).jQuery = $;

  await import("jquery-mousewheel");
  await import("malihu-custom-scrollbar-plugin");

  $(window).on("load", function () {
    const preloader = $("#preloader");

    setTimeout(() => {
      preloader.addClass("preloaded");
    }, 800);

    if ($(window).width() > 1024) {
      setTimeout(() => $(".header-inner").addClass("animated fadeInDown"), 1500);
      setTimeout(() => {
        $(".home>div>div h1 span span").addClass("animated fadeInUp");
        $(".home>div>div .intro").addClass("animated fadeInUp");
        $(".home .cta").addClass("animated fadeInUp");
      }, 2200);
    } else {
      setTimeout(() => $(".header-inner").addClass("animated fadeInDown"), 1100);
      setTimeout(() => {
        $(".home>div>div h1 span span").addClass("animated fadeInUp");
        $(".home>div>div .intro").addClass("animated fadeInUp");
        $(".home .cta").addClass("animated fadeInUp");
      }, 1800);
    }

    // Width calculations
    const homewidth = $(".home").width()! - 10;
    const aboutwidth = homewidth + $(".about").width()! + $(".facts").width()! - 10;
    const portfoliowidth =
      aboutwidth +
      $(".portfolio .single-item .main-content").width()! +
      $(".portfolio .single-item .details").width()! +
      250 +
      65 +
      300 +
      $(".clients").width()! -
      10;
    const contactwidth =
      portfoliowidth + $(".contact").width()! + $(".testimonials").width()! - 10;
    const blogwidth =
      contactwidth + $(".blog").width()! + $(".copyright").width()! - 10;

    function animateContent() {
      const divWidth = $("#wrapper").width()! - $(window).width()! / 2 + 270;
      $(".animated-layer").each(function () {
        const $el = $(this);
        const offset = $el.offset()!.left;
        if (offset < divWidth) {
          if ($el.hasClass("image-animation")) $el.addClass("animated");
          else if ($el.hasClass("fade-in-up-animation")) $el.addClass("animated fadeInUp");
          else if ($el.hasClass("fade-in-animation")) $el.addClass("animated fadeIn");
          else if ($el.hasClass("fade-in-down-animation")) $el.addClass("animated fadeInDown");
          else if ($el.hasClass("fade-in-right-animation")) $el.addClass("animated fadeInRight");
          else if ($el.hasClass("fade-in-left-animation")) $el.addClass("animated fadeInLeft");
        }
      });
    }

    function checkScroll() {
      const scrollPos = Math.abs(parseInt($(".mCSB_container").css("left") || "0"));

      const activateLink = (id: string) => {
        $(".menu ul li span").removeClass("active");
        $(id).addClass("active");
      };

      if (scrollPos > homewidth && scrollPos < aboutwidth) activateLink("#about-link");
      else if (scrollPos > aboutwidth && scrollPos < portfoliowidth) activateLink("#portfolio-link");
      else if (scrollPos > portfoliowidth && scrollPos < contactwidth) activateLink("#contact-link");
      else if (scrollPos > contactwidth && scrollPos < blogwidth) activateLink("#blog-link");
      else activateLink("#home-link");
    }

    if ($("#wrapper").length && $(window).width()! > 1024) {
      $("#wrapper").mCustomScrollbar({
        axis: "x",
        theme: "dark-3",
        keyboard: { enable: true, scrollType: "stepless" },
        advanced: {
          autoExpandHorizontalScroll: true,
        },
        mouseWheel: {
          scrollAmount: 400,
        },
        callbacks: {
          whileScrolling: function () {
            animateContent();
            checkScroll();
          },
        },
      });
    } else {
       (async () => {
    const WOW = (await import("wowjs")).WOW;
    new WOW().init();
  })();
    }
  });

  $(document).ready(function () {
    const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
    if (isSafari) $("body").addClass("body-safari");

    $("a[href='#']").on("click", (e) => e.preventDefault());

    const removeHash = () => {
      history.replaceState(
        "",
        document.title,
        window.location.origin + window.location.pathname + window.location.search
      );
    };

    $("#menu li a").on("click", () => setTimeout(removeHash, 5));

    if ($(window).width()! > 1024) {
      $(".fadeIn, .fadeInUp, .fadeInDown, .fadeInRight, .fadeInLeft").removeClass(
        "fadeIn fadeInUp fadeInDown fadeInRight fadeInLeft"
      );
    }

    $(".menu ul li span").on("click", function () {
      setTimeout(() => $(this).toggleClass("active"), 1600);
    });

    const scrollTo = (target: string) =>
      $("#wrapper").mCustomScrollbar("scrollTo", target, {
        scrollInertia: 1500,
      });

    $("#home-link").on("click", () => scrollTo("#home"));
    $("#about-link").on("click", () => scrollTo("#about"));
    $("#portfolio-link").on("click", () => scrollTo("#portfolio"));
    $("#contact-link").on("click", () => scrollTo("#contact"));
    $("#blog-link").on("click", () => scrollTo("#blog"));

    $("#menu li a").on("click", () => {
      $("#checkboxmenu").trigger("click");
      $("body").toggleClass("overflow-hidden");
    });

    $("#menuToggle").on("click", () => {
      $("body").toggleClass("overflow-hidden");
    });

    $("#cta").on("click", () => {
      if ($(window).width()! > 1024) {
        scrollTo("#about");
      } else {
        $("html, body").animate({
          scrollTop: $("#my-photo").offset()!.top,
        });
      }
    });
  });
};
