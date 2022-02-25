import React from 'react';


import Header from '../Header/Header';
import Slider from '../Slidernew/Slider';
import Whowe from '../Whowe/Whowe';
import Accordion from '../Accordion/Accordion';
import Cases from '../Cases/Cases'
import Timeline from '../Timeline/Timeline';
import Solutions from '../Solutions/Solutions';
import './Main.css';


import slide_first from '../../images/slide1.png';
import slide_second from '../../images/slide2.png';
import slide_third from '../../images/slide3.png';

import accordionImg1 from '../../images/diselImg.png';
import accordionImg2 from '../../images/techImg.png';
import accordionImg3 from '../../images/tm18dm.png';
import accordionImg4 from '../../images/bsu.png'
;
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


const panels = [
  {
    label: "Проектирование",
    subtitle: "Цифровизация каждого этапа жизненого цикла",
    text_color: "#36b5f0",
    content_title: "Проектирование",
    content:
      'Построение цифрового двойника, который имеет прямую связь с конструкторской документацией входящих в него деталей и узлов. Виртуальный анализ разработанной модели позволяет более качественно оценивать риски, ускорять разработку новых продуктов и повышать надежность производственных линий.',
    imgurl: accordionImg1,

  },
  {
    label: 'Производство',
    subtitle: "Цифровизация каждого этапа жизненого цикла",
    content_title: "Производство",
    text_color: "#95e616",
    content:
      'Цифровизация выполнения техпроцессов с применением актуального интерактивного каталога. Повышение качества выполняемых работ за счет потоковой передачи 3D-данных в цех. Упрощают процесс сборки и повышают точность на этапах сборки или контроля качества',
    imgurl: accordionImg2,

  },
  {
    label: 'Эксплуатация',
    subtitle: "Цифровизация каждого этапа жизненого цикла",
    text_color: "#ef3a56",
    content_title: "Эксплуатация",
    content:
      'Трехмерные каталоги обеспечивают интерактивный и интеллектуальный набор запасных частей, цифровую техническую документацию для процессов технического обслуживания и ремонта. Связь 3D-конфигуратора с ERP и/или PLM-системой позволяет формировать и передавать на склад перечень составных элементов, спецификацию, варианты комплектации, ценовые данные и т. д. и координировать расход материалов.',
    imgurl: accordionImg3,

  },
  {
    label: "Ремонт",
    subtitle: "Цифровизация каждого этапа жизненого цикла",
    content_title: "Ремонт",
    text_color: "#ffd900",
    content:
      "Четверть века мы разрабатываем комплексное программное обеспечение для предприятий транспорта. За годы успешной проектно-внедренческой деятельности мы накопили богатый опыт по техническому аудиту, системной интеграции, разработке персональных IT-решений.",
    imgurl: accordionImg4,

  },

];

const slides = [
  {
    title_first: "200+",
    subtitle_first: "проектов",
    title_second: "30 лет",
    subtitle_second: "на рынке IT-систем",
    title_third: "10 тыс.",
    subtitle_third: "пользователей",
    image: slide_first,
    indicator: "Решения",
  },
  {
    title_first: "РЖД",
    subtitle_first: "Внедрили",
    title_second: "НЭВЗ",
    subtitle_second: "Создали",
    title_third: "ТВЗ",
    subtitle_third: "Разработали",
    image: slide_second,
    indicator: "Проекты",
  },
  {
    title_first: "IIoT",
    subtitle_first: "системная интеграция",
    title_second: "VR",
    subtitle_second: "тренажеры",
    title_third: "DP",
    subtitle_third: "анализ и управление",
    image: slide_third,
    indicator: "Технологии",
  }
];


const cases = [
  {
    text: "Интерактивный электронный каталог сборочных единиц, деталей и узлов подвижного состава «Иволга», разработанный для ОАО «ТВЗ» ",
    image: casefirst,
  },
  {
    text: "Комплексаня система предоставления технологических процессов обслуживания и ремонта дизель-генератора 18-9ДГ",
    image: casesecond,
  },
  {
    text: "Система технологического управления пригородным пассажирским комплексом для ОАО «РЖД»",
    image: casethird,
  },
];

const events = [
  {
    date: {
      from: 1895,
      to: 1905
    },
    role: "Early Discoveries",
    company: "Theory of radioactive decay",
    location: "Ernest Rutherford",
    content:
      "ProinFusce et sem accumsan magna fringilla porta. Nunc eget turpis ut ligula vulputate fFusce et sem accumsan magna fringilla porta. Nunc eget turpis ut ligula vulputate faucibus. Nam euismod leo vel eleifend suscipit. Pellentesque et congue felis.Fusce et sem accumsan magna fringilla porta. Nunc eget turpis ut ligula vulputate faucibus. Nam euismod leo vel eleifend suscipit. Pellentesque et congue felis.Fusce et sem accumsan magna fringilla porta. Nunc eget turpis ut ligula vulputate faucibus. Nam euismod leo vel eleifend suscipit. Pellentesque et congue felis.Fusce et sem accumsan magna fringilla porta. Nunc eget turpis ut ligula vulputate faucibus. Nam euismod leo vel eleifend suscipit. Pellentesque et congue felis.aucibus. Nam euismod leo vel eleifend suscipit. Pellentesque et congue felis. nunc nulla, blandit sit amet egestas sed, tincidunt non est. Ut id sem justo. Curabitur quis dictum turpis, ut tempus ligula. Fusce tempus scelerisque lorem in posuere."
  },
  {
    date: {
      from: 1996,
      to: 1999
    },
    role: "Futher Investigations",
    company: "First model of an atom",
    location: "Niels Bohr",
    content:
      "Quisque tortor tortor, pretium sed risus sit amet, pretium rutrum nunc. Nulla turpis eros, rhoncus at lobortis eget, elementum eu lectus."
  },
  {
    date: {
      from: 1997,
      to: 1999
    },
    role: "Prelude to War",
    company: "Splitting of the nucleus",
    location: "Albert Einstein",
    content:
      "Cras ut orci hendrerit, elementum massa vitae, eleifend sapien. Praesent dignissim sem est, id ornare sem lobortis at."
  },
  {
    date: {
      from: 1999,
      to: 2001
    },
    role: "Organizing the Effort",
    company: "Nuclear Chain Reaction",
    location: "Enrico Fermi",
    content:
      "Rhoncus at lobortis eget, elementum eu lectus. Maecenas et ante sapien. Ut semper commodo felis, eget ullamcorper dolor faucibus vel. Fusce pharetra tempor est malesuada rutrum."
  },
  {
    date: {
      from: 2002,
      to: 2005
    },
    role: "The Manhattan Project",
    company: "Jornada del Muerto",
    location: "J. Robert Oppenheimer",
    content:
      "Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Fusce velit enim, dignissim eu fringilla quis, malesuada et massa."
  },
  {
    date: {
      from: 2005,
      to: 2010
    },
    role: "Crossroads of Peace",
    company: "Atomic Energy Act",
    location: "Harry S. Truman",
    content:
      "Fusce et sem accumsan magna fringilla porta. Nunc eget turpis ut ligula vulputate faucibus. Nam euismod leo vel eleifend suscipit. Pellentesque et congue felis."
  },
  {
    date: {
      from: 2010,
      to: 2014
    },
    role: "Current Day",
    company: "Arms Races",
    location: "Present Day",
    content:
      "Aliquam leo arcu, semper vel iaculis sed, maximus eu neque. Maecenas mollis est non ante vehicula commodo. Nullam feugiat tellus augue. "
  }
];



const solutions = [
  {
    title: "Итерактивные Электронные Технические Руководства",
    ico: solutionIcoFirst,
    activeico: solutionIcoFirstActive,
    text: "Интерактивные электронные технические руководства - организационно-технические системы, предназначенные для автоматизированной подготовки и представления сопроводительной документации в электронном виде.",
    image: solutionFirst,
  },
  {
    title: "Управление Технологическими Процессами",
    ico: solutionIcoSecond,
    activeico: solutionIcoSecondtActive,
    text: "Система КС ПТР предназначена для автоматизации определения неисправного узла локомотива на основе визуального представления устройства локомотива, автоматического определения потребности в запасных частях, материалах, оборудовании и инструменте при выполнении технологического процесса замены узла.",
    image: solutionSecond,
  },
  {
    title: "Инновационные Системы Обучения",
    ico: solutionIcoThird,
    activeico: solutionIcoThirdActive,
    text: "Интерактивная система обучения представляет собой программный комплекс, который объединяет в себе нормативную, технологическую и проектно-конструкторскую документацию, на основании которой созданы 3D-модели деталей и узлов.",
    image: solutionThird,
  },
  {
    title: "Корпоративные Базы Данных",
    ico: solutionIcoFourth,
    activeico: solutionIcoFourthtActive,
    text: "ЦТИ разрабатывает крупные программные комплексы, которые объединяют в себе большое количество разнородной информации. Решение подобных задач требует особенно тщательного подхода к вопросам надежности хранения данных, систематизации и удобства доступа к ним.",
    image: solutionFourth,
  },

];

function Main() {
  return (
    <div className='main'>
      
      <Header />


      <div className='main__slider'>
        <h2 className='slider__title noselect'>
          Центр Транспортных <br></br> Исследований
          <span className='slider__title_span noselect'></span>{' '}
        </h2>
        <h3 className='slider__subtitle'><span className='slide__title_span'>Надежный партнер на пути</span><br></br> к цифровому будущему</h3>
        <Slider slides={slides} />

      </div>

      <div className='main__accordion'>
        <Accordion panels={panels} />
        <div className='main_accordion_bg' >
     <svg className='main__bg1' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#eef9ff" fill-opacity="1" d="M0,160L60,154.7C120,149,240,139,360,138.7C480,139,600,149,720,170.7C840,192,960,224,1080,224C1200,224,1320,192,1380,176L1440,160L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path></svg>
     <svg className='main__bg2' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="" fill-opacity="0.2" d="M0,160L60,154.7C120,149,340,139,360,138.7C480,139,600,149,720,170.7C840,192,960,224,1080,224C1200,224,1320,192,1380,176L1440,160L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path></svg>
     <svg className='main__bg3' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="" fill-opacity="0.1" d="M0,160L60,154.7C120,149,240,139,360,138.7C480,139,600,149,720,170.7C840,192,960,224,1080,224C1200,224,1320,192,1380,176L1440,160L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path></svg>
     </div>
       
      </div>
      <div className='main__solutions'>
      < Solutions solutions={solutions}/>
      </div>

    
      <div className='main__cases'>
        <Cases cases={cases} />
      </div>
      <div className='main__whoweare'>
        <Whowe />
      </div>

      {/* <div>
      <Timeline events={events} />
      </div>*/}
     


    </div>
  );
}

export default Main;
