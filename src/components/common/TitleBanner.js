import React from "react";

function TitleBanner(props) {
    return(
        <div className="h-[90vh] w-screen flex justify-center items-center">
            <div className="w-[80%] h-[60vh] p-20 flex items-center relative border-[10px] border-[#88BE22] bg-gradient-to-t from-[#4c59348a] to-[#345950]">
                <img src={props.imageSrc} alt="handshake" width="446px" className="absolute right-20 top-[-120px]"/>
                <h1 className="text-white text-[60px] font-bold uppercase">{props.children}</h1>
            </div>
        </div>
    );
}

export default TitleBanner;