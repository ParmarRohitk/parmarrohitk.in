const Home = () => {
  return (
    <section className="home image" id="home">
      <div>
        <div className="position-relative">
          <h1>
            <span>
              <span className="animated-layer">
                Full-Stack<span>.</span>
              </span>
            </span>
            <span className="position-relative">
              <span className="animated-layer">Web</span>
              <span className="intro animated-layer">
                with {new Date().getFullYear() - 2022}+ years of experience in
                ReactJS, NextJS, and NodeJS Development.
              </span>
            </span>
            <span>
              <span className="animated-layer"> Developer</span>
            </span>
          </h1>
        </div>
      </div>
      {/* CALL TO ACTION STARTS */}
      <span className="animated-layer animated-btn cta" id="cta">
        <span></span>
      </span>
      {/* CALL TO ACTION ENDS */}
    </section>
  );
};

export default Home;
