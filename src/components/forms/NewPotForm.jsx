import {useState} from "react";

import ModalSelect from "@/components/inputs/ModalSelect.jsx";
import ModalInput from "@/components/inputs/ModalInput.jsx";

const NewBudgetForm = () => {
    const [potName, setPotValue] = useState("");
    const [targetValue, setTargetValue] = useState(0);

    return (
        <form className={"flex flex-col gap-4"}>

            <ModalInput
                label={"Pot Name"}
                placeholder={"Travel to Germany"}
                characterLimit={30}
                value={potName}
                onChange={(e) => setPotValue(e.target.value)}
            />

            <ModalInput
                label={"Target"}
                placeholder={"$"}
                value={targetValue}
                type={"number"}
                onChange={(e) => setTargetValue(e.target.value)}
            />

            <ModalSelect
                options={["Green"]}
                label={"Theme"}
            />

        </form>
    );
};

export default NewBudgetForm;