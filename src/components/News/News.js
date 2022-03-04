import React, { useState } from 'react';

import './News.css';
import NewsCard from '../NewsCard/NewsCard';

function News({news}) {
  const newsIdx = news.length-1;
  const lastNew = news[newsIdx];
  const secondNew = news[newsIdx - 1];
  const thirdNew = news[newsIdx- 2];
  console.log(secondNew);
  console.log(lastNew);
  console.log(newsIdx);
  
  return (
    <section className='news__cards-list'>
      {!news || news.length === 0 ? null : (
        <><button className='news__button_all'>
          <h2 className='news__title'>Новости</h2>
          Смотреть все </button>
          <div className='news_wrapper'>
           
             <NewsCard props={lastNew} /> 
            <div className='news-card_right-wrapper'>
            <div className='news-card news-card_right'>
              <div className='news-card__content '>
                <p className='news-card__date'>{secondNew.date}</p>
                <h2 className='news-card__title'>{secondNew.title}</h2>             
                <button type='button' className='news-card__button_more'>
                  Подробнее
                </button>
              </div>
              </div>
              <div className='news-card news-card_right'>
              <div className='news-card__content '>
                <p className='news-card__date'>{thirdNew.date}</p>
                <h2 className='news-card__title'>{thirdNew.title}</h2>          
                <button type='button' className='news-card__button_more'>
                  Подробнее
                </button>
              </div>
              </div>
              
            </div>
            
          </div>
        </>
      )}
    </section>
  );
}

export default News;
