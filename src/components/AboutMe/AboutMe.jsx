import React from "react";
import "./aboutme.css";
import { Heading } from "components/Heading/Heading";
import aboutmeimage from "../../images/aboutme.png";
import { useMediaQuery } from "react-responsive";
const AboutMe = () => {
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 900px)" });
  const aboutme =
    "I am a master’s student at IIT Kharagpur, India. I enrolled in the department of Medical Science and Technology with the specialisation of Medical Imaging and Informatics. My areas of interest are statistics, computer vision ,deep learning, and medical image analysis. I am interested in interdisciplinary research and am open to working only on AI + healthcare research projects.";
  return (
    <section className="about" name="aboutme" id="aboutme">
      <Heading text="About me" style={{ marginBottom: "0rem" }} />
      <div className="content">
        <div className="left" style={{ display: "none", alignItems: "center", justifyContent: "center" }}>
          {!isTabletOrMobile && <img src={aboutmeimage} alt="aboutme" height="40%" />}
        </div>
        <div className="right">
          <p>
            {aboutme}
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
