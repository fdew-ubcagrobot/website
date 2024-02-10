import React from "react";
import { TitleBanner, PortfolioS1, StatsBar} from "../components";
import { RecruitmentImage } from "../assets"; 
import NotificationBanner from "../components/common/NotificationBanner";

function Recruitment() {
    return (
        <div className="bg-[#F8F7F1] w-screen">
            <TitleBanner toColor="#5d3c3a" fromColor="#9da28d" imageSrc={RecruitmentImage} imageClassName="absolute right-0 bottom-0 w-4/12">Recruitment</TitleBanner>
           <NotificationBanner></NotificationBanner>
        </div>
    );
};

export default Recruitment;