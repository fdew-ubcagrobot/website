import React from "react";

function TierBanner({ tierElements, starImg, tierColor }) {

    const { name, price, perks } = tierElements;

    return (
        <div className="bg-[#F8F7F1] font-Inter w-full h-[1000px] m-[1%] rounded-[14px] text-center">
            <img src={starImg} alt="sponsor star" className='p-5'></img>
            <h4 className="text-[30px] font-bold p-5">{name}</h4>
            <h5 className="p-2 font-RobotoMono font-bold text-[24px]" style={{ color: tierColor }}>{price}</h5>
            <ul className="p-5">
                {perks.map((perk, index) => (
                    <>
                        <li className='p-5' key={index}>{perk}</li>
                        <div className='w-full h-[1px] bg-[#979797]'></div>
                    </>
                ))}
            </ul>
        </div>
    );
}

export default TierBanner;