import React from "react";
import { HomeChemicalBalancing } from "../../assets";
import { SectionHeader } from "../common";

function AgroPonicsS3() {
    return (
        <div className='ml-[10%] mb-[10%] w-full h-full'>
            <SectionHeader>Chemical Balancing System</SectionHeader>
            <div className="mt-[3%] relative w-[40%] h-[65vh] justify-center items-center shadow-2xl flex text-white rounded-[30px] bg-gradient-to-br from-[#90bc24] from-23% to-[#072600] to-76.36%">
                <div className="absolute flex items-center justify-center w-auto max-w-[80%] max-h-[90vh]">
                    <img src={HomeChemicalBalancing} alt="HomeChemicalBalancing" className="inset-0 rounded-[30px] bg-[#d8d4dc]" />
                </div>
            
            </div>
            
            <div className="flex w-[34%] max-w-[80%] max-h-[90vh]">
                    <img src={HomeChemicalBalancing} alt="AgroPonics" className="inset-0 rounded-[30px] bg-[#d8d4dc]"/>
            </div>
        </div>
    );
};

export default AgroPonicsS3;