import React from 'react';
import './Advantages.css';

const Advantage = ({ ico, title, text }) => (
  <div className='advantages__item'>
    <img className='advantages__item_ico' alt='' src={ico} />
    <h3 className='advantages__item_title'>{title}</h3>
    <p className='advantages__item_content'>{text}</p>
  </div>
);

const Advantages = ({ items }) => {
  return (
    <section className='advantages'>
       <h2 className='advantages__title'>Отраслевые решения на основе интеллектуальных технологий и лучших практик</h2>
       <div className='advantages-list'>
      {!items || items.length === 0
        ? null
        : items.map((item, idx) => {
            return <Advantage key={idx} {...item} />;
          })}

</div>     
    </section>
  );
};

export default Advantages;
