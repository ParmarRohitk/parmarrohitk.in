import { salimovSlider } from "@/src/sliderProps";
import { Swiper, SwiperSlide } from "swiper/react";

const Portfolio = () => {
  return (
    <section
      className="portfolio main-section flex-column-mobile"
      id="portfolio"
    >
      {/* TITLE STARTS */}
      <div className="custom-title">
        {/* MAIN TITLE STARTS */}
        <h3>
          <span>
            <span className="animated-layer fade-in-left-animation fadeInUp wow">
              My Portfolio
            </span>
          </span>
        </h3>
        {/* MAIN TITLE ENDS */}
      </div>
      {/* TITLE ENDS */}
      <Swiper
        {...salimovSlider.portfolio}
        className="swiper swiper-portfolio animated-layer fade-in-right-animation fadeInUp wow"
        data-wow-offset={200}
      >
        {/* === Busilearn - Slider Project === */}
        <SwiperSlide className="single-item swiper-slide">
          <div className="main-content">
            <Swiper
              {...salimovSlider.portfolioItems}
              className="swiper swiper-portfolio-item"
            >
              <SwiperSlide className="swiper-slide">
                <img
                  src="/prk/busi_learn.webp"
                  alt="Busilearn Screenshot 1"
                  height={200}
                />
              </SwiperSlide>
              <SwiperSlide className="swiper-slide">
                <img
                  src="/prk/admin_busi_learn.webp"
                  alt="Busilearn Screenshot 2"
                />
              </SwiperSlide>
              <div className="swiper-pagination" />
            </Swiper>
          </div>
          <div className="details">
            <h4>Busilearn</h4>
            <div>
              <ul>
                <li>
                  <span>
                    <i className="fa-regular fa-file-lines" /> Project :
                  </span>
                  <span>E-Learning Platform</span>
                </li>
                <li>
                  <span>
                    <i className="fa-regular fa-user" /> Client :
                  </span>
                  <span>Internal</span>
                </li>
                <li>
                  <span>
                    <i className="fa-regular fa-hourglass" /> Duration :
                  </span>
                  <span>3 months</span>
                </li>
                <li>
                  <span>
                    <i className="fa-solid fa-code-branch" /> Frameworks :
                  </span>
                  <span>React.js, Tailwind CSS</span>
                </li>
              </ul>
            </div>
            <a
              href="https://busilearn.vercel.app"
              target="_blank"
              className="custom-btn"
            >
              <span>
                preview <i className="fa-solid fa-arrow-up-right-from-square" />
              </span>
            </a>
          </div>
        </SwiperSlide>

        {/* === Movie Streaming - Slider Project === */}
        <SwiperSlide className="single-item swiper-slide">
          <div className="main-content">
            <img
              className="img-fluid"
              src="/prk/moviestrem.webp"
              alt="Movie Streaming Project"
            />
          </div>

          <div className="details">
            <h4>Movie Streaming</h4>
            <div>
              <ul>
                <li>
                  <span>
                    <i className="fa-regular fa-file-lines" /> Project :
                  </span>
                  <span>Streaming Web App</span>
                </li>
                <li>
                  <span>
                    <i className="fa-regular fa-user" /> Client :
                  </span>
                  <span>Personal</span>
                </li>
                <li>
                  <span>
                    <i className="fa-regular fa-hourglass" /> Duration :
                  </span>
                  <span>2 months</span>
                </li>
                <li>
                  <span>
                    <i className="fa-solid fa-code-branch" /> Frameworks :
                  </span>
                  <span>Next.js, Tailwind CSS</span>
                </li>
              </ul>
            </div>
            <a
              href="https://moviestream.vercel.app"
              target="_blank"
              className="custom-btn"
            >
              <span>
                preview <i className="fa-solid fa-arrow-up-right-from-square" />
              </span>
            </a>
          </div>
        </SwiperSlide>

        {/* === EZSOP - Image Project === */}
        <SwiperSlide className="single-item swiper-slide">
          <div className="main-content">
            <Swiper
              {...salimovSlider.portfolioItems}
              className="swiper swiper-portfolio-item"
            >
              <SwiperSlide className="swiper-slide">
                <img src="/prk/ezshop.webp" alt="EZSHOP Screenshot 1" />
              </SwiperSlide>
              <SwiperSlide className="swiper-slide">
                <img src="/prk/admin_ezshop.webp" alt="EZSHOP Screenshot 2" />
              </SwiperSlide>
              <div className="swiper-pagination" />
            </Swiper>
          </div>
          <div className="details">
            <h4>EZSOP</h4>
            <div>
              <ul>
                <li>
                  <span>
                    <i className="fa-regular fa-file-lines" /> Project :
                  </span>
                  <span>Online Store</span>
                </li>
                <li>
                  <span>
                    <i className="fa-regular fa-user" /> Client :
                  </span>
                  <span>Startup</span>
                </li>
                <li>
                  <span>
                    <i className="fa-regular fa-hourglass" /> Duration :
                  </span>
                  <span>4 months</span>
                </li>
                <li>
                  <span>
                    <i className="fa-solid fa-code-branch" /> Frameworks :
                  </span>
                  <span>Next.js, TypeScript, MongoDB</span>
                </li>
              </ul>
            </div>
            <a
              href="https://ezsop.vercel.app"
              target="_blank"
              className="custom-btn"
            >
              <span>
                preview <i className="fa-solid fa-arrow-up-right-from-square" />
              </span>
            </a>
          </div>
        </SwiperSlide>

        {/* Navigation Buttons */}
        <div className="nav-item next-item animated-btn">
          <span />
        </div>
        <div className="nav-item prev-item animated-btn">
          <span />
        </div>
      </Swiper>

      <img
        alt=""
        className="separator hide-mobile"
        src="assets/separator.png"
      />
    </section>
  );
};
export default Portfolio;
