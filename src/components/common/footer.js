import React from 'react';
import { LOGO } from "../../assets";

// For parent: w-[100vw] h-[10vh]
// For children: 

function Footer() {
    return (
        <footer className="bg-[#f8f7f1] text-[#88BE22] w-full min-h-[50vh] flex pt-[35vh] px-8">
            <div className='w-[220px] text-center'>
                <img src={LOGO} alt="footer logo" className="inline-block w-[70%]"></img>
            </div>
            <div className='w-[80%] text-[18px]'>
                <ul className='w-full pt-1 font-bold capitalize flex justify-evenly flex-wrap'>
                    <li className='px-[10px]'><a href="/">Home</a></li>
                    <li className='px-[10px]'>
                        <a href="/portfolio">Portfolio</a>
                        <ul className='text-[#2a2a2a] font-normal leading-6'>
                            <li><a href="/achievements">Achievements</a></li>
                            <li><a href="/publications">Publications</a></li>
                            <li><a href="/gallery">Gallery</a></li>
                        </ul>
                    </li>
                    <li className='px-[10px]'>
                        <a href="/projects">Projects</a>
                        <ul className='text-[#2a2a2a] font-normal leading-6'>
                            <li><a href="/agrobot">AgroBot</a></li>
                            <li><a href="/agroponics">AgroPonics</a></li>
                        </ul>
                    </li>
                    <li className='px-[10px]'><a href="/sponsorship">Sponsorship</a></li>
                    <li className='px-[10px]'><a href="/recruitment">Recruitment</a></li>
                    <li className='px-[10px]'><a href="/contactus">Contact Us</a></li>
                    <li className='px-[10px]'><a href="/aboutus">About Us</a></li>
                    <li className='px-[10px]'><a href="/shop">Shop</a></li>
                </ul>
            </div>
        </footer>
    );
}

export default Footer;
