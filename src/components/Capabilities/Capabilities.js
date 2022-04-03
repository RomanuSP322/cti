import React, { useEffect, useState } from "react";
import "./Capabilities.css";

import tablet from "../../images/tablet.png";

function Capabilities({ capabilities }) {
  const [cur, setCur] = useState(0);  
  const position = { transform: `translateY(-${cur * 505}px)` };

  
  const onClick = (idx) => {
    setCur(idx);    
   };



 

  return (
    <section className="capabilities">
      <h2 className="capabilities__title">Функциональные возможности</h2>
      <div className="capabilities__container">
        <div className="capabilities__column_left">
          {!capabilities || capabilities.length === 0 ? null : (
            <>
              {capabilities.map((item, idx) => {
                return (
                  <div className="capabilities__item" key={idx}>
                    <button
                      onClick={() => onClick(idx)}
                      className="capabilities__button"
                    >
                      <h3 className="capabilities__item-title">{item.title}</h3>
                      <div
                        className={`capabilities__arrow ${
                          idx === cur ? "capabilities__arrow_active" : ""
                        }`}
                      ></div>
                    </button>
                    <p
                      className={`capabilities__dropdown ${
                        idx === cur ? "capabilities__dropdown_active" : ""
                      }`}
                    >
                      {item.text}
                    </p>
                  </div>
                );
              })}
            </>
          )}
        </div>
        <div className="capabilities__column_right">
          <img
            src={tablet}
            alt="img"
            className="capabilities__tablet"
            draggable="false"
          />
          <div className="capabilities__gifs-wrapper">
            <div className="capabilities__gifs" style={position}>
              {capabilities.map((item, idx) => {
                return (
                  <img
                    src={item.image}
                    alt="img"
                    className="capabilities__gif"
                    draggable="false"
                    key={idx}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Capabilities;
