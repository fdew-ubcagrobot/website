import React from "react";

function TitleBanner(props) {
    const { fromColor, toColor, imageSrc, imageAltText, children } = props;

    const bannerStyle = {
        background: `linear-gradient(to top, ${fromColor}, ${toColor})`
    };

    return (
        <div className="h-[50vh] w-screen flex justify-center items-center">
            <div style={bannerStyle} className="w-[80%] h-[70%] flex items-center justify-center border-[10px] border-[#88BE22]">
                <h1 className="text-white text-[52px] font-bold uppercase z-50 w-[40%] pr-[10%]">{children}</h1>
                <img src={imageSrc} alt={imageAltText || "Title Image"} className="h-[90%] z-40" />
            </div>
        </div>
    );
}

export default TitleBanner;