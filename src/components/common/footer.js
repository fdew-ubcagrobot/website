import React from 'react';
import { LOGO } from "../../assets";

function Footer() {
    return (
        <footer className="footer bg-[#f8f7f1] text-[#8cbc24] p-25 ml-5 mb-20 mt-20">
            <img src={LOGO} alt="UBC AgroBot Logo" className="float-left float-bottom mr-50" />
            <nav>
                <ul className="list-none p-0">
                    <li className='inline mr-[30px] ml-10'><a href="/"><b>Home</b></a></li>
                    <li className='inline mr-[30px]'>
                        <a href="/portfolio"><b>Portfolio</b></a>
                        <ul className='text-xs text-[#21130d] absolute mt-0 ml-[360px] bg-[#f8f7f1]'>
                            <li className='sub'><a href="/achievements">Achievements</a></li>
                            <li className='sub'><a href="/publications">Publications</a></li>
                            <li className='sub'><a href="/gallery">Gallery</a></li>
                        </ul>

                    </li>
                    <li className='inline mr-[30px]'>
                        <a href="/projects"><b>Projects</b></a>
                        <ul className='text-xs text-[#21130d] absolute mt-0 ml-[476px] bg-[#f8f7f1]'>
                            <li className='sub'><a href="/agrobot">AgroBot</a></li>
                            <li className='sub'><a href="/agroponics">AgroPonics</a></li>
                        </ul>
                    </li>
                    <li className='inline mr-[30px]'><a href="/sponsorship"><b>Sponsorship</b></a></li>
                    <li className='inline mr-[30px]'><a href="/recruitment"><b>Recruitment</b></a></li>
                    <li className='inline mr-[30px]'><a href="/contactus"><b>Contact Us</b></a></li>
                    <li className='inline mr-[30px]'><a href="/aboutus"><b>About Us</b></a></li>
                    <li className='inline mr-[30px]'><a href="/shop"><b>Shop</b></a></li>
                </ul>
            </nav>
        </footer>
    );
}

export default Footer;
