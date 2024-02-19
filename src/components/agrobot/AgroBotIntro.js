import React from "react";
import { AgroBotWihTeamOnGrass } from '../../assets';

function AgroBotIntro() {
    return (
        <div className='w-[80vw] mx-auto flex items-center'>
            <p className='w-[47.5%] text-[22px] mr-[5%] leading-10 font-Inter tracking-wide'>
                We are building a fully autonomous robot capable of analyzing its environment to perform targeted weeding, fertilizing, and data collection. Precision applications and automation will help reduce agrochemical use and manual labour.
                <br /> <br />
                The project is currently divided into four sub-teams: Chassis, Extermination, Navigation, and Image Recognition.
            </p>
            <div className='w-[47.5%]'>
                <img src={AgroBotWihTeamOnGrass} className='rounded-[14px]'></img>
            </div>
        </div>
    );
}

export default AgroBotIntro;