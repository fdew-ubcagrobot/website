import React from "react";
import { TeamPhoto, ShadowTeamPhoto } from "../../assets/image";
import { PS1Title } from "../../constant";

function PortfolioS1() {
    
    // This will turn the "<br />" in to a real <br />
    const processedPS1Title = PS1Title.split('<br />').map((processedPS1Title, index) => (
        <React.Fragment key={index}>
            {processedPS1Title}
            {index < processedPS1Title.length - 1 && <br />}
        </React.Fragment>
    ));

    return (
        <div className="min-h-screen w-screen p-[10%] font-RobotoMono">
            <h1 className=" text-[40px] pb-10">{processedPS1Title}</h1>
            <div className="flex justify-center">
                {/* <div className="w-[50%] relative inline-block">
                    <img src={ShadowTeamPhoto} alt="Shadow Team" className="absolute top-[20px] left-[-20px] z-0 rounded-[14px]" style={{ width: '100%', height: 'auto' }} />
                    <img src={TeamPhoto} alt="Team" className="absolute top-0 left-0 z-10 rounded-[14px]" style={{ width: '100%', height: 'auto' }} />
                </div>
                <div className="w-[50%] p-5 flex flex-col justify-center">
                    <p className="pb-10">{S2BenefitsParagraph}</p>
                    <div className="flex justify-center">
                        <button className="p-4 w-auto rounded-[14px] bg-[#56B259] text-white font-bold">
                            {S2ButtonText}
                        </button>
                    </div>
                </div> */}
            </div>
        </div>
    );
}

export default PortfolioS1;