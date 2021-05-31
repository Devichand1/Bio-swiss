import React from 'react'
import Layout from '../component/Layout'
import icon1 from './../img/icon1.png'
import icon2 from './../img/icon2.png'
import icon3 from './../img/icon3.png'
import icon4 from './../img/icon4.png'
import icon5 from './../img/icon5.png'
import icon6 from './../img/icon6.png'
import icon7 from './../img/icon7.png'
import icon8 from './../img/icon8.png'
import icon9 from './../img/icon9.png'
import icon10 from './../img/icon10.png'
import hww from './../img/swiss1.jpg'
import './home.css'
import { Button } from 'antd'
import '@splidejs/splide/dist/css/themes/splide-default.min.css';
import Slider from '../component/slider/Index'
import Machine from '../component/machine/Machine'
import Feactures from './../component/feactures/Features'
import Gallery from './../component/gallery/Gallery'
const Home = () => {
    return (
       <Layout>
     
       <Slider/>
       <div  className="key-advantage" >
           <h2>Key Advantages</h2>
           <ul>
             <li>
               <img src={icon1} alt="icon"/>
               <p>Extremely Safe To Use</p>
             </li>
             <li>
               <img src={icon2} alt="icon"/>
               <p>Extremely Safe To Use</p>
             </li>
             <li>
               <img src={icon3} alt="icon"/>
               <p>Extremely Safe To Use</p>
             </li>
             <li>
               <img src={icon4} alt="icon"/>
               <p>Extremely Safe To Use</p>
             </li>
             <li>
               <img src={icon5} alt="icon"/>
               <p>Extremely Safe To Use</p>
             </li> </ul>
              <ul>
             <li>
               <img src={icon6} alt="icon"/>
               <p>Extremely Safe To Use</p>
             </li>
            
            
             <li>
               <img src={icon7} alt="icon"/>
               <p>Extremely Safe To Use</p>
             </li>
             <li>
               <img src={icon8} alt="icon"/>
               <p>Extremely Safe To Use</p>
             </li>
             <li>
               <img src={icon9} alt="icon"/>
               <p>Extremely Safe To Use</p>
             </li>
             <li>
               <img src={icon10} alt="icon"/>
               <p>Extremely Safe To Use</p>
             </li>
           </ul>
       </div>
      <div className="how-we-work">
      <div className="how-we-work-img" >
        <img src={hww} alt="how-we-work"/>
        <h5>HydroClean Solution is 100% free of any harmful chemicals</h5>
        </div>
        <div  className="how-we-work-body">
           <h3>Who we are ?</h3>
           <p>Swiss NeWater India is a joint venture between the SymbioSwiss of Switzerland and Forbes Marshall Group of India. Founded with the primary mission to provide safe and environment friendly cleaning and disinfecting solutions, the Swiss NeWater India company aims to create more awareness towards safe cleaning and disinfecting practices for a more sustainable future. HydroCleaner technology is a key step towards achieving the goal of safer, more economical and eco-friendly cleaning practices. The Swiss NeWater India offers a revolutionary concept to locally create a vast range of highly effective, completely safe and affordable cleaning and disinfecting solutions of various potencies.</p>
           <Button style
           ={{backgroundColor:"rgb(25, 160, 25)", color:"white", width:"fit-content"}}>Read More</Button>
        </div>
      </div>
      <Machine/>
      <Feactures/>
      <Gallery/>
       </Layout>
    )
}

export default Home
