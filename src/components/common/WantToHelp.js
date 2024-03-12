import React from "react";
import { TeamDiscussion } from "../../assets";
import { MdChevronRight } from 'react-icons/md';


function WantToHelp() {
    return (
        <div className='w-[80%] mx-auto my-[20vh]'>
            <h2 className='text-4xl'>Interested in joining the team?</h2>
            <div className='w-full flex my-[5vh]'>
                <div className='w-[49%] mr-[2%] flex flex-col justify-center items-center bg-[#d5eea7c2] rounded-[14px] py-6'>
                    <p className='w-[60%] text-[24px]'>Members will work towards solving a real-world problem, go through the engineering design process, and develop technical skills in mechanical, electrical and software design. </p>
                    <button className='bg-[#88BE22] text-white px-4 py-2 rounded-[14px] flex items-center justify-center font-bold my-4' onClick={() => window.location.href = '/recruitment'}>Apply Here <MdChevronRight/></button>
                </div>
                <div className='w-[49%] flex justify-center items-center'>
                    <img src={TeamDiscussion} alt='modular-chassis' className='rounded-[14px] w-full'></img>
                </div>
            </div>
        </div>
    );
}

export default WantToHelp;