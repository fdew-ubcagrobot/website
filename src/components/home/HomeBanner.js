import React from "react";
import { ConcentricOctagons, HomeFarm } from "../../assets";
import { MdChevronRight } from 'react-icons/md';

function HomeBanner() {
    return (
        <div className="h-[90vh] w-screen bg-[#F8F7F1] flex">
            <div className="h-full w-[40%] flex flex-col items-center justify-center">
                <h1 className="uppercase text-[48px] text-[#3A3A3A] font-bold">where <br /> innovation <br /> meets <br /> agriculture</h1>
                <button className="w-[316px] h-[50px] mt-[20px] bg-[#3A3A3A] rounded-md text-[#F8F7F1] font-RobotoMono font-bold">
                    <h3 className="flex items-center justify-center ">Learn More <MdChevronRight /></h3>
                </button>
            </div>
            <div style={{ backgroundImage: `url(${ConcentricOctagons})` }} className="h-full w-[60%] bg-center bg-no-repeat flex items-center justify-center" >
                <img className="" alt="a farm being manned by cute robots" src={HomeFarm} />
            </div>
        </div>
    );
}

export default HomeBanner;