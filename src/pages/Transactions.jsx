import {useState} from 'react';

import TransactionsSearchForm from "../components/forms/TransactionsSearchForm.jsx";
import TransactionsTable from "../components/tables/TransactionsTable.jsx";

import transactionsData from '../data/data.json';

const Transactions = () => {
    const [transactions, setTransactions] = useState(transactionsData.transactions);
    const [originalTransactions] = useState(transactionsData.transactions); // Store original data

    const [currentPage, setCurrentPage] = useState(1);


    return (
        <div className={"px-4 pt-6 pb-28 min-h-screen bg-beige200 flex flex-col gap-8 md:px-10 lg:pl-72"}>
            <h1 className={"text-preset1 text-grey900 font-bold"}>Transactions</h1>
            <section className={"py-6 px-2 bg-white rounded-xl lg:p-8 flex flex-col gap-6"}>
                <TransactionsSearchForm transactions={transactions}
                                        setTransactions={setTransactions}
                                        originalTransactions={originalTransactions}
                                        currentPage={currentPage}
                                        setCurrentPage={setCurrentPage}
                />
                <TransactionsTable transactions={transactions}
                                   currentPage={currentPage}
                                   setCurrentPage={setCurrentPage}
                />
            </section>
        </div>
    );
};

export default Transactions;