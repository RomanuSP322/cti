import React from "react";
import "./Whowe.css";
import rzd from "../../images/rzdlogo.png";
import tvz from "../../images/tvzlogo.png";
import tmh from "../../images/tmhlogo.png";
import ovk from "../../images/ovklogo.png";
import mmetro from "../../images/mosmetrologo.png";
import nevz from "../../images/nevzlogo.png";
import get from "../../images/getlogo.png";
import spbmetro from "../../images/spbmetrologo.png";
import pkbct from "../../images/pkbctlogo.png";
import bmz from "../../images/bmzlogo.png";
import kolomna from "../../images/kolomnalogo.png";
import lokoteh from "../../images/lokotehlogo.png";

function Whowe() {
  return (
    <div className="whowe">
      <div className="whowe__parters">
        <h2 className="whowe__partners_title">Нам доверяют </h2>
        <div className="partners__row partners__row_top">
          <img
            className="partners__img partner__rzd-ico"
            src={rzd}
            alt=""
            draggable="false"
          />
          <img
            className="partners__img "
            src={mmetro}
            alt=""
            draggable="false"
          />
          <img
            className="partners__img partner__circle-ico"
            src={tmh}
            alt=""
            draggable="false"
          />
          <img
            className="partners__img partner__circle-ico"
            src={kolomna}
            alt=""
            draggable="false"
          />
          <img
            className="partners__img partner__rectangle-ico"
            src={ovk}
            alt=""
            draggable="false"
          />
          <img
            className="partners__img partner__pkbct-ico"
            src={pkbct}
            alt=""
            draggable="false"
          />
        </div>
        <div className="partners__row">
          <img
            className="partners__img partner__rectangle-ico"
            src={lokoteh}
            alt=""
            draggable="false"
          />
          <img
            className="partners__img partner__circle-ico"
            src={tvz}
            alt=""
            draggable="false"
          />
          <img
            className="partners__img partner__circle-ico"
            src={bmz}
            alt=""
            draggable="false"
          />

          <img className="partners__img " src={get} alt="" draggable="false" />
          <img
            className="partners__img "
            src={spbmetro}
            alt=""
            draggable="false"
          />
          <img className="partners__img " src={nevz} alt="" draggable="false" />
        </div>
      </div>
    </div>
  );
}

export default Whowe;
