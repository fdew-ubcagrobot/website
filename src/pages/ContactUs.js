import React from "react";
import { TitleBanner } from "../components";
import { mailPhoto } from "../assets";
 
const ContactUs = () => {
    return (
        <div className="bg-[#F8F7F1] w-screen">
            <TitleBanner fromColor="#919331" toColor="#9da38a" imageSrc={mailPhoto} imageClassName="absolute right-0 bottom-0 w-5/12">Portfolio</TitleBanner>
        </div>
    );
};
 
export default ContactUs;