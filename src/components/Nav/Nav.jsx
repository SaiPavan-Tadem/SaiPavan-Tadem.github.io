import React, { useEffect, useLayoutEffect } from "react";

// Animation
import { motion } from "framer-motion";
import { animateScroll as scroll } from "react-scroll";
import {useMediaQuery} from 'react-responsive'
// Styles
import "./nav.css";
import CV from '../../docs/MyCV.pdf'

// Components
import MenuIcon from "components/Menu/MenuIcon/MenuIcon";
import { NavLink } from "./NavLink/NavLink";
const Nav = ({ menuOpen, setMenuOpen }) => {
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 900px)' })
  const handleClick = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className={"nav-wrapper " + (menuOpen && "menuActive")}>
      <motion.div
        id="navbar"
        className={"nav-container"}
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        transition={{
          duration: 1.5,
        }}
      >
        <span
          className={"logo " + (menuOpen && "menuActive")}
          onClick={() => scroll.scrollToTop()}
        >
          
        </span>
        {
          isTabletOrMobile ?
          <MenuIcon handleClick={handleClick} menuOpen={menuOpen} />
          :
          <ul className="menu-list">
            <NavLink text="Home" path="home" />
            <NavLink text="About" path="about" />
            <NavLink text="Projects" path="projects" />
            <li onClick={() => window.open(CV,"_blank")}>Download CV</li>
            <NavLink text="Contact me" path="contact" />
          </ul>

        }

      </motion.div>
    </div>
  );
};

export default Nav;
