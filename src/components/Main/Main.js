import React, { useRef } from 'react';

import Header from '../Header/Header';
import Slider from '../Slidernew/Slider';
import Whowe from '../Whowe/Whowe';
import Accordion from '../Accordion/Accordion';
import Cases from '../Cases/Cases';
import Timeline from '../Timeline/Timeline';
import Solutions from '../Solutions/Solutions';
import Advantages from '../Adnantages/Advantages';
import News from '../News/News';
import './Main.css';

import slide_first from '../../images/slide1.png';
import slide_second from '../../images/slide5.png';
import slide_third from '../../images/slide3.png';

import accordionImg1 from '../../images/diselImg.png';
import accordionImg2 from '../../images/techImg.png';
import accordionImg3 from '../../images/tm18dm.png';
import accordionImg4 from '../../images/bsu.png';
import casefirst from '../../images/case1.png';
import casesecond from '../../images/case2.png';
import casethird from '../../images/case3.png';

import solutionFirst from '../../images/solutionIETR.png';
import solutionIcoFirst from '../../images/3dsoftware.png';
import solutionIcoFirstActive from '../../images/3dsofrwareactive.png';
import solutionSecond from '../../images/solutionTech.png';
import solutionIcoSecond from '../../images/techIco.png';
import solutionIcoSecondtActive from '../../images/techIcoactive.png';
import solutionThird from '../../images/vrImg.png';
import solutionIcoThird from '../../images/vr.png';
import solutionIcoThirdActive from '../../images/vractive.png';
import solutionFourth from '../../images/dataImg.png';
import solutionIcoFourth from '../../images/server.png';
import solutionIcoFourthtActive from '../../images/serverActive.png';

import icoDevice from '../../images/device.png';
import icoCode from '../../images/code.png';
import icoIntegrate from '../../images/distribute.png';
import icoMultiformat from '../../images/filter.png';
import icoUniversal from '../../images/recruitmentrdy.png';
import icoShield from '../../images/encrypte.png';


import newsIvolga from '../../images/newsIvolga.png';


const panels = [
  {
    label: 'Проектирование',
    subtitle: 'Цифровизация каждого этапа жизненного цикла',
    text_color: '#36b5f0',
    content_title: 'Проектирование',
    content:
      'Мы создаем цифровой двойник изделия любой сложности на основе конструкторской документации. Виртуальный анализ цифровой модели сокращает время создания опытных образцов, облегчает переход на безбумажные технологии производства и ускоряет процесс модернизации изделий',
    imgurl: accordionImg1,
  },
  {
    label: 'Производство',
    subtitle: 'Цифровизация каждого этапа жизненного цикла',
    content_title: 'Производство',
    text_color: '#95e616',
    content:
      'Модуль проектирования технологических процессов на базе интерактивного каталога изделия позволяет формировать любую технологическую и проектную документацию в цифровом виде и способствует введению безбумажной технологии производства',
    imgurl: accordionImg2,
  },
  {
    label: 'Эксплуатация',
    subtitle: 'Цифровизация каждого этапа жизненного цикла',
    text_color: '#ef3a56',
    content_title: 'Эксплуатация',
    content:
      'Интерактивный катлог позволяет провести подетальную паспортизацию подвижного состава. Цифровая копия каждого локомотива и вагона доступна в реальном времени от выпуска до утилизации',
    imgurl: accordionImg3,
  },
  {
    label: 'Ремонт',
    subtitle: 'Цифровизация каждого этапа жизненного цикла',
    content_title: 'Ремонт',
    text_color: '#ffd900',
    content:
      'На основе интерактивного 3D-каталога формируются руководства по обслуживанию и ремонту.  Интеграция с ERP- и PLM-системами предприятия позволяет рассчитывать затраты на обеспечение каждого этапа жизненного цикла',
    imgurl: accordionImg4,
  },
];

const slides = [
  {
    title_first: '200+',
    subtitle_first: 'проектов',
    title_second: '30 лет',
    subtitle_second: 'на рынке IT-систем',
    title_third: '10 тыс.',
    subtitle_third: 'пользователей',
    image: slide_first,
    indicator: 'Решения',
  },
  {
    title_first: 'РЖД',
    subtitle_first: 'Внедрили',
    title_second: 'НЭВЗ',
    subtitle_second: 'Создали',
    title_third: 'ТВЗ',
    subtitle_third: 'Разработали',
    image: slide_second,
    indicator: 'Проекты',
  },
  {
    title_first: 'IIoT',
    subtitle_first: 'системная интеграция',
    title_second: 'VR',
    subtitle_second: 'тренажеры',
    title_third: 'DP',
    subtitle_third: 'анализ и управление',
    image: slide_third,
    indicator: 'Технологии',
  },
];

const cases = [
  {
    text: 'Система технологического управления пригородным пассажирским комплексом для ОАО «РЖД»',
    image: casethird,
  },
  {
    text: 'Интерактивный электронный каталог сборочных единиц, деталей и узлов подвижного состава «Иволга», разработанный для ОАО «ТВЗ» ',
    image: casefirst,
  },
  {
    text: 'Комплексная система предоставления технологических процессов обслуживания и ремонта дизель-генератора 18-9ДГ',
    image: casesecond,
  },
];





const solutions = [
  {
    title: 'Интерактивные Электронные Технические Руководства',
    ico: solutionIcoFirst,
    activeico: solutionIcoFirstActive,
    text: 'Интерактивные электронные технические руководства - организационно-технические системы, предназначенные для автоматизированной подготовки и представления сопроводительной документации в электронном виде.',
    image: solutionFirst,
  },
  {
    title: 'Управление Технологическими Процессами',
    ico: solutionIcoSecond,
    activeico: solutionIcoSecondtActive,
    text: 'Система КС ПТР предназначена для автоматизации определения неисправного узла локомотива на основе визуального представления устройства локомотива, автоматического определения потребности в запасных частях, материалах, оборудовании и инструменте при выполнении технологического процесса замены узла.',
    image: solutionSecond,
  },
  {
    title: 'Инновационные Системы Обучения',
    ico: solutionIcoThird,
    activeico: solutionIcoThirdActive,
    text: 'Современные инструменты и средства для обучения персонала на базе трехмерного интерактивного контента: электронные учебные пособия, модуль интерактивного контроля знаний, VR-тренажеры, различные виды полиграфических макетов для печати.',
    image: solutionThird,
  },
  {
    title: 'Корпоративные Базы \nДанных',
    ico: solutionIcoFourth,
    activeico: solutionIcoFourthtActive,
    text: 'ЦТИ разрабатывает крупные программные комплексы, которые объединяют в себе большое количество разнородной информации. Решение подобных задач требует особенно тщательного подхода к вопросам надежности хранения данных, систематизации и удобства доступа к ним.',
    image: solutionFourth,
  },
];

const advantages = [
  {
    title: 'Интеграция',
    ico: icoIntegrate,
    text: 'Возможность встраивания в существующие рабочие процессы и системы  ERP, PLM, IIoT, SCADA и т. д.',
  },
  {
    title: 'Адаптивность',
    ico: icoDevice,
    text: 'Настольный компьютер, мобильный телефон, интернет, локальный сервер, частное или общедоступное облако',
  },
  {
    title: 'Технологическая независимость',
    ico: icoCode,
    text: 'Использование отечественного или свободно распространяемого программного обеспечения',
  },

  {
    title: 'Универсальность',
    ico: icoUniversal,
    text: 'Разработка персональных решений с учетом особых требований каждой отрасли промышленности',
  },
  {
    title: 'Мультиформатность',
    ico: icoMultiformat,
    text: 'Поддержка различных источников 3D и вспомогательных данных. Импорт файлов из сторонних CAD-систем ',
  },
  {
    title: 'Конфиденциальность',
    ico: icoShield,
    text: 'Обеспечение надежной безопасности для технической и коммерческой информации',
  },
];

const news = [
  {
    title: 'Система Управления Технологическими Процессами для Египетских национальных железных дорог',
    text: 'Система КС ПТР предназначена для автоматизации определения неисправного узла локомотива на основе визуального представления устройства локомотива, автоматического определения потребности в запасных частях, материалах, оборудовании и инструменте при выполнении технологического процесса замены узла.',
    img: newsIvolga,    
    date: '22 Авг 2021',
  },
  {
    title: 'Новая версия Builder v.3.0.0 на базе JavaScript и графическом API - Three.js',
    text: 'Система КС ПТР предназначена для автоматизации определения неисправного узла локомотива на основе визуального представления устройства локомотива, автоматического определения потребности в запасных частях, материалах, оборудовании и инструменте при выполнении технологического процесса замены узла.',
    img: solutionSecond,    
    date: '4 Июн 2022',
  },
  {
    title: 'Электронный каталог электропоезда Иволга с детализацией покупных изделий',
    text: 'ЦТИ по заказу МВПС разработал ИЭТР с подробной структурой покупных сборочных узлов, обслуживаемых при ТО и ДР, для подвижного состава Иволги 1.0',
    img: newsIvolga,    
    date: '15 Янв 2022',
  },
];

function Main() {
  return (
    <div className='main'>
      <Header />

      <div className='main__slider'>
        <h2 className='main__title noselect'>
          Центр Транспортных <br></br> Исследований
          
        </h2>
        <h3 className='main__subtitle top_span'>
          Надежный партнер на пути
          <br></br> к цифровому будущему
        </h3>
        <img src={slide_second} alt='img' className='main__image' draggable='false' />        
        <div className='main__notes'>
      <div className='main__note'>
        <h4 className='main__note_title'>30 лет</h4>
        <p className='main__note_subtitle'>на рынке IT-систем</p>
      </div>
      <div className='main__note'>
        <h4 className='main__note_title'>200+</h4>
        <p className='main__note_subtitle'>проектов</p>
      </div>
      <div className='main__note'>
        <h4 className='main__note_title'>10 тыс</h4>
        <p className='main__note_subtitle'>пользователей</p>
      </div>
        </div>
        {/* <Slider slides={slides} /> */}
        
      </div>

      <div className='main__accordion'>
        <Accordion panels={panels} />
        <div className='main_accordion_bg'>
          <svg
            className='main__bg1'
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 1440 320'
          >
            <path
              fill='#eef9ff'
              fill-opacity='1'
              d='M0,160L60,154.7C120,149,240,139,360,138.7C480,139,600,149,720,170.7C840,192,960,224,1080,224C1200,224,1320,192,1380,176L1440,160L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z'
            ></path>
          </svg>
          <svg
            className='main__bg2'
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 1440 320'
          >
            <path
              fill=''
              fill-opacity='0.2'
              d='M0,160L60,154.7C120,149,340,139,360,138.7C480,139,600,149,720,170.7C840,192,960,224,1080,224C1200,224,1320,192,1380,176L1440,160L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z'
            ></path>
          </svg>
          <svg
            className='main__bg3'
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 1440 320'
          >
            <path
              fill=''
              fill-opacity='0.1'
              d='M0,160L60,154.7C120,149,240,139,360,138.7C480,139,600,149,720,170.7C840,192,960,224,1080,224C1200,224,1320,192,1380,176L1440,160L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z'
            ></path>
          </svg>
        </div>
      </div>
      <div className='main__solutions'>
        <Solutions solutions={solutions} />
      </div>

      <div className='main__cases'>
        <Cases cases={cases} />
      </div>
      <div className='main__whoweare'>
        <Whowe />
        <div className='main__whoweare_bg'>
          <svg
            className='main__bg4'
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 1440 320'
          >
            <path
              fill='#eef9ff'
              fill-opacity='1'
              d='M0,224L80,218.7C160,213,320,203,480,218.7C640,235,800,277,960,293.3C1120,309,1280,299,1360,293.3L1440,288L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z'
            ></path>
          </svg>
          <svg
            className='main__bg5'
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 1440 320'
          >
            <path
              fill=''
              fill-opacity='0.2'
              d='M0,224L80,218.7C160,213,320,203,480,218.7C640,235,800,277,960,293.3C1120,309,1280,299,1360,293.3L1440,288L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z'
            ></path>
          </svg>
          <svg
            className='main__bg6'
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 1440 320'
          >
            <path
              fill=''
              fill-opacity='0.1'
              d='M0,224L80,218.7C160,213,320,203,480,218.7C640,235,800,277,960,293.3C1120,309,1280,299,1360,293.3L1440,288L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z'
            ></path>
          </svg>
        </div>
      </div>

      <div className='main__advantages'>
        <Advantages items={advantages} />
      </div>
      <div className='main__news'>
        <News news={news} />
      </div>

      {/* <div>
      <Timeline events={events} />
      </div>*/}
    </div>
  );
}

export default Main;
