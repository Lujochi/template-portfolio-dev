import { NavLink } from "react-router-dom";
import "./Header.css";

const Navbar = () => {
  return (
    <nav className="nav-header">
      <label className="nametxt">luan-jose-chiodini</label>
      <NavLink exact="true" to="/" className="nav-button">
        _hello
      </NavLink>
      <NavLink to="/about" className="nav-button">
        _about
      </NavLink>
      <NavLink to="/projects" className="nav-button">
        _projects
      </NavLink>
      <span></span>
      <NavLink to="/contact" className="nav-button">
        _contact-me
      </NavLink>
    </nav>
  );
};

export default Navbar;
