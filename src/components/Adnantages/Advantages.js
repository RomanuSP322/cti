import React, { useState, useEffect, useCallback, useMemo, useRef } from 'react';
import './Advantages.css';

const Advantage = ({ ico, title, text }) => (
  <div className='advantages__item'>
    <img className='advantages__item_ico' alt='' src={ico} />
    <h3 className='advantages__item_title'>{title}</h3>
    <p className='advantages__item_content'>{text}</p>
  </div>
);

const Advantages = ({ items }) => {
  const ref = useRef(null)

  const [swipeInfo, setSwipeInfo] = useState({
    isSwiping: false,
    originX: 18,
    transitionX: 18
  })

  

  
  const onTouchMove = useCallback(e => {
    setSwipeInfo(state => ({
      ...state,
      transitionX: parseInt(e.touches[0].clientX) - state.originX
    }))
  }, [])
  
  
  
  useEffect(() => {
    swipeInfo.isSwiping === true
    ? ref.current.parentNode.classList.add('swiping-active')
    : ref.current.parentNode.classList.remove('swiping-active')
  }, [swipeInfo.isSwiping])
  
  useEffect(() => {
    if(swipeInfo.isSwiping) {
    

      document.addEventListener("touchmove", onTouchMove, {capture: true})

    }
    return () => {
     
      document.removeEventListener("touchmove", onTouchMove, {capture: true})     
    }
  }, [swipeInfo.isSwiping])
  
  useEffect(() => {
    const containerRef = ref.current
    containerRef.addEventListener('touchstart',  { passive: false, capture: true })
    return () => containerRef.removeEventListener('touchstart',  { passive: false, capture: true })
  }, [])



  return (
    <section className='advantages'>
       <h2 className='advantages__title'>Отраслевые решения на основе интеллектуальных технологий и лучших практик</h2>
       <div className='advantages-list'   style={{left: `${swipeInfo.transitionX}px`}} 
      
        ref={ref}>
          
      {!items || items.length === 0
        ? null
        : items.map((item, idx) => {
            return <Advantage key={idx} {...item} />;
          })}

</div>     
    </section>
  );
};

export default Advantages;
