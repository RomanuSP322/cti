import React, { useEffect, useRef } from "react";
import { intro, panels, databaseCases } from "../../consts/databasesData";
import Header from "../Header/Header";
import Intro from "../Intro/Intro.js";
import Accordion from "../Accordion/Accordion";
import Waves from "../Waves/Waves";
import DatabaseCase from '../DatabaseCase/DatabaseCase';
import Footer from "../Footer/Footer";
import "./Databases.css";

import itAbout from "../../images/itabout.png";

function Databases() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const next = useRef(null);

  return (
    <div className="databases">
      <Header />
      <Intro intro={intro} nextRef={next} />
     
      {/* </div> */}
      <div className="main__accordion" ref={next}>
        <Accordion panels={panels} type="hrizontal" />
      </div>
      
      <Waves
        pos={"up"}
        svg={
          "M0,96L80,85.3C160,75,320,53,480,64C640,75,800,117,960,138.7C1120,160,1280,160,1360,160L1440,160L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
        }
      /> 
      <div className="databases__about" >
       <h2 className="databases__about_title">Богатый опыт в проектировании  и внедрении  корпоративных систем</h2>  
        <div className="databases__about_content">
          {/* <div className="databases__about_column_right">
            



          </div>
          <div className="databases__about_column_left"> */}
            <p className="databases__about_article">
              ЦТИ разрабатывает крупные программные комплексы, которые
              объединяют в себе большое количество разнородной информации.
              Решение подобных задач требует особенно тщательного подхода к
              вопросам надежности хранения данных, систематизации и удобства
              доступа к ним. Также актуальным вопросом является
              конфиденциальность хранимой информации и надежность ее защиты от
              несанкционированного доступа. Для решения этих вопросов
              используются различные системы управления базами данных. Мы
              накопили богатый опыт в областях, связанных с разработкой подобных
              систем.
            </p>
            <img
              className="databases__about_img"
              src={itAbout}
              alt="img"
              draggable="false"
            />
          </div>
        </div>
      <DatabaseCase {...databaseCases[0]} />
      <DatabaseCase {...databaseCases[1]}  imgpos={'right'}/>
      <Waves
        pos={"down"}
        svg={
          "M0,64L60,64C120,64,240,64,360,96C480,128,600,192,720,192C840,192,960,128,1080,96C1200,64,1320,64,1380,64L1440,64L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"
        }
      />
      <DatabaseCase {...databaseCases[2]} theme={'dark'} />
  
      <DatabaseCase {...databaseCases[3]} theme={'dark'} imgpos={'right'}/>
      <Footer />
    </div>
  );
}

export default Databases;
