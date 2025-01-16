import {useState, useEffect} from "react";
import ModalSelect from "@/components/inputs/ModalSelect.jsx";
import ModalInput from "@/components/inputs/ModalInput.jsx";
import {createPot} from "@/api/PotsRequests.jsx";

const NewPotForm = ({initialData, isEditMode, setIsOpen, fetchPots, onError}) => {

    const [formData, setFormData] = useState({
        name: '',
        target: '',
        user: "6727c16febe0f7a54c3a3111"
    });

    useEffect(() => {
        if (initialData) {
            setFormData({
                name: initialData.name || '',
                target: initialData.targetAmount || '',
                user: initialData.user || "6727c16febe0f7a54c3a3111"
            });
        }
    }, [initialData]);

    const validateForm = () => {
        if (!formData.name.trim()) {
            onError("Pot name is required");
            return false;
        }

        if (formData.target <= 0 || isNaN(formData.target)) {
            onError("Target amount must be greater than 0");
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
            await createPot(formData);

            // if (!response.ok) {
            //     const errorData = await response.json();
            //     onError(errorData.message || "Failed to create pot");
            //     return;
            // }

            // Success path
            await fetchPots();
            setIsOpen(false);
        } catch (error) {
            onError("An unexpected error occurred. Please try again.");
            console.error("Pot creation error:", error);
        }
    };

    return (
        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
            <ModalInput
                label="Pot Name"
                placeholder="Travel to Germany"
                characterLimit={30}
                value={formData.name}
                onChange={(e) => {
                    onError(null); // Clear error on input change
                    setFormData(prev => ({
                        ...prev,
                        name: e.target.value
                    }));
                }}
                required
            />

            <ModalInput
                label="Target"
                placeholder="$"
                type="number"
                min="0"
                value={formData.target}
                onChange={(e) => {
                    onError(null); // Clear error on input change
                    setFormData(prev => ({
                        ...prev,
                        target: parseFloat(e.target.value)
                    }));
                }}
                required
            />

            <ModalSelect
                options={["Green"]}
                label="Theme"
            />

            <div className="w-full flex justify-center">
                <button
                    type="submit"
                    className="w-full bg-grey900 text-white py-4 rounded-xl text-preset4 font-bold hover:bg-grey800 transition-colors"
                >
                    {isEditMode ? "Save Changes" : "Add Pot"}
                </button>
            </div>
        </form>
    );
};

// const handleSubmit = async (ev) => {
//     ev.preventDefault();
//     await createPot(formData);
//     await fetchPots();
//     console.log(formData);
//     setIsOpen(false);
// };

export default NewPotForm;