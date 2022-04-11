import React from "react";
import ScrollDown from '../ScrollDown/ScrollDown';
import "./Intro.css";



const Intro = ({ intro, nextRef, scroller }) => {

    const styles = {
        '--normal':  `url(${intro.bgimage})`    
       }
  return (
<section className={`${intro.section}__intro intro__wrapper`} style={styles}>
        <h2 className={`${intro.section}__title intro__title`}>
          {intro.title}
        </h2>
        <h3 className={`${intro.section}__subtitle top_span intro__subtitle`}>
          {intro.subtitle}
        </h3>
       {scroller ? null : < ScrollDown refProp={nextRef} />  }
      </section>
  );
};

export default Intro;
