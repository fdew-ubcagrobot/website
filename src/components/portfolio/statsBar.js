import React from "react";
import { stats } from "../../constant/portfolio";

function StatsBar() {

    return (
        <div className="bg-white rounded-lg shadow-lg p-4 mx-20">
            <div className="flex justify-between">
                {stats.map((stat, index) => (
                    <div className="flex items-center" key={index}>
                        <div className="icon">{stat.icon}</div>
                        <div className="text">
                            <h3>{stat.heading}</h3>
                            <p>{stat.text}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );

}

export default StatsBar;
