import React, {useEffect} from "react";
import Header from "../Header/Header";
import ScrollDown from '../ScrollDown/ScrollDown';
import ScrollToTopBtn from '../ScrollToTop/ScrollToTopBtn';
import "./Learning.css";

import vrdude from '../../images/vrdude.png';


function Learning() {
    useEffect(() => {
      window.scrollTo(0, 0)
    }, [])
    return (
      <div className='learning'>
        <Header />
        <section className='learning__intro'>
          <h2 className='learning__title'>
          Инновационные Системы Обучения
          </h2>
          <h3 className='learning__subtitle top_span'>
          Современные методы взаимодействия с учебным материалом
          </h3>
          <img src={vrdude} alt='img' className='learning__image' draggable='false' />
          < ScrollDown/>
        </section>     
        
        <ScrollToTopBtn />
      </div>
    );
  }
  
  export default Learning;
  