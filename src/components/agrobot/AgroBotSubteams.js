import React from "react";
import { HomeModularChassis } from "../../assets";

function Subteam(props) {
    const { fromColor, toColor } = props;

    const bannerStyle = {
        background: `linear-gradient(to top, ${fromColor}, ${toColor})`
    };

    return (
        <div style={bannerStyle} className={`w-full rounded-[14px] p-10 flex text-white my-[5vh]`}>
            <div className='w-[47.5%] mr-[5%]'>
                <h2 className='text-4xl mb-[2%]'>{props.children}</h2>
                <div className=' text-[#8BC34A]'>
                    {props.hlights.map((highlight, index) => (
                        <li key={index} className='min-w-[45%] mr-[5%]'>{highlight}</li>
                    ))}
                </div>
                <p className='mt-[5%] text-justify'>{props.text}</p>
            </div>
            <div className='w-[47.5%] flex justify-center align-middle'>
                <img src={HomeModularChassis} alt='modular-chassis' className='rounded-[14px]'></img>
            </div>
        </div>
    );
}

function AgroBotSubteams() {
    const chassHlights = ['80/20 aluminium frame', 'Electrical Powertrain', 'Four wheel drive & swerve steering', 'Battery management system'];
    const chassText = 'Develops the frame, powertrain, battery management system, and component housing. Last year, (our very first year) we developed a simple, square, modular chassis that would allow us to house all the components of the robot and allow us to be flexible in our future developments. The robot utilizes four, independently driven wheels, with swerve steering front wheels. This design aims to allow for easier maneuverability in a crop field, allows the robot to go over crop rows, and make tight turns at the end of each row.';
    const extHlights = ['Mechanical weedwhacker', 'Omnidirectional sprayer', 'Target prioritization software'];
    const extText = 'Develops systems to target and destroy weeds without damaging the crops around them. In our first year, we explored several possible ways to accomplish this, from robot claws to lasers, and eventually settled on a machine-vision-aimed herbicide sprayer and a robotic weedwhacker. We developed a working prototype of the herbicide sprayer, complete with targeting software, and continue to work on the weedwhacker. In the upcoming year we will work on finishing the weedwhacker while improving and finalizing the herbicide sprayer. This will include continued mechanical design, robotics, small electronics, programming, and pumping systems. We will also be looking at possible new ways of attacking weeds.'; // BEGIN: ed8c6549bwf9
    const navHlights = ['Crop row detection', 'End-of-row turning', 'Robot localization/orientation', 'Gazebo simulator'];
    const navText = 'Develops the self-driving software for the Agrobot to autonomously navigate crop rows using an on-board camera. In our first year, our team explored methods of crop-row detection and developed software to facilitate real-time motion planning. We have worked together to research different methods of computer vision and error control algorithms and applied these concepts to Python code using OpenCV. The software loads live-stream video, employs a series of filtering and transformations to detect crop-rows, and then applies a centering algorithm to determine the direction of the AgroBot. In our upcoming year, our team plans to improve the accuracy of our navigation software while also integrating the software with the motor control system. This entails incorporating additional computer vision techniques to our code, implementing a robust software controller for continuous error adjustment and incorporating ROS for communication between subsystems.';
    const appAIHlights = ["Crops and weeds detection", "Crop health analysis", "Biomass Estimation", "Artificial Intelligence"];
    const appAIText = 'Applied AI is looking to change the way we farm and is paving the way for a sustainable future. Leveraging cutting edge research in artificial intelligence and machine learning to develop practical solutions to optimize crop yield, minimize costs, and reduce environmental impact. Using computer vision and machine learning algorithms, the team has developed models for weed destruction that detect and classify weeds, enabling targeted extermination and reducing the use of herbicides. In addition, the team focuses on developing models for biomass estimation. These models help farmers to accurately determine the amount of biomass that their crops are producing, which is a crucial factor in making informed decisions about fertilizer and water application. With this knowledge, farmers can achieve better crop yields and save on costs, all while minimizing their environmental impact.';
    const chassGradient = { fromColor: 'rgb(18, 32, 11)', toColor: 'rgb(76, 89, 52)' };
    const extGradient = { fromColor: 'rgb(18, 32, 11)', toColor: 'rgb(76, 89, 52)' };
    const navGradient = { fromColor: 'rgb(18, 32, 11)', toColor: 'rgb(76, 89, 52)' };
    const appAIGradient = { fromColor: 'rgb(18, 32, 11)', toColor: 'rgb(76, 89, 52)' };

    return (
        <div className='w-[80%] mx-auto my-[20vh] font-Inter'>
            <h2 className='text-4xl text-[#12200B]'>Subteams</h2>
            {/* made gradients to make the color of agrobots title banner simiar to subteam components */}

            <Subteam fromColor={chassGradient.fromColor} toColor={chassGradient.toColor} hlights={chassHlights} text={chassText}>Chassis</Subteam>
            <Subteam fromColor={extGradient.fromColor} toColor={extGradient.toColor} hlights={extHlights} text={extText}>Extermination</Subteam>
            <Subteam fromColor={navGradient.fromColor} toColor={navGradient.toColor} hlights={navHlights} text={navText}>Navigation</Subteam>
            <Subteam fromColor={appAIGradient.fromColor} toColor={appAIGradient.toColor} hlights={appAIHlights} text={appAIText}>Applied AI</Subteam>
        </div>
    );
}

export default AgroBotSubteams;