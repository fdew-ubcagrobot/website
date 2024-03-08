import React, { useState } from "react";
import { EmailSideIcon, SocialSideIcon, LocationSideIcon } from '../../assets'

function MailForm(props) {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [subject, setSubject] = useState("");
    const [message, setMessage] = useState("");
    const { isMobile } = props;

    if (!isMobile) {

      return (
        <div className="mx-auto bg-[#F8F7F1]  border border-gray-300 rounded-md max-w-screen-md " style={{ display:'flex'}}>    
          <div style={{ width: '85%'}}>
            <div className="w-4/5 h-full p-4">
              <div className="flex flex-col items-left justify-left w-full h-full">
                <h1 className="text-3xl font-bold text-left text-[#4C5934] ml-4">Message Us</h1>

                  <form className="flex flex-col items-left justify-center w-full h-full">
                    <input
                      type="text"
                      placeholder="Name"
                      className="w-full h-8 px-4 my-6 mr-2 ml-4 bg-[#F8F7F1] border-b border-black"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                    <input
                        type="email"
                        placeholder="Email"
                        className="w-full h-8 px-4 my-6 mr-2 ml-4 bg-[#F8F7F1] border-b border-black"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <input
                        type="subject"
                        placeholder="Subject"
                        className="w-full h-8 px-4 my-6 mr-2 ml-4 bg-[#F8F7F1] border-b border-black"
                        value={subject}
                        onChange={(e) => setSubject(e.target.value)}
                    />
                    <input
                        placeholder="Message"
                        className="w-full h-8 px-4 my-6 mr-2 ml-4 bg-[#F8F7F1] border-b border-black"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                    />
                        <button
                            type="submit" 
                            className="w-1/4 h-12 px-4 py-2 my-4 text-white bg-[#88BE22] border-gray-300 rounded-md" style={{ margin: "auto" }}
                            >

                            Send &#9658;
                            </button>
                  </form>
              </div>  
            </div>   
        </div>
            <div style={{ width: '40%' }}>
                <div className='flex flex-wrap justified-center items-left flex-col w-full'>
                    <div className="w-[140px] h-[120px] bg-[#F8F7F1] border border-gray-300 rounded-md mt-6">
                      <img src={EmailSideIcon} alt="EmailSideIcon" className="h-fit w-fit" />
                    </div>
                    <div className="w-[140px] h-[120px] bg-[#F8F7F1] border border-gray-300 rounded-md mt-6">
                      <img src={SocialSideIcon} alt="EmailSideIcon" className="h-fit w-fit" />
                    </div>
                    <div className="w-[140px] h-[120px] bg-[#F8F7F1] border border-gray-300 rounded-md mt-6">
                      <img src={LocationSideIcon} alt="EmailSideIcon" className="h-fit w-fit" />
                    </div>
                </div>
            </div>
        </div>
    )

    } else {
    
      return (
        <div className="w-4/5 h-full bg-[#4C5934] mx-auto rounded-md p-4 lg:p-8">
          <div className="flex flex-col items-center justify-center w-full h-full">
            <h1 className="text-3xl font-bold text-center text-white mb-4">Email Us!</h1>
            <form className="flex flex-col items-center justify-center w-full">
              <input
                type="text"
                placeholder="Name"
                className="w-full lg:w-4/5 h-12 px-4 my-2 border-2 border-gray-300 rounded-md"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <input
                type="email"
                placeholder="Email"
                className="w-full lg:w-4/5 h-12 px-4 my-2 border-2 border-gray-300 rounded-md"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                type="subject"
                placeholder="Subject"
                className="w-full lg:w-4/5 h-12 px-4 my-2 border-2 border-gray-300 rounded-md"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
              />
              <textarea
                placeholder="Message"
                className="w-full lg:w-4/5 h-48 px-4 py-2 my-2 border-2 border-gray-300 rounded-md"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
              <button
                type="submit"
                className="w-full lg:w-4/5 h-12 my-4 text-hex-4C5934 bg-[#FFFFFF] border-gray-300 rounded-md"
              >
                Send
              </button>
            </form>
          </div>
        </div>
    );
            
    }

    

}

export default MailForm;
