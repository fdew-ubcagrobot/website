import React from 'react';
import { LOGO } from "../../assets";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

function Footer() {
    return (
        <footer className="text-[#f8f7f1] w-full  p-10 bg-lime-500">
            <div className='flex'>
                <div className='w-0 md:w-[20%] bg-[#f8f7f1] flex justify-center items-center rounded-xl'>
                    <img src={LOGO} alt="footer logo" className="w-[70%]"></img>
                </div>
                
                <div className='w-full md:w-[80%] text-[18px]'>
                    <ul className='w-full font-bold capitalize  flex flex-col md:flex-row md:justify-evenly'>
                        <li className='p-[10px]'><a href="/">Home</a></li>
                        <li className='p-[10px]'>
                            <a href="/portfolio">Portfolio </a>
                            <ul className='text-[#f8f7f1] font-normal leading-6 text-left'>
                                <li><a href="/agrobot">AgroBot</a></li>
                                <li><a href="/agroponics">AgroPonics</a></li>
                            </ul>
                        </li>
                        <li className='p-[10px]'><a href="/sponsorship">Sponsorship</a></li>
                        <li className='p-[10px]'><a href="/recruitment">Recruitment</a></li>
                        <li className='p-[10px]'><a href="/contactus">Contact Us</a></li>
                        <li className='p-[10px]'><a href="/aboutus">About Us</a></li>
                    </ul>
                </div>
            </div>

            <div className='py-7'><hr></hr></div>

            <div className='flex'>
                <div className="text-[#f8f7f1]">Copright ©</div>
                <a
                    className="text-lime-500 underline pt:2 md:pt-0"
                    href="https://www.instagram.com/ubcagrobots"
                    target="_blank"
                >
                <FaInstagram size={40} />
                </a>{" "}

                <a
                    className="text-lime-500 underline pt:2 md:pt-0"
                    href="https://www.linkedin.com/company/ubc-agrobot"
                    target="_blank"
                >
                    <FaLinkedin size={40} />
                </a>
            </div>

        </footer>
    );
}

export default Footer;
