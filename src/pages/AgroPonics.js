import React from "react";
import { TitleBanner, AgroPonicsS1, AgroPonicsS2, AgroPonicsS3, AgroPonicsS4, AgroPonicsS5, Agroponicsnest, WantToHelp } from "../components";
import { AgroPonicsTitleImg } from "../assets";
import { AgroPonicsHeader } from "../constant";

function AgroPonics() {
    return (
        <div className="bg-gradient-to-b from-[#F8F7F1] via-[#d0ec94] to-[#F8F7F1] w-screen">
            <TitleBanner fromColor="#12200B" toColor="#4C5934" imageSrc={AgroPonicsTitleImg}>{AgroPonicsHeader}</TitleBanner>
            <AgroPonicsS1></AgroPonicsS1>
            <AgroPonicsS2></AgroPonicsS2>
            <AgroPonicsS3></AgroPonicsS3>
            <AgroPonicsS4></AgroPonicsS4>
            <AgroPonicsS5></AgroPonicsS5>
            <Agroponicsnest></Agroponicsnest>
            <WantToHelp></WantToHelp>
        </div>
    );
};

export default AgroPonics;