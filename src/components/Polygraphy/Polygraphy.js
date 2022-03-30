import React from "react";
import "./Polygraphy.css";
import MoreBtn from "../MoreBtn/MoreBtn";

import stand from "../../images/stand.png";

const Polygraphy = ({ posters }) => {
  const [cur, setCur] = React.useState(1);

  const nextMoving = () => {
    if (cur >= posters.length - 1) {
      setCur(0);
    } else {
      setCur(cur + 1);
    }
  };


  const prevMoving = () => {
    if (cur <= 0 ) {
      setCur(posters.length - 1);
    } else {
      setCur(cur - 1);
    }
  };

  const position = { transform: `translateX(-${cur * 700}px)` };

  return (
    <section className="polygraphy">
      <div className="polygraphy__column_left">
        <h2 className="polygraphy__title">
          Издание печатной и наглядной продукции
        </h2>
        <p className="polygraphy__article">
          Каждый элемент интерактивного каталога может служить основой для
          создания ознакомительного плаката, на котором показана сборочная
          единица “с разнесенными частями”, может быть растиражирован в виде
          сборочного чертежа с необходимыми разрезами, может быть отпечатан как
          технический рисунок в ракурсах, которые способствуют наилучшему
          пониманию конструкции изделия.
        </p>
      </div>
      {!posters || posters.length === 0 ? null : (
        <div className="polygraphy__column_right" >
          <img
            src={stand}
            alt="stand"
            className="polygraphy__stand"
            draggable="false"
          />
          <div className="polygraphy__posters-wrapper" >
            <div className="polygraphy__posters" style={position}   >
              {posters.map((item, idx) => {
                return (
                  <img
                 
                    src={item.image}
                    alt="img"
                    className="polygraphy__poster"
                    draggable="false"
                    
                  />
                );
              })}
            </div>
          </div>
          <button
            onClick={nextMoving}
            className="polygraphy__button polygraphy__button-next"
          >
            <div          
              className="polygraphy__button-ico polygraphy__button-ico_next">
      
            </div>
          </button>
          <button
            onClick={prevMoving}
            className="polygraphy__button polygraphy__button-prev "
          >
            <div          
              className="polygraphy__button-ico polygraphy__button-ico_prev">
      
            </div>
          </button>
        </div>
      )}
    </section>
  );
};

export default Polygraphy;
