import React, {useEffect} from "react";
import Header from "../Header/Header";
import ScrollDown from '../ScrollDown/ScrollDown';
import ScrollToTopBtn from '../ScrollToTop/ScrollToTopBtn';
import "./Learning.css";

import vrdude from '../../images/vrdude.png';
import vrheadset from '../../images/vrHeadsetOverlay.png';
import vrvideoMp from '../../video/vrvideo.mp4';
import vrvideoWebm from '../../video/vrvideo.webm';


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
        <section className="learning__vr">
          
          <h2 className="learning__vr-title">VR тренажеры</h2>
          <div className="learning__vr-content">
            <p className="learning__vr-article">Интерактивные электронные технические руководства - организационно-технические системы, предназначенные для автоматизированной подготовки и представления сопроводительной документации в электронном виде.</p>
        <div className="vr">
          <img src={vrheadset} className='vr__headset-img'/>    
        <video autoPlay muted loop  width="853" height="480">
               <source src={vrvideoMp} type="video/mp4"/>  
               <source src={vrvideoWebm} type="video/webm"/>.

         </video>
         </div> 
         </div>
         </section>
        <ScrollToTopBtn />
      </div>
    );
  }
  
  export default Learning;
  