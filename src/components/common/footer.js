import React from 'react';
import './Footer.css'; 
import {LOGO} from "../../assets";

function Footer() {
  return (
    <footer className="footer">
      <img src={LOGO} alt="UBC AgroBot Logo" className="logo"/>
      <nav>
        <ul>
          <li><a href="/"><b>Home</b></a></li>
          <li>
            <a href="/portfolio"><b>Portfolio</b></a>
            <ul>
              <li className='sub'><a href="/achievements">Achievements</a></li>
              <li className='sub'><a href="/publications">Publications</a></li>
              <li className='sub'><a href="/gallery">Gallery</a></li>
            </ul>
          </li>
          <li>
            <a href="/projects"><b>Projects</b></a>
            <ul>
              <li className='sub'><a href="/agrobot">AgroBot</a></li>
              <li className='sub'><a href="/agroponics">AgroPonics</a></li>
            </ul>
          </li>
          <li><a href="/sponsorship"><b>Sponsorship</b></a></li>
          <li><a href="/recruitment"><b>Recruitment</b></a></li>
          <li><a href="/contactus"><b>Contact Us</b></a></li>
          <li><a href="/aboutus"><b>About Us</b></a></li>
          <li><a href="/shop"><b>Shop</b></a></li>
        </ul>
      </nav>
    </footer>
  );
}

export default Footer;
