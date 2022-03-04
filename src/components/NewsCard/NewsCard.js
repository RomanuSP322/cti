import React from 'react';
import './NewsCard.css';

function NewsCard({props}) {
  return (
    <div className='news-card'>
      <img src={props.img} alt='' className='news-card__image'/>
      <div className='news-card__content'>
        <p className='news-card__date'>{props.date}</p>
        <h2 className='news-card__title'>{props.title}</h2>
        <p className='news-card__text'>{props.text} </p>
        <button
          type='button'
          className='news-card__button_more'          
        >
          Подробнее
        </button>
      </div>
    </div>
  );
}

export default NewsCard;
