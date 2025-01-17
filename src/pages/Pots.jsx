import {useEffect, useState} from 'react';
import PotsModal from "@/components/modals/PotsModal.jsx";
import SavingsCard from "@/components/cards/SavingsCard.jsx";

import {getPots} from "@/api/PotsRequests.jsx";


const Pots = () => {
    const [isOpenEdit, setIsOpenEdit] = useState(false);
    const [editingPot, setEditingPot] = useState(null);

    const [pots, setPots] = useState([]);


    const fetchPots = async () => {
        const data = await getPots();
        setPots(data);
        console.log("fetching pots")
    };

    useEffect(() => {
        fetchPots();
    }, []);

    console.log(pots)
    return (
        <div className={"px-4 pt-6 pb-28 min-h-screen bg-beige200 flex flex-col gap-8 md:px-10 lg:pl-72 lg:pb-4"}>

            <div className={"flex justify-between"}>
                <h1 className={"text-preset1 text-grey900 font-bold"}>Pots</h1>
                <button onClick={() => {
                    setIsOpenEdit(true);
                    setEditingPot(null)
                }}
                        className={"text-preset4 font-bold p-4 bg-grey900 text-white rounded-xl"}>
                    + Add New Pot
                </button>
                <PotsModal isOpen={isOpenEdit} setIsOpen={setIsOpenEdit} initialData={editingPot} fetchPots={fetchPots}/>
            </div>

            {/*SAVINGS*/}
            {pots.length === 0 ? (
                <h2 className={"w-full flex justify-center  items-center text-grey500 text-preset2 font-bold"}>No Pots
                    created yet.</h2>
            ) : (

                <div className={"flex flex-col gap-6 lg:grid lg:grid-cols-2"}>

                    {pots && pots.map((pot) => (
                        <SavingsCard
                            key={pot.id}
                            potData={pot}
                            barColor={"bg-green"}
                            setEditingPot={setEditingPot}
                            setIsOpen={setIsOpenEdit}
                            fetchPots={fetchPots}
                        />
                    ))}
                </div>
            )}
        </div>
    );
};

export default Pots;