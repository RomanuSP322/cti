import React, { useEffect, useState } from 'react';
import './Cases.css';
import { useHistory } from "react-router-dom";
import nextico from '../../images/nextico.png';

const Cases = ({ cases }) => {
  const [cur, setCur] = React.useState(0);
  let history = useHistory();


  const nextMoving = () => {
    if (cur >= cases.length - 1) {
      setCur(0);
    } else {
      setCur(cur + 1);
    }
  };

    function handleClick(path) {
    history.push(`/${path}`);
  }

 
  return (
    <section className='cases'>
      {!cases || cases.length === 0 ? null : (
        <>
          <h2 className='cases__title'>Проекты</h2>
          <h3 className='cases__subtitle'>
            За годы успешной проектно-внедренческой деятельности мы накопили
            богатый опыт по техническому аудиту, системной интеграции,
            разработке персональных IT-решений для крупнейших транспортных
            предприятий
          </h3>
          <div className='case_wrapper'>
            {cases.map((item, idx) => {
              return (
             
                <div className={`case ${idx === cur ? 'case_active' : ''}`} key={idx}>
                  <div className='case__text-wrapper'>
                    <p className='case__text'>{item.text}</p>
                  </div>
                  <img
                    src={item.image}
                    alt='img'
                    className='case__image'
                    draggable='false'
                  />
                    
                </div>
          
              
              );
            })}
        <button className='case__button case__button_about'  onClick={()=> handleClick(cases[cur].path)}>
              Подробнее
            </button>

            <button
              onClick={nextMoving}
              className='case__button case__button_next'
            >
              <svg
                width='24'
                height='24'
                viewBox='0 0 24 24'
                fill='#12abdb'
                className='next_ico'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path d='M20.3 8.6L19.4 9C19.8 10.1 20.1 11.2 20.1 12.3C20.1 17 16.3 20.8 11.6 20.8C6.9 20.8 3 17 3 12.3C3 7.6 6.8 3.8 11.5 3.8V5.6L15.8 3.3L11.5 1V2.8C6.3 2.8 2 7.1 2 12.3C2 17.5 6.3 21.8 11.5 21.8C16.7 21.8 21 17.5 21 12.3C21.1 11 20.8 9.8 20.3 8.6Z'></path>
              </svg>{' '}
              Далее
            </button>
          </div>
          <button className='case__button case__button_projects' onClick={()=> handleClick('projects')}>
            Смотреть все проекты
          </button>
        </>
      )}
    </section>
  );
};

export default Cases;