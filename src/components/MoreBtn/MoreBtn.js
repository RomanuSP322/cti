import React from 'react';
import { useHistory } from 'react-router-dom';
import './MoreBtn.css';

function MoreBtn({direction}) {
  let history = useHistory();

  function handleClick(path) {
    history.push(`/${path}`);
  }

  return (
    <button class='more__btn' onClick={() => handleClick(direction)}>
      <span class='circle' aria-hidden='true'>
        <span class='more__icon more__arrow'></span>
      </span>
      <p class='more__text'>Подробнее</p>
    </button>
  );
}

export default MoreBtn;
