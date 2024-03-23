import React from "react";
import { HomeChemicalBalancing } from "../../assets";
import { SectionHeader } from "../common";

function AgroPonicsS3() {
    return (
        <div className='ml-[10%] mb-[10%] w-full h-full'>
            <SectionHeader>Chemical Balancing System</SectionHeader>
            <div className="w-full mt-[2%] flex items-center">
                <section className="flex mt-[0%] relative w-[40%] h-[55vh] justify-center items-center shadow-2xl  text-white rounded-[30px] bg-gradient-to-br from-[#90bc24] from-23% to-[#072600] to-76.36% z-0">
                    <div className="absolute shadow-lg flex-1 items-center justify-center w-auto max-w-[80%] max-h-[90vh]">
                        <img src={HomeChemicalBalancing} alt="HomeChemicalBalancing" className="flex-1 inset-0 rounded-[20px] bg-[#d8d4dc]" />
                    </div>
                </section>
                
                <section className="flex text-[18px] flex-col w-[34%] justify-center h-[44vh] max-h-[90vh] inset-0 rounded-[15px] bg-white/25 ml-[-2.5%] border-[1px] border-black z-10 backdrop-blur-lg shadow-2xl">
                    <p className="px-[10%] pt-[9%]">
                    Arduino-run sensors in the reservoir detect nutrient levels. A PID algorithm on a Raspberry Pi calculates amount of nutrients, pH buffer, and fresh water are that required. 
                    </p>
                    <p className="px-[10%] pt-[5%] pb-[9%]">
                    Signals are then sent to Arduino-run valves and pumps to deposit the appropriate amount of chemical into the reservoir.
                    </p>
                    
                </section>
            </div>
        </div>
    );
};

export default AgroPonicsS3;