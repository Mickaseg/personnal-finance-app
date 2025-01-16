import {useEffect, useState} from 'react';
import NewPotForm from "@/components/forms/NewPotForm.jsx";
import Modal from "@/components/modals/Modal.jsx";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { XCircle } from "lucide-react";

const PotsModal = ({isOpen, setIsOpen, initialData = null, fetchPots}) => {
    const isEditMode = !!initialData;
    const [error, setError] = useState(null);

    // Clear error when modal closes
    useEffect(() => {
        if (!isOpen) {
            setError(null);
        }
    }, [isOpen]);

    // Error component
    const ErrorAlert = ({message}) => (
        <Alert variant="destructive" className="pt-4">
            <XCircle className="h-4 w-4"/>
            <AlertDescription>{message}</AlertDescription>
        </Alert>
    );

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
            {error && <ErrorAlert message={error} />}
            <NewPotForm initialData={initialData} setIsOpen={setIsOpen} isEditMode={isEditMode} fetchPots={fetchPots} onError={setError}/>
        </Modal>
    );
};

export default PotsModal;