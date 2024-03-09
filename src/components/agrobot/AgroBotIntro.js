import React from "react";
import { AgroBotWihTeamOnGrass } from '../../assets';
import ProjectInstance from "../common/ProjectInstance";

function AgroBotIntro() {
    const AgroBotText = "We are building a fully autonomous robot capable of analyzing its environment to perform targeted weeding, fertilizing, and data collection. Precision applications and automation will help reduce agrochemical use and manual labour. The project is currently divided into four sub-teams: Chassis, Extermination, Navigation, and Image Recognition.";
    return (
        <ProjectInstance projectNum="01" img={AgroBotWihTeamOnGrass} text={AgroBotText}>AgroBot</ProjectInstance>
    );
}

export default AgroBotIntro;