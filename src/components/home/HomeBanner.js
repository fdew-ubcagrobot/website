import React from "react";
import { ConcentricOctagons, HomeFarm } from "../../assets";
import { FaChevronDown } from 'react-icons/fa';
import '../../index.css';
import TypingEffect from "./TypingEffect";
import * as c from "../../constant/home.js";

function HomeBanner() {

    const randomIndex = Math.floor(Math.random() * c.titleText[1].length);
    return (
        <div className="h-[90vh] w-full bg-[#F8F7F1] flex flex-col-reverse md:flex-row justify-center items-center relative z-[0]">
            <div style={{ backgroundImage: `url(${ConcentricOctagons})` }} className='absolute w-full h-full bg-center bg-no-repeat z-[1] opacity-[0.5]'></div>
            <div className="md:w-[50%] flex flex-col items-center justify-center z-[2]">
                <h1 className="h-[220px] md:h-[300px] text-[38px] md:text-[48px] text-[#3A3A3A] font-bold roboto-custom text-center uppercase">
                    {c.titleText[0]} <br />
                    <TypingEffect messages={c.titleText[1]} start_index={randomIndex} /><br />
                    {c.titleText[2]} <br />
                    <TypingEffect messages={c.titleText[3]} start_index={randomIndex} />
                </h1>
                <button
                    className="w-[316px] h-[50px] mt-[20px] bg-[#3A3A3A] rounded-md text-[#F8F7F1] font-bold"
                    onClick={() => window.scrollTo({
                        top: window.innerHeight * 0.9, // Need to multiply by 0.9 so that nav does not cover next section
                        behavior: 'smooth'
                    })}>
                    <h3 className="flex items-center justify-center ">{c.titleButton} <FaChevronDown size='14px' className='mx-1 mt-1' /></h3>
                </button>
            </div>
            <div className='h-[40%] md:h-auto md:w-[50%] z-[2]'>
                <img className="h-full md:h-auto md:w-[547px]" alt="a farm being manned by cute robots" src={HomeFarm} />
            </div>
        </div>
    );
}

export default HomeBanner;