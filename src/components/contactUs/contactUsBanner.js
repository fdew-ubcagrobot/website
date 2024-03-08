import React, { Component } from 'react';
import { mailPhoto } from '../../assets';

class ContactUsBanner extends Component {
  render() {
    const { fromColor, toColor, imageClassName } = this.props;

    // computer display
    return (
      <div className="h-auto w-full flex justify-center" style={{height: '200px'}}>
          <div className="h-[70%] w-[80%] bg-[#88BE22] mt-8 flex flex-col items-center justify-center">
            <div className="h-[90%] w-[98%] bg-[#006A60] flex items-center justify-center" style={{ background: 'linear-gradient(to bottom, #006A60, #00B894)' }}>
              <h1 className="uppercase text-[48px] text-[#FFFFFF] font-bold mr-4">Contact Us </h1>
              <img src={mailPhoto} alt="mailPhoto" className="h-[250px] w-[250px] mb-8 ml-4" />
            </div>
          </div>
      </div>
    );
  }
}

export default ContactUsBanner;
