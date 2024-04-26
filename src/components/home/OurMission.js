import React, { useState } from "react";
import { HomeOurMissionRecycle, HomeOurMissionStrawberry, HomeOurMissionStocks, StudentsWorking, AgroBotWihTeamOnGrass, TeamPhoto } from '../../assets';
import { SectionHeader, } from '../../components';
import { MdChevronRight, MdChevronLeft } from 'react-icons/md';
import * as t from "../../constant/home";

function MissionBox(props) {
    const text = props.text;

    const angle = useState(() => Math.random() * 360 - 180)[0];

    const gradient = {
        background: `linear-gradient(${angle}deg, rgba(207,239,148,0.4) 0%, rgba(207,239,148,0.7) 100%)`
    }

    return (
        <div style={gradient} className='bg-[#cfef94] rounded-[14px] my-8'>
            <div className='flex justify-center items-center mt-[-1rem]'>
                <h4 className="text-black font-bold p-2 px-4 bg-[#F8F7F1] rounded-[8px] text-center inline-block]">{props.children}</h4>
            </div>
            <div className="flex w-full p-8 pt-4">
                <div className=" min-w-[60px] max-w-[30%] mr-[5%] flex justify-center items-center">
                    <img src={props.imgSrc} alt='mission' className='w-full'></img>
                </div>
                <p className="flex-grow">{text}</p>
            </div>
        </div>
    );
}

function OurMission() {

    const images = [AgroBotWihTeamOnGrass, TeamPhoto, StudentsWorking];

    const [currentImgIndex, setCurrentImgIndex] = useState(0);

    function prevImg() {
        setCurrentImgIndex(currentImgIndex => {
            if (currentImgIndex === 0)
                return images.length - 1;
            return currentImgIndex - 1;
        });
    }

    const nextImg = () => {
        setCurrentImgIndex(index => {
            if (index === images.length - 1)
                return 0;
            return index + 1;
        });
    };

    return (
        <div className="w-full pb-[10vh] flex justify-center items-center">
            <div className='w-[80vw] mx-auto mt-16'>
                <SectionHeader className='mt-16'>{t.OM_title}</SectionHeader>
                <p className='mt-2 mb-8'>{t.OM_subtitle}</p>
                <div id="ourMission" className="flex flex-col md:flex-row w-full">
                    <div className="w-full md:w-[40%] flex flex-col">
                        <MissionBox imgSrc={HomeOurMissionRecycle}    text={t.OM_box1_text}>{t.OM_box1_title}</MissionBox>
                        <MissionBox imgSrc={HomeOurMissionStrawberry} text={t.OM_box2_text}>{t.OM_box2_title}</MissionBox>
                        <MissionBox imgSrc={HomeOurMissionStocks}     text={t.OM_box3_text}>{t.OM_box3_title}</MissionBox>
                    </div>
                    <div className="w-full md:w-[60%] flex flex-col justify-center items-center p-[2%]">
                        <img alt='our mission' src={images[currentImgIndex]} className="object-cover h-full rounded-[14px]" />
                        <div className='flex'>
                            <MdChevronLeft onClick={prevImg} size={48} />
                            <div className='flex justify-center items-center'>
                                {images.map((img, index) => (
                                    <div key={index} className={`${index === currentImgIndex ? 'bg-black' : 'bg-[#F8F7F1]'} w-6 h-2 m-1 rounded-sm`} />
                                ))}
                            </div>
                            <MdChevronRight onClick={nextImg} size={48} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default OurMission;