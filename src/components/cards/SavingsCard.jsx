import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card.tsx";
import { Progress } from "@/components/ui/progress.tsx";

const SavingsCard = ({savedAmount, targetAmount, barColor}) => {

    const progressPercentage = (savedAmount / targetAmount) * 100;

    return (
        <Card className="w-full bg-white">
            <CardHeader className="space-y-1">
                <CardTitle className="text-md flex items-center justify-between">
                    <div className="flex items-center gap-2">
                        <div className="w-3 h-3 rounded-full bg-teal-500"></div>
                        Savings
                    </div>
                    <span className="text-gray-400 text-sm">...</span>
                </CardTitle>
            </CardHeader>

            <CardContent className="space-y-6">
                <div>
                    <div className="text-gray-600 text-sm mb-1">Total Saved</div>
                    <div className="flex items-baseline justify-between mb-2">
                        <span className="text-3xl font-semibold">${savedAmount.toFixed(2)}</span>
                        <span className="text-gray-500 text-sm">Target of ${targetAmount}</span>
                    </div>
                        <Progress
                            color={barColor}
                        value={progressPercentage}
                        className="h-1.5 bg-gray-100"
                        />
                    <div className="text-gray-500 text-xs mt-1">{progressPercentage.toFixed(1)}%</div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                    <button
                        className="px-4 py-2.5 rounded-lg bg-gray-50 hover:bg-gray-100
                     text-gray-700 text-sm font-medium
                     border border-gray-100
                     transition-colors duration-200
                     focus:outline-none focus:ring-2 focus:ring-gray-200"
                    >
                        + Add Money
                    </button>
                    <button
                        className="px-4 py-2.5 rounded-lg bg-gray-50 hover:bg-gray-100
                     text-gray-700 text-sm font-medium
                     border border-gray-100
                     transition-colors duration-200
                     focus:outline-none focus:ring-2 focus:ring-gray-200"
                    >
                        Withdraw
                    </button>
                </div>
            </CardContent>
        </Card>
    );
};

export default SavingsCard;