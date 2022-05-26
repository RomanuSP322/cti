import React from 'react';

import MoreBtn from '../MoreBtn/MoreBtn';
import './DatabaseCase.css';

function DatabaseCase(
  { title, subtitle, description, image, path, theme, imgpos },

) {
  return (
    <div
      className={`database-case ${
        theme === 'dark' ? 'database-case__theme_dark' : ''
      }`}
    >
      <div
        className={`database-case__content ${
          imgpos === 'right' ? 'database-case__content_right' : ''
        }`}
      >
        <div className='database-case__column'>
          <img
            src={image}
            alt='img'
            className='database-case__image'
            draggable='false'
          />
        </div>
        <div className='database-case__column '>
          <div
            className={`database-case__description ${
              theme === 'dark' ? 'database-case__description_dark' : ''
            }`}
          >
            <h2 className='database-case__title'>{title}</h2>
            <h3 className='database-case__subtitle'>{subtitle}</h3>
            <p className='database-case__article'>{description}</p>

            <div className='database-case__btn-more'>
              <MoreBtn direction={path} text={`Подробнее`} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DatabaseCase;
