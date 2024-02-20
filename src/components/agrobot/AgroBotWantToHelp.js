import React from "react";
import { AgroBotInWild } from "../../assets";

function AgroBotWantToHelp() {
    return (
        <div className='w-[80%] mx-auto my-[20vh] font-Inter'>
            <h2 className='text-4xl'>Interested in joining the team?</h2>
            <div className={`w-full rounded-[14px] flex my-[5vh]`}>
                <div className='w-[50%]'>
                    <p>Members will work towards solving a real-world problem, go through the engineering design process, and develop technical skills in mechanical, electrical and software design. </p>
                </div>
                <div className='w-[50%] flex justify-center align-middle'>
                    <img src={AgroBotInWild} alt='modular-chassis' className='rounded-[14px]'></img>
                </div>
            </div>
        </div>
    );
}

export default AgroBotWantToHelp;