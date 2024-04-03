import React from "react";
import { TeamDiscussion } from "../../assets";
import { MdChevronRight } from 'react-icons/md';
import { SectionHeader } from "../../components";


function WantToHelp() {
    
    const gradient = { background: `linear-gradient(35deg, rgba(207,239,148,1) 0%, rgba(207,239,148,0.75) 35%, rgba(207,239,148,0.75) 65%, rgba(207,239,148,1) 100%)` }

    return (
        <div className='w-[80%] mx-auto my-[20vh]'>
            <SectionHeader>Want to help?</SectionHeader>
            <div className='w-full flex justify-between my-4'>
                <div style={gradient} className='w-full lg:w-[49%] rounded-[14px] flex flex-col justify-center items-center p-8'>
                    <p className='text-lg text-justify mb-4'>Members will work towards solving a real-world problem, go through the engineering design process, and develop technical skills in mechanical, electrical and software design. </p>
                    <button className='bg-[#202020] text-white px-4 py-2 rounded-md flex items-center justify-center font-bold' onClick={() => window.location.href = '/recruitment'}>Apply Here <MdChevronRight/></button>
                </div>
                <div className='hidden lg:flex w-[49%]'>
                    <img src={TeamDiscussion} alt='modular-chassis' className='rounded-[14px] w-full'></img>
                </div>
            </div>
        </div>
    );
}

export default WantToHelp;