import React from "react";
import { TitleBanner, SysComponents, ChemicalBalancing, Agroponicsnest, WantToHelp, ProjectInstance } from "../components";
import { AgroPonicsTitleImg } from "../assets";
import { AgroPonicsHeader } from "../constant";

function AgroPonics() {

    const AgroPonicsText = "Our newly launched project that aims to build a fully autonomous hydroponics system. We plan to create efficient and reliable systems that can be implemented throughout campus. A hydroponics system is an integrated system that grows crops, without soil. By cycling mineral nutrients dissolved in water, the system is able to produce food at any location, year-round, in a more sustainable way.";

    return (
        <div className="bg-gradient-to-b from-[#F8F7F1] via-[#d0ec94] to-[#F8F7F1] w-screen">
            <TitleBanner fromColor="#12200B" toColor="#4C5934" imageSrc={AgroPonicsTitleImg}>{AgroPonicsHeader}</TitleBanner>
            <ProjectInstance img={AgroPonicsTitleImg} text={AgroPonicsText} projectNum='2'>AgroPonics</ProjectInstance>
            <SysComponents/>
            <ChemicalBalancing />
            <Agroponicsnest />
            <WantToHelp></WantToHelp>
        </div>
    );
};

export default AgroPonics;