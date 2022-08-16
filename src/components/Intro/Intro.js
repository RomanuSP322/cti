import React from "react";
import ScrollDown from "../ScrollDown/ScrollDown";
import "./Intro.css";

const Intro = ({ intro, nextRef, scroller }) => {
  const styles = {
    "--normal": `url(${intro.bgimage})`,
  };
  return (
    <section
      className={`${intro.section}__intro intro__wrapper`}
      style={styles}
    >
      <h2 className={`intro__title ${intro.section}__title`}>{intro.title}</h2>
      <h3 className={`intro__subtitle top_span  ${intro.section}__subtitle`}>
        {intro.subtitle}
      </h3>
      {intro.note ? (
        <div className="intro__notes">
          <h3 className="intro__notes-title">{intro.note.title}</h3>
          <h4 className="intro__notes-subtitle">{intro.note.subtitle}</h4>
        </div>
      ) : null}
      {scroller ? null : <ScrollDown refProp={nextRef} />}
    </section>
  );
};

export default Intro;
