import React, { useEffect, useState } from 'react';
import './Catalog.css';
import '../Capabilities/Capabilities.css';

import catalogintro from '../../video/catalog.webm';
import monitor from '../../images/monitor.png';

function Catalog({ catalogdata }) {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const styles = {
    '--normal': `url(${monitor})`,
  };

  const [cur, setCur] = useState(0);

  const onClick = (idx) => {
    idx + 1 === cur ? setCur(0) : setCur(idx + 1);
  };
  const videoWidth = (width) => {
    if (width > 1595) {
      return 778;
    } else if (width > 1195) {
      return 520;
    } else if (width > 1020) {
      return 389;
    } else if (width > 590) {
      return 520;
    } else return 260;
  };
  const position = {
    transform: `translateX(-${cur * videoWidth(windowWidth)}px)`,
  };

  useEffect(() => {
    function handleResize() {
      setWindowWidth(window.innerWidth);
    }
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);



  return (
    <section className='catalog'>
      <h2 className='catalog__title'>Интерактивные Электронные Каталоги</h2>
      <div className='catalog__container'>
        <div className='catalog__column_left'>
          <div className='catalog__video-content' style={styles}>
            <div className='catalog__video-wrapper'>
              <div className='catalog__videos' style={position}>
                <video autoPlay muted loop className='catalog__video'>
                  <source src={catalogintro} type='video/webm' />
                </video>
                {catalogdata.map((item, idx) => {
                  return (
                    <video
                      autoPlay
                      muted
                      loop
                      className='catalog__video'
                      key={idx}
                    >
                      <source src={item.webm} type='video/webm' />
                    </video>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        <div className='catalog__column_right'>
          <p className='catalog__discription'>
            Интерактивный электронный каталог сборочных единиц, деталей и узлов
            представляет собой интерактивную иерархическую модель изделия.
            Элементы модели снабжены подробной текстовой и графической
            информацией о стандартах исполнения, материалах, нормах допусков,
            технологических требованиях
          </p>
          {!catalogdata || catalogdata.length === 0 ? null : (
            <div className='catalog__capabilities'>
              <h2
                className={`capabilities-title ${
                  cur === 0 ? '' : 'capabilities-title_active'
                }`}
              >
                Функциональность
              </h2>
              {catalogdata.map((item, idx) => {
                return (
                  <div className='capabilities__item' key={idx}>
                    <button
                      onClick={() => onClick(idx)}
                      className={`capabilities__button ${
                        idx + 1 === cur ? 'capabilities__button_active' : ''
                      }`}
                    >
                      <h3
                        className={`capabilities__item-title ${
                          idx + 1 === cur
                            ? 'capabilities__item-title_active'
                            : ''
                        }`}
                      >
                        {item.title}
                      </h3>
                      <div
                        className={`capabilities__arrow ${
                          idx + 1 === cur ? 'capabilities__arrow_active' : ''
                        }`}
                      ></div>
                    </button>
                    <p
                      className={`capabilities__dropdown ${
                        idx + 1 === cur ? 'capabilities__dropdown_active' : ''
                      }`}
                    >
                      {item.description}
                    </p>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default Catalog;
