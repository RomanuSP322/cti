import React from 'react';
import Header from '../Header/Header';
import slide_first from '../../images/slide1.png';
import slide_second from '../../images/slide2.png';
import slide_third from '../../images/slide3.png';

import Slider, { SliderItem } from '../Slider/Slider';
import Whowe from '../Whowe/Whowe';
import './Main.css';
import Accordion from '../Accordion/Accordion';

const panels = [
  {
    label: "Операции завода",
    content:
      'Четверть века мы разрабатываем комплексное программное обеспечение для предприятий транспорта. За годы успешной проектно-внедренческой деятельности мы накопили богатый опыт по техническому аудиту, системной интеграции, разработке персональных IT-решений.',
      imgurl:  '../../cti/static/media/slide2.c07ec4786afe359c6433.png',
  },
  {
    label: 'Технологический процесс',
    content:
      'Четверть века мы разрабатываем комплексное программное обеспечение для предприятий транспорта. За годы успешной проектно-внедренческой деятельности мы накопили богатый опыт по техническому аудиту, системной интеграции, разработке персональных IT-решений.',
      imgurl:  '../../cti/static/media/slide2.c07ec4786afe359c6433.png'
  },
  {
    label: 'Продукт',
    content:
      'Четверть века мы разрабатываем комплексное программное обеспечение для предприятий транспорта. За годы успешной проектно-внедренческой деятельности мы накопили богатый опыт по техническому аудиту, системной интеграции, разработке персональных IT-решений.',
  },
  {
    label: "Ремонт",
    content:
      "Четверть века мы разрабатываем комплексное программное обеспечение для предприятий транспорта. За годы успешной проектно-внедренческой деятельности мы накопили богатый опыт по техническому аудиту, системной интеграции, разработке персональных IT-решений.",
  },

];

function Main() {
  return (
    <div className='main'>
      <div className='main_theme_darkblue'>
        <Header />
      </div>

      <div className='main__slider'>
        <Slider className='slider'>
          <SliderItem>
            <div className='slide'>
              <img
                className='slide__img'
                src={slide_first}
                alt=''
                draggable='false'
              />
              <div className='slide__text-wrapper noselect'>
                <h2 className='slide__title '>
                  Разработка персональных<br></br> IT-
                  <span className='slide__title_span'>решений</span>{' '}
                </h2>
                <div className='slide__subtitle-wrapper'>
                  <h3 className='slide__subtitle'>200+ </h3>
                  <h4 className='slide__span'>проектов</h4>
                  <h3 className='slide__subtitle'> 30 лет</h3>
                  <h4 className='slide__span'>на рынке IT-систем</h4>
                  <h3 className='slide__subtitle'>10 тыс.</h3>
                  <h4 className='slide__span'>пользователей</h4>
                </div>
              </div>
            </div>
          </SliderItem>
          <SliderItem className='slider'>
            <div className='slide'>
              <img
                className='slide__img'
                src={slide_second}
                alt=''
                draggable='false'
              />
              <div className='slide__text-wrapper noselect'>
                <h2 className='slide__title '>
                  Ресурсы для разработки<br></br>сложных{' '}
                  <span className='slide__title_span'>проектов</span>{' '}
                </h2>
                <div className='slide__subtitle-wrapper'>
                  <h3 className='slide__subtitle'>РЖД </h3>
                  <h4 className='slide__span'>Внедрили </h4>
                  <h3 className='slide__subtitle'>НЭВЗ</h3>
                  <h4 className='slide__span'>Создали</h4>
                  <h3 className='slide__subtitle'>ТВЗ</h3>
                  <h4 className='slide__span'>Разработали</h4>
                </div>
              </div>
            </div>
          </SliderItem>
          <SliderItem className='slider'>
            <div className='slide'>
              <img
                className='slide__img'
                src={slide_third}
                alt=''
                draggable='false'
              />
              <div className='slide__text-wrapper noselect'>
                <h2 className='slide__title'>
                  Опыт в современных <br></br>
                  <span className='slide__title_span'>технологиях</span>{' '}
                </h2>
                <div className='slide__subtitle-wrapper'>
                  <h3 className='slide__subtitle'>IIoT </h3>
                  <h4 className='slide__span'>системная интеграция</h4>
                  <h3 className='slide__subtitle'>VR</h3>
                  <h4 className='slide__span'>тренажеры</h4>
                  <h3 className='slide__subtitle'>DP</h3>
                  <h4 className='slide__span'>анализ и управление</h4>
                </div>
              </div>
            </div>
          </SliderItem>
        </Slider>
      </div>
      <div className='whoweare'>
        <Whowe />
      </div>
      <div>        
        <Accordion panels={panels} />
      </div>
    </div>
  );
}

export default Main;
