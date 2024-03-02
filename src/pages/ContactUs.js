import React, { useState, useEffect } from 'react';
import { mailPhoto } from '../assets';
import { TitleBanner } from '../components';
import { MailForm, SideBar } from '../components';

function debounce(func, wait) {
  let timeout;

  return function executedFunction(...args) {
      const later = () => {
          clearTimeout(timeout);
          func(...args);
      };

      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
  };
}

const ContactUs = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
      const handleResize = debounce(() => {
          setIsMobile(window.innerWidth < 768);
      }, 250);

      handleResize();

      window.addEventListener("resize", handleResize);

      return () => {
          window.removeEventListener("resize", handleResize);
      };

  }, []);

  return (
    <div className="bg-[#F8F7F1] w-screen">
        <TitleBanner fromColor="#086E62" toColor="#97A28C" imageSrc={mailPhoto} imageClassName="absolute right-0 bottom-0 w-5/12">
            <h1 className="text-[48px] font-bold text-[#FFFFFF]">Contact Us</h1>
        </TitleBanner>
        <MailForm isMobile={isMobile}></MailForm>
        <SideBar></SideBar>
    </div>
  );
};



export default ContactUs;