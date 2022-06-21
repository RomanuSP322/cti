
import React from 'react';
import './MoreBtn.css';
import { useHistory } from "react-router-dom";



function MoreBtn({direction, text, type}) {
      
  let history = useHistory();

  function handleClick(path) {
    history.push(`/${path}`);
  }


  return (
    <button className={`more__btn ${
      type === "learn_more" ? "more__btn_large" : ""
    }`} onClick={()=> handleClick(direction)}>
    <span className="circle" aria-hidden="true">
      <span className="more__icon more__arrow"></span>
    </span>
    <p className="more__text">{text}</p>
  </button>
  );
}

export default MoreBtn;


