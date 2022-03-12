import React from "react";
import "./AboutUs.css";

const About = ({ ico, title, text }) => (
  <div className="about-us__item">
    <img className='about-us__item_ico' alt='' src={ico} /> 
    <div className="about-us__item-text">
    <h3 className="about-us__item_title">{title}</h3>
    <p className="about-us__item_content">{text}</p>
    </div>
  </div>
);

const AboutUs = ({ items }) => {
  return (
    <section className="about-us">
      <div className="about-us__title-wrapper">
        <h2 className="about-us__title">Ресурсы для разработки проектов</h2>
        <h3 className="about-us__subtitle">
        Три десятилетия мы разрабатываем комплексное программное обеспечение для предприятий транспорта. За годы успешной проектно-внедренческой деятельности мы накопили богатый опыт по техническому аудиту, системной интеграции, разработке персональных IT-решений.
        </h3>
      </div>
      <div className="about-us__list">
        {!items || items.length === 0
          ? null
          : items.map((item, idx) => {
              return <About key={idx} {...item} />;
            })}
      </div>
    </section>
  );
};

export default AboutUs;
