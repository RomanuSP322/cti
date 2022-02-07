import React from 'react';
import './Main.css';
import Header from '../Header/Header';
import Slider, {SliderItem} from '../Slider/Slider';

function Main() {
  return (
    <div className='main'>
      <div className='main_theme_darkblue'>
        <Header />
      </div>
      <div className='main__slider'>
      <Slider>
        <SliderItem>Item 1</SliderItem>
        <SliderItem>Item 2</SliderItem>
        <SliderItem>Item 3</SliderItem>
      </Slider>
      </div>
    </div>
  );
}

export default Main;
