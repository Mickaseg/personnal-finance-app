import React, {useState} from 'react';
import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card.tsx";
import {Progress} from "@/components/ui/progress.tsx";
import Ellipsis from "../../assets/images/icon-ellipsis.svg";
import ActionDropdown from "@/components/nav/ActionDropdown.jsx";
import DeleteModal from "@/components/modals/DeleteModal.jsx";
import {deleteBudget} from "@/api/BudgetsRequests.jsx";
import ExpenseDialog from "@/components/modals/ExpenseDialog.jsx";
import {addToBudget} from "@/api/BudgetsRequests.jsx";
import {useToast} from "@/hooks/use-toast.ts";

const SpendingTracker = ({
                             budgetData,
                             barColor,
                             setEditingBudget,
                             setIsOpenEdit,
                             fetchBudgets
                         }) => {
    const [isOpenDelete, setIsOpenDelete] = useState(false);
    const [isAddOpen, setIsAddOpen] = useState(false)
    const progressPercentage = (budgetData.spent / budgetData.max) * 100;
    const {toast} = useToast()

    const handleEdit = () => {
        setEditingBudget(budgetData);
        setIsOpenEdit(true);
    }

    const menuItems = [
        {
            label: "Edit Budget",
            onClick: () => handleEdit(),
        },
        {
            label: "Delete Budget",
            onClick: () => setIsOpenDelete(true),
            className: "text-red",
        },
    ];

    const handleDeleteBudget = async () => {
        await deleteBudget(budgetData._id);
        fetchBudgets();
        setIsOpenDelete(false);
    }

    const handleAdd = async (amount) => {
        console.log(amount)
        await addToBudget(budgetData._id, amount);

        // Show success toast
        toast({
            description: "Successfully added to pot!!",
            className: "bg-green border-green",
            duration: 3000,
        });

        fetchBudgets();
    }

    return (
        <Card className="w-full shadow-none border-none">
            <CardHeader className="space-y-1">
                <CardTitle className="text-md flex items-center justify-between">
                    <div className="flex items-center gap-2 text-preset2">
                        <div className={`w-4 h-4 rounded-full bg-${budgetData.color}`}></div>
                        {budgetData.name}
                    </div>
                    <ActionDropdown items={menuItems}>
                        <button>
                            <img className={"p-2"} src={Ellipsis} alt="Ellipsis"/>
                        </button>
                    </ActionDropdown>
                    <DeleteModal isOpen={isOpenDelete} setIsOpen={setIsOpenDelete} element={budgetData.name}
                                 elementId={budgetData.id}
                                 handleDelete={handleDeleteBudget}/>
                </CardTitle>
                <div className="text-gray-500 text-preset4">Maximum of ${budgetData.max.toFixed(2)}</div>
            </CardHeader>

            <CardContent className="space-y-4">
                {/* Progress Bar */}
                <Progress value={(budgetData.spent / budgetData.max) * 100} color={`bg-${budgetData.color}`}
                          className="h-6 rounded-sm p-0.5"/>

                {/* Spending Stats */}
                <div className="flex gap-4">
                    <div className={"border-l-4 pl-4 w-1/2"}>
                        <div className="text-gray-500 text-preset5">Spent</div>
                        <div>${budgetData.spent.toFixed(2)}</div>
                    </div>
                    <div className="border-l-4 pl-4 w-1/2">
                        <div className="text-gray-500 text-preset5">Free</div>
                        <div>${budgetData.max - budgetData.spent}</div>
                    </div>
                </div>

                <div className="flex justify-center">
                    <button
                        className="px-8 py-2.5 rounded-lg bg-gray-50 hover:bg-gray-100
                        text-gray-700 text-sm font-medium
                        border border-gray
                        transition-colors duration-200
                        focus:outline-none focus:ring-2 focus:ring-gray-200"
                        onClick={() => setIsAddOpen(true)}
                    >
                        + Add Expense
                    </button>
                </div>

                {/* Latest Spending Section */}
                {/*<div className="p-4 bg-beige200">*/}
                {/*    <div className="flex justify-between items-center mb-2">*/}
                {/*        <div className="text-preset3 text-grey900 font-bold">Latest Spending</div>*/}
                {/*        <button className="flex items-center gap-4 text-preset4 text-gray-500">*/}
                {/*            See All*/}
                {/*            <img src={CaretRight} alt={""}/>*/}
                {/*        </button>*/}
                {/*    </div>*/}

                {/*     Transactions List */}
                {/*    <div className="">*/}
                {/*        {transactions.map((transaction, index) => (*/}
                {/*            <div key={index} className="flex justify-between items-center border-b-2 p-2 last:border-0">*/}

                {/*                <div className={"text-preset5 font-bold text-grey900"}>{transaction.name}</div>*/}

                {/*                <div className="text-right">*/}
                {/*                    <div*/}
                {/*                        className={"text-preset5 font-bold text-grey900"}>-${Math.abs(transaction.amount).toFixed(2)}</div>*/}
                {/*                    <div className="text-gray-500 text-preset5">{transaction.date}</div>*/}
                {/*                </div>*/}

                {/*            </div>*/}
                {/*        ))}*/}
                {/*    </div>*/}
                {/*</div>*/}

                <ExpenseDialog
                    isOpen={isAddOpen}
                    onClose={() => setIsAddOpen(false)}
                    title={budgetData.name}
                    currentAmount={budgetData.spent}
                    targetAmount={budgetData.max}
                    percentage={progressPercentage}
                    type="add"
                    onConfirm={(amount) => handleAdd(amount)}
                    barColor={barColor}
                />

            </CardContent>
        </Card>
    );
};

export default SpendingTracker;