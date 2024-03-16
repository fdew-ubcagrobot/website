import React from "react";
import { temp_circuitry, temp_maintenance, temp_robot_blueprint } from "../../assets";


function SpecificationText(props) {
    const { category, descriptionPoints } = props;


    return (
        <div className="my-2">
            <h2 class="mb-2 text-4xl font-bold">{category}</h2>
            <div>
            { descriptionPoints.map((point) => (
                <p>{point}</p>
            ))}
            </div>
        </div>
    );
}


function AgroBotSpecifications() {
    const dimensions = ["Length: 1.5 meters, Width: 1 meter,", "Height: Adjustable, up to 1.2 meters"];
    const speeds = ["Traversal speed - Up to 1m/s", "Working speed - Adjustable, depending on the task (e.g., slower for precision tasks like planting and harvesting)."];
    const powerConsumption = ["Average Power Consumption: 2-3 kWh per hour.", "Peak Power: 5 kWh for intensive tasks.", "Sleep Mode: Low power consumption during idle periods."];
    const operationalRange = ["Operational Range: Up to 10 kilometers on a single battery charge.", "Wireless Communication Range: 1 kilometer for remote control and monitoring."];
    const weatherResistance = ["Operating Temperature Range: -10°C to 40°C.", "IP65-rated water and dust resistance for reliable operation in various weather conditions."];
    const maintenance = ["Mean Time Between Failures (MTBF): 500 hours.", "Modular design for easy component replacement and maintenance."];

    return (
        <div className="w-[80%] mx-auto my-[20vh]">
            <div className="w-full rounded-[14px] p-10 text-white my-[5vh] bg-slate-800">
                <h1 className="text-white text-[32px] sm:text-[48px] capitalize">Specifications</h1>
                <div className="flex my-4 py-5 justify-evenly">
                    <img className="mx-4 w-1/3" src={temp_robot_blueprint} alt="blueprint of robot showing dimensions"></img>
                    <div className="mx-4 w-1/2">
                        <SpecificationText category="Dimensions" descriptionPoints={dimensions}></SpecificationText>
                        <div className="py-10"><hr></hr></div>
                        <SpecificationText category="Speeds" descriptionPoints={speeds}></SpecificationText>
                    </div>
                </div>

                <div className="flex my-4 py-10 justify-evenly">
                    <div className="mx-4 py-5 w-1/2">
                        <SpecificationText category="Power Consumption" descriptionPoints={powerConsumption}></SpecificationText>
                        <div className="py-10"><hr></hr></div>
                        <SpecificationText category="Operational Range" descriptionPoints={operationalRange}></SpecificationText>
                    </div>
                    <img className="mx-4 w-1/3" src={temp_circuitry} alt="circuitboard"></img>
                </div>

                <div className="flex my-4 py-5 justify-evenly">
                    <img className="mx-4 w-1/3" src={temp_maintenance} alt="woman doing maintenance"></img>
                    <div className="mx-4 py-5 w-1/2">
                        <SpecificationText category="Weather Resistance" descriptionPoints={weatherResistance}></SpecificationText>
                        <div className="py-10"><hr></hr></div>
                        <SpecificationText category="Maintenance" descriptionPoints={maintenance}></SpecificationText>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default AgroBotSpecifications;
