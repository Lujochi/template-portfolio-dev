import { NavLink } from "react-router-dom";
import HeaderTransition from "./HeaderTransition";
import "./NavHeader.css";
import "./menu.css";

const NavHeader = () => {
  return (
    <HeaderTransition>
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
                <NavLink exact="true" to="/" className="btn-Links home">
                  _home
                </NavLink>
              </li>
              <li>
                <NavLink to="/about" className="btn-Links about">
                  _about
                </NavLink>
              </li>
              <li>
                <NavLink to="/projects" className="btn-Links projects">
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
    </HeaderTransition>
  );
};

export default NavHeader;
