import {useState} from 'react';
import CaretLeft from '../../assets/images/icon-caret-left.svg';
import CaretRight from '../../assets/images/icon-caret-right.svg';

const TransactionTable = () => {
    const [currentPage, setCurrentPage] = useState(2); // Starting at page 2 as shown in the image
    const itemsPerPage = 3;
    const transactions = [
        {
            id: 1,
            name: 'Bravo Zen Spa',
            category: 'Personal Care',
            date: '29 Aug 2024',
            amount: -25.00,
            bgColor: 'bg-orange-100',
            textColor: 'text-orange-600'
        },
        {
            id: 2,
            name: 'Alpha Analytics',
            category: 'General',
            date: '27 Aug 2024',
            amount: 450.00,
            bgColor: 'bg-teal-100',
            textColor: 'text-teal-600'
        },
        {
            id: 3,
            name: 'Echo Game Store',
            category: 'Lifestyle',
            date: '22 Aug 2024',
            amount: -21.50,
            bgColor: 'bg-purple-100',
            textColor: 'text-purple-600'
        },
        {
            id: 4,
            name: 'Food Merchant',
            category: 'General',
            date: '20 Aug 2024',
            amount: -21.50,
            bgColor: 'bg-gray-100',
            textColor: 'text-gray-600'
        },
        {
            id: 5,
            name: 'Delta Taxi',
            category: 'Transportation',
            date: '19 Aug 2024',
            amount: -15.00,
            bgColor: 'bg-blue-100',
            textColor: 'text-blue-600'
        }
    ];

    // Calculate pagination
    const totalPages = Math.ceil(transactions.length / itemsPerPage);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const paginatedTransactions = transactions.slice(startIndex, startIndex + itemsPerPage);

    // Generate page numbers array
    const getPageNumbers = () => {
        const pages = [];
        for (let i = 1; i <= totalPages; i++) {
            pages.push(i);
        }
        return pages;
    };
    // TODO : Select styling
    return (
        <div className="w-full mx-auto bg-white">
            {/* Mobile View (default) */}
            <div className="block md:hidden divide-y divide-gray-100">
                {paginatedTransactions.map((transaction) => (
                    <div key={transaction.id} className="flex items-center justify-between py-3 px-4">
                        <div className="flex items-center space-x-3">
                            <div
                                className={`${transaction.bgColor} ${transaction.textColor} h-10 w-10 rounded-full flex items-center justify-center font-medium text-sm`}>
                                {transaction.name.charAt(0)}
                            </div>
                            <div className="flex flex-col">
                <span className="text-sm font-medium text-gray-900">
                  {transaction.name}
                </span>
                                <span className="text-xs text-gray-500">
                  {transaction.category}
                </span>
                            </div>
                        </div>
                        <div className="flex flex-col items-end">
              <span className={`text-sm font-medium ${
                  transaction.amount >= 0 ? 'text-green-600' : 'text-gray-900'
              }`}>
                {transaction.amount >= 0 ? '+' : ''}${Math.abs(transaction.amount).toFixed(2)}
              </span>
                            <span className="text-xs text-gray-500">
                {transaction.date}
              </span>
                        </div>
                    </div>
                ))}
            </div>

            {/* Tablet/Desktop View */}
            <div className="hidden md:block">
                <table className="min-w-full divide-y divide-gray-200">
                    <thead className="">
                    <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Recipient / Sender
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Category
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Transaction Date
                        </th>
                        <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Amount
                        </th>
                    </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                    {paginatedTransactions.map((transaction) => (
                        <tr key={transaction.id} className="hover:bg-gray-50">
                            <td className="px-6 py-4 whitespace-nowrap">
                                <div className="flex items-center">
                                    <div
                                        className={`${transaction.bgColor} ${transaction.textColor} h-8 w-8 rounded-full flex items-center justify-center font-medium text-sm`}>
                                        {transaction.name.charAt(0)}
                                    </div>
                                    <div className="ml-4">
                                        <div className="text-sm font-medium text-gray-900">
                                            {transaction.name}
                                        </div>
                                    </div>
                                </div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                                <div className="text-sm text-gray-500">{transaction.category}</div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                                <div className="text-sm text-gray-500">{transaction.date}</div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-right">
                                <div className={`text-sm font-medium ${
                                    transaction.amount >= 0 ? 'text-green' : 'text-red'
                                }`}>
                                    {transaction.amount >= 0 ? '+' : '-'}${Math.abs(transaction.amount).toFixed(2)}
                                </div>
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>

            {/* Pagination Controls - Same for both views */}
            <div className="flex items-center justify-center space-x-2 py-4">

                <button
                    onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                    disabled={currentPage === 1}
                    className="px-4 py-2 border rounded-md text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed flex items-center space-x-1">
                    <img src={CaretLeft} alt="caret left icon"/>
                    <span>Prev</span>
                </button>

                <div className="flex items-center space-x-1">
                    {getPageNumbers().map((page) => (
                        <button
                            key={page}
                            onClick={() => setCurrentPage(page)}
                            className={`w-10 h-10 px-3 py-2 text-sm font-medium rounded-md
                ${currentPage === page
                                ? 'bg-grey900 text-white'
                                : 'text-gray-700 hover:bg-gray-50 border'
                            }`}
                        >
                            {page}
                        </button>
                    ))}
                </div>

                <button
                    onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                    disabled={currentPage === totalPages}
                    className="px-4 py-2 border rounded-md text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed flex items-center space-x-1"
                >
                    <span>Next</span>
                    <img src={CaretRight} alt="caret right icon"/>
                </button>
            </div>
        </div>
    );
};

export default TransactionTable;