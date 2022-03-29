
import React from 'react';
import './MoreBtn.css';
import { useHistory } from "react-router-dom";



function MoreBtn({direction, text}) {
      
  let history = useHistory();

  function handleClick(path) {
    history.push(`/${path}`);
  }


  return (
    <button class="more__btn" onClick={()=> handleClick(direction)}>
    <span class="circle" aria-hidden="true">
      <span class="more__icon more__arrow"></span>
    </span>
    <p class="more__text">{text}</p>
  </button>
  );
}

export default MoreBtn;


