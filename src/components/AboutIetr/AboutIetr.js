import React from "react";
import "./AboutIetr.css";

import chamomile from "../../images/romashka.png";

function AboutIetr() {
  return (
    <section className="about-ietr">
      <h2 className='about-ietr__title'>Быстрый доступ к структурированным интерактивным данным в веб-браузере
</h2>
      <h3 className='about-ietr__subtitle'>Единый информационный ресурс
</h3>
      <div className='about-ietr__content'>
        <img className='about-ietr__image' alt='romashka' src={chamomile}/>
        <div className='about-ietr__article-wrapper'>
          <p className='about-ietr__article about-ietr__article_top'>Каждый создаваемый ИЭТР состоит из контента (информационной базы данных), который содержит всю информацию о представленном изделии, и программного обеспечения (электронной системы отображения информации) для визуализации данных и обеспечения интерактивного взаимодействия с пользователем.
</p>
          <p className='about-ietr__article'>Контент интерактивных руководств, разрабатываемый на основе конструкторской, технической и нормативной документации, включает в себя 3D интерактивный иерархический каталог деталей и узлов оборудования, снабженный подробной текстовой и графической информацией о стандартах исполнения, материалах, нормах допусков, технологическом процессе обслуживания, оснастке и инструменте.
</p>
        </div>
      </div>
    </section>
  );
};

export default AboutIetr;