import React from "react";

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
                            <div className='bg-slate-200 h-52 w-[45%] mx-[2.5%] my-[2.5%]'>Targeted action</div>
                            <div className='bg-slate-400 h-52 w-[45%] mx-[2.5%] my-[2.5%]'>Data collection</div>
                            <div className='bg-slate-600 h-52 w-[45%] mx-[2.5%] my-[2.5%]'>Modular chassis</div>
                            <div className='bg-slate-800 h-52 w-[45%] mx-[2.5%] my-[2.5%]'>Automation</div>
                        </div>
                    </div>
                    <div className='w-[49%] bg-[#F8F7F1] rounded-[16px] p-8 py-12'>
                        <div className='flex w-full'>
                            <h2 className='mx-[5%] text-[32px] font-bold'>AgroPonics</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.</p>
                        </div>
                        <div className='flex flex-wrap w-full mt-8'>
                            <div className='bg-slate-200 h-52 w-[45%] mx-[2.5%] my-[2.5%]'>Fully Autonomous</div>
                            <div className='bg-slate-400 h-52 w-[45%] mx-[2.5%] my-[2.5%]'>Nutrient Cycling</div>
                            <div className='bg-slate-800 h-52 w-[97.5%] mx-[2.5%] my-[2.5%]'>Chemical balancing</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HomeProjects;