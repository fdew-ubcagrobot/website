import React from "react";
import TierBanner from "./tierBanner";
import { GreenHouse, BronzeStar, SilverStar, GoldStar, DiamondStar } from '../../assets';
import { SponsorLevels } from "../../constant";

function SponsorshipS3() {
    return (
        <div style={{ backgroundImage: `url(${GreenHouse})` }} className="w-screen bg-cover bg-center">
            <div className="p-[7.5%] font-RobotoMono flex justify-between items-center bg-[#00000080]">
                <TierBanner tierElements={SponsorLevels.find(level => level.name === 'Bronze')}  starImg={BronzeStar}  tierColor="#CD7F32" />
                <TierBanner tierElements={SponsorLevels.find(level => level.name === 'Silver')}  starImg={SilverStar}  tierColor="#707070" />
                <TierBanner tierElements={SponsorLevels.find(level => level.name === 'Gold')}    starImg={GoldStar}    tierColor="#FFD700" />
                <TierBanner tierElements={SponsorLevels.find(level => level.name === 'Diamond')} starImg={DiamondStar} tierColor="#0080FF" />
            </div>
        </div>
    );
}

export default SponsorshipS3;