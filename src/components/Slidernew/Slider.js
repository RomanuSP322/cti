import React, { useState, useEffect } from 'react';
import { useSwipeable } from 'react-swipeable';
import './Slider.css';


function Slider ({slides, titles}) {

    const [activeIndex, setActiveIndex] = useState(0);
    const [paused, setPaused] = useState(false);

    const updateIndex = (newIndex) => {
        if (newIndex < 0) {
          newIndex = slides.length - 1;
        } else if (newIndex >= slides.length) {
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
        trackMouse: true,
      });
      const isActive = activeTab === index;

      const innerStyle = {
        width: `${isActive ? `${width}px` : `200px`}`,
        backgroundImage: `url(${imgurl})`  
       
      };

    return(
        <div {...handlers} className='slider' role='tablist'>

        {slides.map((slide, index) => 
                   <div
                   className='slide'
                   role='tabpanel'
                   aria-expanded={isActive}
                   style={innerStyle}
                   aria-hidden={!isActive}
                 >       
                 <button className='panel__label' role='tab' onClick={activateTab}>
                   <h3 className='panel__title'>{label}</h3> 
                     <img src={slide.img} alt='' className='' id={index}></img>
                     
                   </button>
                   </div>
                                						
      								
        )}
        
    </div>
    )
}

export default Slider;