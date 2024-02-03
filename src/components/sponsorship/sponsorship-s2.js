import React from "react";
import TeamPhoto from "./TeamPhoto.jpg";
import ShadowTeamPhoto from "./ShadowTeamPhoto.jpg";

function SponsorshipS2() {
    return (
        <div className="min-h-screen w-screen p-[10%] font-RobotoMono">
            <h1 className=" text-[40px] pb-10">Interested in <br />Sponsoring us?</h1>
            <div className="flex justify-center">
                <div className="w-[50%] relative inline-block">
                    <img src={ShadowTeamPhoto} alt="Shadow Team" className="absolute top-[20px] left-[-20px] z-0 rounded-[14px]" style={{ width: '100%', height: 'auto' }} />
                    <img src={TeamPhoto} alt="Team" className="absolute top-0 left-0 z-10 rounded-[14px]" style={{ width: '100%', height: 'auto' }} />
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