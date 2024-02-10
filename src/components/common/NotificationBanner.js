import React from 'react';

function NotificationBanner(props) {
    const { titleText, descriptionText } = props;
    const bannerStyle = { background: 'linear-gradient(to right, #8abf25, #b3d471)' };
  return (
    <div className="w-[90%] mx-auto bg-gradient-to-r rounded-lg p-4 text-white flex flex-col justify-center items-center" style={bannerStyle}>
      <p className="text-lg leading-6">{titleText}</p>
      <p className="text-sm leading-5 mt-2">{descriptionText}</p>
    </div>
  );
};

export default NotificationBanner;
