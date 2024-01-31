import React from "react";

function TitleBanner(props) {
    return(
        <div className="h-[90vh] w-screen flex justify-center items-center">
            <div className="w-[90%] h-[60vh] p-20 flex items-center relative border-[10px] border-[#88BE22] bg-gradient-to-t from-[#4c59348a] to-[#345950]">
                <img src={props.imageSrc} alt="handshake" width="446px" className="absolute right-20 top-[-150px]"/>
                <h1 className="text-white text-[80px] font-bold uppercase z-50">{props.children}</h1>
            </div>
        </div>
    );
}

export default TitleBanner;