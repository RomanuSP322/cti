import ietrBg from "../images/ietr2.png";

import views from "../video/views.webm";
import vector from "../video/vector.webm";
import print from "../video/print.webm";
import erp from "../video/erp.webm";
import animation from "../video/animation.webm";
import figures from "../video/figure.webm";
import language from "../video/language.webm";
import animationsok from "../video/animationsok.webm";
import figuressok from "../video/figuresok.webm";

import capFirst from "../images/animation.gif";
import capSecond from "../images/search.gif";
import capThird from "../images/print.gif";
import capFourth from "../images/twod.gif";
import capFifth from "../images/market.gif";

import threeDFirst from "../images/sofwareC.png";
import threeDSecond from "../images/fileC.png";
import threeDThird from "../images/analyzeC.png";
import threeDFourth from "../images/refresh.png";

const intro = {
  section: "ietr",
  title: "Интерактивное Электронное Техническое Руководство",
  bgimage: ietrBg,
  subtitle:
    "Эффективный цифровой инструмент информационно-технической поддержки",
};

const catalogdata = [
  {
    title: "Технологические виды",
    webm: views,
    description:
      "Для каждой сборочной единицы в каталоге представлена 3D взрыв-схема и интерактивная спецификация, между которыми можно перемещаться, произвольно выбирая выноски и позиции",
  },
  {
    title: "Режим векторной графики",
    webm: vector,
    description: "Обеспечивает быстродействие на маломощных компьютерах: вся трехмерная информация представлена 2D векторной графикой, позволяющей масштабировать изображения при сохранении их интерактивности и четкости",
  },
  {
    title: "Печатное представление каталога",
    webm: print,
    description: "Пользовательский интерфейс позволяет выводить на печать данные любого уровня без предварительной обработки, создавать полиграфические макеты для создания печатных изданий каталогов, эксплуатационной, ремонтной документации",
  },
  {
    title: "Интеграция с ERP системами",
    webm: erp,
    description: "Позволяет службам материально-технического снабжения предприятий автоматически планировать и осуществлять заказ запасных частей и материалов для обслуживания и ремонта в точном соответствии с конструкторской документацией на основании соответствующих технологических процессов",
  },
];

const manualdata = [
  {
    title: "Анимация технологических процессов",
    webm: animation,
    description: "Технологические процессы, выполненные по ЕСТД в текстовом виде, сопровождаются пошаговой интерактивной анимацией с возможностью произвольного перемещения по временной шкале, выбора удобного ракурса, отображения скрытых от непосредственного наблюдения процессов",
  },
  {
    title: "Интерактивные иллюстрации",
    webm: figures,
    description: "Наглядное представление информации в виде интерактивных 3D эскизов фотографического качества",
  },
  {
    title: "Мультиязычный контент",
    webm: language,
    description: "Модульная структура ИЭТР позволяет оперативно адаптировать контент для пользователей из разных стран",
  },
];

const isokdata = [
  {
    title: "Интерактивная анимация технологического процесса",
    webm: animationsok,
    description: "Интерактивная анимация с контролируемым положением, ракурсом и видимостью учавствующих моделей, сопровождающая текстовое описание каждой операции техпроцесса",
  },
  {
    title: "Представление информации в виде 3D иллюстраций",
    webm: figuressok,
    description: "Визуально доступное представление информации в виде интерактивного 3D вида",
  },
  {
    title: "Доступ к вспомогательной нормативной документации",
    webm: animationsok,
    description: "Снабжение пользователя вспомогательной документацией, требующейся в процессе",
  },
];

const capabilities = [
  {
    title: "Интерактивная анимация",
    image: capFirst,
    text: "3D интерактивная анимация, сопровождающая текстовое описание каждого шага или операции техпроцесса, создается на основе 3D моделей деталей и сборочных единиц, участвующих в представляемом техпроцессе. Используемые в технологическом процессе инструмент, шаблоны и оснастка также выполняются в технологии 3D/2D моделирования.",
  },
  {
    title: "Поиск по ключевым словам",
    image: capSecond,
    text: "В интерактивном каталоге реализован функционал поиска по ключевым параметрам объекта - номеру чертежа, названию узла, детали - с последующим позиционированием на найденном объекте.",
  },
  {
    title: "Вывод на печать",
    image: capThird,
    text: "Пользовательский интерфейс позволяет выводить на печать данные любого уровня. Вид для печати каждого элемента каталога включает указатели на соответствующие позиции таблицы спецификации.",
  },
  {
    title: "Быстродействие",
    image: capFourth,
    text: "Специально разработанное программное обеспечение реализует быстродействие на маломощных компьютерах за счет перехода в режим 2D: вся трехмерная информация преобразуется в статичную векторную графику, сохраняя при этом интерактивность и четкость изображения при масштабировании.",
  },
  {
    title: "Связь с системами снабжения",
    image: capFifth,
    text: "Все элементы моделей электронного каталога снабжены подробной текстовой и графической информацией о стандарте исполнения, материале, нормах допусков, технологическом процессе обслуживания, оснастке и инструменте. Что позволяет использовать интерактивный каталог при формировании заявки на получение комплектующих.",
  },
];

const info = [
  {
    ico: threeDFirst,
    text: "3D представление позволяет лучше понять конструкцию изделия и обеспечить наглядность работы ее узлов и деталей",
  },
  {
    ico: threeDSecond,
    text: "Проектирование в профессиональных CAD системах позволяет обеспечить полное соответствие требованиям конструкторской документации",
  },
  {
    ico: threeDThird,
    text: "Реалистичность виртуальной модели предоставляет возможность предпроизводственного анализа изделия и проектной документации",
  },
  {
    ico: threeDFourth,
    text: "Комплексный подход к проектированию моделей позволяет оперативно актуализировать контент",
  },
];

export { intro, capabilities, info, catalogdata, manualdata, isokdata };