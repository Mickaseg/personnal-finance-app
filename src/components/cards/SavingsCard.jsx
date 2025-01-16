import React, {useState} from "react";
import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card.tsx";
import {Progress} from "@/components/ui/progress.tsx";
import Ellipsis from "../../assets/images/icon-ellipsis.svg";
import ActionDropdown from "@/components/nav/ActionDropdown.jsx";
import DeleteModal from "@/components/modals/DeleteModal.jsx";
import SavingsDialog from "@/components/modals/SavingsDialog.jsx";
import {deletePot, withdrawFromPot, addToPot} from "@/api/PotsRequests.jsx";


const SavingsCard = ({potData, barColor, setEditingPot, setIsOpen, fetchPots}) => {
    const [isOpenDelete, setIsOpenDelete] = useState(false);
    const [isWithdrawOpen, setIsWithdrawOpen] = useState(false);
    const [isAddOpen, setIsAddOpen] = useState(false);

    // const {id, name, savedAmount, targetAmount, barColor} = potData;
    const progressPercentage = (potData.current / potData.target) * 100;

    const handleEdit = () => {
        setEditingPot(potData);
        setIsOpen(true);
    };

    const handleDelete = () => {
        setIsOpenDelete(true);
    };

    const menuItems = [
        {
            label: "Edit Pot",
            onClick: handleEdit,
        },
        {
            label: "Delete Pot",
            onClick: handleDelete,
            className: "text-red-600",
        },
    ];

    const handleDeletePot = async () => {
        await deletePot(potData._id);
        fetchPots();
        setIsOpenDelete(false);
    }

    const handleWithdraw = async (amount) => {
        console.log(amount)
        await withdrawFromPot(potData._id, amount);
        fetchPots();
    }

    const handleAdd = async (amount) => {
        console.log(amount)
        await addToPot(potData._id, amount);
        fetchPots();
    }


    return (
        <Card className="w-full bg-white">
            <CardHeader className="space-y-1">
                <CardTitle className="text-md flex items-center justify-between">
                    <div className="flex items-center gap-2">
                        <div className={`w-3 h-3 rounded-full ${barColor}`}></div>
                        {potData.name}
                    </div>
                    <ActionDropdown items={menuItems}>
                        <button>
                            <img src={Ellipsis} alt="Ellipsis" className={"p-2"}/>
                        </button>
                    </ActionDropdown>

                    <DeleteModal isOpen={isOpenDelete} setIsOpen={setIsOpenDelete} element={potData.name} elementId={potData.id} handleDelete={handleDeletePot}/>

                </CardTitle>
            </CardHeader>

            <CardContent className="space-y-6">
                <div>
                    <div className="text-gray-600 text-sm mb-1">Total Saved</div>
                    <div className="flex items-baseline justify-between mb-2">
                        <span className="text-3xl font-semibold">${potData.current.toFixed(2)}</span>
                        <span className="text-gray-500 text-sm">Target of ${potData.target}</span>
                    </div>
                    <Progress
                        color={barColor}
                        value={progressPercentage}
                        className="h-1.5 bg-beige200"
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
                        onClick={() => setIsAddOpen(true)}
                    >
                        + Add Money
                    </button>
                    <button
                        className="px-4 py-2.5 rounded-lg bg-gray-50 hover:bg-gray-100
                        text-gray-700 text-sm font-medium
                        border border-gray-100
                        transition-colors duration-200
                        focus:outline-none focus:ring-2 focus:ring-gray-200"
                        onClick={() => setIsWithdrawOpen(true)}
                    >
                        Withdraw
                    </button>
                </div>

                <SavingsDialog
                    isOpen={isWithdrawOpen}
                    onClose={() => setIsWithdrawOpen(false)}
                    title={potData.name}
                    currentAmount={potData.current}
                    targetAmount={potData.target}
                    percentage={progressPercentage}
                    type="withdraw"
                    onConfirm={(amount) => handleWithdraw(amount)}
                    barColor={barColor}
                />

                <SavingsDialog
                    isOpen={isAddOpen}
                    onClose={() => setIsAddOpen(false)}
                    title={potData.name}
                    currentAmount={potData.current}
                    targetAmount={potData.target}
                    percentage={progressPercentage}
                    type="add"
                    onConfirm={(amount) => handleAdd(amount)}
                    barColor={barColor}
                />

            </CardContent>
        </Card>
    );
};

export default SavingsCard;