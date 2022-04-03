import React, { useEffect, useRef } from "react";
import { events, abouts } from "../../consts/companyData.js";
import Header from "../Header/Header";
import Timeline from "../Timeline/Timeline";
import AboutUs from "../AboutUs/AboutUs";
import Waves from "../Waves/Waves";
import ScrollToTopBtn from "../ScrollToTop/ScrollToTopBtn";
import "./Company.css";

import company from "../../images/company.png";
import ScrollDown from "../ScrollDown/ScrollDown";

function Company() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const next = useRef(null);

  return (
    <div className="company">
      <Header />

      <div className="company__intro">
        <h2 className="company__title">30 лет</h2>
        <h3 className="company__subtitle top_span">
          Разрабатываем актуальные
          <br></br> IT решения для транспорта
        </h3>
        <img
          src={company}
          alt="img"
          className="company__image"
          draggable="false"
        />
        <div className="company__slcrolldown">
          {" "}
          <ScrollDown refProp={next} />
        </div>
      </div>
      <Waves
        pos={"up"}
        svg={
          "M0,96L60,80C120,64,240,32,360,37.3C480,43,600,85,720,106.7C840,128,960,128,1080,133.3C1200,139,1320,149,1380,154.7L1440,160L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
        }
      />
      <div className="company__about" ref={next}>
        <AboutUs items={abouts} />
      </div>
      <Waves
        pos={"down"}
        svg={
          "M0,96L60,80C120,64,240,32,360,37.3C480,43,600,85,720,112C840,139,960,149,1080,133.3C1200,117,1320,75,1380,53.3L1440,32L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"
        }
      />

      <div>
       <Timeline events={events} /> 
      </div>
   
    </div>
  );
}

export default Company;
