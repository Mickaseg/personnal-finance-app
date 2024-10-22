import OverdueIcon from "../../assets/images/icon-bill-due.svg";
import PaidIcon from "../../assets/images/icon-bill-paid.svg";

const RecurringBillsTable = () => {
    const bills = [
        {
            id: 1,
            name: 'Elevate Education',
            amount: 250.00,
            schedule: 'Monthly-1st',
            status: 'paid',
            color: 'bg-emerald-500'
        },
        {id: 2, name: 'Bravo Zen Spa', amount: 70.00, schedule: 'Monthly-3rd', status: 'normal', color: 'bg-orange'},
        {
            id: 3,
            name: 'Charlie Electric Company',
            amount: 10.00,
            schedule: 'Monthly-5th',
            status: 'overdue',
            color: 'bg-red'
        },
        {id: 4, name: 'Delta Taxi', amount: 30.00, schedule: 'Monthly-6th', status: 'overdue', color: 'bg-blue'},
        {id: 5, name: 'Echo Game Store', amount: 5.00, schedule: 'Monthly-12th', status: 'normal', color: 'bg-purple'},
        {id: 6, name: 'Echo Game Store', amount: 10.00, schedule: 'Monthly-16th', status: 'normal', color: 'bg-purple'},
        {
            id: 7,
            name: 'Tango Gas Company',
            amount: 225.00,
            schedule: 'Monthly-22nd',
            status: 'paid',
            color: 'bg-teal-500'
        },
        {
            id: 8,
            name: 'Juliet Restaurant',
            amount: 950.00,
            schedule: 'Monthly-28th',
            status: 'normal',
            color: 'bg-amber-700'
        }
    ];
    return (
        <div className="w-full mx-auto bg-white pt-6">
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
        </div>
    );
};

export default RecurringBillsTable;