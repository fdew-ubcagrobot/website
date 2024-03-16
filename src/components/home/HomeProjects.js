import React from "react";
import { HomeAutomation, HomeDataCollection, HomeModularChassis, HomeTargetedAction, HomeChemicalBalancing, HomeFullyAutonomous, HomeNutrientCycling, } from '../../assets';
import { MdChevronRight } from 'react-icons/md';
import { SectionHeader } from '../common';

function Img(props) {
    return (
        <div className='w-full h-full flex justify-center items-center flex-col'>
            <img alt='slideshow' src={props.imgSrc} className='h-[90%] rounded-[14px]'></img>
            <h3 className='p-2 text-center font-bold text-[18px]'>{props.children}</h3>
        </div>
    );
}

function Project(props) {

    const { children, projectNum, text, img1, img2, img3, img4, imgText1, imgText2, imgText3, imgText4, panelStyle, link } = props;

    return (
        <div style={panelStyle} className='flex flex-col rounded-[16px] w-full sm:w-[49%] mt-4 sm:mt-0 p-4 sm:p-10'>
            <div className='flex w-full items-center'>
                <div className=''>
                    <h3 className='text-[#88BE22] font-bold text-[16px] sm:text-[20px]'>PROJECT_{projectNum}</h3>
                    <h2 className='text-[24px] sm:text-[36px]'>{children}</h2>
                </div>
                <p className='ml-4 text-[16px] text-right'>{text}</p>
            </div>
            <div className='py-10'>
                <div className='flex justify-between'>
                    <div className='w-[48%] rounded-[14px]'><Img imgSrc={img1}>{imgText1}</Img></div>
                    <div className='w-[48%] rounded-[14px]'><Img imgSrc={img2}>{imgText2}</Img></div>
                </div>
                <div className='flex justify-between py-4'>
                    <div className='w-[48%] rounded-[14px]'><Img imgSrc={img3}>{imgText3}</Img></div>
                    <div className='w-[48%] rounded-[14px]'><Img imgSrc={img4}>{imgText4}</Img></div>
                </div>
            </div>
            <div className='flex items-center justify-center mt-auto'>
                <a href={link} className='flex items-center justify-center text-black font-bold border-2 border-black rounded-[14px] p-4 px-[10%]'>More About {children} <MdChevronRight /></a>
            </div>
        </div>
    );
}

function HomeProjects() {

    const leftPanelStyle = {
        background: `linear-gradient(35deg, rgba(207,239,148,1) 0%, rgba(207,239,148,0.5) 35%, rgba(207,239,148,0.5) 65%, rgba(207,239,148,1) 100%)`
    }

    const rightPanelStyle = {
        background: `linear-gradient(75deg, rgba(207,239,148,1) 0%, rgba(207,239,148,0.5) 35%, rgba(207,239,148,0.5) 65%, rgba(207,239,148,1) 100%)`
    }

    return (
        <div className="w-full pb-[10vh] bg-white pt-[10vh]">
            <div className='w-[80vw] mx-auto text-black'>
                <SectionHeader>Projects</SectionHeader>
                <div className="flex w-full flex-col sm:flex-row sm:justify-between pt-8">
                    <Project projectNum="1" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor." img1={HomeTargetedAction} img2={HomeDataCollection} img3={HomeModularChassis} img4={HomeAutomation} imgText1="Targeted Action" imgText2="Data collection" imgText3="Modular chassis" imgText4="Automation" panelStyle={leftPanelStyle} link='/agrobot'>AgroBot</Project>
                    <Project projectNum="2" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor." img1={HomeFullyAutonomous} img2={HomeNutrientCycling} img3={HomeChemicalBalancing} img4={HomeChemicalBalancing} imgText1="Fully Autonomous" imgText2="Nutrient Cycling" imgText3="Chemical Balancing" imgText4="Chemical Balancing" panelStyle={rightPanelStyle} link='/agroponics'>AgroPonics</Project>
                </div>
            </div>
        </div>
    );
}

export default HomeProjects;