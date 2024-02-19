import React from "react";
import { TitleBanner, AgroBotIntro, AgroBotKeyFeatures, AgroBotSubteams, AgroBotWantToHelp, } from "../components";
import { AgroBotTitleImg } from "../assets";
import { AgroBotHeader } from "../constant";


function AgroBot() {
    return (
        <div className="bg-[#F8F7F1] w-full">
            <TitleBanner fromColor="#12200B" toColor="#4C5934" imageSrc={AgroBotTitleImg}>{AgroBotHeader}</TitleBanner>
            <AgroBotIntro></AgroBotIntro>
            {/* <AgroBotKeyFeatures></AgroBotKeyFeatures> */}
            {/* <AgroBotSubteams></AgroBotSubteams> */}
            {/* <AgroBotWantToHelp></AgroBotWantToHelp> */}
        </div>
    );
}

export default AgroBot;