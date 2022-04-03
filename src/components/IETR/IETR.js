import React, {useEffect, useRef} from 'react';
import { capabilities, info} from  '../../consts/ietrData.js';
import Header from '../Header/Header';
import AboutIetr from '../AboutIetr/AboutIetr';
import Waves from '../Waves/Waves';
import Capabilities from '../Capabilities/Capabilities';
import ThreeDInfo from '../ThreeDInfo/ThreeDInfo';
import ScrollDown from '../ScrollDown/ScrollDown';
import ScrollToTopBtn from '../ScrollToTop/ScrollToTopBtn';
import Footer from '../Footer/Footer';

import './IETR.css';

import ietr from '../../images/ietr.png';
import catalog from '../../images/catalog.png';


function IETR() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const next = useRef(null)

  return (
    <div className='ietr'>
      <Header />
      <section className='ietr__intro'>
        <h2 className='ietr__title'>
          Интерактивное Электронное Техническое Руководство
        </h2>
        <h3 className='ietr__subtitle top_span'>
          Эффективный цифровой инструмент информационно-технической поддержки
        </h3>
        <img src={ietr} alt='img' className='ietr__image' draggable='false' />
        < ScrollDown refProp={next}/>
      </section>
      <div className='ietr__about' ref={next}>
      <AboutIetr />
      </div>
      <Waves
        pos={'up'}
        svg={
          'M0,96L80,85.3C160,75,320,53,480,64C640,75,800,117,960,138.7C1120,160,1280,160,1360,160L1440,160L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z'
        }
      />

      <section className='ietr__catalog' >
        <h2 className='ietr__catalog-title'>
          Интерактивные Электронные Каталоги
        </h2>
        <div className='ietr__catalog-content'>
          <img
            src={catalog}
            alt='img'
            className='ietr__catalog-image'
            draggable='false'
          />
          <p className='ietr__catalog-article'>
            Интерактивный электронный каталог сборочных единиц, деталей и узлов,
            создаваемый ЦТИ, представляет собой интерактивную иерархическую
            модель конструкции. Элементы модели снабжены подробной текстовой и
            графической информацией о стандартах исполнения, материалах и нормах
            допусков. Разработанное ЦТИ отраслевое решение объединяет
            существующие объекты информации, сопровождающие весь жизненный цикл
            изделия, в единый Информационно-технический ресурс.
          </p>
        </div>
      </section>
      <Capabilities  capabilities={ capabilities}/>
      <Waves
        pos={'down'}
        svg={
          'M0,64L80,96C160,128,320,192,480,202.7C640,213,800,171,960,149.3C1120,128,1280,128,1360,128L1440,128L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z'
        }
      />
      <ThreeDInfo items={info}/>
 
      <Footer/>
    </div>
  );
}

export default IETR;
