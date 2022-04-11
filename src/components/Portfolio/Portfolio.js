import React, { useEffect, useRef } from "react";
import { Link, useRouteMatch  } from 'react-router-dom';
import { intro, projects } from "../../consts/portfolioData";
import Header from "../Header/Header";
import Intro from "../Intro/Intro.js";
import Waves from "../Waves/Waves";
import Footer from "../Footer/Footer";
import ProjectsList from "../ProjectsList/ProjectsList";
import portfolioBg from "../../images/portfolio.png";
import "./Portfolio.css";

function Portfolio() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { path } = useRouteMatch();
  const styles = {
    "--normal": `url(${portfolioBg})`,
  };

  const next = useRef(null);

  return (
    <div className="portfolio" style={styles}>
      <Header />
      <Intro intro={intro} nextRef={next} scroller={"off"} />
      <Waves
        pos={"up"}
        svg={
          "M0,96L80,85.3C160,75,320,53,480,64C640,75,800,117,960,138.7C1120,160,1280,160,1360,160L1440,160L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
        }
      />
      <div className="portfolio__about" ref={next}>
        <ProjectsList projects={projects}/>
         </div>
      <Footer theme={'dark'} />
    </div>
  );
}

export default Portfolio;
