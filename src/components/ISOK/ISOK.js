import React, { useEffect, useState } from "react";
import "./ISOK.css";
import isokintro from "../../video/isok.webm";
import phone from "../../images/phone.png";

function Isok({ isokdata }) {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [cur, setCur] = useState(0);
 

  const onClick = (idx) => {
    (idx+1 === cur) ?
     setCur(0) :
     setCur(idx + 1)   
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
      return 400;
    } else if (width > 1195) {
      return 300;
    }  else if (width > 1195) {
      return 200;
    }    else if (width > 645) {
      return 300;
    } else 
      return 150
    
     
  };
  const position = { transform: `translateX(-${cur * videoWidth(windowWidth)}px)` };

  return (
    <section className="isok">   
      <div className="isok__container">
        <div className="isok__column_left">
          <div className="isok__video-content">
              <img src={phone} alt='phone' className="isok__phone-img"/>
            <div className="isok__video-wrapper">
              <div className="isok__videos" style={position}>
                <video autoPlay muted loop className="isok__video">
                  <source src={isokintro} type="video/webm" />
                </video>
                {isokdata.map((item, idx) => {
                  return (
                    <video autoPlay muted loop className="isok__video" key={idx}>
                      <source src={item.webm} type="video/webm" />
                    </video>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        <div className="isok__column_right">
        <h2 className="isok__title">
        Интерактивные Стандартные Операционные Карты
      </h2>
          <p className="isok__discription">
            Интерактивные стандартные операционные карты создаются на основе 3D
            моделей деталей и сборочных единиц и включают в себя пошаговую
            визуализацию последовательности операций. Используемые в
            технологическом процессе инструмент, шаблоны и оснастка также
            выполняются в технологии 3D моделирования.
          </p>
          {!isokdata || isokdata.length === 0 ? null : (
            <div className="isok__capabilities">
              <h2 className={`capabilities-title ${
                      cur === 0 ? "" : "isok__capabilities-title_active"
                    }`}>
                Функциональность
              </h2>
              {isokdata.map((item, idx) => {
                return (
                  <div className="capabilities__item" key={idx}>
                  <button
                    onClick={() => onClick(idx)}
                    className={`capabilities__button isok__button ${
                      idx + 1 === cur ? "capabilities__button_active" : ""
                    }`}
                  >
                    <h3 className={`capabilities__item-title isok__item-title ${
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
      </div>
    </section>
  );
}

export default Isok;
