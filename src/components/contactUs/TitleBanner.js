import React, { Component } from 'react';
import { mailPhoto } from '../assets';

class TitleBanner extends Component {
  render() {
    const { fromColor, toColor, imageClassName } = this.props;

    return (
      <div
        className={`bg-gradient-to-b  fromColor="#086E62" toColor="#97A28C" imageSrc={mailPhoto} imageClassName="absolute right-0 bottom-0 w-5/12`}
        style={{ backgroundImage: `url(${mailPhoto})`, backgroundSize: 'cover' }}
      >
        <h1 className="text-[48px] font-bold text-white absolute bottom-0 right-0 mb-8 mr-8">Contact Us</h1>
      </div>
    );
  }
}

export default TitleBanner;
