import "./NavFooter.css";

const NavFooter = () => {
  return (
    <footer>
      <div className="footer">
        <nav>
          <p>find me in:</p>
          <ul>
            <li>
              <a href="https://www.instagram.com/lujochii/" target="_blank">
                <i className="ri-instagram-line"></i>
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/lujochi/" target="_blank">
                <i className="ri-linkedin-box-fill"></i>
              </a>
            </li>
          </ul>
        </nav>
        <a href="https://github.com/Lujochi" target="_blank">
          @lujochi
        </a>
      </div>
    </footer>
  );
};

export default NavFooter;
