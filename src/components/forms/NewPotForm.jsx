import { useState, useEffect } from "react";
import ModalSelect from "@/components/inputs/ModalSelect.jsx";
import ModalInput from "@/components/inputs/ModalInput.jsx";

const NewPotForm = ({ initialData }) => {

    const [formData, setFormData] = useState({
        name: '',
        target: 0,
        // ... other fields
    });

    useEffect(() => {
        if (initialData) {
            setFormData({
                name: initialData.name || '',
                target: initialData.targetAmount || '',
                // ... other fields
            });
        }
    }, [initialData]);

    return (
        <form className={"flex flex-col gap-4"}>
            <ModalInput
                label={"Pot Name"}
                placeholder={"Travel to Germany"}
                characterLimit={30}
                value={formData.name}
                onChange={(e) => setFormData(prev => ({
                    ...prev,
                    name: e.target.value
                }))}
            />

            <ModalInput
                label={"Target"}
                placeholder={"$"}
                value={formData.target}
                onChange={(e) => setFormData(prev => ({
                    ...prev,
                    target: e.target.value
                }))}
            />

            <ModalSelect
                options={["Green"]}
                label={"Theme"}
            />
        </form>
    );
};

export default NewPotForm;