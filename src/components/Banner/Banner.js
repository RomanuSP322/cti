import React, { useState } from "react";
import "./Banner.css";

function Banner() {
  const [closed, setClosed] = useState(false);

  return (
    <div className={`banner ${closed ? "banner_closed" : ""}`}>
      <div className="banner__wrapper">
        <p className="banner__description">
          Старая версия сайта доступна по адресу
          <a className="banner__link" href="http://cti1520.ru/" target="blank">
            {" "}
            http://cti1520.ru/
          </a>
        </p>
        <button
          className="banner__btn_close"
          onClick={() => setClosed(true)}
        ></button>
      </div>
    </div>
  );
}

export default Banner;
