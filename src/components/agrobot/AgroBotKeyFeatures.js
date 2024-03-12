import React from "react";
import { AgroBotTargetedAction, ArgoBotAutomation, AgroBotDataCollection, } from "../../assets";
import { SectionHeader } from "../common";

function KeyBox(props) {
    return (
        <div className='w-[32%] bg-[#d5eea7c2] rounded-[14px]'>
            <div className="flex w-full p-8">
                <div className="w-[20%] mr-[5%] flex justify-center items-center">
                    <img src={props.imgSrc} alt='mission'></img>
                </div>
                <div className='w-[75%]'>
                    <h4 className="font-bold text-[#12200B] pb-2 text-xl">{props.children}</h4>
                    <p className="">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.</p>
                </div>
            </div>
        </div>
    );
}

function AgroBotKeyFeatures() {
    return (
        <div className='w-[80%] mx-auto my-[20vh]'>
            <SectionHeader>Key Features</SectionHeader>
            <div className='flex justify-between py-6'>
                <KeyBox imgSrc={AgroBotTargetedAction}>Targeted Action</KeyBox>
                <KeyBox imgSrc={ArgoBotAutomation}>Automation</KeyBox>
                <KeyBox imgSrc={AgroBotDataCollection}>Data Collection</KeyBox>
            </div>
        </div>
    );
}

export default AgroBotKeyFeatures;