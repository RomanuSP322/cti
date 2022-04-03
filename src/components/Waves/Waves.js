import React from 'react';
import './Waves.css';

export default function Waves({ pos, svg }) {
  return (
    <div className='waves' >
      <svg
        className={pos === 'up' ? 'wave1' : 'wave4'}
        xmlns='http://www.w3.org/2000/svg'
        viewBox='0 0 1440 320'
        
      >
        <path
          fill='#eef9ff'
          fillOpacity='1'
         
          d={svg}
        ></path>
      </svg>

      <svg
        className={pos === 'up' ? 'wave2' : 'wave5'}
        xmlns='http://www.w3.org/2000/svg'
        viewBox='0 0 1440 320'
      >
        <path
          fill=''
          fillOpacity='0.2'
          d={svg}
        ></path>
      </svg>
      <svg
        className={pos === 'up' ? 'wave3' : 'wave6'}
        xmlns='http://www.w3.org/2000/svg'
        viewBox='0 0 1440 320'
      >
        <path
          fill=''
          fillOpacity='0.1'
          d={svg}
        ></path>
      </svg>
    </div>
  );
}

