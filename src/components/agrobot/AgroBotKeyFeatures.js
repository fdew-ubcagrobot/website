import React from "react";
import { AgroBotTargetedAction, ArgoBotAutomation, AgroBotDataCollection, } from "../../assets";
import { SectionHeader } from "../common";

function KeyBox(props) {
    return (
        <div className='md:w-[32%] bg-[#d5eea7c2] rounded-[14px] my-2'>
            <div className="flex flex-col md:flex-row w-full p-8">
                <div className="md:w-[20%] md:mr-[5%] md:mb-0 mb-5 flex justify-center items-center">
                    <img src={props.imgSrc} alt='mission'></img>
                </div>
                <div className='flex flex-col items-center md:items-start md:w-[75%]'>
                    <h4 className="font-bold text-[#12200B] pb-2 text-xl">{props.children}</h4>
                    <p className="text-center md:text-left">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut.</p>
                </div>
            </div>
        </div>
    );
}

function AgroBotKeyFeatures() {
    return (
        <div className='w-[80%] mx-auto my-[20vh]'>
            <SectionHeader>Key Features</SectionHeader>
            <div className='flex flex-col md:flex-row justify-between py-6'>
                <KeyBox imgSrc={AgroBotTargetedAction}>Targeted Action</KeyBox>
                <KeyBox imgSrc={ArgoBotAutomation}>Automation</KeyBox>
                <KeyBox imgSrc={AgroBotDataCollection}>Data Collection</KeyBox>
            </div>
        </div>
    );
}

export default AgroBotKeyFeatures;