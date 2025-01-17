import {useState, useEffect} from "react";
import ModalSelect from "@/components/inputs/ModalSelect.jsx";
import ModalInput from "@/components/inputs/ModalInput.jsx";
import {createBudget} from "@/api/BudgetsRequests.jsx";

const NewBudgetForm = ({initialData, isEditMode, setIsOpen, fetchBudgets, onError}) => {
    const [formData, setFormData] = useState({
        name: '',
        max: '',
        spent: 0,
        user: "6727c16febe0f7a54c3a3111"
    });

    useEffect(() => {
        if (initialData) {
            setFormData({
                name: initialData.name || '',
                max: initialData.max || '',
                spent: initialData.spent || '',
                user: initialData.user || "6727c16febe0f7a54c3a3111"
            });
        }
    }, [initialData]);

    const validateForm = () => {
        if (!formData.name.trim()) {
            onError("Pot name is required");
            return false;
        }

        if (formData.max <= 0 || isNaN(formData.max)) {
            onError("Maximum amount must be greater than 0");
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

            // Attempt to create pot
            await createBudget(formData);

            // Success path
            await fetchBudgets();
            setIsOpen(false);
        } catch (error) {
            onError("An unexpected error occurred. Please try again.");
            console.error("Pot creation error:", error);
        }
    };

    return (
        <form className={"flex flex-col gap-4"} onSubmit={handleSubmit}>
            <ModalInput
                label={"Budget Name"}
                placeholder={"Entertainment"}
                characterLimit={30}
                value={formData.name}
                onChange={(e) => setFormData(prev => ({
                    ...prev, name: e.target.value
                }))}
            />

            <ModalInput
                label={"Maximum Spend"}
                placeholder={"$"}
                value={formData.max}
                onChange={(e) => setFormData(prev => ({
                    ...prev, max: e.target.value
                }))}
            />

            <ModalSelect
                options={["Green"]}
                label={"Theme"}
            />

            <div className="w-full flex justify-center">
                <button
                    type="submit"
                    className="w-full bg-grey900 text-white py-4 rounded-xl text-preset4 font-bold hover:bg-grey800 transition-colors"
                >
                    {isEditMode ? "Save Changes" : "Add Pot"}
                </button>
            </div>
        </form>);
};

export default NewBudgetForm;