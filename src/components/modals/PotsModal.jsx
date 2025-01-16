import { useEffect, useState } from 'react';
import NewPotForm from "@/components/forms/NewPotForm.jsx";
import Modal from "@/components/modals/Modal.jsx";

const PotsModal = ({ isOpen, setIsOpen, initialData = null, fetchPots }) => {
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

        >
            <NewPotForm initialData={initialData} setIsOpen={setIsOpen} isEditMode={isEditMode} fetchPots={fetchPots} />
        </Modal>
    );
};

export default PotsModal;