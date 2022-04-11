import React, { useState, useEffect, useRef } from "react";

import {
  panels,
  cases,
  solutions,
  advantages,
} from "../../consts/mainData.js";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Whowe from "../Whowe/Whowe";
import Accordion from "../Accordion/Accordion";
import Cases from "../Cases/Cases";

import Solutions from "../Solutions/Solutions";
import Advantages from "../Adnantages/Advantages";
import News from "../News/News";
import ScrollDown from "../ScrollDown/ScrollDown";

import Waves from "../Waves/Waves";


import "./Main.css";

import slide_second from "../../images/slide5.png"; 

function Main() {
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const next = useRef(null);
  // const [hover, setHover] = useState(false);

  // const style = {
  //   normal: {
  //     backgroundImage: `url(${slide_second})`,
  //   },
  //   hover: {
  //     backgroundImage: `url(${slide_second})`,
  //   },
  // };

  return (
    <div className="main">

      <Header />

      <div className="main__slider">
        <h2 className="main__title noselect">
          Центр Транспортных <br></br> Исследований
        </h2>
        <h3 className="main__subtitle top_span">
          Надежный партнер на пути
          <br></br> к цифровому будущему
        </h3>
        <img
          src={slide_second}
          alt="img"
          className="main__image"
          draggable="false"          
        />
        <div className="main__notes">
          <div className="main__note">
            <h4 className="main__note_title">30 лет</h4>
            <p className="main__note_subtitle">на рынке IT-систем</p>
          </div>
          <div className="main__note">
            <h4 className="main__note_title">200+</h4>
            <p className="main__note_subtitle">проектов</p>
          </div>
          <div className="main__note">
            <h4 className="main__note_title">10 тыс</h4>
            <p className="main__note_subtitle">пользователей</p>
          </div>
          <ScrollDown refProp={next} />
        </div>
      </div>

      <div className="main__accordion" ref={next}>
        <Accordion panels={panels} />
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
        <News location={'mainpage'} />
      </div>  

      <Footer />
    </div>
  );
}

export default Main;
