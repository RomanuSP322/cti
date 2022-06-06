import portfolioBg from "../images/portfolio.png";

import posterFirst from "../images/projectposter1.png";
import ivolgaPoster from "../images/ivolgaposter.jpg";
import posterThird from "../images/projectposter3.png";
import transenergoPoster from "../images/transenergoposter.jpg";
import gupgetPoster from "../images/gupgetposter.jpg";
import scbPoster from "../images/scbposter.png";
import tmdmPoster from "../images/tm18dmposter.jpg";
import enzdPoster from "../images/enzdposter.jpg";
import twofloorPoster from "../images/twofloorposter.jpg";
import zdputPoster from "../images/zdputposter.jpg";
import nevzPoster from "../images/nevzposter.jpg";
import bmzPoster from "../images/bmzposter.jpg";
import threesfivekPoster from "../images/3es5kposter.jpg";
import contactsetPoster from "../images/setposter.png";
import putmetroPoster from "../images/metroputposter.jpg";
import luganskPoster from "../images/luganskposter.jpg";

import wideFirst from "../images/wide1.png";
import ivolgaWide from "../images/ivolgawide.png";
import wideThird from "../images/diselwide.png";
import transenergoWide from "../images/transenergowide.png";
import gupgetWide from "../images/gupgetwide.png";
import scbWide from "../images/scbwide.png";
import tmdmWide from "../images/tm18dmwide.png";
import twofloorWide from "../images/twofloorwide.png";
import enzdWide from "../images/enzdwide.png";
import zdputWide from "../images/zdputwide.png";
import nevzWide from "../images/nevzwide.png";
import bmzWide from "../images/bmzwide.png";
import threesfivekWide from "../images/3es5kwide.png";
import contactsetkWide from "../images/setwide.png";
import putmetroWide from "../images/metroputwide.png";
import luganskWide from "../images/luganskwide.png";


import screenFirst from "../images/screen1.png";
import ivolgaScreen from "../images/screen2.png";
import screenThird from "../images/screen3.png";
import transenergoScreen from "../images/transenergoscreen.png";
import gupgetScreen from "../images/gupgetscreen.png"
import scbScreen from "../images/scbscreen.png"
import tmdmScreen from "../images/tm18dmScreen.png";
import twofloorScreen from "../images/twofloorscreen.png";
import enzdScreen from "../images/enzdscreen.png";
import zdputScreen from "../images/zdputscreen.png";
import nevzScreen from "../images/nevzscreen.png";
import bmzScreen from "../images/bmzscreen.png";
import threesfivekScreen from "../images/3es5kscreen.png";
import contacsetScreen from "../images/setscreen.png";
import putmetroScreen from "../images/metroputscreen.png";
import luganskScreen from "../images/luganskscreen.png";

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
    solutiontitle: "В систему включены",
    mission:
      "Система предназначена для обработки обращений граждан и организаций по состоянию ППК, паспортизации пассажирских обустройств, планирования и мониторинга осмотров и ремонтов объектов ППК. Пользователями СТУППК являются работники центрального аппарата ОАО «РЖД», региональные и линейные подразделения пригородного пассажирского холдинга «РЖД», перевозчики пригородного сообщения.\n\n СТУППК обеспечивает единую автоматизацию ключевых процессов пригородного пассажирского комплекса, как в части работы с обращениями клиентов, так и в части мониторинга выполнения ППР и планирования ремонтов.",
    solution: "- учет и маршрутизация обращений граждан;\n \n- контроль исполнения обращений; \n \n- ведение отчетности по поступлению и обработке обращений; \n \n- контроль развития неисправностей пассажирских обустройств;  \n \n- ведение паспортов пассажирских обустройств пригородного пассажирского комплекса;  \n \n- учет осмотров и ремонтов пассажирских обустройств пригородного пассажирского комплекса.",
  },
  {
    id: "22068",
    title: "Интерактивный электронный каталог на вагоны электропоезда «Иволга»",
    poster: ivolgaPoster,
    imagewide: ivolgaWide,
    imagescreen: ivolgaScreen,
    year: 2020,
    client: "ОАО «РЖД»",
    mission:
      "Интерактивный каталог обеспечивает представление в интерактивном режиме справочной и иллюстрационной информации по деталям, сборочным единицам, комплексам и комплектам, входящих в состав электропоезда ЭГ2Тв - вагонов моделей 62-4497, 62-4498, 62-4499, 62-4499 и их исполнений.",
      solutiontitle: "Реализация функций",
      solution: "- представление структуры изделий в соответствии с конструкторской документацией;\n\n- визуализация сборочных единиц, деталей, покупных и стандартных изделий с использованием 3D моделей, в соответствии с предоставленной КД; \n\n- детализация покупных изделий, задействованные в технологическом процессе обслуживания и ремонта, а также узлы, подлежащие плановой или внеочередной замене; \n\n- печать всех элементов контента интерактивного каталога на бумажном носителе.",
  },
  {
    id: "22069",
    title: "Автоматизированная информационная система управления проектами по реконструкции, капитальному строительству и ремонту объектов железнодорожного транспорта ",
    poster: transenergoPoster,
    imagewide: transenergoWide,
    imagescreen: transenergoScreen,
    year: 2018,
    client: "ООО «Трансэнерго»",
    mission:
      "АИС КРС дает возможность получить оперативную отчетность по проектам капитального строительства, реализует функции учета и отчетности по строящимся объектам компании, позволяет учитывать использование капитальных вложений по видам затрат, формирует стоимость объектов, обладает необходимыми для заказчика по строительству функциональными возможностями.",
    solutiontitle: "Цели проекта",
    solution: "- оптимизация сбора и повышение качества первичной информации о подготовке планов капитального ремонта и о ходе реализации работ по выполнению планов капитального ремонта; \n\n- повышение достоверности данных по стоимости объектов, стоимости капитального ремонта за счет сбора подробной информации о стоимостных и физических показателях выполнения работ по капитальному ремонту объектов электроснабжения; \n\n- оперативный и достоверный учет данных управленческого учета по исполнению планов капитального ремонта ОАО «РЖД»;\n\n- повышения эффективности принятия управленческих решений при капитальном ремонте объектов электроснабжения за счет формирования актуальной и верифицированной отчетности.",
  },
  {
    id: "22072",
    title:
      "Интерактивное электронное техническое руководство «Дизель-генератор 18-9ДГ»",
    poster: posterThird,
    imagewide: wideThird,
    imagescreen: screenThird,
    year: 2017,
    client: "ОАО «Коломенский завод»",
    mission:
      "ИЭТР «Дизель-генератор 18-9ДГ» предназначен для интерактивного отображения конструкции сборочных единиц дизель-генераторов, представления принципов их устройства, правил эксплуатации, обслуживания и ремонта. Электронный ресурс включает в себя интерактивный электронный каталог и руководства по эксплуатации и ремонту дизель-генератора  в формате интерактивного документа. ",
      solutiontitle: "Функциональные возможности интерактивного контента",
      solution: "-статический 2D материал – масштабирование изображения, включение поясняющих пометок на изображении, использование поясняющих ссылки;\n\n- 3D модель детали – масштабирование изображения без потери качества, произвольное изменение ракурса представления, вращение в пространстве 3-х координат, изменение прозрачности детали;\n\n-3D модель сборочной единицы – представление видов «в сборе», «с разнесенными частями» и «разрез», произвольное изменение ракурса представления, вращение в пространстве 3-х координат, изменение прозрачности, как сборки в целом, так и отдельных деталей и сборок, включение цветовой раскраски;\n\n-интерактивная 3D анимация технологического процесса – вращение сцены в пространстве 3-х координат, как в режиме останова, так и в процессе воспроизведения, переход к произвольному шагу анимации, переход к началу анимации, масштабирование изображения, произвольное изменение ракурса представления;\n\n-интерактивное 3D представление норм и допусков содержания – табличное представление контролируемых величин с 3D сопровождением на модели, табличное представление вариантов контроля с 3D анимацией процессов контроля на модели.",
  },
  {
    id: "22070",
    title:
      "Система информационного обеспечения предприятия Санкт-Петербургского государственного унитарного предприятия городского электрического транспорта",
    poster: gupgetPoster,
    imagewide: gupgetWide,
    imagescreen: gupgetScreen,
    year: 2017,
    client: "СПб ГУП «Горэлектротранс»",
    mission:
      "СИОП ГУП ГЭТ – корпоративная система автоматизации бизнес-процессов, связанных с информационным обеспечением процессов эксплуатации, технического обслуживания и ремонта подвижного состава и производственной инфраструктуры.",
      solutiontitle: "Этапы проекта",
      solution: "- Был проведен аудит массива нормативно-справочной информации (НСИ) , проведены работы по упорядочиванию данных с целью исключения дублирования и недостоверных данных, достижения внутренней непротиворечивости, внедрена система ведения НСИ.\n \n- Был проведен аудит конструкторской и нормативно-технологической документации на подвижной состав и объекты инфраструктуры, разработаны интерактивные электронные каталоги и интерактивные электронные технические руководства (ИЭТР), а также переведены в формат ИЭТР нормативно-технологических документов, который должен быть оцифрован. \n \n- Разработана Корпоративная система обучения и контроля знаний, охватывающая как планирование, проведение и контроль нормативных и внеплановых инструктажей, так и обучение и повышение квалификации групп работников в Учебном центре, включая составление учебных планов, разработку и ведение массива современных мультимедийных учебных материалов, ведение журналов обучения, экзаменационную работу. \n \n- Разработана система ведения паспортов технологического оборудования, включающая функционал планирования, фиксации результатов, контроля сроков прохождения обслуживания и ремонта технологического оборудования, ведения истории жизненного цикла оборудования. ",
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
      solutiontitle: "В систему включены",
      solution: "- маркировка аппаратуры СЦБ, находящейся на балансе службы, наклейками с уникальными штрих-кодами;\n \n- учет аппаратуры, находящейся в эксплуатации, ремонте, на проверке, мест ее закрепления, а также содержания в ней драгоценных металлов;\n \n- планирование замены аппаратуры на местах эксплуатации, автоматизированное формирование единого плана ремонта, оформление документов, связанных со всеми этапами жизненного цикла аппаратуры.",
  },
  {
    id: "22073",
    title:
      "Интерактивное электронное техническое руководство пассажирских вагонов для Египетских национальных железных дорог",
    poster: enzdPoster,
    imagewide: enzdWide,
    imagescreen: enzdScreen,
    year: 2021,
    client: "ОАО «ТВЗ»",
    mission:
      "Информационное обеспечение ИЭТР, выполненное на двух языках: русском и английском, представляет собой набор модулей, обеспечивающий представление всего объема информации по правилам эксплуатации, обслуживания и ремонта узлов пассажирских вагонов ЕНЖД, иерархического каталога 3D моделей, интерактивного 3D представления технологических процессов, текстового и табличного нормативно-справочного материала, сопровождаемого иллюстративными 3D моделями, нормативных и руководящих документов. ",
      solutiontitle: "Основные цели проекта",
      solution: "- разработка ИЭТР в соответствии с требованиями к эксплуатационной и ремонтной документации в электронной форме, изложенными в стандартах ЕСКД; \n\n - обеспечение эффективного использования информации ИЭТР в различном виде (интерактивный электронный документ, интерактивный портал технической документации, печатный документ); \n\n- обеспечение КД и сведений о составе, конструкции, правил эксплуатации и технологии ремонта; \n\n- обеспечение структурированной документации, снабженной интерактивным иерархическим каталогом деталей и сборочных единиц тележки, иллюстративным материалом и функционалом поиска; \n\n- предоставление корректной информации для заказа запасных частей при выполнении ремонта оборудования; \n\n- обеспечивать информационную поддержку эксплуатации, обслуживания и ремонта оборудования вагонов пассажирских ЕНЖД; \n\n - наглядное представление материала руководств по эксплуатации и руководств по ремонту для снижения риска неверных действий персонала; \n\n- проведения обучения и повышения квалификации персонала.",
  },
  {
    id: "22074",
    title:
      "Интерактивный электронный каталог для пассажирских двухэтажных вагонов проекта «Вагон 2020»",
    poster: twofloorPoster,
    imagewide: twofloorWide,
    imagescreen: twofloorScreen,
    year: 2020,
    client: "ОАО «ТВЗ»",
    mission:
      "Интерактивный каталог обеспечивает представление в интерактивном режиме справочной и иллюстрационной информации по деталям, сборочным единицам, комплексам и комплектам, входящим в состав двухэтажных пассажирских вагонов моделей 61-4523, 61-4524 и 61-4525.",
      solutiontitle: "Этапы проекта",
      solution: "- получение и систематизация исходной конструкторской и технологической документации;\n\n- получение исходной информации по покупным изделиям: конструкторская документация, 3D модели, фотографии;\n\n- формирование иерархической структуры вагона в соответствии с полученными спецификациями;\n\n- разработка интерактивных 3D моделей деталей и сборочных единиц вагонов в соответствии с полученной конструкторской документацией;\n\n- разработка «видов в обстановке» для верхних сборок, специальных видов для покупных изделий, электрических схем и трубопроводов;\n\n- создание дополнительного визуального представления 3D моделей достаточного для интерактивного представления выбранных элементов сборочной единицы;\n\n- формирование видов для печатного представления состава сборочной единицы;\n\n- сборка инсталляционного пакета Интерактивного каталога, подключение и отладка составляющих модулей;\n\n- разработка и согласование пользовательской документации;\n\n-авторское сопровождение по результатам эксплуатации в течение гарантийного срока.",
  },
  {
    id: "22075",
    title:
      "Интерактивный электронный каталог тепловоза «ТЭМ18ДМ»",
    poster: tmdmPoster,
    imagewide: tmdmWide,
    imagescreen: tmdmScreen,
    year: 2020,
    client: "АО «УК «БМЗ»",
    mission:
      "Интерактивный электронный каталог и комплект учебно-технических плакатов предназначены для визуализации сборочных единиц, деталей, покупных и стандартных изделий, входящих в состав локомотива с использованием 3D моделей, в соответствии с предоставленной КД.",
      solutiontitle: "Цели проекта",
      solution: "-обеспечение корректной и актуальной конструкторской документацией широкого круга специалистов;\n\n- обеспечение специалистов по обслуживанию и ремонту локомотивов структурированной документацией, снабженной интерактивным иерархическим каталогом деталей и сборочных единиц, иллюстративным материалом и функционалом поиска;\n\n- предоставление инструмента определения номенклатуры деталей и сборочных единиц, необходимых для замены при техническом обслуживании и ремонте, при расчете потребности, составлении заявок и планировании снабжения запасными частями локомотива; \n\n- обеспечение информационной поддержки эксплуатации, обслуживания и ремонта оборудования локомотива; \n\n- информационное обеспечение изучения конструкции, технического обучения и повышения квалификации обслуживающего персонала; \n\n- обеспечение конструкторов и инженеров актуальными 3D моделями в CAD формате; \n\n- создание основы для разработки интерактивной электронной документации по обслуживанию и ремонту локомотива, операционных карт сборки и интерактивных электронных технических руководств (далее - ИЭТР).",
  },
  {
    id: "22076",
    title:
      "Интерактивный электронный технический ресурс «Железнодорожный путь»",
    poster: zdputPoster,
    imagewide: zdputWide,
    imagescreen: zdputScreen,
    year: 2020,
    client: "ОАО «РЖД»",
    mission:
      "Создание единого информационного ресурса, позволяющего реализовать быстрый доступ к требуемым элементам информации. Своевременное получение сведений о местонахождении конкретной аппаратуры, о всех ее ремонтах и установках для повышения качества ремонта и проверки аппаратуры, предотвращения случаев отказа в работе аппаратуры.",
    solution: "Система управления базами данных PostgreSQL PHP Js",
  },
  {
    id: "22077",
    title:
      "Интерактивный электронный каталог электровоза «2ЭС5С»",
    poster: nevzPoster,
    imagewide: nevzWide,
    imagescreen: nevzScreen,
    year: 2019,
    client: "ООО «ПК «НЭВЗ»",
    mission:
      "Создание единого информационного ресурса, позволяющего реализовать быстрый доступ к требуемым элементам информации. Своевременное получение сведений о местонахождении конкретной аппаратуры, о всех ее ремонтах и установках для повышения качества ремонта и проверки аппаратуры, предотвращения случаев отказа в работе аппаратуры.",
    solution: "Система управления базами данных PostgreSQL PHP Js",
  },
  {
    id: "22078",
    title:
      "Интерактивные электронные каталоги тепловозов «2ТЭ25КМ», «2ТЭ25А»",
    poster: bmzPoster,
    imagewide: bmzWide,
    imagescreen: bmzScreen,
    year: 2019,
    client: "АО «УК «БМЗ»",
    mission:
      "Создание единого информационного ресурса, позволяющего реализовать быстрый доступ к требуемым элементам информации. Своевременное получение сведений о местонахождении конкретной аппаратуры, о всех ее ремонтах и установках для повышения качества ремонта и проверки аппаратуры, предотвращения случаев отказа в работе аппаратуры.",
    solution: "Система управления базами данных PostgreSQL PHP Js",
  },
  {
    id: "22079",
    title:
      "Интерактивные руководства по обслуживанию и ремонту электровозов «2ЭС5К», «3ЭС5К»",
    poster: threesfivekPoster,
    imagewide: threesfivekWide,
    imagescreen: threesfivekScreen,
    year: 2015,
    client: "ПКБ ЦТ ОАО «РЖД»",
    mission:
      "Создание единого информационного ресурса, позволяющего реализовать быстрый доступ к требуемым элементам информации. Своевременное получение сведений о местонахождении конкретной аппаратуры, о всех ее ремонтах и установках для повышения качества ремонта и проверки аппаратуры, предотвращения случаев отказа в работе аппаратуры.",
    solution: "Система управления базами данных PostgreSQL PHP Js",
  },
  {
    id: "22080",
    title:
      "Интерактивный электронный ресурс «Элементы контактной сети»",
    poster: contactsetPoster,
    imagewide: contactsetkWide,
    imagescreen: contacsetScreen,
    year: 2014,
    client: "ПКБ ЭЖД ОАО «РЖД»",
    mission:
      "Создание единого информационного ресурса, позволяющего реализовать быстрый доступ к требуемым элементам информации. Своевременное получение сведений о местонахождении конкретной аппаратуры, о всех ее ремонтах и установках для повышения качества ремонта и проверки аппаратуры, предотвращения случаев отказа в работе аппаратуры.",
    solution: "Система управления базами данных PostgreSQL PHP Js",
  },
  {
    id: "22081",
    title:
      "Интерактивное электронное техническое руководство «Путь и путевое хозяйство метрополитена»",
    poster: putmetroPoster,
    imagewide: putmetroWide,
    imagescreen: putmetroScreen,
    year: 2016,
    client: "ГУП «Московский метрополитен»",
    mission:
      "Создание единого информационного ресурса, позволяющего реализовать быстрый доступ к требуемым элементам информации. Своевременное получение сведений о местонахождении конкретной аппаратуры, о всех ее ремонтах и установках для повышения качества ремонта и проверки аппаратуры, предотвращения случаев отказа в работе аппаратуры.",
    solution: "Система управления базами данных PostgreSQL PHP Js",
  },
  {
    id: "22082",
    title:
      "Интерактивные электронные каталоги тепловозов «2ТЭ116У», «2ТЭ116УМ», «2ТЭ116УД»",
    poster: luganskPoster,
    imagewide: luganskWide,
    imagescreen: luganskScreen,
    year: 2014,
    client: "ПАО «Лугансктепловоз»",
    mission:
      "Создание единого информационного ресурса, позволяющего реализовать быстрый доступ к требуемым элементам информации. Своевременное получение сведений о местонахождении конкретной аппаратуры, о всех ее ремонтах и установках для повышения качества ремонта и проверки аппаратуры, предотвращения случаев отказа в работе аппаратуры.",
    solution: "Система управления базами данных PostgreSQL PHP Js",
  },
];

export { intro, projects };
