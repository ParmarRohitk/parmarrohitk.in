const Contact = () => {
  return (
    <section className="contact main-section flex-column-mobile" id="contact">
      {/* TITLE STARTS */}
      <div className="custom-title">
        <h3>
          <span>
            <span className="animated-layer fade-in-left-animation fadeInUp wow">
              Get in touch
            </span>
          </span>
        </h3>
      </div>
      {/* TITLE ENDS */}

      {/* CONTACTS STARTS */}
      <div className="boxes">
        <div>
          {/* ADDITIONAL INFO STARTS */}
          <div className="animated-layer fade-in-down-animation fadeInUp wow">
            <i className="fa fa-user" />
            <p>
              <span className="small-text">freelance</span>
              Available for freelance & remote work
            </p>
          </div>
          {/* ADDITIONAL INFO ENDS */}

          {/* CONTACT ITEM STARTS */}
          <div className="animated-layer fade-in-up-animation fadeInUp wow">
            <i className="fa fa-location-dot" />
            <p>
              <span className="small-text">address</span>
              Gujarat, India
            </p>
          </div>
          {/* CONTACT ITEM ENDS */}
        </div>

        <div>
          {/* CONTACT ITEM STARTS */}
          <div className="animated-layer fade-in-down-animation fadeInUp wow">
            <i className="fa fa-envelope" />
            <p>
              <a href="mailto:parmarrohitk.bca@gmail.com">
                <span className="small-text">email</span>
                parmarrohitk.bca@gmail.com
              </a>
            </p>
          </div>
          {/* CONTACT ITEM ENDS */}

          {/* CONTACT ITEM STARTS */}
          <div className="animated-layer fade-in-up-animation fadeInUp wow">
            <i className="fa fa-share-nodes" />
            <span className="small-text">follow me</span>
            <ul className="social">
              <li>
                <a href="https://github.com/ParmarRohitk" target="_blank">
                  <i className="fa-brands fa-github" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/parmar-rohit-k-2b747721b/"
                  target="_blank"
                >
                  <i className="fa-brands fa-linkedin" />
                </a>
              </li>
              {/*  */}
            </ul>
          </div>
          {/* CONTACT ITEM ENDS */}
        </div>
      </div>
      {/* CONTACTS ENDS */}

      <img
        alt=""
        className="separator hide-mobile"
        src="assets/separator.png"
      />
    </section>
  );
};

export default Contact;
