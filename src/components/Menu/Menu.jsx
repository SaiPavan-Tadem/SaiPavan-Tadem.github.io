import React from "react";
import "./menu.css";
// Router
import { NavLink } from "components/Nav/NavLink/NavLink";
import CV from '../../docs/saipavan.pdf'
export const Menu = ({ menuOpen, setMenuOpen }) => {
  return (
    <div className={"menu " + (menuOpen && "active")}>
      <ul>
        <NavLink text="Home" path="home" onClick={() => setMenuOpen(false)} />
        <NavLink text="About" path="about" onClick={() => setMenuOpen(false)} />
        <NavLink text="Projects" path="projects" onClick={() => setMenuOpen(false)} />
        <NavLink text="Download CV" path="" onClick={() => {
          window.open(CV,"_blank")
          setMenuOpen(false)
        }} />
        {/* <li onClick={() => setMenuOpen(false)}>Download CV</li> */}
        <NavLink text="Contact" path="contact" onClick={() => setMenuOpen(false)} />
      </ul>
    </div>
  );
};
