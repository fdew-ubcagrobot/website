import React from 'react';
import { mailPhoto } from '../assets';
import { TitleBanner } from '../components';
import { mailForm, sideBar } from '../components';

const ContactUs = () => {

  return (
    <div className="bg-[#F8F7F1] w-screen">
        <TitleBanner fromColor="#086E62" toColor="#97A28C" imageSrc={mailPhoto} imageClassName="absolute right-0 bottom-0 w-5/12">Contact Us</TitleBanner>
        <mailForm></mailForm>
        <sideBar></sideBar>
    </div>
  );
};

export default ContactUs;