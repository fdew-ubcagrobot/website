import React from "react";
import { AgroponicsS2 } from "../../assets";
function AgroPonicsS2() {
    return (
    <div>
       <div>
        <h1 className="mb-[1%] ml-[10%] font-sans text-[50px]">
            System Components
        </h1>
       </div>
        <div className="flex">
            <div className="shadow-2xl w-1/2 h-[600px] flex shadow-2xl text-black ml-[10%] rounded-l-[30px] py-[60px] pl-[30px] bg-[#1e7898] bg-gradient-to-b from-white to-[#e8ecf4]">
                <ul className="flex flex-col justify-center font-sans text-[30px] ml-[80px]">
                    <li className="mb-[6%]">Media Bed with Bell Siphon</li>
                    <li className="mb-[6%]">Nutrient Solution Reservoir</li>
                    <li className="mb-[6%]">Chemical Balancing System</li>
                    <li className="mb-[6%]">Monitoring System</li>
                    <li>Selected Crop: Lettuce & Chard</li>
                </ul>
            </div>
            <div className="w-1/2">
                    {/* Here you can add the image of the hydroponics system */}
                    <img src={AgroponicsS2} alt="Hydroponics System" className="shadow-2xl ml-[0%] h-[600px] mr-[100px] shadow-2xl border-[3px] rounded-r-[30px] bg-[#d8d4dc]" />
            </div>
        </div>
    </div>
    );
};

export default AgroPonicsS2;