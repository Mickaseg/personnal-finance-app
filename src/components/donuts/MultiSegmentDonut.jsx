import {Card, CardContent} from "@/components/ui/card.tsx";
import ExpensesLegend from "../cards/ExpensesLegend";
import {useState, useEffect} from "react";
import {getSummary} from "@/api/BudgetsRequests.jsx";

const MultiSegmentDonut = ({segments}) => {
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
        const percentage = (segment.spent / limit) * 100;
        const arc = {
            offset: currentOffset,
            dashArray: `${(percentage * circumference) / 100} ${circumference}`,
            color: 'bg-red stroke-red'
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

                <div className="mt-4 space-y-2 md:justify-self-end md:mt-0 md:col-span-2">
                    <ExpensesLegend segments={segments} style={"md:flex md:flex-col"}/>
                </div>

            </CardContent>

        </Card>
    );
};

export default MultiSegmentDonut;