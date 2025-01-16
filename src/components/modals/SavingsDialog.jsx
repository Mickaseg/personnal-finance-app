import {useState, useMemo} from 'react';
import {Input} from "@/components/ui/input";
import {Button} from "@/components/ui/button";
import Modal from "@/components/modals/Modal.jsx";

const SavingsDialog = ({
                           isOpen,
                           onClose,
                           title,
                           currentAmount,
                           targetAmount,
                           percentage,
                           type,
                           onConfirm,
                           barColor
                       }) => {

    const [amount, setAmount] = useState('');

    // Calculate new amount and percentage based on input
    const {newAmount, newPercentage} = useMemo(() => {
        const inputAmount = Number(amount) || 0;
        const baseAmount = Number(currentAmount) || 0;

        const calculatedAmount = type === 'withdraw'
            ? baseAmount - inputAmount
            : baseAmount + inputAmount;

        const calculatedPercentage = (calculatedAmount / targetAmount) * 100;

        return {
            newAmount: calculatedAmount,
            newPercentage: calculatedPercentage // Allow percentage to go above 100
        };
    }, [amount, currentAmount, targetAmount, type]);

    const handleSubmit = (e) => {
        e.preventDefault();
        onConfirm(newAmount);
        onClose();
    };

    const handleClose = () => {
        setAmount('');
        onClose();
    };

    return (
        <Modal
            isOpen={isOpen}
            onClose={handleClose}
            title={type === 'withdraw' ? `Withdraw from '${title}'` : `Add to '${title}'`}
            footer={
                <Button
                    type="submit"
                    className="w-full bg-grey900 text-white hover:bg-gray-800 py-6"
                    onClick={handleSubmit}
                >
                    {type === 'withdraw' ? 'Confirm Withdrawal' : 'Confirm Addition'}
                </Button>
            }
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
                hendrerit. Pellentesque aliquet nibh nec urna. In nisi neque, aliquet."
        >
            <div className="space-y-6">
                <div className="space-y-1">
                    <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-600">New Amount</span>
                        <span className="text-2xl font-semibold">
                            ${newAmount.toFixed(2)}
                        </span>
                    </div>

                    <div className="relative h-2 bg-gray-100 rounded-full">
                        <div
                            className={`absolute h-full rounded-full ${barColor} transition-all duration-300`}
                            style={{width: `${newPercentage}%`, "maxWidth": "100%"}}
                        />
                    </div>

                    <div className="flex justify-between items-center text-sm">
                        <span>
                            {newPercentage.toFixed(2)}%
                        </span>
                        <span className="text-gray-500">
                            Target of ${Number(targetAmount).toLocaleString()}
                        </span>
                    </div>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="space-y-2">
                        <label className="text-sm text-gray-600">
                            {type === 'withdraw' ? 'Amount to Withdraw' : 'Amount to Add'}
                        </label>
                        <div className="relative">
                            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">$</span>
                            <Input
                                type="number"
                                value={amount}
                                onChange={(e) => {
                                    const value = e.target.value;
                                    if (type === 'withdraw' && Number(value) > currentAmount) {
                                        return;
                                    }
                                    setAmount(value);
                                }}
                                max={type === 'withdraw' ? currentAmount : undefined}
                                className="pl-7"
                                placeholder="0.00"
                            />
                        </div>
                    </div>
                </form>
            </div>
        </Modal>
    );
};

export default SavingsDialog;