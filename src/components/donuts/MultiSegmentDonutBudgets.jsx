import React, {useEffect, useState} from 'react';
import {Card, CardContent} from "@/components/ui/card.tsx";
import {getSummary} from "@/api/BudgetsRequests.jsx"


const MultiSegmentDonutBudgets = ({segments}) => {
    const [summary, setSummary] = useState([])


    const fetchSummary = async () => {
        const data = await getSummary();
        setSummary(data);
        console.log("fetching budgets")
    };

    useEffect(() => {
        fetchSummary()
    }, []);

    const limit = summary.totalMax

    const size = 200;
    const strokeWidth = 20;
    const radius = (size - strokeWidth) / 2;
    const circumference = 2 * Math.PI * radius;

    // Calculate total of all segments
    const total = segments.reduce((sum, segment) => sum + segment.spent, 0);

    // Calculate starting point for each segment
    let currentOffset = 0;
    const segmentArcs = segments.map(segment => {
        const percentage = (segment.value / limit) * 100;
        const arc = {
            offset: currentOffset,
            dashArray: `${(percentage * circumference) / 100} ${circumference}`,
            color: segment.color
        };
        currentOffset += (percentage * circumference) / 100;
        return arc;
    });

    return (
        <Card
            className="w-full border-0 gap-4 shadow-card items-center p-6 flex flex-col md:flex-row md:justify-around lg:flex-col">

            <CardContent className="flex justify-center p-0">
                <div className="relative flex items-center justify-center col-span-10">
                    {/* SVG Circle */}
                    <svg width={size} height={size} className="transform -rotate-90">
                        {/* Background circle */}
                        <circle
                            cx={size / 2}
                            cy={size / 2}
                            r={radius}
                            className="stroke-gray-100"
                            strokeWidth={strokeWidth}
                            fill="none"
                        />

                        {/* Segment circles */}
                        {segmentArcs.map((arc, index) => (
                            <circle
                                key={index}
                                cx={size / 2}
                                cy={size / 2}
                                r={radius}
                                className={arc.color}
                                strokeWidth={strokeWidth}
                                fill="none"
                                strokeDasharray={arc.dashArray}
                                strokeDashoffset={0}
                                style={{
                                    transform: `rotate(${(arc.offset / circumference) * 360}deg)`,
                                    transformOrigin: 'center'
                                }}
                            />
                        ))}
                    </svg>

                    {/* Center text */}
                    <div className="absolute flex flex-col items-center justify-center">
                        <span className="text-2xl font-bold">${total}</span>
                        <span className="text-sm text-gray-500">of ${limit} limit</span>
                    </div>
                </div>
            </CardContent>

            <div className={"w-64"}>
                <h2 className={"text-preset2 text-grey900 font-bold pb-4"}>Spending Summary</h2>
                <ul className={`flex flex-col gap-3`}>
                    {segments && segments.map((item) => {
                        return (
                            <li className={`flex items-center border-b-2 py-4 justify-between`}>
                                <p className={`border-l-4 pl-4 ${item.colorLegend} text-preset4`}>{item.name}</p>
                                <p className={'text-preset3 font-bold'}>${item.spent} <span
                                    className={"text-preset5 text-grey500"}>of ${item.max}</span></p>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </Card>
    );
};

export default MultiSegmentDonutBudgets;