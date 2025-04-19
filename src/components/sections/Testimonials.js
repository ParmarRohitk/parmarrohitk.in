const Testimonials = () => {
  return (
    <section className="testimonials">
      <div className="testimonials-container flex-column-mobile">
        {/* TESTIMONIAL ITEM STARTS */}
        <div className="quote-container animated-layer fade-in-right-animation fadeInUp wow">
          <div>
            <p>
              <span className="quote">
                " Working with Rohit was an absolute pleasure. He redesigned our
                finance website with a clean, responsive layout and ensured a
                smooth deployment on Hostinger. "
              </span>
              <span className="person">Neha Patel</span>
              <span className="job">Founder - FinEdge Consultants</span>
            </p>
            <img src="/prk/testimonials_neha_patel.webp" alt="Neha Patel" />
          </div>
        </div>
        {/* TESTIMONIAL ITEM ENDS */}

        {/* TESTIMONIAL ITEM STARTS */}
        <div className="quote-container animated-layer fade-in-right-animation fadeInUp wow">
          <div>
            <p>
              <span className="quote">
                " Rohit delivered our custom e-commerce platform with incredible
                speed and quality. His knowledge of Next.js and Laravel helped
                us scale fast and efficiently. "
              </span>
              <span className="person">Arjun Mehta</span>
              <span className="job">CTO - EZSOP</span>
            </p>
            <img src="/prk/testimonials_arjun_mehta.webp" alt="Arjun Mehta" />
          </div>
        </div>
        {/* TESTIMONIAL ITEM ENDS */}

        {/* TESTIMONIAL ITEM STARTS */}
        <div className="quote-container animated-layer fade-in-right-animation fadeInUp wow">
          <div>
            <p>
              <span className="quote">
                " Rohit took full ownership of our LMS project. From React UI to
                API integration, he ensured everything was delivered on time and
                with pixel-perfect accuracy. "
              </span>
              <span className="person">Simran Kapoor</span>
              <span className="job">Project Manager - Busilearn</span>
            </p>
            <img
              src="/prk/testimonials_simran_kapoor.webp"
              alt="Simran Kapoor"
            />
          </div>
        </div>
        {/* TESTIMONIAL ITEM ENDS */}
      </div>
      <img
        alt=""
        className="z-1 hide-mobile opposite-separator"
        src="assets/separator-opposite.png"
      />
    </section>
  );
};

export default Testimonials;
