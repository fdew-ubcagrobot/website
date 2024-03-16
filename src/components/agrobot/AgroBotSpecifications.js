import React from "react";
import { SectionHeader } from "../common";
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

    return (
        <div className="w-[80%] mx-auto my-[20vh]">
            <div className="w-full rounded-[14px] p-10 text-white my-[5vh] bg-slate-800">
                <SectionHeader>Specifications</SectionHeader>
                <div className="flex my-4 py-5 justify-evenly">
                    <img className="mx-4 w-1/3" src={temp_robot_blueprint}></img>
                    <div className="mx-4">
                        <SpecificationText category="Dimensions" descriptionPoints={dimensions}></SpecificationText>
                        <hr></hr>
                        <SpecificationText category="Speeds" descriptionPoints={speeds}></SpecificationText>
                    </div>
                </div>

                <div className="flex my-4 justify-evenly">
                    <div className="mx-4 py-5">
                        <SpecificationText category="Dimensions" descriptionPoints={dimensions}></SpecificationText>
                        <hr></hr>
                        <SpecificationText category="Speeds" descriptionPoints={speeds}></SpecificationText>
                    </div>
                    <img className="mx-4 w-1/3" src={temp_circuitry}></img>
                </div>

                <div className="flex my-4 py-5 justify-evenly">
                    <img className="mx-4 w-1/3" src={temp_maintenance}></img>
                    <div className="mx-4">
                        <SpecificationText category="Dimensions" descriptionPoints={dimensions}></SpecificationText>
                        <hr></hr>
                        <SpecificationText category="Speeds" descriptionPoints={speeds}></SpecificationText>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default AgroBotSpecifications;
