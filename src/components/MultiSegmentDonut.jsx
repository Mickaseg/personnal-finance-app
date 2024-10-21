import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import ExpensesLegend from "@/components/ExpensesLegend.jsx";

const MultiSegmentDonut = ({
                               segments = [
                                   { title: 'Bills',value: 100, color: 'bg-red stroke-red', colorLegend:'border-red' },
                                   { title: 'Transport',value: 150, color: 'bg-blue stroke-blue', colorLegend:'border-blue'},
                                   { title: 'Food',value: 100, color: 'bg-green stroke-green', colorLegend:'border-green'},
                                   { title: 'Food',value: 100, color: 'bg-green stroke-green', colorLegend:'border-green'}
                               ],
                               limit = 975
                           }) => {
    const size = 200;
    const strokeWidth = 20;
    const radius = (size - strokeWidth) / 2;
    const circumference = 2 * Math.PI * radius;

    // Calculate total of all segments
    const total = segments.reduce((sum, segment) => sum + segment.value, 0);

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
        <Card className="w-full self-center border-0 shadow-card">

            <CardContent className="pt-6 md:grid md:grid-cols-12">
                <div className="relative flex items-center justify-center col-span-10">
                    {/* SVG Circle */}
                    <svg width={size} height={size} className="transform -rotate-90">
                        {/* Background circle */}
                        <circle
                            cx={size/2}
                            cy={size/2}
                            r={radius}
                            className="stroke-gray-100"
                            strokeWidth={strokeWidth}
                            fill="none"
                        />

                        {/* Segment circles */}
                        {segmentArcs.map((arc, index) => (
                            <circle
                                key={index}
                                cx={size/2}
                                cy={size/2}
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

                <div className="mt-4 space-y-2 md:justify-self-end md:mt-0 md:col-span-2">
                <ExpensesLegend segments={segments} style={"md:flex md:flex-col"}/>
                </div>

            </CardContent>

        </Card>
    );
};

export default MultiSegmentDonut;