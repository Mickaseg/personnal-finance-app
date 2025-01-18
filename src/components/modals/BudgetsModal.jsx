import NewBudgetForm from "@/components/forms/NewBudgetForm.jsx";
import Modal from "@/components/modals/Modal.jsx";
import ModalAlert from "@/components/alert/ModalAlert.jsx";
import {useEffect, useState} from "react";


const BudgetsModal = ({isOpen, setIsOpen, initialData = null, fetchBudgets}) => {

    const isEditMode = !!initialData;
    const [error, setError] = useState(null);

    // Clear error when modal closes
    useEffect(() => {
        if (!isOpen) {
            setError(null);
        }
    }, [isOpen]);


    return (
        <Modal
            isOpen={isOpen}
            onClose={() => setIsOpen(false)}
            title={isEditMode ? "Edit Budget" : "Add New Budget"}
            description={
                isEditMode
                    ? "Update your budget details and spending limits."
                    : "Create a budget to manage your spending effectively."
            }>
            {error && <ModalAlert message={error}/>}
            <NewBudgetForm initialData={initialData} setIsOpen={setIsOpen} isEditMode={isEditMode}
                           fetchBudgets={fetchBudgets}
                           onError={setError}/>
        </Modal>
    );
};

export default BudgetsModal;