import React from 'react'
import { Splide, SplideSlide } from '@splidejs/react-splide';
import slide1 from './../../img/website_sliders_final_1.jpg'
import slide2 from './../../img/website_sliders_final_2.jpg'
import slide3 from './../../img/website_sliders_final_3.jpg'
import slide4 from './../../img/website_sliders_final_4.jpg'
import slide5 from './../../img/Swiss-images/website_sliders_final_5 (1).jpg'
import './slider.css'
const Slider = () => {
    return (
        <div className="silder"   >
           

   
           <Splide 
           
             options={ {
    direction : 'ltr',
    height:700,
    autoplay: true,
    gap    : '1rem',
    Infinity:true
  } }

           >
  <SplideSlide>
  <div className="slider-box" >
  <img src={slide5} alt="Image 1"/>
  <h3 className="textanimated" >Welcome to Swiss</h3>
  <h3 className="textanimated text2" >NeWater</h3>
  <p  className="textanimated">Healthist way to Clean</p>
  <p className="secondp textanimated" >Safest way to handle</p>
  </div>
  </SplideSlide>
  <SplideSlide>
  <div className="slider-box" >
  <img src={slide4} alt="Image 1"/>
  <h3>WELCOME TO bIOSWISS</h3></div>
  </SplideSlide>
  <SplideSlide>
  <div className="slider-box" >
  <img src={slide3} alt="Image 1"/>
  <h3>WELCOME TO bIOSWISS</h3></div>
  </SplideSlide>
  <SplideSlide>
  <div className="slider-box" >
  <img src={slide2} alt="Image 1"/>
  <h3>WELCOME TO bIOSWISS</h3></div>
  </SplideSlide>
  <SplideSlide>
  <div className="slider-box" >
  <img src={slide1} alt="Image 1"/>
  <h3>WELCOME TO bIOSWISS</h3></div>
  </SplideSlide>


</Splide>
        </div>
    )
}

export default Slider
