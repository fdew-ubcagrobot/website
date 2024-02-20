import React from "react";
import { HomeModularChassis } from "../../assets";

function Subteam(props) {
    const background = {
        background: props.bgColor
    };
    return (
        <div style={background} className={`w-full rounded-[14px] p-10 flex text-white font-bold my-[5vh]`}>
            <div className='w-[50%]'>
                <h2 className='text-4xl mb-[2%]'>{props.children}</h2>
                <div className='flex flex-wrap text-[#8BC34A]'>
                    {props.hlights.map((highlight, index) => (
                        <li key={index} className='min-w-[45%] mr-[5%]'>{highlight}</li>
                    ))}
                </div>
            </div>
            <div className='w-[50%] flex justify-center align-middle'>
                <img src={HomeModularChassis} alt='modular-chassis' className='rounded-[14px]'></img>
            </div>
        </div>
    );
}

function AgroBotSubteams() {
    const chassHlights = ['80/20 aluminium frame', 'Electrical Powertrain', 'Four wheel drive & swerve steering', 'Battery management system'];
    const extHlights = ['Mechanical weedwhacker', 'Omnidirectional sprayer', 'Target prioritization software'];
    const navHlights = ['Crop row detection', 'End-of-row turning', 'Robot localization/orientation', 'Gazebo simulator'];
    const appAIHlights = ["Crops and weeds detection", "Crop health analysis", "Biomass Estimation", "Artificial Intelligence"];
    
    return (
        <div className='w-[80%] mx-auto my-[20vh] font-Inter'>
            <h2 className='text-4xl text-[#12200B]'>Subteams</h2>
            <Subteam bgColor='#351C1F' hlights={chassHlights}>Chassis</Subteam>
            <Subteam bgColor='#1E1612' hlights={extHlights}>Extermination</Subteam>
            <Subteam bgColor='#271f30' hlights={navHlights}>Navigation</Subteam>
            <Subteam bgColor='#351C1F' hlights={appAIHlights}>Applied AI</Subteam>
        </div>
    );
}

export default AgroBotSubteams;