import "./Footer.css";

const Footer = () => {
  return (
    <footer>
      <div id="footer-container">
        <label>find me in:</label>
        <a href="https://www.instagram.com/lujochii/" target="_blank">
          <i className="ri-instagram-fill"></i>
        </a>
        <a href="https://www.linkedin.com/in/lujochi/" target="_blank">
          <i className="ri-linkedin-box-fill"></i>
        </a>
        <span></span>
        <a
          href="https://github.com/Lujochi"
          target="_blank"
          id="footer-link-github"
        >
          @Lujochi <i className="ri-github-fill"></i>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
