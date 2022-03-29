import React from 'react';
import Waves from '../Waves/Waves';
import logo from '../../images/logoWhite.svg';
import './Footer.css';

function Footer() {
  return (
    <>
              <Waves
       pos={'up'}
       svg={
         'M0,64L48,58.7C96,53,192,43,288,69.3C384,96,480,160,576,176C672,192,768,160,864,133.3C960,107,1056,85,1152,69.3C1248,53,1344,43,1392,37.3L1440,32L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z'
       }
      />
    <footer className='footer'>
 
      <div className='footer__content'>
        <div className='footer__logo-wrapper'>
          <img className='logo footer__logo' src={logo} alt='Логотип' />
          <h3 className='footer__tagline'>Актуальные IT решения с 1992 года</h3>
        </div>
        <div className='footer__contact'>
          <h3 className='footer__contact_title'>Контакты</h3>
          <p className='footer__contact_item'>(+7) 495-984-80-69</p>
          <p className='footer__contact_item'>info@m-cti.ru</p>
          <button className='footer__contact_button'>Связаться с нами</button>
        </div>
      </div>
      <p className='footer__copyright'>© 2022 ООО ЦТИ</p>
    </footer>
    </>
  );
 
}

export default Footer;
