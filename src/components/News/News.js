import React, { useState } from "react";
import { NavLink} from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { news } from "../../consts/newsData.js";
import NewsCardList from "../NewsCardList/NewsCardList";
import "./News.css";

function News({ location }) { 
  const lastNew = news[0];
  const secondNew = news[1];
  const thirdNew = news[2];

  return (
    <section>
      {location === "selfpage" ? (
        <div className="news__cards-list_self">
          <Header />
          <NewsCardList news={news} />
          <Footer />
        </div>
      ) : (
        <div className="news__cards-list_main">
          {!news || news.length === 0 ? null : (
            <>
               <div className="news__button_link">
              <NavLink className="news__button_all" to='/news'>
                <h2 className="news__main-title">Новости</h2>
                Смотреть все
              </NavLink>
              </div>
              <div className="news_wrapper">
                <div className="news-card">
                  <img
                    src={lastNew.img}
                    alt="картинка"
                    className="news-card__image"
                  />
                  <div className="news-card__content">
                    <p className="news-card__date">{lastNew.date}</p>
                    <h2 className="news-card__title">{lastNew.title}</h2>
                    <p className="news-card__text">{lastNew.text} </p>
                    {/* <button type="button" className="news-card__button_more">
                      Подробнее
                    </button>  */}
                  </div>
                </div>
                <div className="news-card_right-wrapper">
                  <div className="news-card news-card_right">
                    <div className="news-card__content ">
                      <p className="news-card__date">{secondNew.date}</p>
                      <h2 className="news-card__title">{secondNew.title}</h2>
                      {/* <button type="button" className="news-card__button_more">
                        Подробнее
                      </button> */}
                    </div>
                  </div>
                  <div className="news-card news-card_right">
                    <div className="news-card__content ">
                      <p className="news-card__date">{thirdNew.date}</p>
                      <h2 className="news-card__title">{thirdNew.title}</h2>
                      {/* <button type="button" className="news-card__button_more">
                        Подробнее
                      </button> */}
                    </div>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      )}
    </section>
  );
}

export default News;
