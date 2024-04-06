import React from "react";
import { AgroponicsRooftop } from '../../assets';
import { SectionHeader } from "../common";

function Agroponicsnest() {
    return (
        <div className='w-[80%] mx-auto my-[10%]'>
            <SectionHeader>Implementation</SectionHeader>
            <div className="w-full flex flex-col lg:flex-row-reverse rounded-[30px] my-8 bg-gradient-to-br from-[#597a00] to-76% to-[#1E293B] from-23%">
                <img className="w-full lg:w-[40%] rounded-[20px] object-cover" src={AgroponicsRooftop} alt="HomeChemicalBalancing" />

                <div className="w-full my-auto p-8 text-white leading-6 text-[20px] tracking-wide">
                    <p className="m-[1rem]">
                        We hope to develop efficient and self-sufficient systems that can be implemented in a variety of locations including the UBC campus. Our first prototype is being built on the roof of the nest.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Agroponicsnest;