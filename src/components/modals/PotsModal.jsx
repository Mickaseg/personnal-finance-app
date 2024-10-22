import {useEffect, useState} from 'react';
import NewPotForm from "@/components/forms/NewPotForm.jsx";
import Modal from "@/components/modals/Modal.jsx";

const PotsModal = ({
                       isOpen,
                       setIsOpen,
                       initialData = null,
                   }) => {

    const isEditMode = !!initialData;

    return (
        <Modal
            isOpen={isOpen}
            onClose={() => setIsOpen(false)}
            title={isEditMode ? "Edit Pot" : "Add New Pot"}
            description={
                isEditMode
                    ? "Update your pot details and savings targets."
                    : "Create a pot to set savings targets. These can help keep you on track as you save for special purchases."
            }
            footer={
                <div className={"w-full flex justify-center"}>
                    <button
                        className="w-full bg-grey900 text-white py-4 rounded-xl text-preset4 font-bold"
                        onClick={() => {
                            // Handle form submission
                            setIsOpen(false);
                        }}
                    >
                        {isEditMode ? "Save Changes" : "Add Budget"}
                    </button>
                </div>
            }
        >
            <NewPotForm
                initialData={initialData}
            />
        </Modal>
    );
};

export default PotsModal;