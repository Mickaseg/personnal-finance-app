import {useState} from "react";

import ModalSelect from "@/components/inputs/ModalSelect.jsx";
import ModalInput from "@/components/inputs/ModalInput.jsx";

const NewBudgetForm = () => {
    const [inputValue, setInputValue] = useState("");

    return (
        <form className={"flex flex-col gap-4"}>

            <ModalInput
                label={"Pot Name"}
                placeholder={"Travel to Germany"}
                characterLimit={30}
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
            />

            <ModalInput label={"Target"} placeholder={"$"}/>

            <ModalSelect options={["Green"]} label={"Theme"}/>

        </form>
    );
};

export default NewBudgetForm;