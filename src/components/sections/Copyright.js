const Copyright = () => {
  return (
    <section className="copyright">
      <img
        alt=""
        className="z-1 hide-mobile"
        src="assets/separator-copyright.png"
      />
      <div>
        <span>© {new Date().getFullYear()} Parmar Rohit K.</span>
        <ul>
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
        </ul>
      </div>
    </section>
  );
};
export default Copyright;
