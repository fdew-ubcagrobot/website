import React from "react";
import { TeamPhoto, ShadowTeamPhoto, Agrobot } from "../../assets/image";
import { PS1Title } from "../../constant";


function InfoParagraph(props) {
    const { text } = props;

    // This will turn the "<br />" in to a real <br />
    const processedPS1Title = PS1Title.split('<br />').map((processedPS1Title, index) => (
        <React.Fragment key={index}>
            {processedPS1Title}
            {index < processedPS1Title.length - 1 && <br />}
        </React.Fragment>
    ));

    return (
        <>
        <div className="min-h-screen w-screen p-[10%] font-RobotoMono">
            <h1 className=" text-[40px] pb-10">{processedPS1Title}</h1>
            <div className="flex justify-center">
                <div className="w-[50%] relative inline-block">
                    <img src={Agrobot} alt="Team" className="absolute top-0 left-0 z-10 rounded-[14px]" style={{ width: '100%', height: 'auto' }} />
                </div>
                <div className="w-[50%] p-5 flex flex-col justify-center">
                    <p className="pb-10">{text}</p>
                </div>
            </div>
        </div>
        </>
        
    );
}

export default InfoParagraph;