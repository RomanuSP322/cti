import React, { useState } from "react";
import "./ThreeDInfo.css";
import HoverMe from "../HoverMe/HoverMe";

import real from "../../images/real3d.png";
import line from "../../images/line3d.png";

function ThreeDInfo({ items }) {
  const [hover, setHover] = useState(false);

  const styles = {
    "--normal": `url(${line})`,

    "--hover": `url(${real})`,
  };

  return (
    <section className="threedinfo">
      <h2 className="threedinfo__title">
        Цифровая трансформация технической документации
      </h2>
      <div className="threedinfo__content">
        <div className="threedinfo__column_left">
          {!items || items.length === 0
            ? null
            : items.map((item, idx) => {
                return (
                  <div className="threedinfo__item" key={idx}>
                    <img
                      className="threedinfo__ico"
                      alt="3dico"
                      src={item.ico}
                    />
                    <p className="threedinfo__article">{item.text}</p>
                  </div>
                );
              })}
        </div>
        <div className="threedinfo__column_right" style={styles}>
          <HoverMe />
        </div>
      </div>
    </section>
  );
}

export default ThreeDInfo;
