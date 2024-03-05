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
        background: `linear-gradient(to top, #cfef9480, #CFEF94)`
    };

    return (
        <div style={bannerStyle} className="w-full pb-[10vh]">
            <div className='w-[80vw] mx-auto text-[#3A3A3A]'>
                <h1 className='font-Inter text-[48px] py-8'>Projects</h1>
                <div className="flex w-full max-md:flex-col">
                    <div className='w-[49%] bg-[#f8f7f1cc] rounded-[16px] p-8 py-12 mr-[2%] max-md:w-full max-md:mr-0 max-md:mb-[2%]'>
                        <div className='flex w-full items-center max-md:flex-col'>
                            <div className='w-[50%]'>
                                <h3 className='text-[#88BE22]'>PROJECT_2</h3>
                                <h2 className='text-[32px] font-bold'>AgroPonics</h2>
                            </div>
                            <p className='w-[50%] text-[14px] font-Inter'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt</p>
                        </div>
                        <div className='flex flex-wrap w-full mt-8'>
                            <div className='w-[45%] p-[1%] m-[1.5%] rounded-[14px] bg-white'><Img imgSrc={HomeTargetedAction}>Targeted Action</Img></div>
                            <div className='w-[45%] p-[1%] m-[1.5%] rounded-[14px] bg-white'><Img imgSrc={HomeDataCollection}>Data collection</Img></div>
                            <div className='w-[45%] p-[1%] m-[1.5%] rounded-[14px] bg-white'><Img imgSrc={HomeModularChassis}>Modular chassis</Img></div>
                            <div className='w-[45%] p-[1%] m-[1.5%] rounded-[14px] bg-white'><Img imgSrc={HomeAutomation}>Automation</Img></div>
                        </div>
                    </div>
                    <div className='w-[49%] bg-[#f8f7f1cc] rounded-[16px] p-8 py-12 max-md:w-full'>
                        <div className='flex w-full items-center max-md:flex-col'>
                            <div className='w-[50%]'>
                                <h3 className='text-[#88BE22]'>PROJECT_2</h3>
                                <h2 className='text-[32px] font-bold'>AgroPonics</h2>
                            </div>
                            <p className='w-[50%] text-[14px] font-Inter'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt</p>
                        </div>
                        <div className='flex flex-wrap w-full mt-8'>
                            <div className='w-[45%] px-[1%] py-[1%] mx-[1.5%] my-[1.5%] rounded-[14px] bg-white'><Img imgSrc={HomeFullyAutonomous}>Fully Autonomous</Img></div>
                            <div className='w-[45%] px-[1%] py-[1%] mx-[1.5%] my-[1.5%] rounded-[14px] bg-white'><Img imgSrc={HomeNutrientCycling}>Nutrient Cycling</Img></div>
                            <div className='w-[97.5%] mx-[2.5%] my-[2.5%] rounded-[14px] bg-white'><Img imgSrc={HomeChemicalBalancing}>Chemical Balancing</Img></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HomeProjects;