import React from 'react';
import TransactionsSearchForm from "../components/forms/TransactionsSearchForm.jsx";
import TransactionsTable from "../components/tables/TransactionsTable.jsx";
import {Card, CardContent} from "../components/ui/card.tsx";
import ExpensesLegend from "@/components/ExpensesLegend.jsx";
import SpendingTracker from "../components/SpendingTracker.jsx";
import MultiSegmentDonutBudgets from "../components/MultiSegmentDonutBudgets.jsx";


const Budgets = () => {

    const spendingLimit = 50.00;
    const currentSpent = 18.00;

    const transactions = [
        {name: "Papa Software", amount: -10.00, date: "19 Aug 2024"},
        {name: "Quebec Services", amount: -5.00, date: "15 Aug 2024"},
        {name: "Rome Cloud Service", amount: -10.00, date: "5 Aug 2024"}
    ];

    return (

        <div
            className={"px-4 pt-6 pb-28 min-h-screen bg-beige200 flex flex-col gap-8 md:px-10 lg:pl-72"}>

            <div className={"flex justify-between"}>
                <h1 className={"text-preset1 text-grey900 font-bold"}>Budgets</h1>
                <button className={"text-preset4 font-bold p-4 bg-grey900 text-white rounded-xl"}>
                    + Add New Budget
                </button>
            </div>

            <section className={"flex flex-col lg:grid lg:grid-cols-12 gap-6"}>
                {/*SPENDING SUMMARY*/}
                <div className={"lg:col-span-5"}>
                    <MultiSegmentDonutBudgets/>
                </div>

                <div className={"lg:col-span-7 flex flex-col gap-4"}>
                    <SpendingTracker spendingLimit={spendingLimit} currentSpent={currentSpent}
                                     transactions={transactions} barColor={"bg-red"}/>
                    <SpendingTracker spendingLimit={spendingLimit} currentSpent={currentSpent}
                                     transactions={transactions} barColor={"bg-green"}/>
                    <SpendingTracker spendingLimit={spendingLimit} currentSpent={currentSpent}
                                     transactions={transactions} barColor={"bg-yellow"}/>
                </div>
                
            </section>


        </div>
    );
};

export default Budgets;