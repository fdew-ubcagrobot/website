import React from "react";
import { TitleBanner, PortfolioS1, StatsBar} from "../components";
import { RecruitmentImage } from "../assets"; 
import NotificationBanner from "../components/common/NotificationBanner";

function AboutUs() {
    return (
        <div className="bg-[#F8F7F1] w-screen">
            <TitleBanner toColor="#2e533e" fromColor="#3b4e3a" imageSrc={RecruitmentImage} imageClassName="absolute right-0 bottom-0 w-4/12">About US</TitleBanner>
           <NotificationBanner></NotificationBanner>
        </div>
    );
};

export default AboutUs;