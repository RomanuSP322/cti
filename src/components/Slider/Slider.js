import React, { useEffect, useState } from "react";
import { useSwipeable } from "react-swipeable";
import "./Slider.css";


export const SliderItem = ({ children, width }) => {
  return (
    <div className="carousel-item" style={{ width: width }}>

      {children}
    </div>
  );
};

const Slider = ({ children }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  const updateIndex = (newIndex) => {
    if (newIndex < 0) {
      newIndex = React.Children.count(children) - 1;
    } else if (newIndex >= React.Children.count(children)) {
      newIndex = 0;
    }

    setActiveIndex(newIndex);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (!paused) {
        updateIndex(activeIndex + 1);
      }
    }, 5000);

    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  });

  const handlers = useSwipeable({
    onSwipedLeft: () => updateIndex(activeIndex + 1),
    onSwipedRight: () => updateIndex(activeIndex - 1),
    trackMouse: true
  });

  return (
    <div
      {...handlers}
      className="carousel"
  
    >
      <div
        className="inner"
        style={{ transform: `translateX(-${activeIndex * 100}%)` }}
      >
        {React.Children.map(children, (child, index) => {
          return React.cloneElement(child, { width: "100%" });
        })}
      </div>
      <div className="indicators">
      
        {React.Children.map(children, (child, index) => {
          return (
            <button
              className={`indicator ${index === activeIndex ? "active" : ""}`}
              onClick={() => {
                updateIndex(index);
              }}
            >
             {index === 0 && 
             <p className='indicator__title'>Решения</p>               
             }
             {index === 1 && 
             <p className='indicator__title'>Проекты</p>               
             }
             {index === 2 && 
             <p className='indicator__title'>Технологии</p>               
             }
            </button>
          );
        })}
     
      </div>
      <button
          onClick={() => {
            updateIndex(activeIndex - 1);
          }}
        >
          Prev
        </button>
        <button
          onClick={() => {
            updateIndex(activeIndex + 1);
          }}
        >
          Next
        </button>
    </div>
  );
};

export default Slider;
