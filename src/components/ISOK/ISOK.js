import React, { useEffect, useState } from "react";
import "./ISOK.css";
import isokintro from "../../video/isok.webm";
import phone from "../../images/phone.png";

function Isok({ isokdata }) {
  const [cur, setCur] = useState(-1);
  const position = { transform: `translateX(-${cur * 400}px)` };

  const onClick = (idx) => {
    setCur(idx + 1);
    console.log(idx);
  };

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
                    <video autoPlay muted loop className="isok__video">
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
            <>
              <h2 className="isok__capabilities-title">
                Функциональность
              </h2>
              {isokdata.map((item, idx) => {
                return (
                  <div className="isok__item" key={idx}>
                    <button
                      onClick={() => onClick(idx)}
                      className={`isok__button ${
                        idx + 1 === cur ? "isok__button_active" : ""
                      }`}
                    >
                      <span
                        className={`isok__chekbox ${
                          idx + 1 === cur ? "isok__chekbox_active" : ""
                        }`}
                      ></span>
                      <h3
                        className={`isok__item-title ${
                          idx + 1 === cur ? "isok__item-title_active" : ""
                        }`}
                      >
                        {item.title}
                      </h3>
                    </button>
                  </div>
                );
              })}
            </>
          )}
        </div>
      </div>
    </section>
  );
}

export default Isok;
