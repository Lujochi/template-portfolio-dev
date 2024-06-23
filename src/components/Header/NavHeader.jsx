import { NavLink } from "react-router-dom";
import "./NavHeader.css";
import "./menu.css";

const NavHeader = () => {
  return (
    <header className="header">
      <div className="header-container">
        <p>luan_jose_chiodini</p>
        <nav>
          <input type="checkbox" id="menu-hamburger" />
          <label htmlFor="menu-hamburger">
            <div className="menu">
              <span className="hamburger"></span>
            </div>
          </label>
          <ul>
            <li>
              <NavLink exact="true" to="/" className="btn-Links">
                _home
              </NavLink>
            </li>
            <li>
              <NavLink to="/about" className="btn-Links">
                _about
              </NavLink>
            </li>
            <li>
              <NavLink to="/projects" className="btn-Links">
                _projects
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact" className="btn-Links contact">
                _contact-me
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default NavHeader;
