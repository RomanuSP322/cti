import React from 'react';
import Header from '../Header/Header';
import slide_first from '../../images/slide1.png';
import slide_second from '../../images/slide2.png';
import slide_third from '../../images/slide3.png';
import accordionImg1 from '../../images/diselImg.png';
import accordionImg2 from '../../images/techImg.png';
import accordionImg3 from '../../images/tm18dm.png';
import accordionImg4 from '../../images/bsu.png';
import Slider from '../Slidernew/Slider';
import Whowe from '../Whowe/Whowe';
import './Main.css';
import Accordion from '../Accordion/Accordion';

const panels = [
  {
    label: "Проектирование",
    subtitle: "Сопровождение каждого этапа цифровизации",
    text_color: "#36b5f0",
    content_title: "Проектирование",
    content:
      'Приемущество виртуальной копии. Виртуальный анализ разработанной модели повышает качество проектной документации, увеличивает технологичность его изготовления и помогает выявить ошибки проектирования.',
    imgurl: accordionImg1,
   
  },
  {
    label: 'Производство',
    subtitle: "Сопровождение каждого этапа цифровизации",
    content_title: "Производство",
    text_color: "#95e616",
    content:
      'Упрощают процесс сборки и повышают точность на этапах сборки или контроля качества',
    imgurl: accordionImg2,
 
  },
  {
    label: 'Эксплуатация',
    subtitle: "Сопровождение каждого этапа цифровизации",    
    text_color: "#ef3a56",
    content_title: "Эксплуатация",
    content:
      'Трехмерные каталоги обеспечивают интерактивный и интеллектуальный набор запасных частей, цифровую техническую документацию для процессов технического обслуживания и ремонта. Связь 3D-конфигуратора с ERP и/или PLM-системой позволяет формировать и передавать на склад перечень составных элементов, спецификацию, варианты комплектации, ценовые данные и т. д. и координировать расход материалов.',
    imgurl: accordionImg3,
    
  },
  {
    label: "Ремонт",
    subtitle: "Сопровождение каждого этапа цифровизации",
    content_title: "Ремонт",
    text_color: "#ffd900",
    content:
      "Четверть века мы разрабатываем комплексное программное обеспечение для предприятий транспорта. За годы успешной проектно-внедренческой деятельности мы накопили богатый опыт по техническому аудиту, системной интеграции, разработке персональных IT-решений.",
    imgurl: accordionImg4,
 
  },

];

const slides = [
  {
    title_first: "Slide 1",
    subtitle_first: "Foxy Image",
    title_second: "Slide 1",
    subtitle_second: "Foxy Image",
    title_third: "Slide 1",
    subtitle_third: "Foxy Image",
    image: slide_first,
  },
  {
    title_first: "Slide 2",
    subtitle_first: "cuty awl",
    title_second: "Slide 1",
    subtitle_second: "Foxy Image",
    title_third: "Slide 1",
    subtitle_third: "Foxy Image",
    image: slide_second,
  },
  {
    title_first: "Slide 3",
    subtitle_first: "nice cat",
    title_second: "Slide 1",
    subtitle_second: "Foxy Image",
    title_third: "Slide 1",
    subtitle_third: "Foxy Image",
    image: slide_third,
  }
];

function Main() {
  return (
    <div className='main'>     
        <Header />
     

      <div className='main__slider'>
      <h2 className='slider__title noselect'>
                  Центр транспортных <br></br> исследований
                  <span className='slider__title_span noselect'></span>{' '}
                </h2>
                <h3 className='slider__subtitle'><span className='slide__title_span'>Надежный партнер на пути</span><br></br> к цифровому будующему</h3>
        <Slider slides={slides} className='slider'/>        
          {/* <SliderItem >
            <div className='slide'>
            <img
                className='slide__img'
                src={slide_first}
                alt=''
                draggable='false'
              />
              <div className='slide__text-wrapper noselect'>
          
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
          <SliderItem >
            <div className='slide'>
              <img
                className='slide__img'
                src={slide_third}
                alt=''
                draggable='false'
              />
              <div className='slide__text-wrapper noselect'>
             
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
          </SliderItem> */}
        
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
