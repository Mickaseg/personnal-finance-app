import {useState} from 'react';

import SpendingTracker from "../components/cards/SpendingTracker.jsx";
import MultiSegmentDonutBudgets from "../components/donuts/MultiSegmentDonutBudgets.jsx";
import Modal from "../components/modals/Modal.jsx";
import NewBudgetForm from "@/components/forms/NewBudgetForm.jsx";


const Budgets = () => {
    const [isOpen, setIsOpen] = useState(false);

    const spendingLimit = 50.00;
    const currentSpent = 18.00;

    const transactions = [
        {name: "Papa Software", amount: -10.00, date: "19 Aug 2024"},
        {name: "Quebec Services", amount: -5.00, date: "15 Aug 2024"},
        {name: "Rome Cloud Service", amount: -10.00, date: "5 Aug 2024"}
    ];

    return (

        <div className={"px-4 pt-6 pb-28 min-h-screen bg-beige200 flex flex-col gap-8 md:px-10 lg:pl-72"}>

            <div className={"flex justify-between"}>
                <h1 className={"text-preset1 text-grey900 font-bold"}>Budgets</h1>
                <button className={"text-preset4 font-bold p-4 bg-grey900 text-white rounded-xl"} onClick={() => setIsOpen(true)}>
                    + Add New Budget
                </button>
                <Modal
                    isOpen={isOpen}
                    onClose={() => setIsOpen(false)}
                    title="Add New Budget"
                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                    footer={
                        <div className={"w-full flex justify-center"}>
                            <button className={" w-full bg-grey900 text-white py-4 rounded-xl text-preset4 font-bold"} onClick={() => setIsOpen(false)}>
                                Add Budget
                            </button>
                        </div>
                    }
                >
                    <NewBudgetForm/>
                </Modal>
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