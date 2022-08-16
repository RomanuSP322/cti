import React, { useEffect, useState } from "react";
import "./Polygraphy.css";

import stand from "../../images/stand.png";

const Polygraphy = ({ posters }) => {
  const [cur, setCur] = React.useState(1);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const nextMoving = () => {
    if (cur >= posters.length - 1) {
      setCur(0);
    } else {
      setCur(cur + 1);
    }
  };

  const prevMoving = () => {
    if (cur <= 0) {
      setCur(posters.length - 1);
    } else {
      setCur(cur - 1);
    }
  };

  const videoWidth = (width) => {
    if (width > 1595) {
      return 700;
    } else if (width > 1349) {
      return 520;
    } else if (width > 1020) {
      return 350;
    } else if (width > 700) {
      return 520;
    } else return 278;
  };

  const position = {
    transform: `translateX(-${cur * videoWidth(windowWidth)}px)`,
  };

  useEffect(() => {
    function handleResize() {
      setWindowWidth(window.innerWidth);
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section className="polygraphy">
      <div className="polygraphy__column_left">
        <h2 className="polygraphy__title">
          Издание печатной и наглядной продукции
        </h2>
        <p className="polygraphy__article">
          Издание печатной продукции и наглядных пособий Каждый элемент
          интерактивного каталога может служить основой для создания
          демонстрационных пособий любого формата. 3D модели позволяют быстро
          создавать реалистичные изображения высокого качества, на которых
          сборочные единицы представлены в удобном ракурсе, с разрезами и
          дополнительными видами, в режиме взрыв-схем, которые обеспечивают
          наилучшее понимание конструкции и функционирования изделия
        </p>
      </div>
      {!posters || posters.length === 0 ? null : (
        <div className="polygraphy__column_right">
          <img
            src={stand}
            alt="stand"
            className="polygraphy__stand"
            draggable="false"
          />
          <div className="polygraphy__posters-wrapper">
            <div className="polygraphy__posters" style={position}>
              {posters.map((item, idx) => {
                return (
                  <img
                    key={idx}
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
            <div className="polygraphy__button-ico polygraphy__button-ico_next"></div>
          </button>
          <button
            onClick={prevMoving}
            className="polygraphy__button polygraphy__button-prev "
          >
            <div className="polygraphy__button-ico polygraphy__button-ico_prev"></div>
          </button>
        </div>
      )}
    </section>
  );
};

export default Polygraphy;
