"use client";
import { salimovSlider } from "@/src/sliderProps";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, {
  Autoplay,
  EffectCreative,
  EffectFade,
  Grid,
  Mousewheel,
  Navigation,
  Pagination,
  Virtual,
} from "swiper";
import { useEffect } from "react";
const Clients = () => {
  useEffect(() => {
    SwiperCore.use([
      Autoplay,
      EffectCreative,
      EffectFade,
      Grid,
      Mousewheel,
      Navigation,
      Pagination,
      Virtual,
    ]);
  }, []);
  return (
    <section className="clients">
      <div className="clients-container animated-layer fade-in-right-animation fadeInUp wow">
        <h3>Follow Your Passion’s Path </h3>
        <p>
          Hello there, my name is Parmar Rohit K. I am a fully dedicated Full
          Stack Developer , pursuing MCA in the field of computer science & IT.
          I enjoy being part of a team that creating user-centric interactive
          applications that introduce elements of creativity with functionality.
        </p>
        <p>
          These experiences have contributed to my journey in building the tech
          industry from the frontend to end with a core expertise in backend
          architecture. Designing interfaces and creating exceptional visual
          images to optimizing intricate back end solutions and delivering
          fabulous value added and efficient user specific digital solutions is
          what I enjoy most. In addition to coding, I have passion in solving
          problems and learning. In any web development project, including a
          search engine optimization project or calling APIs to improve the
          website, I always seek to provide other solutions that are practical
          and high value in terms of outcome.
        </p>
        {/*  <Swiper
          {...salimovSlider.clients}
          className="swiper swiper-clients fadeInUp wow"
          navigation={{
            nextEl: ".next-item",
            prevEl: ".prev-item",
          }}
        >
          <SwiperSlide className="swiper-slide">
            <div>
              <img
                src="assets/logos/themeforest-dark-background.png"
                alt="client"
              />
            </div>
            <div>
              <img
                src="assets/logos/photodune-dark-background.png"
                alt="client"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide className="swiper-slide">
            <div>
              <img
                src="assets/logos/graphicriver-dark-background.png"
                alt="client"
              />
            </div>
            <div>
              <img
                src="assets/logos/codecanyon-dark-background.png"
                alt="client"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide className="swiper-slide">
            <div>
              <img
                src="assets/logos/audiojungle-dark-background.png"
                alt="client"
              />
            </div>
            <div>
              <img
                src="assets/logos/activeden-dark-background.png"
                alt="client"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide className="swiper-slide">
            <div>
              <img
                src="assets/logos/3docean-dark-background.png"
                alt="client"
              />
            </div>
            <div>
              <img
                src="assets/logos/themeforest-dark-background.png"
                alt="client"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide className="swiper-slide">
            <div>
              <img
                src="assets/logos/activeden-dark-background.png"
                alt="client"
              />
            </div>
            <div>
              <img
                src="assets/logos/audiojungle-dark-background.png"
                alt="client"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide className="swiper-slide">
            <div>
              <img
                src="assets/logos/graphicriver-dark-background.png"
                alt="client"
              />
            </div>
            <div>
              <img
                src="assets/logos/codecanyon-dark-background.png"
                alt="client"
              />
            </div>
          </SwiperSlide>
          <div className="swiper-pagination" />
        </Swiper> */}
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
