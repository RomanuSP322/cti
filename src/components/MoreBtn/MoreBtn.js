
import React from 'react';
import './MoreBtn.css';
import { useHistory } from "react-router-dom";



function MoreBtn({direction, text}) {
      
  let history = useHistory();

  function handleClick(path) {
    history.push(`/${path}`);
  }


  return (
    <button className="more__btn" onClick={()=> handleClick(direction)}>
    <span className="circle" aria-hidden="true">
      <span className="more__icon more__arrow"></span>
    </span>
    <p className="more__text">{text}</p>
  </button>
  );
}

export default MoreBtn;


