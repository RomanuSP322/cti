import React, { useRef } from "react";
import {
  intro,
  info,
  catalogdata,
  manualdata,
  isokdata,
} from "../../consts/ietrData.js";

import Intro from "../Intro/Intro.js";
import TechManual from "../TechManual/TechManual.js";
import AboutIetr from "../AboutIetr/AboutIetr";
import Catalog from "../Catalog/Catalog.js";
import ISOK from "../ISOK/ISOK.js";
import Waves from "../Waves/Waves";

import ThreeDInfo from "../ThreeDInfo/ThreeDInfo";
import Footer from "../Footer/Footer";
import "./IETR.css";
import "../Capabilities/Capabilities.css";

function IETR() {
  const next = useRef(null);

  return (
    <div className="ietr">
      <Intro intro={intro} nextRef={next} />
      <div className="ietr__about" ref={next}>
        <AboutIetr />
      </div>
      <ThreeDInfo items={info} />
      <Waves
        pos={"up"}
        svg={
          "M0,96L80,85.3C160,75,320,53,480,64C640,75,800,117,960,138.7C1120,160,1280,160,1360,160L1440,160L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
        }
      />

      <Catalog catalogdata={catalogdata} />
      <TechManual manualdata={manualdata} />
      <Waves
        pos={"down"}
        svg={
          "M0,64L80,96C160,128,320,192,480,202.7C640,213,800,171,960,149.3C1120,128,1280,128,1360,128L1440,128L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"
        }
      />
      <ISOK isokdata={isokdata} />

      <Footer />
    </div>
  );
}

export default IETR;
