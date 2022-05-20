import React, { useEffect, useState } from "react";
import "./TechManual.css";
import "../Capabilities/Capabilities.css"
import manualintro from "../../video/manual.webm";
import tablet from "../../images/tablet.png";

function TechManual({ manualdata }) {
  const [cur, setCur] = useState(0);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const styles = {
    "--normal": `url(${tablet})`,
  };

  const onClick = (idx) => {
    idx + 1 === cur ? setCur(0) : setCur(idx + 1);
  };

  useEffect(() => {
    function handleResize() {
      setWindowWidth(window.innerWidth);
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

 
  const videoWidth = (width) => {
    if (width > 1595) {
      return 778;
    } else if (width > 1195) {
      return 520;
    } else if (width > 1020) {
      return 389;
    }   else 
    return 389;
  };
  const position = { transform: `translateX(-${cur * videoWidth(windowWidth)}px)` };

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
            технологических процессов осмотра, ремонта и инструментального
            контроля оборудования
          </p>
          {!manualdata || manualdata.length === 0 ? null : (
            <div className="manual__capabilities">
              <h2
                className={`capabilities-title ${
                  cur === 0 ? "" : "capabilities-title_active"
                }`}
              >
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
                      <h3
                        className={`capabilities__item-title ${
                          idx + 1 === cur
                            ? "capabilities__item-title_active"
                            : ""
                        }`}
                      >
                        {item.title}
                      </h3>
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
