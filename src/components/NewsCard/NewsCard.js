import React from 'react';
import './NewsCard.css';

function NewsCard({props}) {
  return (
    <div className='newscard'>
      <img src={props.img} alt='картинка' className='newscard__image' draggable='false' />
      <div className='newscard__content'>
        <p className='newscard__date'>{props.date}</p>
        <h2 className='newscard__title'>{props.title}</h2>
        <p className='newscard__text'>{props.text} </p>
        {/* <button
          type='button'
          className='newscard__button_more'          
        >
          Подробнее
        </button> */}
      </div>
    </div>
  );
}

export default NewsCard;
