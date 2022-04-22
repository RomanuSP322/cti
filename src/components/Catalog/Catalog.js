import React, { useEffect, useState } from "react";
import "./Catalog.css";
import catalogintro from "../../video/catalog.webm";
import monitor from "../../images/monitor.png";

function Catalog({ catalogdata }) {
  const [cur, setCur] = useState(-1);
  const position = { transform: `translateX(-${cur * 778}px)` };
  const styles = {
    "--normal": `url(${monitor})`,
  };

  const onClick = (idx) => {
    setCur(idx + 1);
    console.log(idx);
  };

  return (
    <section className="catalog">
      <h2 className="catalog__title">Интерактивные Электронные Каталоги</h2>
      <div className="catalog__container">
        <div className="catalog__column_left">
          <div className="catalog__video-content" style={styles}>
            <div className="catalog__video-wrapper">
              <div className="catalog__videos" style={position}>
                <video autoPlay muted loop className="catalog__video">
                  <source src={catalogintro} type="video/webm" />
                </video>
                {catalogdata.map((item, idx) => {
                  return (
                    <video autoPlay muted loop className="catalog__video">
                      <source src={item.webm} type="video/webm" />
                    </video>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        <div className="catalog__column_right">
          <p className="catalog__discription">
            Интерактивный электронный каталог сборочных единиц, деталей и узлов,
            представляет собой интерактивную иерархическую модель конструкции.
            Элементы модели снабжены подробной текстовой и графической
            информацией о стандартах исполнения, материалах и нормах допусков.
          </p>
          {!catalogdata || catalogdata.length === 0 ? null : (
            <>
              <h2 className="catalog__capabilities-title">
                Функциональные возможности:
              </h2>
              {catalogdata.map((item, idx) => {
                return (
                  <div className="catalog__item" key={idx}>
                    <button
                      onClick={() => onClick(idx)}
                      className={`catalog__button ${
                        idx + 1 === cur ? "catalog__button_active" : ""
                      }`}
                    >
                      <span
                        className={`catalog__chekbox ${
                          idx + 1 === cur ? "catalog__chekbox_active" : ""
                        }`}
                      ></span>
                      <h3
                        className={`catalog__item-title ${
                          idx + 1 === cur ? "catalog__item-title_active" : ""
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

export default Catalog;
