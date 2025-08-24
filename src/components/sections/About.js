const About = () => {
  return (
    <section className="about main-section flex-column-mobile" id="about">
      {/* INFO HOLDER STARTS */}
      <div className="info flex-column-mobile">
        {/* IMAGE STARTS */}
        <div
          className="img-container animated-layer image-animation my-photo-container fadeInUp wow"
          data-wow-offset={200}
          id="my-photo"
        >
          <div>
            <div>
              <img className="my-photo" src="/prk/parmarrohitk.webp" alt="" />
            </div>
          </div>
        </div>
        {/* IMAGE ENDS */}
        {/* INFO STARTS */}
        <div>
          <h2>
            <span>
              <span className="animated-layer fade-in-up-animation fadeInUp wow">
                Parmar
              </span>
            </span>
            <span>
              <span className="animated-layer fade-in-up-animation fadeInUp wow">
                Rohit K.
              </span>
            </span>
          </h2>
          <div className="infos">
            <ul>
              <li>
                <span>
                  <span className="animated-layer fade-in-up-animation fadeInUp wow">
                    <span>Role :</span>
                    <span>Full-Stack Web Developer</span>
                  </span>
                </span>
              </li>
              <li>
                <span>
                  <span className="animated-layer fade-in-up-animation fadeInUp wow">
                    <span>Tech Stack :</span>
                    <span>Javascript, TypeScript, MERN</span>
                  </span>
                </span>
              </li>
              <li>
                <span>
                  <span className="animated-layer fade-in-up-animation fadeInUp wow">
                    <span>Frameworks :</span>
                    <span>Next.js, Express.js, Laravel</span>
                  </span>
                </span>
              </li>
              <li>
                <span>
                  <span className="animated-layer fade-in-up-animation fadeInUp wow">
                    <span>CMS Experience :</span>
                    <span>WordPress, Custom-built CMS</span>
                  </span>
                </span>
              </li>
            </ul>
            <ul>
              <li>
                <span>
                  <span className="animated-layer fade-in-up-animation fadeInUp wow">
                    <span>Email :</span>
                    <span><a href="mailto:parmarrohitk.01@gmail.com">parmarrohitk.01@gmail.com</a></span>
                  </span>
                </span>
              </li>
              <li>
                <span>
                  <span className="animated-layer fade-in-up-animation fadeInUp wow">
                    <span>Focus :</span>
                    <span>Clean & Scalable Code</span>
                  </span>
                </span>
              </li>
              <li>
                <span>
                  <span className="animated-layer fade-in-up-animation fadeInUp wow">
                    <span>Preferred Tools :</span>
                    <span>VSCode, Postman, Slack</span>
                  </span>
                </span>
              </li>
              <li>
                <span>
                  <span className="animated-layer fade-in-up-animation fadeInUp wow">
                    <span>Deployment Tools :</span>
                    <span>Vercel, GitHub Actions</span>
                  </span>
                </span>
              </li>
            </ul>
          </div>
        </div>
        {/* INFO ENDS */}
      </div>
      {/* INFO HOLDER ENDS */}
      {/* SKILLS STARTS */}
      <div className="skills flex-column-mobile">
        {/* TITLE STARTS */}
        <div className="custom-title">
          {/* MAIN TITLE STARTS */}
          <h3>
            <span>
              <span className="animated-layer fade-in-left-animation fadeInUp wow">
                My Skills
              </span>
            </span>
          </h3>
          {/* MAIN TITLE ENDS */}
        </div>
        {/* TITLE ENDS */}
        <div className="skills-content">
          <div>
            {/* <!-- SKILL ITEM STARTS --> */}
            <div className="animated-layer fade-in-down-animation fadeInLeft wow">
              <span>
                <i className="devicon-react-plain"></i>
              </span>
              <h4>React.js</h4>
            </div>
            {/* <!-- SKILL ITEM ENDS --> */}
            {/* <!-- SKILL ITEM STARTS --> */}
            <div className="animated-layer fade-in-up-animation fadeInRight wow">
              <span>
                <i className="devicon-nextjs-original"></i>
              </span>
              <h4>Next.js</h4>
            </div>
            {/* <!-- SKILL ITEM ENDS --> */}
          </div>
          <div>
            {/* <!-- SKILL ITEM STARTS --> */}
            <div className="animated-layer fade-in-down-animation fadeInLeft wow">
              <span>
                <i className="devicon-nodejs-plain"></i>
              </span>
              <h4>Node.js</h4>
            </div>
            {/* <!-- SKILL ITEM ENDS --> */}
            {/* <!-- SKILL ITEM STARTS --> */}
            <div className="animated-layer fade-in-up-animation fadeInRight wow">
              <span>
                <i className="devicon-laravel-plain"></i>
              </span>
              <h4>Laravel</h4>
            </div>
            {/* <!-- SKILL ITEM ENDS --> */}
          </div>
          <div>
            {/* <!-- SKILL ITEM STARTS --> */}
            <div className="animated-layer fade-in-down-animation fadeInLeft wow">
              <span>
                <i className="devicon-mysql-plain"></i>
              </span>
              <h4>MySQL</h4>
            </div>
            {/* <!-- SKILL ITEM ENDS --> */}
            {/* <!-- SKILL ITEM STARTS --> */}
            <div className="animated-layer fade-in-up-animation fadeInRight wow">
              <span>
                <i className="devicon-mongodb-plain"></i>
              </span>
              <h4>MongoDB</h4>
            </div>
            {/* <!-- SKILL ITEM ENDS --> */}
          </div>
          <div>
            {/* <!-- SKILL ITEM STARTS --> */}
            <div className="animated-layer fade-in-down-animation fadeInRight wow">
              <span>
                <i className="devicon-bootstrap-plain"></i>
              </span>
              <h4>Bootstrap</h4>
            </div>
            {/* <!-- SKILL ITEM ENDS --> */}
            {/* <!-- SKILL ITEM STARTS --> */}
            <div className="animated-layer fade-in-up-animation fadeInLeft wow">
              <span>
                <i className="devicon-tailwindcss-plain"></i>
              </span>
              <h4>Tailwind CSS</h4>
            </div>
            {/* <!-- SKILL ITEM ENDS --> */}
          </div>
          <div>
            {/* <!-- SKILL ITEM STARTS --> */}
            <div className="animated-layer fade-in-down-animation fadeInLeft wow">
              <span>
                <i className="devicon-wordpress-plain"></i>
              </span>
              <h4>WordPress</h4>
            </div>
            {/* <!-- SKILL ITEM ENDS --> */}
            {/* <!-- SKILL ITEM STARTS --> */}
            <div className="animated-layer fade-in-up-animation fadeInRight wow">
              <span>
                <i className="devicon-flask-original"></i>
              </span>
              <h4>Python Flask</h4>
            </div>
            {/* <!-- SKILL ITEM ENDS --> */}
          </div>
          <div>
            {/* <!-- SKILL ITEM STARTS --> */}
            {/* <div className="animated-layer fade-in-down-animation fadeInLeft wow">
              <span>
                <i className="devicon-microsoft-word-plain"></i>
              </span>
              <h4>MS Word</h4>
            </div> */}
            {/* <!-- SKILL ITEM ENDS --> */}
            {/* <!-- SKILL ITEM STARTS --> */}
            {/*  <div className="animated-layer fade-in-down-animation fadeInLeft wow">
              <span>
                <i className="devicon-microsoft-powerpoint-plain"></i>
              </span>
              <h4>MS PPT</h4>
            </div> */}
            {/* <!-- SKILL ITEM ENDS --> */}
          </div>
        </div>
      </div>
      {/* SKILLS ENDS */}
      {/* RESUME STARTS */}
      <div className="resume flex-column-mobile">
        {/* TITLE STARTS */}
        <div className="custom-title fadeInUp wow">
          {/* MAIN TITLE STARTS */}
          <h3>
            <span>
              <span className="animated-layer fade-in-left-animation">
                My Resume
              </span>
            </span>
          </h3>
          {/* MAIN TITLE ENDS */}
        </div>
        {/* TITLE ENDS */}
        {/* TIMELINE STARTS */}
        <div className="timeline">
          <ol className="animated-layer fade-in-animation">
            {/* JBcodeApp */}
            <li>
              <div className="animated-layer fade-in-down-animation fadeInUp wow">
                <div className="experience">
                  <h4>Full Stack Developer</h4>
                  <p>
                    <i className="fa-regular fa-clock" />
                    <span>2023 - Present</span>
                  </p>
                  <p>
                    <i className="fa-regular fa-building" />
                    <span>JBcodeApp</span>
                  </p>
                </div>
              </div>
            </li>
            {/* TIMELINE ITEM ENDS */}

            {/* BCA */}
            <li>
              <div className="animated-layer fade-in-up-animation fadeInUp wow">
                <div className="education">
                  <h4>Bachelor of Computer Applications (BCA)</h4>
                  <p>
                    <i className="fa-regular fa-clock" />
                    <span>2020 - 2023</span>
                  </p>
                  <p>
                    <i className="fa-solid fa-building-columns" />
                    <span>Veer Narmad South Gujarat University, Surat</span>
                  </p>
                </div>
              </div>
            </li>

            {/* MCA */}
            <li>
              <div className="animated-layer fade-in-down-animation fadeInUp wow">
                <div className="education">
                  <h4>Master of Computer Applications (MCA)</h4>
                  <p>
                    <i className="fa-regular fa-clock" />
                    <span>July 2023 - July 2025</span>
                  </p>
                  <p>
                    <i className="fa-solid fa-building-columns" />
                    <span>Jain (Deemed-to-be University)</span>
                  </p>
                </div>
              </div>
            </li>
            {/* TIMELINE ITEM ENDS */}

            {/* TIMELINE ITEM ENDS */}
            <li>
              <div className="animated-layer fade-in-up-animation fadeInUp wow">
                <div className="education">
                  <h4>Course on Computer Concept (CCC)</h4>
                  <p>
                    <i className="fa-regular fa-clock" />
                    <span>2019</span>
                  </p>
                  <p>
                    <i className="fa-regular fa-building" />
                    <span>NIELIT / Government Certified</span>
                  </p>
                </div>
              </div>
            </li>
            {/* CCC */}
            <li>
              <div className="animated-layer fade-in-down-animation fadeInUp wow">
                <div className="education">
                  <h4></h4>
                  <p>
                    <i className="fa-regular fa-clock" />
                    <span>2019</span>
                  </p>
                  <p>
                    <i className="fa-solid fa-building-columns" />
                    <span>NIELIT / Government Certified</span>
                  </p>
                </div>
              </div>
            </li>
            {/* TIMELINE ITEM ENDS */}
          </ol>
        </div>
        {/* TIMELINE ENDS */}
      </div>
      {/* RESUME ENDS */}
      <img
        alt=""
        className="separator hide-mobile"
        src="assets/separator.png"
      />
    </section>
  );
};
export default About;
