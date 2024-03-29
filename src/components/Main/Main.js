import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { panels, cases, solutions, advantages } from "../../consts/mainData.js";

import Footer from "../Footer/Footer";
import Whowe from "../Whowe/Whowe";
import Accordion from "../Accordion/Accordion";
import Cases from "../Cases/Cases";

import Solutions from "../Solutions/Solutions";
import Advantages from "../Adnantages/Advantages";
import News from "../News/News";
import ScrollDown from "../ScrollDown/ScrollDown";
import Banner from "../Banner/Banner.js";

import Waves from "../Waves/Waves";

import "./Main.css";

import slide_second from "../../images/mainintro.png";

function Main() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    function handleResize() {
      setWindowWidth(window.innerWidth);
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const next = useRef(null);

  return (
    <div className="main">
      <div className="main__slider">
        <h2 className="main__title noselect">
          Центр Транспортных <br></br> Исследований
        </h2>
        <h3 className="main__subtitle top_span">
          Актуальные IT решения
          <br></br> с 1992 года
        </h3>
        <img
          src={slide_second}
          alt="img"
          className="main__image"
          draggable="false"
        />
        <div className="main__notes">
          <a className="main__note" href="http://demo.m-cti.ru/" target="blank">
            <h4 className="main__note_title">ИЭТР v.3</h4>
            <p className="main__note_subtitle">демонстрация возможностей</p>
          </a>
          <Link
            className="main__note"
            to={{
              pathname: "/company",
              hash: "#timeline",
            }}
          >
            <h4 className="main__note_title">История</h4>
            <p className="main__note_subtitle">таймлайн развития компании</p>
          </Link>

          <ScrollDown refProp={next} />
        </div>
        <Banner />
      </div>

      <div className="main__accordion" ref={next}>
        <Accordion
          panels={panels}
          type={windowWidth < 901 ? "horizontal" : "vertical"}
        />
      </div>
      <Waves
        pos={"up"}
        svg={
          "M0,64L80,58.7C160,53,320,43,480,58.7C640,75,800,117,960,138.7C1120,160,1280,160,1360,160L1440,160L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
        }
      />
      <div className="main__solutions">
        <Solutions solutions={solutions} />
      </div>

      <div className="main__cases">
        <Cases cases={cases} />
      </div>
      <div className="main__whoweare">
        <Whowe />
      </div>
      <Waves
        pos={"down"}
        svg={
          "M0,64L80,58.7C160,53,320,43,480,53.3C640,64,800,96,960,106.7C1120,117,1280,107,1360,101.3L1440,96L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"
        }
      />
      <div className="main__advantages">
        <Advantages items={advantages} />
      </div>
      <div className="main__news">
        <News location={"mainpage"} />
      </div>

      <Footer />
    </div>
  );
}

export default Main;
