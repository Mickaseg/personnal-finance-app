import OverdueIcon from "../../assets/images/icon-bill-due.svg";
import PaidIcon from "../../assets/images/icon-bill-paid.svg";

const RecurringBillsTable = ({bills}) => {

    return (
        <div className="w-full mx-auto bg-white pt-6">

            {/* Mobile View (default) */}
            <div className="block md:hidden divide-y divide-gray-100">
                {bills.map((bill) => (
                    <div key={bill.id} className="flex items-center justify-between py-3 first:pt-0">
                        <div className="flex items-center space-x-3">
                            <div
                                className={`${bill.color} h-10 w-10 rounded-full flex items-center justify-center font-medium text-sm`}>
                                {bill.name.charAt(0)}
                            </div>
                            <div className="flex flex-col">
                                <span className="text-preset4 font-bold text-gray-900">
                                    {bill.name}
                                </span>
                                <span className="text-preset5 text-green flex gap-2">
                                    {bill.schedule}
                                    {bill.status === "overdue" && <img src={OverdueIcon} alt={""}/>}
                                    {bill.status === "paid" && <img src={PaidIcon} alt={""}/>}
                                </span>
                            </div>
                        </div>
                        <div className="flex flex-col items-end">
                            <span
                                className={`text-preset4 font-bold ${bill.status === "overdue" ? "text-red" : "text-gray-900"}`}>
                                ${bill.amount.toFixed(2)}
                            </span>
                        </div>
                    </div>
                ))}
            </div>

            {/* Tablet/Desktop View */}
            <div className="hidden md:block">
                <table className="min-w-full divide-y divide-gray-200">
                    <thead>
                    <tr>
                        <th className="px-6 py-3 text-left text-preset5 text-gray-500 tracking-wider">
                            Bill Title
                        </th>
                        <th className="px-6 py-3 text-left text-preset5 text-gray-500 tracking-wider">
                            Due Date
                        </th>
                        <th className="px-6 py-3 text-right text-preset5 text-gray-500 tracking-wider">
                            Amount
                        </th>
                    </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                    {bills.map((bill) => (
                        <tr key={bill.id} className="hover:bg-gray-50">
                            <td className="px-6 py-4 whitespace-nowrap">
                                <div className="flex items-center">
                                    <div
                                        className={`${bill.color} h-8 w-8 rounded-full flex items-center justify-center font-medium text-sm`}>
                                        {bill.name.charAt(0)}
                                    </div>
                                    <div className="ml-4">
                                        <div className="text-sm font-medium text-gray-900">
                                            {bill.name}
                                        </div>
                                    </div>
                                </div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                                <div className="text-sm text-green flex gap-3">
                                    {bill.schedule}
                                    {bill.status === "overdue" && <img src={OverdueIcon} alt={""}/>}
                                    {bill.status === "paid" && <img src={PaidIcon} alt={""}/>}
                                </div>

                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-right">
                                <div
                                    className={`text-sm font-medium ${bill.status === "overdue" ? "text-red" : "text-gray-900"}`}>
                                    ${bill.amount.toFixed(2)}
                                </div>
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default RecurringBillsTable;