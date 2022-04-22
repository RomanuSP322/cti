import ietrBg from "../images/ietr2.png";

import views from "../video/views.webm";
import vector from "../video/vector.webm";
import print from "../video/print.webm";
import search from "../video/search.webm";
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

const intro = {
  section: "ietr",
  title: "Интерактивное Электронное Техническое Руководство",
  bgimage: ietrBg,
  subtitle:
    "Эффективный цифровой инструмент информационно-технической поддержки",
};

const catalogdata = [
  {
    title: "Виды с разнесенными частями",
    webm: views,
  },
  {
    title: "Режим векторной графики",
    webm: vector,
  },
  {
    title: "Печать отдельных положений, разделов",
    webm: print,
  },
  {
    title: "Поиск по ключевым словам",
    webm: search,
  },
];

const manualdata = [
  {
    title: "Пошаговая анимация технологических процессов",
    webm: animation,
  },
  {
    title: "Интерактивные технические 3D иллюстрации",
    webm: figures,
  },
  {
    title: "Мультиязычный контент",
    webm: language,
  },
];

const isokdata = [
  {
    title: "Интерактивная анимация технологического процесса",
    webm: animationsok,
  },
  {
    title: "Представление информации в виде 3D иллюстраций",
    webm: figuressok,
  },
  {
    title: "Доступ к вспомогательной нормативной документации",
    webm: animationsok,
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
    text: "3D представление всех элементов конструкции обеспечивает доступность и наглядность технической информации",
  },
  {
    ico: threeDSecond,
    text: "Проектирование в профессиональных CAD системах позволяет обеспечить полное соответствие конструкторской документации",
  },
  {
    ico: threeDThird,
    text: "Реалистичность виртуальной модели предоставляет возможность предпроизводственного анализа изделия и проектной документации",
  },
];

export { intro, capabilities, info, catalogdata, manualdata, isokdata };
