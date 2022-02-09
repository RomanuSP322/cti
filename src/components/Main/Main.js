import React from 'react';
import Header from '../Header/Header';
import slide_first from '../../images/slide1.png';
import slide_second from '../../images/slide2.png';
import slide_third from '../../images/slide3.png';
import Slider, { SliderItem } from '../Slider/Slider';
import './Main.css';

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
              <img className='slide__img' src={slide_first} alt="" draggable="false"/>
              <div className='slide__text-wrapper'>
              <h2 className='slide__title'>Разработка персональных<br></br> IT-<span className='slide__title_span'>решений</span> </h2>
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
              <img className='slide__img' src={slide_second} alt="" draggable="false"/>
              <div className='slide__text-wrapper'>
              <h2 className='slide__title'>Есть ресурсы для разработки<br></br>сложных <span className='slide__title_span'>проектов</span> </h2>
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
              <img className='slide__img' src={slide_third} alt="" draggable="false"/>
              <div className='slide__text-wrapper'>
              <h2 className='slide__title'>Опыт в современных <br></br><span className='slide__title_span'>технологиях</span> </h2>
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
    </div>
  );
}

export default Main;
