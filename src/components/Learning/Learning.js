import React, { useEffect, useRef } from "react";
import { intro, posters } from "../../consts/learningData.js";
import Header from "../Header/Header";
import Intro from "../Intro/Intro";
import Polygraphy from "../Polygraphy/Polygraphy";
import Waves from "../Waves/Waves";
import Footer from "../Footer/Footer";
import "./Learning.css";

import vrheadset from "../../images/vrHeadsetOverlay.png";
import vrvideoMp from "../../video/vrvideo.mp4";
import vrvideoWebm from "../../video/vrvideo.webm";

import phone from "../../images/phone.png";
import learning from "../../images/phone.gif";
import laptop from "../../images/notebook.png";
import testvideoWebm from "../../video/test.webm";

function Learning() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const next = useRef(null);

  return (
    <div className="learning">
      <Header />
      <Intro intro={intro} nextRef={next} />
      <Waves
        pos={"up"}
        svg={
          "M0,128L80,112C160,96,320,64,480,42.7C640,21,800,11,960,10.7C1120,11,1280,21,1360,26.7L1440,32L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
        }
      />
      <section className="learning__vr" ref={next}>
        <div className="learning__vr-content">
          <div className="vr">
            <img src={vrheadset} className="vr__headset-img" alt="vrimage" />
            <video autoPlay muted loop width="853" height="480">
              <source src={vrvideoMp} type="video/mp4" />
              <source src={vrvideoWebm} type="video/webm" />.
            </video>
          </div>
          <div>
            <h2 className="learning__vr-title">VR тренажеры</h2>
            <p className="learning__vr-article">
              Внедрение в образовательный процесс VR-, AR-тренажеров, в
              частности программно-аппаратного комплекса для ознакомления с
              новыми сериями локомотивов и/или по поиску неисправностей
              локомотива, позволит повысить эффективность процесса обучения за
              счет отработки навыков работы с технологически сложным
              оборудованием, изучения нестандартных ситуаций в работе локомотива
              и способы их устранения.
            </p>
          </div>
        </div>
      </section>

      <Waves
        pos={"down"}
        svg={
          "M0,64L60,58.7C120,53,240,43,360,69.3C480,96,600,160,720,181.3C840,203,960,181,1080,165.3C1200,149,1320,139,1380,133.3L1440,128L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"
        }
      />
      <section className="learning__training">
        <div className="learning__training-content">
          <div>
            <h2 className="learning__training-title">
            Учебно-информационная система
            </h2>
            <p className="learning__training-article">
              Интерактивная система обучения предоставляет весь объем
              информации, необходимой при самоподготовке учащихся технических
              школ, а также рабочим и специалистам для подготовки к сдаче
              квалификационных тестов. В наши системы интерактивного обучения
              легко встраиваются новые учебные курсы, в том числе внеплановые
              инструктажи и информация по проведенным модернизациям
              оборудования. Связь с Системой мониторинга и контроля знаний
              позволяет произвести оперативную проверку доведения информации до
              персонала.
            </p>
          </div>
          <div className="learning__training-phone-wrapper">
            <img src={phone} className="learning__training-phone-img" />
            <img src={learning} className="learning__training-content-gif" />
          </div>
        </div>
      </section>
      <section className="learning__test">
        <h2 className="learning__test-title">
          Система мониторинга и контроля знаний
        </h2>
        <div className="learning__test-content">
          <div className="learning__test-wrapper">
            <img src={laptop} className="learning__laptop-img" alt="vrimage" />
            <video autoPlay muted loop width="853" height="480">
              <source src={testvideoWebm} type="video/webm" />.
            </video>
          </div>
          <div>
            <p className="learning__vr-article">
              Модуль контроля знаний предоставляет руководителям оперативную
              информацию об уровне подготовки работников в режиме реального
              времени. Вопросы и тесты модуля контроля структурированы по
              подразделениям, профессиям, должностям и т.п. и используют
              имеющиеся в информационной базе интерактивные 3D-модели и
              анимированные интерактивные процессы. Это обеспечивает возможность
              также формировать вопросы по учебным курсам, ответами на которые
              является, например, правильная последовательность необходимых
              действий при выполнении технологического процесса. Для систем
              контроля знаний подобная технология является уникальной.
            </p>
          </div>
        </div>
      </section>
      <Waves
        pos={"up"}
        svg={
          "M0,192L60,170.7C120,149,240,107,360,106.7C480,107,600,149,720,165.3C840,181,960,171,1080,154.7C1200,139,1320,117,1380,106.7L1440,96L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
        }
      />
      <Polygraphy posters={posters} />
      <Footer theme={"dark"} />
    </div>
  );
}

export default Learning;
