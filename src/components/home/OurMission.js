import React, { useState } from "react";
import { HomeOurMissionRecycle, HomeOurMissionStrawberry, HomeOurMissionStocks, StudentsWorking, AgroBotWihTeamOnGrass, TeamPhoto, Agrobot } from '../../assets';
import { MdChevronRight, MdChevronLeft } from 'react-icons/md';

function MissionBox(props) {
    return (
        <div className='rounded-[14px] border-[#979797] border my-8'>
            <div className='flex justify-center items-center mt-[-1.25rem]'>
                <h4 className="text-white font-bold p-2 bg-[#88BE22] rounded-[8px] text-center inline-block">{props.children}</h4>
            </div>
            <div className="flex w-full p-8 pt-4">
                <div className="w-[30%] mr-[5%] flex justify-center items-center">
                    <img src={props.imgSrc} alt='mission'></img>
                </div>
                <p className="w-[65%]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.</p>
            </div>
        </div>
    );
}

function OurMission() {
    const bannerStyle = {
        background: `linear-gradient(to top, #CFEF94, #cfef9400)`
    };

    const images = [AgroBotWihTeamOnGrass, TeamPhoto, Agrobot, StudentsWorking];

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
        <div style={bannerStyle} className="w-full pb-[10vh] flex justify-center items-center">
            <div className='w-[80vw] mx-auto font-Inter'>
                <h1 className="text-[48px]">Our Mission</h1>
                <p className='my-2 mb-8'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.</p>
                <div id="ourMission" className="flex w-full">
                    <div className="w-[40%] flex flex-col max-sm:w-full">
                        <MissionBox imgSrc={HomeOurMissionRecycle}>Mitigate Climate Impacts</MissionBox>
                        <MissionBox imgSrc={HomeOurMissionStrawberry}>Enhance Food Security</MissionBox>
                        <MissionBox imgSrc={HomeOurMissionStocks}>Ensure Economic Viability</MissionBox>
                    </div>
                    <div className="w-[60%] flex flex-col justify-center items-center p-16 max-sm:hidden">
                        <img src={images[currentImgIndex]} className="object-cover h-full rounded-[14px]" />
                        <div className='flex'>
                            <MdChevronLeft onClick={prevImg} size={48} />
                            <MdChevronRight onClick={nextImg} size={48} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default OurMission;