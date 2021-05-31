import React, { useState } from 'react'
import './header.css'
import logo from './../../img/logo.png'
import { Drawer, Button } from 'antd';
import {MenuOutlined  } from '@ant-design/icons' 
 const Header = () => {
  const [opendrawer, setopendrawer] = useState(false)
    return (
     <div className="header" >
     <div className="header-top" > info@swiss-newater.com &nbsp; | &nbsp; +41 22 800 22 00</div>
      <div className="header-menubar" >
        <div className="brand-logo" ><img src={logo}  alt="logo"  /> </div>
       <ul className="header-menu" >
         <li>Home</li>
         <li>About Us</li>
         <li>Features</li>
         <li>Technology</li>
         <li>Swiss Newater India</li>
         <li>FAQs</li>
         <li>Contact</li>
       </ul>
  
     <div className="drawer" >
     <MenuOutlined onClick={()=>setopendrawer(!opendrawer)} />
   <Drawer
        title=" Swiss Newater"
        placement="right"
        closable={false}
       onClose={()=>setopendrawer(false)}
       visible={opendrawer} 
      >
        <p>Home</p>
         <p>About Us</p>
         <p>Features</p>
         <p>Technology</p>
         <p>Swiss Newater India</p>
         <p>FAQs</p>
         <p>Contact</p>
      </Drawer>
    </div>  </div>
     </div>
    )
}

export default Header
