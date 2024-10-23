import { useState, useEffect } from "react";
import ModalSelect from "@/components/inputs/ModalSelect.jsx";
import ModalInput from "@/components/inputs/ModalInput.jsx";

const NewBudgetForm = ({ initialData }) => {
    const [formData, setFormData] = useState({
        name: '',
        spendingLimit: 0,
        // ... other fields
    });

    useEffect(() => {
        if (initialData) {
            setFormData({
                name: initialData.name || '',
                spendingLimit: initialData.spendingLimit || '',
                // ... other fields
            });
        }
    }, [initialData]);

    return (
        <form className={"flex flex-col gap-4"}>
            <ModalInput
                label={"Budget Name"}
                placeholder={"Entertainment"}
                characterLimit={30}
                value={formData.name}
                onChange={(e) => setFormData(prev => ({
                    ...prev,
                    name: e.target.value
                }))}
            />

            <ModalInput
                label={"Maximum Spend"}
                placeholder={"$"}
                value={formData.spendingLimit}
                onChange={(e) => setFormData(prev => ({
                    ...prev,
                    spendingLimit: e.target.value
                }))}
            />

            <ModalSelect
                options={["Green"]}
                label={"Theme"}
            />
        </form>
    );
};

export default NewBudgetForm;