import React from "react";
import StudentsWorking from "./studentsWorking.jpg";

function SponsorshipS1(props) {
    return (
        <div style={{ backgroundImage: `url(${StudentsWorking})` }} className="h-screen w-screen bg-cover bg-center">
            <div className="h-screen w-screen bg-[#00000080] flex justify-center items-center p-40">
                <p className="text-white text-[40px] text-center font-RobotoMono">Support the AgroBot team’s vision of efficient and environmental farming!</p>
            </div>
        </div>

    );
}

export default SponsorshipS1;