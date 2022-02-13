import React from 'react';
import './Whowe.css';
import partner1 from '../../images/partner1.png';
import partner2 from '../../images/partner2.png';
import partner3 from '../../images/partner3.png';
import partner4 from '../../images/partner4.png';
import partner5 from '../../images/partner5.png';

function Whowe() {
  return (
    <div className='whowe'>
    <div className='whowe__title-wrapper'>
      <h2 className='whowe__title'>Кто <span className='whowe__span'>мы</span></h2>
      <p className='whowe__message'>
        Четверть века мы разрабатываем комплексное программное обеспечение для
        предприятий транспорта. За годы успешной проектно-внедренческой
        деятельности мы накопили богатый опыт по техническому аудиту, системной
        интеграции, разработке персональных IT-решений.<br></br>
        Четверть века мы разрабатываем комплексное программное обеспечение для
        предприятий транспорта. За годы успешной проектно-внедренческой
        деятельности мы накопили богатый опыт по техническому аудиту, системной
        интеграции, разработке персональных IT-решений.
      </p>
    </div>
    <div className='whowe__parters'>
      <h2 className='whowe__partners_title'>Нам доверяют</h2>
      <div className='partners'>
      <img className='partners__img ' src={partner1} alt="" draggable="false"/>
      <img className='partners__img partner__tmh' src={partner2} alt="" draggable="false"/>
      <img className='partners__img partner__tvz' src={partner3} alt="" draggable="false"/>
      <img className='partners__img partner__ovk' src={partner4} alt="" draggable="false"/>
      <img className='partners__img' src={partner5} alt="" draggable="false"/>
      </div>
    </div>
   </div>
  );
}

export default Whowe;
