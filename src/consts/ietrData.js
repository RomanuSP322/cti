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

import viewsMp from "../video/views.mp4";
import vectorMp from "../video/vector.mp4";
import printMp from "../video/print.mp4";
import erpMp from "../video/erp.mp4";
import animationMp from "../video/animation.mp4";
import figuresMp from "../video/figure.mp4";
import languageMp from "../video/language.mp4";
import animationsokMp from "../video/animationsok.mp4";
import figuressokMp from "../video/figuresok.mp4";


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
    mp4: viewsMp,
    description:
      "Для каждой сборочной единицы в каталоге представлена 3D взрыв-схема и интерактивная спецификация, между которыми можно перемещаться, произвольно выбирая выноски и позиции",
  },
  {
    title: "Режим векторной графики",
    webm: vector,
    mp4: vectorMp,
    description: "Обеспечивает быстродействие на маломощных компьютерах: вся трехмерная информация представлена 2D векторной графикой, позволяющей масштабировать изображения при сохранении их интерактивности и четкости",
  },
  {
    title: "Печатное представление каталога",
    webm: print,
    mp4: printMp,
    description: "Пользовательский интерфейс позволяет выводить на печать данные любого уровня без предварительной обработки, создавать полиграфические макеты для создания печатных изданий каталогов, эксплуатационной, ремонтной документации",
  },
  {
    title: "Интеграция с ERP системами",
    webm: erp,
    mp4: erpMp,
    description: "Позволяет службам материально-технического снабжения предприятий автоматически планировать и осуществлять заказ запасных частей и материалов для обслуживания и ремонта в точном соответствии с конструкторской документацией на основании соответствующих технологических процессов",
  },
];

const manualdata = [
  {
    title: "Анимация технологических процессов",
    webm: animation,
    mp4: animationMp,
    description: "Технологические процессы, выполненные по ЕСТД в текстовом виде, сопровождаются пошаговой интерактивной анимацией с возможностью произвольного перемещения по временной шкале, выбора удобного ракурса, отображения скрытых от непосредственного наблюдения процессов",
  },
  {
    title: "Интерактивные иллюстрации",
    webm: figures,
    mp4: figuresMp,
    description: "Наглядное представление информации в виде интерактивных 3D эскизов фотографического качества",
  },
  {
    title: "Мультиязычный контент",
    webm: language,
    mp4: languageMp,
    description: "Модульная структура ИЭТР позволяет оперативно адаптировать контент для пользователей из разных стран",
  },
];

const isokdata = [
  {
    title: "Интерактивная анимация технологического процесса",
    webm: animationsok,
    mp4: animationsokMp,
    description: "Интерактивная анимация с контролируемым положением, ракурсом и видимостью учавствующих моделей, сопровождающая текстовое описание каждой операции техпроцесса",
  },
  {
    title: "Представление информации в виде 3D иллюстраций",
    webm: figuressok,
    mp4: figuressokMp,
    description: "Визуально доступное представление информации в виде интерактивного 3D вида",
  },
  {
    title: "Доступ к вспомогательной нормативной документации",
    webm: animationsok,
    mp4: animationsokMp,
    description: "Снабжение пользователя вспомогательной документацией, требующейся в процессе",
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

export { intro, info, catalogdata, manualdata, isokdata };
