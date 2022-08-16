import React, { useState } from "react";
import "./HoverMe.css";

function HoverMe() {
  const [hover, setHover] = useState(false);

  return (
    <div className="hoverme-wrapper" onMouseEnter={() => setHover(true)}>
      {hover ? null : (
        <div className="hoverme">
          <span className="hoverme__circle"></span>
          <span className="hoverme__circle"></span>
        </div>
      )}
    </div>
  );
}

export default HoverMe;
