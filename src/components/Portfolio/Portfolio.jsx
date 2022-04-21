import React, { useEffect, useState } from "react";

// Styles
import "./portfolio.css";

// components
import { Heading } from "components/Heading/Heading";

// Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faExternalLinkSquareAlt } from "@fortawesome/free-solid-svg-icons/faExternalLinkSquareAlt";
import { faGithubSquare } from "@fortawesome/free-brands-svg-icons/faGithubSquare";
import { faUserLock } from "@fortawesome/free-solid-svg-icons/faUserLock";

import PortfolioItem from "./PortfolioItem/PortfolioItem";
const images = [
  "https://raw.githubusercontent.com/SaiPavan-Tadem/CycleGAN/main/Some_Test_Results/Map_SAT_1.png",
  "https://raw.githubusercontent.com/SaiPavan-Tadem/Pattern-Recognition-and-Machine-Intelligence/main/Images/SampleImage.png",
  "https://raw.githubusercontent.com/SaiPavan-Tadem/SaiPavan-Tadem.github.io/main/project_images/wbc.png",
  "https://github.com/SaiPavan-Tadem/Computer-Vision-Assignments/blob/main/Term%20Project-Review%20Paper/Edge.png?raw=true"

]
const Portfolio = ({ projects }) => {
  const [selected, setSelected] = useState("featured");
  const data = 
    [
      {
        "category": "",
        "id": 1,
        "img": {
          "asset": {
            "url": images[0]
          }
        },
        "liveUrl": "",
        "repositoryUrl": " https://github.com/SaiPavan-Tadem/CycleGAN",
        "subject": "Neural Networks and Applications",
        "by": "Debashis Sen-IIT Kharagpur",
        "tagline": "",
        "title": " Unpaired Image-to-Image Translation using Cycle-Consistent Adversarial Networks-cycleGAN"
      },
      {
        "category": "",
        "id": 2,
        "img": {
          "asset": {
            "url": images[1]
          }
        },
        "subject": "Pattern recognition and Machine intelligence",
        "by": "Nirmalya Ghosh-IIT Kharagpur",
        "liveUrl": "",
        "repositoryUrl": "https://github.com/SaiPavan-Tadem/Pattern-Recognition-and-Machine-Intelligence",
        "tagline": "",
        "title": "Performance analysis of deep learning model for pneumonia detection with adaptive contrast enhancement methods."
      },
      {
        "category": "",
        "id": 3,
        "img": {
          "asset": {
            "url": images[2]
          }
        },
        "subject": "Digital Image Processing and applications",
        "by": "Debdoot Sheet-IIT Kharagpur",
        "liveUrl": "",
        "repositoryUrl": "https://github.com/SaiPavan-Tadem/WBC-Classification",
        "tagline": "",
        "title": "WBC classification using traditional image processing."
      },
      {
        "category": "",
        "id": 17,
        "img": {
          "asset": {
            "url": images[3]
          }
        },
        "subject": "Computer Vision",
        "by": "Debashis Sen-IIT Kharagpur",
        "liveUrl": "",
        "repositoryUrl": "https://github.com/SaiPavan-Tadem/Computer-Vision-Assignments/blob/main/Term%20Project-Review%20Paper/Computer_Vision_ReviewPaper.pdf",
        "tagline": "",
        "title": "Review paper(term project) on edge,corner and boundary detection."
      }
    ]
  
  const [projectList, setProjectList] = useState([]);

  console.log(projectList,'list')
  useEffect(() => {
    let tempList = [];
    projects.map(({ category }) => {
      if (!tempList.includes(category)) {
        tempList.push(category);
      }

      return null;
    });
    setProjectList(tempList);
  }, [projects]);

  useEffect(() => {
    projectList.map((list) => {
      if (selected === list) {
        // setData(projects.filter((project) => project.category === list));
      }

      return null;
    });
  }, [selected, projectList, projects]);
  console.log(data)
  return (
    <section
      data-aos="fade-left"
      className="portfolio"
      name="projects"
      id="projects"
    >
      <Heading text="Projects" style={{ padding: "3rem" }} />
      <div className="list">
        {/* {projectList &&
          projectList.map((list) => (
            <PortfolioItem
              title={list}
              key={list}
              active={selected === list}
              setSelected={setSelected}
              id={list}
            />
          ))} */}
      </div>
      <div className="row">
        {data.length &&
          data.map((item, index) => (
            <div className="column" key={index} style={{padding: "15px"}}>
              <img src={item?.img?.asset.url} alt={item.title} style={{height: "200px", objectFit:'contain'}} />
              <div className="overlay">
                <div className="left">
                  <h3 style={{paddingBottom: "5px"}}>{item.title}</h3>
                  {item.tagline &&<><hr/><p>{item.tagline}</p></> }
                  <hr/>
                 <p> By  <b>{item.by}</b></p>
                </div>
                <div className="right">
                  {item.repositoryUrl !== "private" ? (
                    <a href={item.repositoryUrl}>
                      <FontAwesomeIcon
                        icon={faGithubSquare}
                        size="2x"
                        className="icon"
                        style={{ marginRight: "0.3em" }}
                        title="Github Repo"
                      />
                    </a>
                  ) : (
                    <a href="#_">
                      <FontAwesomeIcon
                        icon={faUserLock}
                        size="2x"
                        className="icon"
                        style={{ marginRight: "0.3em" }}
                        title="Private Repo"
                      />
                    </a>
                  )}

                  <a
                    href={item.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FontAwesomeIcon
                      icon={faExternalLinkSquareAlt}
                      size="2x"
                      className="icon"
                      title="Live view"
                    />
                  </a>
                </div>
              </div>
            </div>
          ))}
      </div>
    </section>
  );
};

export default Portfolio;
