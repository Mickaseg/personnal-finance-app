import React from 'react';
import Modal from "@/components/modals/Modal.jsx";
import NewPotForm from "@/components/forms/NewPotForm.jsx";

const DeleteModal = ({element, type, isOpen, setIsOpen}) => {
    return (
        <Modal
            isOpen={isOpen}
            onClose={() => setIsOpen(false)}
            title={"Delete '" + element + "'"}
            description={
                `Are you sure you want to delete this ${type} ? This action cannot be reversed, and all the data inside it will be removed forever.`
            }
            footer={
                <div className={"w-full flex flex-col"}>
                    <button
                        className="w-full bg-red text-white py-4 rounded-xl text-preset4 font-bold"
                        onClick={() => {
                            // Handle form submission
                            setIsOpen(false);
                        }}
                    >
                        Yes, Confirm Deletion
                    </button>
                    <button
                        className={"w-full py-4  text-preset4 text-grey500"}
                        onClick={() => {
                            // Handle form submission
                            setIsOpen(false);
                        }}
                    >
                        No, Go Back
                    </button>
                </div>
            }
        >
        </Modal>
    );
};

export default DeleteModal;