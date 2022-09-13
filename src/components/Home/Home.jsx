import React, { useEffect } from "react";

// SVG
// import man from "images/dev.svg";
import man from 'images/one.jpg'

// Animation
import { Link } from "react-scroll";
import { motion } from "framer-motion";
// CSS
import "./home.css";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { GrMail } from "react-icons/gr";
import { useMediaQuery } from "react-responsive";
const contentVariants = {
  initial: {
    translateX: "-100vw",
    opacity: 0,
  },

  animate: {
    translateX: "0vw",
    opacity: 1,
    transition: {
      duration: 2,
      when: "beforeChildren",
    },
  },
};

const Home = () => {
  // const isTabletOrMobile = useMediaQuery({ query: "(max-width: 900px)" });
  return (
    <section className="home-container" id="home" name="home">
      <motion.div className="content" variants={contentVariants} initial="initial" animate="animate">
        <h1>I’m Sai Pavan</h1>
        <p>Graduate student with dedicated research interests in deep learning(DL) and computer vision(CV) </p>
        <Link
          className="home-btn"
          to={"portfolio"}
          hashSpy={true}
          spy={true}
          smooth={true}
          delay={100}
          offset={-100}
          duration={500}
        >
          See My Work
        </Link>
        <ul className= "social-icons">
          <li onClick={() => window.open("https://github.com/SaiPavan-Tadem")}>
            <FaGithub />
            <span>Github</span>
          </li>
          <li onClick={() => window.open("https://www.linkedin.com/in/sai-pavan-tadem-4987a1160/")}>
            <FaLinkedin />
            <span>LinkedIn</span>
          </li>
          <li onClick={() => window.open("mailto:saipavanthadem@gmail.com")}>
            <GrMail />
            <span>E-Mail</span>
          </li>
          {/* <li>
          
              <span>g</span>
              <span>Github</span>
           
          </li> */}
        </ul>
      </motion.div>

      <motion.div
        className="svg"
        animate={{ translateY: [-20, 0, -20, 0] }}
        transition={{ yoyo: Infinity, duration: 6 }}
      >
        <img src={man} alt="Developer" />
      </motion.div>
    </section>
  );
};

export default Home;
