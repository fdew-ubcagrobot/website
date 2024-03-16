import React from "react";
import { AgroponicsS2 } from "../../assets";
import { SectionHeader } from "../common";
import { FaChevronRight } from 'react-icons/fa';

function AgroPonicsS2() {
    return (
        <div className='w-[80%] m-auto my-[10%]'>
            <SectionHeader>System Components</SectionHeader>
            <div className="flex py-8 w-full h-[30vw]">
                <div className="w-full shadow-2xl flex text-black rounded-[30px] bg-gradient-to-b from-white to-[#e8ecf4]">
                    <ul className="w-[50%] h-full flex flex-col justify-center p-[60px]">
                        <li className="mb-[6%] flex items-center"><FaChevronRight color={'#88BE22'} size={'20px'} />Media Bed with Bell Siphon</li>
                        <li className="mb-[6%] flex items-center"><FaChevronRight color={'#88BE22'} size={'20px'} />Nutrient Solution Reservoir</li>
                        <li className="mb-[6%] flex items-center"><FaChevronRight color={'#88BE22'} size={'20px'} />Chemical Balancing System</li>
                        <li className="mb-[6%] flex items-center"><FaChevronRight color={'#88BE22'} size={'20px'} />Monitoring System</li>
                        <li className="mb-[6%] flex items-center"><FaChevronRight color={'#88BE22'} size={'20px'} />Selected Crop: Lettuce & Chard</li>
                    </ul>
                <div className="relative w-[50%] flex-1">
                <img src={AgroponicsS2} alt="Hydroponics System" className="absolute inset-0 h-full w-full object-cover rounded-r-[30px] bg-[#d8d4dc]" style={{maxWidth: '100%'}} />
                </div>
                </div>
            </div>
        </div>
    );
};

export default AgroPonicsS2;