import React from 'react';

import SearchIcon from '../assets/images/icon-search.svg';
import SortIcon from '../assets/images/icon-sort-mobile.svg';
import TransactionsSearchForm from "./forms/TransactionsSearchForm.jsx";
import TransactionsTable from "./TransactionsTable.jsx";

const Transactions = () => {
    return (
        <div className={"px-4 pt-6 pb-28 min-h-screen bg-beige200 flex flex-col gap-8 md:px-10 lg:pl-72"}>
            <h1 className={"text-preset1 text-grey900 font-bold"}>Transactions</h1>
            <section className={"py-6 px-2 bg-white rounded-xl lg:p-8 flex flex-col gap-6"}>
               <TransactionsSearchForm />
                <TransactionsTable />
            </section>
        </div>
    );
};

export default Transactions;