import {useState, useEffect} from 'react';

const TransactionsTableRow = ({transaction}) => {
    const [avatarSrc, setAvatarSrc] = useState(null);

    useEffect(() => {

        const loadAvatar = async () => {
            try {
                // Use import() to dynamically load the avatar image
                const avatarModule = await import(
                    /* @vite-ignore */
                    `../../${transaction.avatar.slice(2)}`);
                setAvatarSrc(avatarModule.default);
            } catch (error) {
                console.error('Error loading avatar:', error);
                setAvatarSrc(null);
            }
        };

        loadAvatar();
    }, [transaction.avatar]);

    // Parse the date string into a Date object
    const transactionDate = new Date(transaction.date);

    // Custom date formatting function
    const formatDate = (date) => {
        const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
        return `${date.getDate()} ${months[date.getMonth()]} ${date.getFullYear()}`;
    };

    // Format the date using the custom function
    const formattedDate = formatDate(transactionDate);

    return (
        <tr key={transaction.id} className="hover:bg-gray-50">
            <td className="px-6 py-4 whitespace-nowrap">
                <div className="flex items-center">
                    <div
                        className={`h-8 w-8 rounded-full flex items-center justify-center`}>
                        <img src={avatarSrc} alt={""} className={"rounded-full"}/>
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
                <div className="text-sm text-gray-500">{formattedDate}</div>
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-right">
                <div className={`text-sm font-medium ${
                    transaction.amount >= 0 ? 'text-green' : 'text-red'
                }`}>
                    {transaction.amount >= 0 ? '+' : '-'}${Math.abs(transaction.amount).toFixed(2)}
                </div>
            </td>
        </tr>
    );
};

export default TransactionsTableRow;