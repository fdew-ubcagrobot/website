import React from "react";
import { ConcentricOctagons, HomeFarm } from "../../assets";
import { FaChevronDown } from 'react-icons/fa';
import '../../index.css';

function HomeBanner(props) {

    const { isMobile } = props;

    if (!isMobile) {
        return (
            <div className="h-[90vh] w-full bg-[#F8F7F1] flex relative z-[0]">
                <div style={{ backgroundImage: `url(${ConcentricOctagons})` }} className='absolute w-full h-full bg-center bg-no-repeat z-[1]  '></div>
                <div className="h-full w-[50%] flex flex-col items-center justify-center z-[2]">
                    <h1 className="uppercase text-[48px] text-[#3A3A3A] font-bold roboto-custom">where <br /> innovation <br /> meets <br /> agriculture</h1>
                    <button
                        className="w-[316px] h-[50px] mt-[20px] bg-[#3A3A3A] rounded-md text-[#F8F7F1] font-bold"
                        onClick={() => window.scrollTo({
                            top: window.innerHeight*0.9, // Need to multiply by 0.9 so that nav does not cover next section
                            behavior: 'smooth'
                        })}>
                        <h3 className="flex items-center justify-center ">Learn More <FaChevronDown size='14px' className='mx-1 mt-1' /></h3>
                    </button>
                </div>
                <div className="h-full w-[50%] bg-center bg-no-repeat flex items-center justify-center z-[2]" >
                    <img className="" height={575} width={547} alt="a farm being manned by cute robots" src={HomeFarm} />
                </div>
            </div>
        );
    }
    else {
        return (
            <div className="h-[90vh] w-full bg-[#F8F7F1]">
                <div className="h-[40%] w-full mt-[10%] mb-[10%] flex items-center justify-center" >
                    <img className="w-[80%]" alt="a farm being manned by cute robots" src={HomeFarm} />
                </div>
                <div className="h-[40%] w-full">
                    <h1 className="uppercase text-[48px] text-[#3A3A3A] font-bold text-center">where <br /> innovation <br /> meets <br /> agriculture</h1>
                </div>
            </div>
        );
    }
}

export default HomeBanner;