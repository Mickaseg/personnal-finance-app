import {useState, useEffect} from "react";
import ModalSelect from "@/components/inputs/ModalSelect.jsx";
import ModalInput from "@/components/inputs/ModalInput.jsx";
import {createBudget, editBudgetMax} from "@/api/BudgetsRequests.jsx";
import {useToast} from "@/hooks/use-toast.ts";
import {BUDGET_COLORS} from "@/constants/colors.js";
import {updateBalance} from "@/api/BalanceRequests.jsx";

const BalanceForm = ({initialData, isEditMode, setIsOpen, fetchBudgets, onError}) => {
    const {toast} = useToast()
    const [formData, setFormData] = useState({
        current: "",
        user: "6727c16febe0f7a54c3a3111"
    });

    useEffect(() => {
        if (initialData) {
            setFormData({
                current: initialData.current,
                user: initialData.user || "6727c16febe0f7a54c3a3111"
            });
        }
    }, [initialData]);

    const validateForm = () => {


        if (isNaN(formData.current)) {
            onError("Balance should be a number");
            return false;
        }

        return true;
    };

    const handleSubmit = async (ev) => {
        ev.preventDefault();

        try {
            // Validate form
            if (!validateForm()) {
                return;
            }
            if (!isEditMode) {
                await createBudget(formData);
            } else {
                await updateBalance(initialData._id, formData)
            }

            // Show success toast
            toast({
                description: isEditMode ? "Pot updated successfully!" : "Pot created successfully!",
                className: "bg-green border-black text-white",
                duration: 3000,
            });

            
            setIsOpen(false);
        } catch (error) {
            onError("An unexpected error occurred. Please try again.");
            console.error("Pot creation error:", error);
        }
    };

    return (
        <form className={"flex flex-col gap-4"} onSubmit={handleSubmit}>

            <ModalInput
                label={"Set Balance"}
                type="number"
                placeholder={"$"}
                value={formData.current}
                onChange={(e) => setFormData(prev => ({
                    ...prev, current: e.target.value
                }))}
            />

            <div className="w-full flex justify-center">
                <button
                    type="submit"
                    className="w-full bg-grey900 text-white py-4 rounded-xl text-preset4 font-bold hover:bg-grey800 transition-colors"
                >
                    {"Define Balance"}
                </button>
            </div>
        </form>);
};

export default BalanceForm;