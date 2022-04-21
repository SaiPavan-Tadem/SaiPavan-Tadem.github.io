import React from "react";
import "./aboutme.css";
import { Heading } from "components/Heading/Heading";
import aboutmeimage from "../../images/aboutme.png";
import { useMediaQuery } from "react-responsive";
const AboutMe = () => {
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 900px)" });
  return (
    <section className="about" name="aboutme" id="aboutme">
      <Heading text="About me" style={{ marginBottom: "0rem" }} />
      <div className="content">
        <div className="left" style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
          {!isTabletOrMobile && <img src={aboutmeimage} alt="aboutme" height="40%" />}
        </div>
        <div className="right">
          <p>
            &nbsp;I am a first year master's student specializing in medical imaging and informatics (jointly handled
            by departments of school of Medical Science & Technology + Electrical Engineering).
            <br />
            <br /> &nbsp; My area of research interests lies on image processing,deep learning and computer
            vision,Medical Imaging applications,.Project work in every course subject helped me a lot to understand how
            computers analyze images and videos. After my masters I will go for a PhD,so I would like to utilize this
            summer by attending a research internship.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
