import React from "react";

function TitleBanner(props) {
    return(
        <div class="h-[90vh] w-screen bg-[#F8F7F1] flex justify-center items-center">
            <div class="w-[80%] h-[60vh] p-20 flex items-center relative border-[10px] border-[#88BE22] bg-gradient-to-t from-[#4c59348a] to-[#345950]">
                <img src={props.imageSrc} alt="handshake" width="500px" class="absolute right-10 top-[-150px]"/>
                <h1 class="text-white font-[Roboto Mono] text-[60px] font-bold uppercase">{props.children}</h1>
            </div>
        </div>
    );
}

export default TitleBanner;