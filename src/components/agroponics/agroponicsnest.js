import React from "react";
import { AgroponicsRooftop } from '../../assets';

function Agroponicsnest() {
    return (
        <div className='w-[80vw] mx-auto flex flex-col items-center mb-8 font-Inter'>
            {/* Top section (implementation) */}
            <div className='w-full ml-4 mb-20'>
                {/* implementation goes here */}
                <p className='text-[50px] font-bold' style={{ fontWeight: '400' }}> implementation</p>
            </div>

            {/* Middle section (text and image) */}
            <div className='w-full h-[50vh] flex flex-col-reverse sm:flex-row items-center'>
                {/* Left side (text) */}
                <p className='flex-1 h-full text-[18px] font-Inter tracking-wide flex items-center justify-center sm:justify-start mobile-text' style={{
                    background: 'linear-gradient(114.8deg, #597A00 23.7%, #072600 76.36%)', borderRadius: '0px', color: 'white', padding: '50px'
                }}>
                    We hope to develop efficient and self-sufficient systems that can be implemented in a variety of locations including the UBC campus. Our first prototype is being built on the roof of the nest.
                </p>

                {/* Right side (image) */}
                <div className='flex-1 h-full' style={{ width: '90%' }}>
                    <img src={AgroponicsRooftop} className='w-full h-full check-img' alt="AgroBot with Team on Grass" style={{ width: '100%' }} />
                </div>
            </div>

            {/* Media query for mobile view */}
            <style>
                {`
                    @media (max-width: 750px) {
                        .flex-col-reverse {
                            flex-direction: column;
                           
                        }
                        .mobile-text {
                            width: 90%;
                        
                        }
                        .check-img {
                            height : 79%;
                        }
                        
                    }
                   
                `}
            </style>
        </div>
    );
};

export default Agroponicsnest;
