import React from "react";

function StatsBar() {
    const stats = [
        { icon: "Icon 1", heading: "Text 1", text: "Description 1" },
        { icon: "Icon 2", heading: "Text 2", text: "Description 2" },
        { icon: "Icon 3", heading: "Text 3", text: "Description 3" },
    ];

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
