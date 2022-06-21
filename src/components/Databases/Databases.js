import React, { useEffect, useRef, useState } from "react";

import { intro, panels, databaseCases } from "../../consts/databasesData";
import Header from "../Header/Header";
import Intro from "../Intro/Intro.js";
import Accordion from "../Accordion/Accordion";
import Waves from "../Waves/Waves";
import DatabaseCase from "../DatabaseCase/DatabaseCase";
import MoreBtn from "../MoreBtn/MoreBtn";
import Footer from "../Footer/Footer";
import "./Databases.css";

import itAbout from "../../images/itabout.png";
import itPlatform from "../../images/platformthree.png";

function Databases() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    function handleResize() {
      setWindowWidth(window.innerWidth);
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // useEffect(() => {
  //   window.scrollTo(0, 0);
  // }, []);

  const next = useRef(null);

  return (
    <div className="databases">
      <Header />
      <Intro intro={intro} nextRef={next} />

      <div className="main__accordion" ref={next}>
        <Accordion
          panels={panels}
          type={windowWidth < 1101 ? "horizontal" : "vertical"}
        />
      </div>

      <Waves
        pos={"up"}
        svg={
          "M0,96L80,85.3C160,75,320,53,480,64C640,75,800,117,960,138.7C1120,160,1280,160,1360,160L1440,160L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
        }
      />
      <div className="databases__platform databases__about">
        <div className="databases__platform_column ">
          <h2 className="databases__platform_title databases__about_title ">
            Разработка решений на базе собственной платформы LSS
          </h2>
          <p className="databases__platform_article databases__about_article">
            Платформенная система LSS - это единая технология, предназначенная
            для разработки WEB ориентированных приложений, работающих с базами
            данных по 3-х звенной архитектуре. Платформа позволяет ускорить и
            стандатизировать процесс разработки отраслевых систем и при этом
            сохранить высокую отказоустойчивость поставляемых комплексных
            решений.
          </p>
          <div className="databases__platform_btn">
           
            <MoreBtn
              direction={"#"}
              text={`Читать подробнее о платформе`}
              type={"learn_more"}
            />
          </div>
        </div>
        <img
          className="databases__platform_img"
          src={itPlatform}
          alt="img"
          draggable="false"
        />
      </div>
      <div className="databases__about">
        <h2 className="databases__about_title">
          Богатый опыт в проектировании и внедрении корпоративных систем
        </h2>
        <div className="databases__about_content">
          <p className="databases__about_article">
            ЦТИ разрабатывает крупные программные комплексы, которые объединяют
            в себе большое количество разнородной информации. Решение подобных
            задач требует особенно тщательного подхода к вопросам надежности
            хранения данных, систематизации и удобства доступа к ним. Также
            актуальным вопросом является конфиденциальность хранимой информации
            и надежность ее защиты от несанкционированного доступа. Для решения
            этих вопросов используются различные системы управления базами
            данных. Мы накопили богатый опыт в областях, связанных с разработкой
            подобных систем.
          </p>
          <img
            className="databases__about_img"
            src={itAbout}
            alt="img"
            draggable="false"
          />
        </div>
      </div>
      <DatabaseCase
        {...databaseCases[0]}
        columns={windowWidth < 951 ? "1" : "2"}
      />
      <DatabaseCase
        {...databaseCases[1]}
        imgpos={"right"}
        columns={windowWidth < 951 ? "1" : "2"}
      />
      <Waves
        pos={"down"}
        svg={
          "M0,64L60,64C120,64,240,64,360,96C480,128,600,192,720,192C840,192,960,128,1080,96C1200,64,1320,64,1380,64L1440,64L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"
        }
      />
      <DatabaseCase
        {...databaseCases[2]}
        theme={"dark"}
        columns={windowWidth < 951 ? "1" : "2"}
      />

      <DatabaseCase
        {...databaseCases[3]}
        theme={"dark"}
        imgpos={"right"}
        columns={windowWidth < 951 ? "1" : "2"}
      />
      <Footer />
    </div>
  );
}

export default Databases;
