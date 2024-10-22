import React from 'react';
import SavingsCard from "@/components/cards/SavingsCard.jsx";
import Modal from "@/components/modals/Modal.jsx";
import NewPotForm from "@/components/forms/NewPotForm.jsx";

const Pots = () => {
    const [isOpen, setIsOpen] = React.useState(false);

    const savedAmount = 159.00;
    const targetAmount = 2200;

    return (
        <div className={"px-4 pt-6 pb-28 min-h-screen bg-beige200 flex flex-col gap-8 md:px-10 lg:pl-72"}>

            <div className={"flex justify-between"}>
                <h1 className={"text-preset1 text-grey900 font-bold"}>Pots</h1>
                <button onClick={() => setIsOpen(true)} className={"text-preset4 font-bold p-4 bg-grey900 text-white rounded-xl"}>
                    + Add New Pot
                </button>
                <Modal
                    isOpen={isOpen}
                    onClose={() => setIsOpen(false)}
                    title="Add New Pot"
                    description="Create a pot to set savings targets. These can help keep you on track as you save for special purchases."
                    footer={
                        <div className={"w-full flex justify-center"}>
                            <button className={" w-full bg-grey900 text-white py-4 rounded-xl text-preset4 font-bold"} onClick={() => setIsOpen(false)}>
                                Add Budget
                            </button>
                        </div>
                    }
                >
                    <NewPotForm/>
                </Modal>
            </div>

            {/*SAVINGS*/}
            <div className={"flex flex-col gap-6 lg:grid lg:grid-cols-2"}>
            <SavingsCard savedAmount={savedAmount} targetAmount={targetAmount} barColor={"bg-red"}/>
            <SavingsCard savedAmount={savedAmount} targetAmount={targetAmount} barColor={"bg-red"}/>
            <SavingsCard savedAmount={savedAmount} targetAmount={targetAmount} barColor={"bg-red"}/>
            <SavingsCard savedAmount={savedAmount} targetAmount={targetAmount} barColor={"bg-red"}/>
            </div>
        </div>
    );
};

export default Pots;