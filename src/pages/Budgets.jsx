import {useEffect, useState} from 'react';
import SpendingTracker from "../components/cards/SpendingTracker.jsx";
import MultiSegmentDonutBudgets from "../components/donuts/MultiSegmentDonutBudgets.jsx";
import BudgetsModal from "../components/modals/BudgetsModal.jsx";
import {getBudgets} from "@/api/BudgetsRequests.jsx";

const Budgets = () => {
    const [isOpenEdit, setIsOpenEdit] = useState(false);
    const [editingBudget, setEditingBudget] = useState(null);

    const [budgets, setBudgets] = useState([]);


    const fetchBudgets = async () => {
        const data = await getBudgets();
        setBudgets(data);
        console.log(budgets)
    };


    useEffect(() => {
        fetchBudgets();
    }, []);


    return (
        <div className={"px-4 pt-6 pb-28 min-h-screen bg-beige200 flex flex-col gap-8 md:px-10 lg:pl-72 lg:pb-6"}>
            <div className={"flex justify-between"}>
                <h1 className={"text-preset1 text-grey900 font-bold"}>Budgets</h1>
                <button className={"text-preset4 font-bold p-4 bg-grey900 text-white rounded-xl"} onClick={() => {
                    setIsOpenEdit(true);
                    setEditingBudget(null);
                }}>
                    + Add New Budget
                </button>
                <BudgetsModal isOpen={isOpenEdit} setIsOpen={setIsOpenEdit} initialData={editingBudget}
                              fetchBudgets={fetchBudgets}/>
            </div>

            <section className={"flex flex-col lg:grid lg:grid-cols-12 gap-6"}>
                <div className={"lg:col-span-5"}>
                    <MultiSegmentDonutBudgets segments={budgets}/>
                </div>

                <div className={"lg:col-span-7 flex flex-col gap-4"}>
                    {budgets.map((budget) =>
                        <SpendingTracker
                            key={budget.id}
                            budgetData={budget}
                            fetchBudgets={fetchBudgets}
                            // transactions={budget.transactions}
                            barColor={"bg-red"}
                            setEditingBudget={setEditingBudget}
                            setIsOpenEdit={setIsOpenEdit}
                        />
                    )}
                </div>
            </section>
        </div>
    );
};

export default Budgets;