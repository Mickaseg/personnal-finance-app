import ModalSelect from "@/components/inputs/ModalSelect.jsx";
import ModalInput from "@/components/inputs/ModalInput.jsx";

const NewBudgetForm = () => {
    return (
        <form className={"flex flex-col gap-4"}>

            <ModalSelect options={["Entertainment"]} label={"Budget Category"}/>

            <ModalInput label={"Maximum Spend"} placeholder={"$"}/>

            <ModalSelect options={["Green"]} label={"Theme"}/>

        </form>
    );
};

export default NewBudgetForm;