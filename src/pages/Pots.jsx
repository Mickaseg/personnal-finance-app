import {useState} from 'react';
import SavingsCard from "@/components/cards/SavingsCard.jsx";
import Modal from "@/components/modals/Modal.jsx";
import NewPotForm from "@/components/forms/NewPotForm.jsx";
import PotsModal from "@/components/modals/PotsModal.jsx";

const Pots = () => {
    const [isOpenEdit, setIsOpenEdit] = useState(false);
    const [editingPot, setEditingPot] = useState(null);

    const mockData = [
        { id: 1, name: 'Vacation', savedAmount: 159.00, targetAmount: 2200, barColor: 'bg-red' },
        { id: 2, name: 'Emergency Fund', savedAmount: 3500.00, targetAmount: 5000, barColor: 'bg-green' },
        { id: 3, name: 'New Car', savedAmount: 1200.00, targetAmount: 15000, barColor: 'bg-blue' },
        { id: 4, name: 'Home Renovation', savedAmount: 3000.00, targetAmount: 20000, barColor: 'bg-yellow' }
    ];

    return (
        <div className={"px-4 pt-6 pb-28 min-h-screen bg-beige200 flex flex-col gap-8 md:px-10 lg:pl-72 lg:pb-0"}>

            <div className={"flex justify-between"}>
                <h1 className={"text-preset1 text-grey900 font-bold"}>Pots</h1>
                <button onClick={() => {
                    setIsOpenEdit(true);
                    setEditingPot(null)
                }}
                        className={"text-preset4 font-bold p-4 bg-grey900 text-white rounded-xl"}>
                    + Add New Pot
                </button>
                <PotsModal isOpen={isOpenEdit} setIsOpen={setIsOpenEdit} initialData={editingPot}/>
            </div>

            {/*SAVINGS*/}
            <div className={"flex flex-col gap-6 lg:grid lg:grid-cols-2"}>
                {mockData.map((pot) => (
                    <SavingsCard
                        key={pot.id}
                        potData={pot}
                        barColor={pot.barColor}
                        setEditingPot={setEditingPot}
                        setIsOpen={setIsOpenEdit}
                    />
                ))}
            </div>
        </div>
    );
};

export default Pots;