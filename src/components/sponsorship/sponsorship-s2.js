import React from "react";
import TeamPhoto from "./TeamPhoto.jpg";

function SponsorshipS2() {
    return (
        <div className="h-screen w-screen p-[10%] font-RobotoMono">
            <h1 className=" text-[40px] pb-10">Interested in <br />Sponsoring us?</h1>
            <div className="flex align-middle">
                <div className="w-[50%] relative flex justify-center items-center">
                    <img src={TeamPhoto} alt="TeamPhoto" className="relative z-10 rounded-[14px]" />
                    <div className="absolute top-[20px] left-[-20px] w-full h-full bg-[#56B259] z-0 rounded-[14px]" ></div>
                </div>
                <div className="w-[50%] p-5 flex flex-col justify-center">
                    <p className="pb-10">Sponsors receive a wide array of benefits from sponsoring UBC AgroBot. Through sponsoring us we can offer networking opportunities, promotion on social media, and promotion at international competitions.</p>
                    <div className="flex justify-center">
                        <button className="p-4 w-auto rounded-[14px] bg-[#56B259] text-white font-bold">
                            Sponsorship Package
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SponsorshipS2;