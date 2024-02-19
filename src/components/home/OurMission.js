import React from "react";
import { HomeOurMissionRecycle, HomeOurMissionStrawberry, HomeOurMissionStocks, AgroBotInWild } from '../../assets';

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

    return (
        <div style={bannerStyle} className="w-full pb-[10vh]">
            <div className='w-[80vw] mx-auto font-Inter'>
                <h1 className="text-[48px]">Our Mission</h1>
                <p className='my-2 mb-8'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.</p>
                <div id="ourMission" className="flex w-full">
                    <div className="w-[40%] flex flex-col max-sm:w-full">
                        <MissionBox imgSrc={HomeOurMissionRecycle}>Mitigate Climate Impacts</MissionBox>
                        <MissionBox imgSrc={HomeOurMissionStrawberry}>Enhance Food Security</MissionBox>
                        <MissionBox imgSrc={HomeOurMissionStocks}>Ensure Economic Viability</MissionBox>
                    </div>
                    <div className="w-[60%] flex justify-center items-center p-16 max-sm:hidden">
                        <img src={AgroBotInWild} className="object-cover h-full" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default OurMission;