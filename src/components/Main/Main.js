import React from 'react';
import Header from '../Header/Header';
import slide_first from '../../images/slide1.png';
import slide_second from '../../images/slide2.png';
import slide_third from '../../images/slide3.png';
import accordionImg1 from '../../images/diselImg.png';
import accordionImg2 from '../../images/techImg.png';
import Slider, { SliderItem } from '../Slider/Slider';
import Whowe from '../Whowe/Whowe';
import './Main.css';
import Accordion from '../Accordion/Accordion';

const panels = [
  {
    label: "Проектирование",
    subtitle: "На каждом этапе жизненого цикла изделия",
    text_color: "#36b5f0",
    content_title: "Проектирование",
    content:
      'Приемущество виртуальной копии.Виртуальный анализ разработанной модели повышает качество проектной документации, увеличивает технологичность его изготовления и помогает выявить ошибки проектирования.',
    imgurl: accordionImg1,
   
  },
  {
    label: 'Производство',
    subtitle: "На каждом этапе жизненого цикла изделия",
    content_title: "Производство",
    text_color: "#95e616",
    content:
      'Упрощают процесс сборки и повышают точность на этапах сборки или контроля качества',
    imgurl: accordionImg2,
 
  },
  {
    label: 'Эксплуатация',
    subtitle: "На каждом этапе жизненого цикла изделия",
    content_title: "",
    content:
      'Трехмерные каталоги обеспечивают интерактивный и интеллектуальный набор запасных частей, цифровую техническую документацию для процессов технического обслуживания и ремонта. Связь 3D-конфигуратора с ERP и/или PLM-системой позволяет формировать и передавать на склад перечень составных элементов, спецификацию, варианты комплектации, ценовые данные и т. д. и координировать расход материалов.',
    imgurl: accordionImg1,
    
  },
  {
    label: "Ремонт",
    subtitle: "На каждом этапе жизненого цикла изделия",
    content_title: "",
    content:
      "Четверть века мы разрабатываем комплексное программное обеспечение для предприятий транспорта. За годы успешной проектно-внедренческой деятельности мы накопили богатый опыт по техническому аудиту, системной интеграции, разработке персональных IT-решений.",
    imgurl: accordionImg1,
 
  },

];

function Main() {
  return (
    <div className='main'>     
        <Header />
     

      <div className='main__slider'>
        <Slider className='slider'>
          <SliderItem >
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
          <SliderItem >
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
     
      <div className='main__accordion'>
        <Accordion panels={panels} />
      </div>
      <div className='whoweare'>
        <Whowe />
      </div>
    </div>
  );
}

export default Main;
