import React from "react";
import "./MoreBtn.css";
import { useHistory } from "react-router-dom";

function MoreBtn({ direction, text, type }) {
  let history = useHistory();

  function handleClick(path) {
    history.push(`/${path}`);
  }

  return (
    <button
      className={`more__btn ${type === "learn_more" ? "more__btn_large" : ""}`}
      onClick={() => (type === "learn_more" ? null : handleClick(direction))}
    >
      <span className="circle" aria-hidden="true">
        <span className="more__icon more__arrow"></span>
      </span>
      {type === "learn_more" ? (
        <a className="more__text" href="http://lss.m-cti.ru/">
          {text}
        </a>
      ) : (
        <p className="more__text">{text}</p>
      )}
    </button>
  );
}

export default MoreBtn;
