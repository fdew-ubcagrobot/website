import React from "react";
import { AgroBotInWild } from "../../assets";
import { MdChevronRight } from 'react-icons/md';


function AgroBotWantToHelp() {
    return (
        <div className='w-[80%] mx-auto my-[20vh] font-Inter'>
            <h2 className='text-4xl'>Interested in joining the team?</h2>
            <div className='w-full flex my-[5vh]'>
                <div className='w-[50%] flex flex-col justify-center items-center bg-[#d5eea7c2] rounded-[14px]'>
                    <p className='w-[60%] text-[24px]'>Members will work towards solving a real-world problem, go through the engineering design process, and develop technical skills in mechanical, electrical and software design. </p>
                    <button className='bg-[#88BE22] text-white px-4 py-2 rounded-[14px] flex items-center justify-center font-bold my-4'>Apply Here <MdChevronRight/></button>
                </div>
                <div className='w-[50%] flex justify-center items-center'>
                    <img src={AgroBotInWild} alt='modular-chassis' className='rounded-[14px]'></img>
                </div>
            </div>
        </div>
    );
}

export default AgroBotWantToHelp;