import React from "react";
import { AgroponicsRooftop } from '../../assets';
import { SectionHeader } from "../common";

function Agroponicsnest() {
    return (
        <div className='w-[80%] mx-auto flex flex-col my-[10%]'>
            {/* implementation goes here */}
            <SectionHeader>Implementation</SectionHeader>

            {/* Middle section (text and image) */}
            <div className='w-full h-[24vw] flex flex-col-reverse sm:flex-row items-center my-8'>
                {/* Left side (text) */}
                <p className='flex-1 h-full text-[20px] tracking-wide flex items-center justify-center sm:justify-start text-lg rounded-l-[30px]' style={{
                    background: 'linear-gradient(114.8deg, #597A00 23.7%, #072600 76.36%)', color: 'white', padding: '50px'
                }}>
                    We hope to develop efficient and self-sufficient systems that can be implemented in a variety of locations including the UBC campus. Our first prototype is being built on the roof of the nest.
                </p>

                {/* Right side (image) */}
                <div className='flex-1 h-full' style={{ width: '90%' }}>
                    <img src={AgroponicsRooftop} className='w-full h-full check-img' alt="AgroBot with Team on Grass" style={{ width: '100%' }} />
                </div>
            </div>
        </div>
    );
};

export default Agroponicsnest;
