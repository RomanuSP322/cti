import React, { useEffect } from "react";
import NewsCard from "../NewsCard/NewsCard";
import "./NewsCardList.css";

function NewsCardList({ news }) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="cardlist-wrapper">
      <h2 className="cardlist__title">Новости</h2>
      <div className="cardlist">
        {news.map((item, idx) => (
          <NewsCard props={item} key={idx} />
        ))}
      </div>
    </div>
  );
}

export default NewsCardList;
