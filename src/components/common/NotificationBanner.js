import React from "react";

function NotificationBanner(props) {
  const { titleText, descriptionText, subtle, additionalClasses } = props;
  const bannerStyle = {
    background: subtle
      ? "white"
      : "linear-gradient(to right, #8abf25, #b3d471)",
  };
  return (
    <div
      className={`w-[90%] mx-auto ${subtle ? 'text-grey shadow border-b-2' : 'text-white'} rounded-lg p-8 flex flex-col justify-center items-center` + " " + additionalClasses}
      style={bannerStyle}
    >
      <p className="text-lg leading-6">{titleText}</p>
      <p className="text-md leading-5 mt-6">{descriptionText}</p>
    </div>
  );
}

export default NotificationBanner;
