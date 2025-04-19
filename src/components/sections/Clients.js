"use client";
import { salimovSlider } from "@/src/sliderProps";
import { Swiper, SwiperSlide } from "swiper/react";

const Clients = () => {
  const logos = [
    ["themeforest", "photodune"],
    ["graphicriver", "codecanyon"],
    ["audiojungle", "activeden"],
    ["3docean", "themeforest"],
    ["activeden", "audiojungle"],
    ["graphicriver", "codecanyon"],
  ];

  return (
    <section className="clients">
      <div className="clients-container animated-layer fade-in-right-animation fadeInUp wow">
        <h3>My Clients</h3>
        <Swiper
          {...salimovSlider.clients}
          className="swiper swiper-clients fadeInUp wow"
        >
          {logos.map(([logo1, logo2], i) => (
            <SwiperSlide className="swiper-slide" key={i}>
              <div>
                <img
                  src={`assets/logos/${logo1}-dark-background.png`}
                  alt="client"
                />
              </div>
              <div>
                <img
                  src={`assets/logos/${logo2}-dark-background.png`}
                  alt="client"
                />
              </div>
            </SwiperSlide>
          ))}
          <div className="swiper-pagination" />
        </Swiper>
      </div>
      <img
        alt=""
        className="z-1 hide-mobile opposite-separator"
        src="assets/separator-opposite.png"
      />
    </section>
  );
};
export default Clients;
