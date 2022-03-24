import React, {useEffect} from 'react';
import Header from '../Header/Header';
import AboutIetr from '../AboutIetr/AboutIetr';
import Waves from '../Waves/Waves';
import Capabilities from '../Capabilities/Capabilities';
import ThreeDInfo from '../ThreeDInfo/ThreeDInfo';
import ScrollDown from '../ScrollDown/ScrollDown';
import ScrollToTopBtn from '../ScrollToTop/ScrollToTopBtn';

import './IETR.css';

import ietr from '../../images/ietr.png';
import catalog from '../../images/catalog.png';
import capFirst from '../../images/animation.gif';
import capSecond from '../../images/search.gif';
import capThird from '../../images/print.gif';
import capFourth from '../../images/twod.gif';
import capFifth from '../../images/market.gif';

import threeDFirst from '../../images/sofwareC.png';
import threeDSecond from '../../images/fileC.png';
import threeDThird from '../../images/analyzeC.png';


const capabilities = [
  {
    title: 'Интерактивная анимация',
    image: capFirst,
    text: '3D интерактивная анимация, сопровождающая текстовое описание каждого шага или операции техпроцесса, создается на основе 3D моделей деталей и сборочных единиц, участвующих в представляемом техпроцессе. Используемые в технологическом процессе инструмент, шаблоны и оснастка также выполняются в технологии 3D/2D моделирования.',
  },  
  {
    title: 'Поиск по ключевым словам',
    image: capSecond,
    text: 'В интерактивном каталоге реализован функционал поиска по ключевым параметрам объекта - номеру чертежа, названию узла, детали - с последующим позиционированием на найденном объекте.',
  },  
  {
    title: 'Вывод на печать',
    image: capThird,
    text: 'Пользовательский интерфейс позволяет выводить на печать данные любого уровня. Вид для печати каждого элемента каталога включает указатели на соответствующие позиции таблицы спецификации.',
  },  
  {
    title: 'Быстродействие',
    image: capFourth,
    text: 'Специально разработанное программное обеспечение реализует быстродействие на маломощных компьютерах за счет перехода в режим 2D: вся трехмерная информация преобразуется в статичную векторную графику, сохраняя при этом интерактивность и четкость изображения при масштабировании.',
  },  
  {
    title: 'Связь с системами снабжения',
    image: capFifth,
    text: 'Все элементы моделей электронного каталога снабжены подробной текстовой и графической информацией о стандарте исполнения, материале, нормах допусков, технологическом процессе обслуживания, оснастке и инструменте. Что позволяет использовать интерактивный каталог при формировании заявки на получение комплектующих.',
  },  
];

const info = [
  {    
    ico: threeDFirst,
    text: '3D представление всех элементов конструкции обеспечивает доступность и наглядность технической информации',
  },  
  {    
    ico: threeDSecond,
    text: 'Проектирование в профессиональных CAD системах позволяет обеспечить полное соответствие конструкторской документации',
  }, 
  {    
    ico: threeDThird ,
    text: 'Реалистичность виртуальной модели предоставляет возможность предпроизводственного анализа изделия и проектной документации',
  }, 

];

function IETR() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
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
        < ScrollDown/>
      </section>
      <AboutIetr />
      <Waves
        pos={'up'}
        svg={
          'M0,96L80,85.3C160,75,320,53,480,64C640,75,800,117,960,138.7C1120,160,1280,160,1360,160L1440,160L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z'
        }
      />

      <section className='ietr__catalog'>
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
      <ScrollToTopBtn />
    </div>
  );
}

export default IETR;
