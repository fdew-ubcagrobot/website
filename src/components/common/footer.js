import React, { useState, useEffect, useRef } from 'react';
import { AGROBOT_ICON } from "../../assets";
import { FaFacebook, FaEnvelope, FaInstagram, FaLinkedin } from "react-icons/fa";

function ContactUs() {
    const [message, setMessage] = useState('')
    const textareaRef = useRef(null)

    useEffect(() => {
        if (textareaRef.current) {
            textareaRef.current.style.height = 'auto';
            textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
        }
    }, [message]);

    const handleChange = (event) => {
        setMessage(event.target.value);
    };

    return (
        <div className="text-[#78BE20]">
            <h3 className="text-[32px] font-bold">Contact Us:</h3>
            <div className="flex justify-between items-center">
                <input
                    className="w-[48%] px-2 bg-inherit placeholder-[rgba(119,190,32,0.75)] border border-[rgba(255,255,255,0.2)] rounded-md"
                    placeholder='name'
                />
                <input
                    className="w-[48%] px-2 bg-inherit placeholder-[rgba(119,190,32,0.75)] border border-[rgba(255,255,255,0.2)] rounded-md"
                    placeholder='email'
                />
            </div>
            <textarea
                ref={textareaRef}
                value={message}
                onChange={handleChange}
                className="w-full p-2 bg-inherit placeholder-[rgba(119,190,32,0.75)] border border-[rgba(255,255,255,0.2)] rounded-md mt-2"
                rows="1"
                placeholder='...'
            />
        </div>
    )
}

function Footer() {
    return (
        <footer className="w-full p-6 bg-[#2E1B0F] flex justify-between items-center">
            <div className="w-[16%] p-4 rounded-md flex flex-col justify-center items-center bg-[rgba(255,255,255,0.05)] overflow-scroll">
                <img className="w-[50%]" src={AGROBOT_ICON} />
                <h1 className="text-[24px] text-[#78BE20] text-center font-bold mt-2">UBC AGROBOT</h1>
            </div>
            <div className="w-[16%] p-6 bg-[rgba(255,255,255,0.05)] rounded-md">
                <ul className="text-[#78BE20] text-center font-bold text-[24px]">
                    <li>Home</li>
                    <li>Portfolio</li>
                    <li>Recruitment</li>
                    <li>About</li>
                </ul>
            </div>
            <div className="w-[16%] p-6 bg-[rgba(255,255,255,0.05)] rounded-md">
                <iframe
                    title="White House Map"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1149.9558354168341!2d-123.25144702322258!3d49.26238615475109!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5486737deeb9b49d%3A0xa620208d63e84eaa!2sUBC%20Engineering!5e0!3m2!1sen!2sca!4v1718085591493!5m2!1sen!2sca"
                    allowFullScreen=""
                    loading="lazy"
                    className="w-full h-full"
                />
                <div className="flex w-full mt-2">
                    <FaFacebook className="w-full h-full p-1 text-[#88BE22]" size={64} />
                    <FaInstagram className="w-full h-full p-1 text-[#88BE22]" size={64} />
                    <FaLinkedin className="w-full h-full p-1 text-[#88BE22]" size={64} />
                    <FaEnvelope className="w-full h-full p-1 text-[#88BE22]" size={64} />
                </div>
            </div>
            <div className="w-[46%] p-6 bg-[rgba(255,255,255,0.05)] rounded-md">
                <ContactUs />
            </div>
        </footer>
    );
}

export default Footer;
