import React from "react";

function TitleBanner(props) {
    const { fromColor, toColor, imageSrc, imageAltText, children } = props;

    const bannerStyle = {
        background: `linear-gradient(to top, ${fromColor}, ${toColor})`
    };
    const topGradient = {
        background: `linear-gradient(to top, ${toColor}, #F8F7F1)`
    }

    return (
        <div className="w-screen flex flex-col justify-center items-center mt-[10vh] mb-[10vh]">
            <div style={bannerStyle} className="w-[80%] h-[20vh] flex items-center justify-center rounded-[14px]">
                <h1 className="text-white text-[52px] font-bold font-Inter uppercase z-50">{children}</h1>
                <img src={imageSrc} alt={imageAltText || "Title Image"} className="h-[120%] z-40" />
            </div>
        </div>
    );
}

export default TitleBanner;