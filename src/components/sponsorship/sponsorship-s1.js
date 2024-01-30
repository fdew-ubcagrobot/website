import React from "react";
import Shake from "./shake.png";

function SponsorshipS1(props) {
    return(
        <div class="h-[90vh] w-screen bg-[#F8F7F1] flex justify-center items-center">
            <div class="w-[80%] h-[60vh] p-20 flex items-center relative border-[10px] border-[#88BE22] bg-gradient-to-t from-[#4c59348a] to-[#345950]">
                <img src={Shake} alt="handshake" width="500px" class="absolute right-10 top-[-150px]"/>
                <h1 class="text-white font-[roboto.mono] text-[60px] font-bold">{props.children}</h1>
            </div>
        </div>
    );
}

export default SponsorshipS1;