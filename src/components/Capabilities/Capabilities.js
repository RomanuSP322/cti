import React, { useEffect, useState } from 'react';
import './Capabilities.css';

import tablet from '../../images/tablet.png';




const Capabilities = ({ capabilities }) => {
  const [cur, setCur] = React.useState(0);

  const onClick = (idx) => 
       setCur(idx);
    
  ;

  return (
    <section className='capabilities'>
      <h2 className='capabilities__title'>Функциональные возможности</h2>
      <div className='capabilities__container'>
        <div className='capabilities__column_left'>
          {!capabilities || capabilities.length === 0 ? null : (
            <>
              {capabilities.map((item, idx) => {
                return (
                  <div className='capabilities__item'>
                    <button
                      onClick={() => onClick(idx)}
                      className='capabilities__button'
                    >
                      <h3 className='capabilities__item-title'>{item.title}</h3>
                      <div  className={`capabilities__arrow ${idx === cur ? 'capabilities__arrow_active' : ''}`}></div>
                    </button>
                    <p className={`capabilities__dropdown ${idx === cur ? 'capabilities__dropdown_active' : ''}`}>
                      {item.text}
                    </p>
                  </div>
                );
              })}
            </>
          )}
        </div>
        <div className='capabilities__column_right'>
        <img
            src={tablet}
            alt='img'
            className='capabilities__tablet'
            draggable='false'
          />
          <img
            src={capabilities[cur].image}
            alt='img'
            className='capabilities__item-gif'
            draggable='false'
          />
        </div>
      </div>
    </section>
  );
};

export default Capabilities;
