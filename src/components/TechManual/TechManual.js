import React, { useEffect, useState } from "react";
import "./TechManual.css";
import manualintro from "../../video/manual.webm";
import tablet from "../../images/tablet.png";

function TechManual({ manualdata }) {
  const [cur, setCur] = useState(-1);
  const position = { transform: `translateX(-${cur * 778}px)` };
  const styles = {
    "--normal": `url(${tablet})`,
  };


  const onClick = (idx) => {
    (idx+1 === cur) ?
     setCur(0) :
     setCur(idx + 1) 
  
   };

  return (
    <section className="manual">
      <h2 className="manual__title">
        Интерактивные Электронные Технические Руководства
      </h2>
      <div className="manual__container">
        <div className="manual__column_left">
        <p className="manual__discription">
            Интерактивные электронные технические руководства, создаваемые на
            основе последних разработок в области визуализации и компьютерного
            моделирования, обеспечивают наглядное представление сложных
            технологических процессов осмотра, ремонта и проверки оборудования.
          </p>
          {!manualdata || manualdata.length === 0 ? null : (
            <div className="manual__capabilities">
              <h2 className={`manual__capabilities-title ${
                      cur === 0 ? "manual__capabilities-title_active" : ""
                    }`}>
                Функциональность
              </h2>
              {manualdata.map((item, idx) => {
                return (
                  <div className="capabilities__item" key={idx}>
                  <button
                    onClick={() => onClick(idx)}
                    className={`capabilities__button ${
                      idx + 1 === cur ? "capabilities__button_active" : ""
                    }`}
                  >
                    <h3 className={`capabilities__item-title ${
                          idx + 1 === cur ? "capabilities__item-title_active" : ""
                        }`}>{item.title}</h3>
                    <div
                      className={`capabilities__arrow ${
                        idx + 1 === cur ? "capabilities__arrow_active" : ""
                      }`}
                    ></div>
                  </button>
                  <p
                    className={`capabilities__dropdown ${
                      idx + 1 === cur ? "capabilities__dropdown_active" : ""
                    }`}
                  >
                    {item.description}
                  </p>
                </div>
                );
              })}
            </div>
          )}
        </div>

        <div className="manual__column_right">
        <div className="manual__video-content" style={styles}>
            <div className="manual__video-wrapper">
              <div className="manual__videos" style={position}>
                <video autoPlay muted loop className="manual__video">
                  <source src={manualintro} type="video/webm" />
                </video>
                {manualdata.map((item, idx) => {
                  return (
                    <video autoPlay muted loop className="manual__video">
                      <source src={item.webm} type="video/webm" />
                    </video>
                  );
                })}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default TechManual;
