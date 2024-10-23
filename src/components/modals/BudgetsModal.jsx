
import NewBudgetForm from "@/components/forms/NewBudgetForm.jsx";
import Modal from "@/components/modals/Modal.jsx";


const BudgetsModal = ({ isOpen, setIsOpen, initialData = null }) => {

    const isEditMode = !!initialData;

    return (
        <Modal
            isOpen={isOpen}
            onClose={() => setIsOpen(false)}
            title={isEditMode ? "Edit Budget" : "Add New Budget"}
            description={
                isEditMode
                    ? "Update your budget details and spending limits."
                    : "Create a budget to manage your spending effectively."
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
            <NewBudgetForm initialData={initialData} />
        </Modal>
    );
};

export default BudgetsModal;