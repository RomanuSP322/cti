

import accordionImg1 from "../images/diselImg.png";
import accordionImg2 from "../images/techImg.png";
import accordionImg3 from "../images/twofloorred.png";
import accordionImg4 from "../images/bsu.png";
import caseegtv from "../images/case3.png";
import caseenzd from "../images/caseenzd.png";
import casediesel from "../images/casediesel.png";

import solutionFirst from "../images/solutionIETR.png";
import solutionIcoFirst from "../images/3dsoftware.png";
import solutionIcoFirstActive from "../images/3dsofrwareactive.png";
import solutionSecond from "../images/solutionTech.png";
import solutionIcoSecond from "../images/techIco.png";
import solutionIcoSecondtActive from "../images/techIcoactive.png";
import solutionThird from "../images/vrImg.png";
import solutionIcoThird from "../images/vr.png";
import solutionIcoThirdActive from "../images/vractive.png";
import solutionFourth from "../images/dataImg.png";
import solutionIcoFourth from "../images/server.png";
import solutionIcoFourthtActive from "../images/serverActive.png";

import icoDevice from "../images/device.png";
import icoCode from "../images/code.png";
import icoIntegrate from "../images/distribute.png";
import icoMultiformat from "../images/filter.png";
import icoUniversal from "../images/recruitmentrdy.png";
import icoShield from "../images/encrypte.png";

import newsIvolga from "../images/newsIvolga.png";

const panels = [
    {
      label: "Проектирование",
      subtitle: "Цифровизация каждого этапа жизненного цикла",
      text_color: "#36b5f0",
      content_title: "Проектирование",
      content:
        "Мы создаем цифровой двойник изделия любой сложности на основе конструкторской документации. Виртуальный анализ цифровой модели сокращает время создания опытных образцов, облегчает переход на безбумажные технологии производства и ускоряет процесс модернизации изделий",
      imgurl: accordionImg1,
    },
    {
      label: "Производство",
      subtitle: "Цифровизация каждого этапа жизненного цикла",
      content_title: "Производство",
      text_color: "#95e616",
      content:
        "Модуль проектирования технологических процессов на базе интерактивного каталога изделия позволяет формировать любую технологическую и проектную документацию в цифровом виде и способствует введению безбумажной технологии производства",
      imgurl: accordionImg2,
    },
    {
      label: "Эксплуатация",
      subtitle: "Цифровизация каждого этапа жизненного цикла",
      text_color: "#ef3a56",
      content_title: "Эксплуатация",
      content:
        "Интерактивный каталог позволяет провести подетальную паспортизацию подвижного состава. Цифровая копия каждого локомотива и вагона доступна в реальном времени от выпуска до утилизации",
      imgurl: accordionImg3,
    },
    {
      label: "Ремонт",
      subtitle: "Цифровизация каждого этапа жизненного цикла",
      content_title: "Ремонт",
      text_color: "#ffd900",
      content:
        "На основе интерактивного 3D-каталога формируются руководства по обслуживанию и ремонту.  Интеграция с ERP- и PLM-системами предприятия позволяет рассчитывать затраты на обеспечение каждого этапа жизненного цикла",
      imgurl: accordionImg4,
    },
  ];
  
  
  
  const cases = [
    {
      text: "Интерактивное электронное техническое руководство пассажирских вагонов для Египетских национальных железных дорог",
      image: caseenzd,
      path: "projects/22067",
    },
    {
      text: "Интерактивный электронный каталог сборочных единиц, деталей и узлов подвижного состава «Иволга» для ОАО «ТВЗ» ",
      image: caseegtv,
      path: "projects/22068",
    },
    {
      text: "Комплексная система представления технологических процессов обслуживания и ремонта дизель-генератора 18-9ДГ",
      image: casediesel,
      path: "projects/22072",
    },
  ];
  
  const solutions = [
    {
      title: "Интерактивные Электронные Технические Руководства",
      ico: solutionIcoFirst,
      activeico: solutionIcoFirstActive,
      text: "Интерактивные электронные технические руководства - это информационно-технические системы, которые предназначены для хранения и наглядного представления различной технической документации об изделии",
      image: solutionFirst,
      path: `IETR`,
    },
    {
      title: "Управление Технологическими Процессами",
      ico: solutionIcoSecond,
      activeico: solutionIcoSecondtActive,
      text: "Система КС ПТР предназначена для автоматизации создания технологических процессов на основе электронного каталога деталей и сборочных единиц, автоматического определения потребности в запасных частях, материалах, оборудовании и инструменте при выполнении технологического процесса",
      image: solutionSecond,
      path: `ksptr`,
    },
    {
      title: "Инновационные Системы Обучения",
      ico: solutionIcoThird,
      activeico: solutionIcoThirdActive,
      text: "Современные инструменты и средства для обучения персонала на базе трехмерного интерактивного контента: электронные учебные пособия, модуль интерактивного контроля знаний, VR-тренажеры, различные виды полиграфических макетов для печати.",
      image: solutionThird,
      path: `learning`,
    },
    {
      title: "Корпоративные IT \nРешения",
      ico: solutionIcoFourth,
      activeico: solutionIcoFourthtActive,
      text: "ЦТИ разрабатывает крупные программные комплексы, объединяющие большие объемы разнородной технической информации. Нами накоплен большой опыт в решении задач удобного и быстрого доступа к данным, обеспечении полноты данных об устройствах и оборудовании, надежности их хранении, быстрой актуализации информации",
      image: solutionFourth,
      path: `databases`,
    },
  ];
  
  const advantages = [
    {
      title: "Интеграция",
      ico: icoIntegrate,
      text: "Возможность встраивания в существующие рабочие процессы и системы  ERP, PLM, EAM и т. д.",
    },
    {
      title: "Адаптивность",
      ico: icoDevice,
      text: "Настольный компьютер, мобильный телефон, интернет, локальный сервер, частное или общедоступное облако",
    },
    {
      title: "Технологическая независимость",
      ico: icoCode,
      text: "Использование отечественного или свободно распространяемого программного обеспечения",
    },
  
    {
      title: "Универсальность",
      ico: icoUniversal,
      text: "Разработка персональных решений с учетом особых требований каждой отрасли промышленности",
    },
    {
      title: "Мультиформатность",
      ico: icoMultiformat,
      text: "Поддержка различных источников 3D и вспомогательных данных. Импорт файлов из сторонних CAD-систем ",
    },
    {
      title: "Конфиденциальность",
      ico: icoShield,
      text: "Обеспечение безопасности и конфиденциальности всей технической и коммерческой информации",
    },
  ];
  
  const news = [
    {
      title:
        "Система Управления Технологическими Процессами для Египетских национальных железных дорог",
      text: "Система КС ПТР предназначена для автоматизации определения неисправного узла локомотива на основе визуального представления устройства локомотива, автоматического определения потребности в запасных частях, материалах, оборудовании и инструменте при выполнении технологического процесса замены узла.",
      img: newsIvolga,
      date: "22 Авг 2021",
    },
    {
      title:
        "Новая версия Builder v.3.0.0 на базе JavaScript и графическом API - Three.js",
      text: "Система КС ПТР предназначена для автоматизации определения неисправного узла локомотива на основе визуального представления устройства локомотива, автоматического определения потребности в запасных частях, материалах, оборудовании и инструменте при выполнении технологического процесса замены узла.",
      img: solutionSecond,
      date: "4 Июн 2022",
    },
    {
      title:
        "Электронный каталог электропоезда Иволга с детализацией покупных изделий",
      text: "ЦТИ по заказу МВПС разработал ИЭТР с подробной структурой покупных сборочных узлов, обслуживаемых при ТО и ДР, для подвижного состава Иволги 1.0",
      img: newsIvolga,
      date: "15 Янв 2022",
    },
  ];

  export {panels, cases, solutions, advantages, news}