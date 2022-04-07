import React, {useEffect, useRef} from 'react';
import { intro } from  '../../consts/ksptrData';
import Header from '../Header/Header';
import Intro from '../Intro/Intro.js';
import Waves from '../Waves/Waves';
import Footer from '../Footer/Footer';
import './Ksptr.css';

function Ksptr() {
    useEffect(() => {
      window.scrollTo(0, 0)
    }, [])
   
    const next = useRef(null)
  
    return (
      <div className='ksptr'>
        <Header />
        <Intro intro={intro} nextRef={next}/>      
        <div className='ksptr__about' ref={next}>
    
        </div>
        {/* <Waves
          pos={'up'}
          svg={
            'M0,96L80,85.3C160,75,320,53,480,64C640,75,800,117,960,138.7C1120,160,1280,160,1360,160L1440,160L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z'
          }
        /> */}

   
        <Footer/>
      </div>
    );
  }
  
  export default Ksptr;