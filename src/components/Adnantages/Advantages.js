import React, { useEffect, useState } from "react";
import "./Advantages.css";

const Advantage = ({ ico, title, text }) => (
  <div className="advantages__item">
    <img className="advantages__item_ico" alt="" src={ico} />
    <h3 className="advantages__item_title">{title}</h3>
    <p className="advantages__item_content">{text}</p>
  </div>
);

const Advantages = ({ items }) => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [length, setLength] = useState(items.length);

  const [touchPosition, setTouchPosition] = useState(null);

  // Set the length to match current children from props
  useEffect(() => {
    setLength(items.length);
  }, [items]);

  const next = () => {
    if (currentIndex < length) {
      setCurrentIndex((prevState) => prevState + 1);
    }
  };

  const prev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prevState) => prevState - 1);
    }
  };

  const handleTouchStart = (e) => {
    const touchDown = e.touches[0].clientX;
    setTouchPosition(touchDown);
  };

  const handleTouchMove = (e) => {
    const touchDown = touchPosition;

    if (touchDown === null) {
      return;
    }

    const currentTouch = e.touches[0].clientX;
    const diff = touchDown - currentTouch;

    if (diff > 5) {
      next();
    }

    if (diff < -5) {
      prev();
    }

    setTouchPosition(null);
  };

  useEffect(() => {
    function handleResize() {
      setWindowWidth(window.innerWidth);
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [window.innerWidth]);

  return (
    <section className="advantages">
      <h2 className="advantages__title">
        Отраслевые решения на основе интеллектуальных технологий и лучших
        практик
      </h2>
      {windowWidth > 419 ? (
        <div className="advantages-list">
          {!items || items.length === 0
            ? null
            : items.map((item, idx) => {
                return <Advantage key={idx} {...item} />;
              })}
        </div>
      ) : (
        <div
          className="advantages-list"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          style={{ transform: `translateX(-${currentIndex * 198}px)` }}
        >
          {!items || items.length === 0
            ? null
            : items.map((item, idx) => {
                return <Advantage key={idx} {...item} />;
              })}
        </div>
      )}
    </section>
  );
};

export default Advantages;
