import React, { useEffect, useState } from 'react';
import './Slider.css';

const Slide = ({ classy, title_first, subtitle_first, title_second, subtitle_second, title_third, subtitle_third,   image }) => (
  <div className={classy}>
    <div className='slide__text'>
    <h1 className="slide__title">{title_first}</h1>
    <h2 className="slide__subtitle">{subtitle_first}</h2>
    <h1 className="slide__title">{title_second}</h1>
    <h2 className="slide__subtitle">{subtitle_second}</h2>
    <h1 className="slide__title">{title_third}</h1>
    <h2 className="slide__subtitle">{subtitle_third}</h2>
    </div>
    <img src={image} alt='img' className="slide__image" draggable='false' />
  </div>
);

const Slider = ({ slides }) => {
  const [cur, setCur] = React.useState(0);
  

  const updateIndex = (newIndex) => {
    if (newIndex < 0) {
      newIndex = slides.length - 1;
    } else if (newIndex >= slides.length) {
      newIndex = 0;  }

    setCur(newIndex);
  };


  const nextMoving = () => {
    if (cur >= slides.length - 1) {
      setCur(0);
    } else {
      setCur(cur + 1);
    }
  };
  const prevMoving = () => {
    if (cur <= 0) {
      setCur(slides.length - 1);
    } else {
      setCur(cur - 1);
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      updateIndex(cur + 1);      
    }, 2000000);
    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };

  });
  return (
    <section className="slider">
      {!slides || slides.length === 0 ? null : (
        <>
          <button className="prev" onClick={prevMoving}>
            <span className="lnr lnr-chevron-left" />
          </button>
          <button className="next" onClick={nextMoving}>
            <span className="lnr lnr-chevron-right" />
          </button>
          {slides.map((slide, idx) => {
            return (
              <Slide
                classy={idx === cur ? "slide active" : "slide"}
                key={idx}
                {...slide}
              />
            );
          })}
        </>
      )}
    </section>
  );
};

export default Slider;
