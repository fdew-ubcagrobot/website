import React from "react";
import { AgroPonicsTitleImg } from "../../assets/image";
function AgroPonicsS1() {
    return (
        <div>
          <div className="flex">
            <h1 className="shadow-2xl text-white font-bold text-[25px] ml-[11%] mr-[5%] rounded-lg border py-[1.5%] px-[2.5%] bg-[#90bc24]">PROJECT 2</h1>
            <h2 className=" font-roboto font-bold text-[60px]">AgroPonics</h2>
          </div>
          <section className="p-10 flex">
            <div className='font-sans text-[22px] ml-[10%] flex-1'>
              <p className ="text-center mt-[5%] mb-[3%]">
                Our newly launched project that aims to build a fully autonomous hydroponics system. 
                We plan to create efficient and reliable systems that can be implemented throughout campus.
              </p>
              
              <p className ="text-center">
                A hydroponics system is an integrated system that grows crops, without soil. 
                By cycling mineral nutrients dissolved in water, the system is able to produce food at any location, 
                year-round, in a more sustainable way.
              </p>
            </div>
            <div className="flex-1">
              {/* Here you can add the image of the hydroponics system */}
              <img src={AgroPonicsTitleImg} alt="Hydroponics System" className="ml-[10%] shadow-2xl border-[3px] rounded-[20px] bg-[#d8d4dc] h-[600px] w-auto" />
            </div>
          </section>
        </div>
      );
};

export default AgroPonicsS1;