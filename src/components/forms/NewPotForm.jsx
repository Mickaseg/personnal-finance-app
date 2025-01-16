import {useState, useEffect} from "react";
import ModalSelect from "@/components/inputs/ModalSelect.jsx";
import ModalInput from "@/components/inputs/ModalInput.jsx";
import {createPot} from "@/api/PotsRequests.jsx";

const NewPotForm = ({initialData, isEditMode, setIsOpen, fetchPots}) => {

    const handleSubmit = async (ev) => {
        ev.preventDefault();
        await createPot(formData);
        await fetchPots();
        console.log(formData);
        setIsOpen(false);
    };

    const [formData, setFormData] = useState({
        name: '',
        target: 0,
        user: "6727c16febe0f7a54c3a3111"
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

    console.log(formData)

    return (
        <form className={"flex flex-col gap-4"} onSubmit={handleSubmit}>
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

            <div className={"w-full flex justify-center"}>
                <button
                    className="w-full bg-grey900 text-white py-4 rounded-xl text-preset4 font-bold"
                    onClick={() => {
                        // Handle form submission
                        setIsOpen(false);
                    }}
                >
                    {isEditMode ? "Save Changes" : "Add Pot"}
                </button>
            </div>
        </form>
    );
};

export default NewPotForm;