import React from "react";
import Header from "../Header/Header";
import Timeline from "../Timeline/Timeline";
import AboutUs from "../AboutUs/AboutUs";
import Waves from '../Waves/Waves';
import "./Company.css";

import company from "../../images/company.png";
import eventFirst from "../../images/event1.jpg";
import eventSecond from "../../images/event2.png";

import qualification from "../../images/certificate.png";
import partnership from "../../images/network.png";
import expirience from "../../images/experience.png";
import innovationstech from "../../images/technology.png";
import efficiency from "../../images/statistics.png";

const events = [
  {
    date: 2018,
    role: "ИЭТР",
    company: "Электровоз 2ЭС5С",
    location: "ПК НЭВЗ",
    image: eventFirst,
    content:
      "Интерактивные электронные технические руководства - организационно-технические системы, предназначенные для автоматизированной подготовки и представления сопроводительной документации в электронном виде.",
  },
  {
    date: 2018,
    role: "ИЭТР",
    company: "БСУ-ТМ136",
    location: "ФПК",
    image: eventSecond,
    content:
      "Интерактивные электронные технические руководства - организационно-технические системы, предназначенные для автоматизированной подготовки и представления сопроводительной документации в электронном виде.",
  },
  {
    date: 2018,
    role: "ИЭТР",
    company: "Электровоз 2ЭС5С",
    location: "ПК НЭВЗ",
    image: eventFirst,
    content:
      "Интерактивные электронные технические руководства - организационно-технические системы, предназначенные для автоматизированной подготовки и представления сопроводительной документации в электронном виде.",
  },
  {
    date: 2018,
    role: "ИЭТР",
    company: "БСУ-ТМ136",
    location: "ФПК",
    image: eventSecond,
    content:
      "Интерактивные электронные технические руководства - организационно-технические системы, предназначенные для автоматизированной подготовки и представления сопроводительной документации в электронном виде.",
  },
  {
    date: 2018,
    role: "ИЭТР",
    company: "Электровоз 2ЭС5С",
    location: "ПК НЭВЗ",
    image: eventFirst,
    content:
      "Интерактивные электронные технические руководства - организационно-технические системы, предназначенные для автоматизированной подготовки и представления сопроводительной документации в электронном виде.",
  },
  {
    date: 2018,
    role: "ИЭТР",
    company: "БСУ-ТМ136",
    location: "ФПК",
    image: eventSecond,
    content:
      "Интерактивные электронные технические руководства - организационно-технические системы, предназначенные для автоматизированной подготовки и представления сопроводительной документации в электронном виде.",
  },
  {
    date: 2018,
    role: "ИЭТР",
    company: "Электровоз 2ЭС5С",
    location: "ПК НЭВЗ",
    image: eventFirst,
    content:
      "Интерактивные электронные технические руководства - организационно-технические системы, предназначенные для автоматизированной подготовки и представления сопроводительной документации в электронном виде.",
  },
  {
    date: 2018,
    role: "ИЭТР",
    company: "БСУ-ТМ136",
    location: "ФПК",
    image: eventSecond,
    content:
      "Интерактивные электронные технические руководства - организационно-технические системы, предназначенные для автоматизированной подготовки и представления сопроводительной документации в электронном виде.",
  },
];

const abouts = [
  {
    title: "Квалификация",
    ico: qualification,
    text: "Наши эксперты обладают специальным образованием, опытом работы на предприятиях рельсового транспорта, являются экспертами в управлении и реализации транспортных проектов.",
  },
  {
    title: "Опыт",
    ico: expirience,
    text: "Мы накопили большой опыт в постановке задачи, разработке информационных комплексов, внедрении задачи, обучении персонала, обеспечении передачи данных из программ сторонних производителей.",
  },
  {
    title: "Стратегическое партнерство",
    ico: partnership,
    text: "Ответственное отношение к каждому проекту и тщательная проработка постановки задачи являются основой для создания длительных партнерских отношений с заказчиками.",
  },
  {
    title: "Эффективность",
    ico: efficiency,
    text: "Библиотека реализованных решений позволяет обеспечить низкую стоимость услуг за счет низких издержек и высокой эффективности работы всего персонала.",
  },
  {
    title: "Инновационные технологии",
    ico: innovationstech,
    text: "Освоение новых технологических решений и постоянный мониторинг передовой мировой практики позволяет нам использовать максимально эффективный набор технологических инструментов для достижения поставленных целей.",
  },
];

function Company() {
  return (
    <div className="company">
      <Header />
      
        <div className="company__intro">
          <h2 className="company__title">30 лет</h2>
          <h3 className="company__subtitle top_span">
          Разрабатываем актуальные
            <br></br> IT решения для транспорта
          </h3>
          <img
            src={company}
            alt="img"
            className="company__image"
            draggable="false"
          />
        </div>
        <Waves pos={'up'} svg={"M0,96L60,80C120,64,240,32,360,37.3C480,43,600,85,720,106.7C840,128,960,128,1080,133.3C1200,139,1320,149,1380,154.7L1440,160L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"} />
      <AboutUs items={abouts} />
      <Waves pos={'down'} svg={'M0,96L60,80C120,64,240,32,360,37.3C480,43,600,85,720,112C840,139,960,149,1080,133.3C1200,117,1320,75,1380,53.3L1440,32L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z'} />
      
      <div>
        <Timeline events={events} />
      </div>
    </div>
  );
}

export default Company;
