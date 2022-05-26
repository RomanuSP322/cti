import portfolioBg from "../images/portfolio.png";

import posterFirst from "../images/projectposter1.png";
import posterSecond from "../images/projectposter2.png";
import posterThird from "../images/projectposter3.png";
import transenergoPoster from "../images/transenergoposter.jpg";
import gupgetPoster from "../images/gupgetposter.jpg";
import scbPoster from "../images/scbposter.png";
import tmdmPoster from "../images/tm18dmposter.jpg";

import wideFirst from "../images/wide1.png";
import wideSecond from "../images/wide2.png";
import wideThird from "../images/diselwide.png";
import transenergoWide from "../images/transenergowide.png";
import gupgetWide from "../images/gupgetwide.png";
import scbWide from "../images/scbwide.png";
import tmdmWide from "../images/tm18dmwide.png";


import screenFirst from "../images/screen1.png";
import screenSecond from "../images/screen2.png";
import screenThird from "../images/screen3.png";
import transenergoScreen from "../images/transenergoscreen.png";
import gupgetScreen from "../images/gupgetscreen.png"
import scbScreen from "../images/scbscreen.png"
import tmdmScreen from "../images/tm18dmScreen.png";

const intro = {
  section: "portfolio",
  title: "Проекты",
  bgimage: "portfolioBg",
  subtitle:
    "Богатый опыт разработки комплексных решений в области информационных технологий",
};

const projects = [
  {
    id: "22067",
    title:
      "Система технологического управления пригородным пассажирским комплексом",
    poster: posterFirst,
    imagewide: wideFirst,
    imagescreen: screenFirst,
    year: 2021,
    client: "ОАО «РЖД»",
    mission:
      "Автоматизация бизнес – процессов региональных дирекций пассажирских обустройств в части формирования планов и проведения осмотров объектов пригородной инфраструктуры, учета и классификации выявленных замечаний санитарно – технического состояния объектов, планирования мероприятий и программ ремонта",
    solution: "Система управления базами данных PostgreSQL PHP Js",
  },
  {
    id: "22068",
    title: "Интерактивный электронный каталог подвижного состава «Иволга» ",
    poster: posterSecond,
    imagewide: wideSecond,
    imagescreen: screenSecond,
    year: 2022,
    client: "ОАО «РЖД»",
    mission:
      "Автоматизация бизнес – процессов региональных дирекций пассажирских обустройств в части формирования планов и проведения осмотров объектов пригородной инфраструктуры, учета и классификации выявленных замечаний санитарно – технического состояния объектов, планирования мероприятий и программ ремонта",
    solution: "Система управления базами данных PostgreSQL PHP Js",
  },
  {
    id: "22069",
    title: "Автоматизированная информационная система управления проектами по реконструкции, капитальному строительству и ремонту объектов железнодорожного транспорта ",
    poster: transenergoPoster,
    imagewide: transenergoWide,
    imagescreen: transenergoScreen,
    year: 2020,
    client: "ООО «Трансэнерго»",
    mission:
      " -Оптимизация сбора и повышение качества первичной информации о подготовке планов капитального ремонта и о ходе реализации работ по выполнению планов капитального ремонта; \n\n- Повышение достоверности данных по стоимости объектов, стоимости капитального ремонта за счет сбора подробной информации о стоимостных и физических показателях выполнения работ по капитальному ремонту объектов электроснабжения; \n\n- Оперативный и достоверный учет данных управленческого учета по исполнению планов капитального ремонта ОАО «РЖД»;\n\n- Повышения эффективности принятия управленческих решений при капитальном ремонте объектов электроснабжения за счет формирования актуальной и верифицированной отчетности.",
    solution: "Система управления базами данных PostgreSQL PHP Js",
  },
  {
    id: "22072",
    title:
      "Cистема предоставления технологических процессов обслуживания и ремонта дизель-генератора 18-9ДГ",
    poster: posterThird,
    imagewide: wideThird,
    imagescreen: screenThird,
    year: 2019,
    client: "ОАО «РЖД»",
    mission:
      "Автоматизация бизнес – процессов региональных дирекций пассажирских обустройств в части формирования планов и проведения осмотров объектов пригородной инфраструктуры, учета и классификации выявленных замечаний санитарно – технического состояния объектов, планирования мероприятий и программ ремонта",
    solution: "Система управления базами данных PostgreSQL PHP Js",
  },
  {
    id: "22070",
    title:
      "Система информационного обеспечения предприятия Санкт Петербургского государственного унитарного предприятия городского электрического транспорта",
    poster: gupgetPoster,
    imagewide: gupgetWide,
    imagescreen: gupgetScreen,
    year: 2021,
    client: "ОАО «РЖД»",
    mission:
      "Автоматизация бизнес – процессов региональных дирекций пассажирских обустройств в части формирования планов и проведения осмотров объектов пригородной инфраструктуры, учета и классификации выявленных замечаний санитарно – технического состояния объектов, планирования мероприятий и программ ремонта",
    solution: "СИОП ГУП ГЭТ – корпоративная система автоматизации бизнес-процессов, связанных с информационным обеспечением процессов эксплуатации, технического обслуживания и ремонта подвижного состава и производственной инфраструктуры.",
  },
  {
    id: "22071",
    title:
      "Комплексная автоматизированная система паспортизации аппаратуры СЦБ ",
    poster: scbPoster,
    imagewide: scbWide,
    imagescreen: scbScreen,
    year: 2005,
    client: "ГУП «Московский метрополитен»",
    mission:
      "Создание единого информационного ресурса, позволяющего реализовать быстрый доступ к требуемым элементам информации. Своевременное получение сведений о местонахождении конкретной аппаратуры, о всех ее ремонтах и установках для повышения качества ремонта и проверки аппаратуры, предотвращения случаев отказа в работе аппаратуры.",
    solution: "Система управления базами данных PostgreSQL PHP Js",
  },
  {
    id: "22031",
    title:
      "Интерактивный электронный каталог тепловоза «ТЭМ18ДМ»",
    poster: tmdmPoster,
    imagewide: tmdmWide,
    imagescreen: tmdmScreen,
    year: 2020,
    client: "АО «УК «БМЗ»",
    mission:
      "Создание единого информационного ресурса, позволяющего реализовать быстрый доступ к требуемым элементам информации. Своевременное получение сведений о местонахождении конкретной аппаратуры, о всех ее ремонтах и установках для повышения качества ремонта и проверки аппаратуры, предотвращения случаев отказа в работе аппаратуры.",
    solution: "Система управления базами данных PostgreSQL PHP Js",
  },
];

export { intro, projects };
