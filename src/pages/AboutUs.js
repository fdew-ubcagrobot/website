import React from "react";
import { TitleBanner, PortfolioS1, StatsBar, AgroBotIntro} from "../components";
import { AgroBotBannerImg, Agrobot, LOGO, RecruitmentImage, ieee } from "../assets"; 
import NotificationBanner from "../components/common/NotificationBanner";
import AboutUsS1 from "../components/aboutUs/aboutUs-s1";
import AboutUsS2 from "../components/aboutUs/aboutUs-s2";

function AboutUs() {
    return (
        <div className="bg-[#F8F7F1] w-screen">
            <TitleBanner toColor="#2e533e" fromColor="#3b4e3a" imageSrc={RecruitmentImage} imageClassName="absolute right-0 bottom-0 w-4/12">About US</TitleBanner>
           <AboutUsS1 />
           <AboutUsS2 />
        </div>
    );
};

export default AboutUs;