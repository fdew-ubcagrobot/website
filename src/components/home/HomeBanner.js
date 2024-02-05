import React from "react";
import { ConcentricOctagons, HomeFarm } from "../../assets";

function HomeBanner() {
    return (
        <div className="relative h-[90vh] w-screen bg-[#F8F7F1] p-5">
            <h1 className="uppercase text-[48px] text-[#4C5934] font-bold">where <br /> innovation <br /> meets <br /> agriculture</h1>
            <div className="relative h-full">
                <img className="absolute left-1/2 transform -translate-x-1/2 object-contain" alt="concentric octagons" src={ConcentricOctagons} />
                <img className="absolute left-1/2 transform -translate-x-1/2 object-contain" alt="a farm being manned by cute robots" src={HomeFarm} />
            </div>
        </div>
    );
}

export default HomeBanner;