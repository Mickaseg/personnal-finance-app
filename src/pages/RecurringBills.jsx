import React from 'react';

import BillsIcon  from "../assets/images/icon-recurring-bills.svg";
import BillsSearchForm from "@/components/forms/BillsSearchForm.jsx";
import RecurringBillsTable from "@/components/tables/RecurringBillsTable.jsx";


const RecurringBills = () => {
    const summaryData = {
        paidBills: {
            count: 2,
            amount: 320.00
        },
        upcomingBills: {
            count: 6,
            amount: 1230.00
        },
        dueSoon: {
            count: 2,
            amount: 40.00
        }
    };

    return (
        <div className={"px-4 pt-6 pb-28 min-h-screen bg-beige200 md:px-10 lg:pl-72"}>

            <h1 className={"text-preset1 text-grey900 font-bold pb-8"}>Reccuring Bills</h1>

            <div className={"lg:grid lg:grid-cols-12 lg:gap-6"}>
            {/*TOTAL BILLS*/}
            <div className={"flex flex-col gap-3 pb-6 md:flex-row lg:col-span-4 lg:flex-col"}>
            <section className={"w-full bg-grey900 p-6 text-white rounded-xl flex gap-5 items-center md:flex-col md:items-start md:justify-evenly"}>
                <img src={BillsIcon} alt="" className={"text-white w-10 h-10"}/>
                <div>
                    <h2 className={"text-preset4"}>Total Bills</h2>
                    <p className={"text-preset1"}>$384.98</p>
                </div>
            </section>

            {/*SUMMARY*/}
            <section className={" w-full bg-white rounded-xl p-5"}>
                <h2 className={"text-preset3 text-grey900 font-bold pb-5"}>Summary</h2>

                <div className="flex flex-col">
                    <div className="flex justify-between items-center pb-4 border-b-2">
                        <span className="text-gray-500 text-preset5">Paid Bills</span>
                        <span
                            className="text-gray900 text-preset5 font-bold">{summaryData.paidBills.count} (${summaryData.paidBills.amount.toFixed(2)})</span>
                    </div>

                    <div className="flex justify-between items-center py-4 border-b-2">
                        <span className="text-gray-500 text-preset5">Total Upcoming</span>
                        <span className="text-gray900 text-preset5 font-bold">
              {summaryData.upcomingBills.count} (${summaryData.upcomingBills.amount.toFixed(2)})
            </span>
                    </div>

                    <div className="flex justify-between items-center pt-4">
                        <span className="text-red text-preset5">Due Soon</span>
                        <span className="text-red font-bold">
              {summaryData.dueSoon.count} (${summaryData.dueSoon.amount.toFixed(2)})
            </span>
                    </div>
                </div>

            </section>
            </div>

            {/*BILLS TABLE*/}
            <section className={"bg-white rounded-xl p-5 lg:col-span-8"}>
                <BillsSearchForm/>
                <RecurringBillsTable/>
            </section>
            </div>

        </div>
    );
};

export default RecurringBills;