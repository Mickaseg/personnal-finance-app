import BalanceForm from "@/components/forms/BalanceForm.jsx";
import Modal from "@/components/modals/Modal.jsx";
import ModalAlert from "@/components/alert/ModalAlert.jsx";
import {useEffect, useState} from "react";


const BalanceModal = ({isOpen, setIsOpen, initialData = null}) => {

    const isEditMode = !!initialData;
    const [error, setError] = useState(null);

    // Clear error when modal closes
    useEffect(() => {
        if (!isOpen) {
            setError(null);
        }
    }, [isOpen]);

    console.log(initialData)

    return (
        <Modal
            isOpen={isOpen}
            onClose={() => setIsOpen(false)}
            title={"Edit Balance"}
            description={
                "Update your current balance"
            }>
            {error && <ModalAlert message={error}/>}
            <BalanceForm initialData={initialData} setIsOpen={setIsOpen} isEditMode={isEditMode}
                         onError={setError}/>
        </Modal>
    );
};

export default BalanceModal;