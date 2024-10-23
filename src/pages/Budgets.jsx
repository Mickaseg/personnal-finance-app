import { useState } from 'react';
import SpendingTracker from "../components/cards/SpendingTracker.jsx";
import MultiSegmentDonutBudgets from "../components/donuts/MultiSegmentDonutBudgets.jsx";
import BudgetsModal from "../components/modals/BudgetsModal.jsx";

const Budgets = () => {
    const [isOpenEdit, setIsOpenEdit] = useState(false);
    const [editingBudget, setEditingBudget] = useState(null);

    const mockData = [
        {
            id: 1,
            name: "Entertainment",
            spendingLimit: 100.00,
            currentSpent: 45.00,
            transactions: [
                { name: "Movie Tickets", amount: -15.00, date: "10 Sep 2024" },
                { name: "Concert", amount: -30.00, date: "5 Sep 2024" }
            ],
            barColor: "bg-red"
        },
        {
            id: 2,
            name: "Groceries",
            spendingLimit: 200.00,
            currentSpent: 120.00,
            transactions: [
                { name: "Supermarket", amount: -50.00, date: "12 Sep 2024" },
                { name: "Farmers Market", amount: -70.00, date: "8 Sep 2024" }
            ],
            barColor: "bg-green"
        },
        {
            id: 3,
            name: "Utilities",
            spendingLimit: 150.00,
            currentSpent: 90.00,
            transactions: [
                { name: "Electricity Bill", amount: -60.00, date: "1 Sep 2024" },
                { name: "Water Bill", amount: -30.00, date: "3 Sep 2024" }
            ],
            barColor: "bg-yellow"
        }
    ];

    return (
        <div className={"px-4 pt-6 pb-28 min-h-screen bg-beige200 flex flex-col gap-8 md:px-10 lg:pl-72"}>
            <div className={"flex justify-between"}>
                <h1 className={"text-preset1 text-grey900 font-bold"}>Budgets</h1>
                <button className={"text-preset4 font-bold p-4 bg-grey900 text-white rounded-xl"} onClick={() => {
                    setIsOpenEdit(true);
                    setEditingBudget(null);
                }}>
                    + Add New Budget
                </button>
                <BudgetsModal isOpen={isOpenEdit} setIsOpen={setIsOpenEdit} initialData={editingBudget} />
            </div>

            <section className={"flex flex-col lg:grid lg:grid-cols-12 gap-6"}>
                <div className={"lg:col-span-5"}>
                    <MultiSegmentDonutBudgets />
                </div>

                <div className={"lg:col-span-7 flex flex-col gap-4"}>
                    {mockData.map((budget) =>
                    <SpendingTracker
                        key={budget.id}
                        name={budget.name}
                        spendingLimit={budget.spendingLimit}
                        currentSpent={budget.currentSpent}
                        transactions={budget.transactions}
                        barColor={budget.barColor}
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