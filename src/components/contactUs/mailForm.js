import React, { useState } from "react";
// import { EmailSideIcon, SocialSideIcon, LocationSideIcon } from '../../assets'

function MailForm(props) {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [subject, setSubject] = useState("");
    const [message, setMessage] = useState("");
    const { isMobile } = props;

    const handleSubmit = async (e) => {
        e.preventDefault();
    
        try {
          const response = await fetch('/api/send-email', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              name,
              email,
              subject,
              message,
            }),
          });
    
          if (response.ok) {
            // Email sent successfully
            console.log('Email sent successfully!');
          } else {
            // Error handling
            console.error('Failed to send email.');
          }
        } catch (error) {
          console.error('Error:', error);
        }
      };

    if (isMobile) {
      
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

    } else {
    
        return (
            <div style={{ display:'flex' }}>
                <div style={{ width: '40%' }}>Sidebar
                    {/* <div className='flex flex-wrap w-full mt-8'>
                        <div className='w-[45%] mx-[2.5%] my-[2.5%] rounded-[14px]'><Img imgSrc={EmailSideIcon}>Targeted Action</Img></div>
                        <div className='w-[45%] mx-[2.5%] my-[2.5%] rounded-[14px]'><Img imgSrc={SocialSideIcon}>Targeted Action</Img></div>
                        <div className='w-[45%] mx-[2.5%] my-[2.5%] rounded-[14px]'><Img imgSrc={LocationSideIcon}>Targeted Action</Img></div>
                    </div> */}
                </div>
                
                <div style={{ width: '60%' }}>
                    <div className="w-4/5 h-full bg-[#4C5934] mx-auto rounded-md max-w-screen-md">
                        <div className="flex flex-col items-center justify-center w-full h-full">
                            <h1 className="text-3xl font-bold text-center text-white">Message Us!</h1>
                                <form className="flex flex-col items-center justify-center w-full h-full">
                                    <div className="flex w-4/5">
                                            <input
                                                type="text"
                                                placeholder="Name"
                                                className="w-4/5 h-12 px-4 my-2 mr-2 border-2 border-gray-300 rounded-md"
                                                value={name}
                                                onChange={(e) => setName(e.target.value)}
                                            />
                                            <input
                                                type="email"
                                                placeholder="Email"
                                                className="w-4/5 h-12 px-4 my-2 mr-2 border-2 border-gray-300 rounded-md"
                                                value={email}
                                                onChange={(e) => setEmail(e.target.value)}
                                            />
                                        </div>
                                    <input
                                        type="subject"
                                        placeholder="Subject"
                                        className="w-4/5 h-12 px-4 my-2 mx-4 border-2 border-gray-300 rounded-md"
                                        value={subject}
                                        onChange={(e) => setSubject(e.target.value)}
                                    />
                                    <textarea
                                        placeholder="Message"
                                        className="w-4/5 h-72 px-4 py-2 my-1 border-2 border-gray-300 rounded-md"
                                        value={message}
                                        onChange={(e) => setMessage(e.target.value)}
                                    />
                                    <div className="flex items-end justify-end w-1/4">
                                        <button
                                            type="submit"
                                            className="w-4/5 h-12 ml-auto px-4 py-2 my-4 text-hex-4C5934 bg-[#FFFFFF] border-gray-300 rounded-md"
                                            >
                                            
                                            Send
                                            </button>
                                    </div>
                                </form>
                        </div>
                    </div>  
                </div>

            </div>
        )
    }

    

}

export default MailForm;
