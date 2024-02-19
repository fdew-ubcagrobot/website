import React from "react";
import { HomeAutomation, HomeDataCollection, HomeModularChassis, HomeTargetedAction, HomeChemicalBalancing, HomeFullyAutonomous, HomeNutrientCycling, } from '../../assets';

function Img(props) {
    return (
        <div className='w-full h-full flex justify-center items-center flex-col'>
            <h3 className='p-2 text-center font-bold text-[18px] font-Inter'>{props.children}</h3>
            <img src={props.imgSrc} className='h-[90%] rounded-[14px]'></img>
        </div>
    );
}

function HomeProjects() {

    const bannerStyle = {
        background: `linear-gradient(to top, #cfef9400, #CFEF94)`
    };

    return (
        <div style={bannerStyle} className="w-screen pb-[10vh]">
            <div className='w-[80vw] mx-auto text-[#3A3A3A]'>
                <h1 className='font-Inter text-[48px] py-8'>Projects</h1>
                <div className="flex w-full">
                    <div className='w-[49%] bg-[#F8F7F1] rounded-[16px] p-8 py-12 mr-[2%]'>
                        <div className='flex w-full'>
                            <h2 className='mx-[5%] text-[32px] font-bold'>AgroBot</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.</p>
                        </div>
                        <div className='flex flex-wrap w-full mt-8'>
                            <div className='w-[45%] mx-[2.5%] my-[2.5%] rounded-[14px]'><Img imgSrc={HomeTargetedAction}>Targeted Action</Img></div>
                            <div className='w-[45%] mx-[2.5%] my-[2.5%] rounded-[14px]'><Img imgSrc={HomeDataCollection}>Data collection</Img></div>
                            <div className='w-[45%] mx-[2.5%] my-[2.5%] rounded-[14px]'><Img imgSrc={HomeModularChassis}>Modular chassis</Img></div>
                            <div className='w-[45%] mx-[2.5%] my-[2.5%] rounded-[14px]'><Img imgSrc={HomeAutomation}>Automation</Img></div>
                        </div>
                    </div>
                    <div className='w-[49%] bg-[#F8F7F1] rounded-[16px] p-8 py-12'>
                        <div className='flex w-full'>
                            <h2 className='mx-[5%] text-[32px] font-bold'>AgroPonics</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.</p>
                        </div>
                        <div className='flex flex-wrap w-full mt-8'>
                            <div className='w-[45%] mx-[2.5%] my-[2.5%] rounded-[14px]'><Img imgSrc={HomeFullyAutonomous}>Fully Autonomous</Img></div>
                            <div className='w-[45%] mx-[2.5%] my-[2.5%] rounded-[14px]'><Img imgSrc={HomeNutrientCycling}>Nutrient Cycling</Img></div>
                            <div className=' w-[97.5%] mx-[2.5%] my-[2.5%] rounded-[14px]'><Img imgSrc={HomeChemicalBalancing}>Chemical Balancing</Img></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HomeProjects;