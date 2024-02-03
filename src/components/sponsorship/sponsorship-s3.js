import React from "react";
import TierBanner from "./tierBanner";
import Greenhouse from "./greenhouse.jpg"

function SponsorshipS3() {
    return (
        <div style={{ backgroundImage: `url(${Greenhouse})` }} className="w-screen bg-cover bg-center">
            <div className="p-[7.5%] font-RobotoMono flex justify-between items-center bg-[#00000080]">
                <TierBanner></TierBanner>
                <TierBanner></TierBanner>
                <TierBanner></TierBanner>
                <TierBanner></TierBanner>
            </div>
        </div>
    );
}

export default SponsorshipS3;