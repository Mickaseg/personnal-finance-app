import AlertIcon from "../../assets/images/icon-bill-due.svg";

const ModalInput = ({
                        label,
                        placeholder,
                        className = "",
                        characterLimit = null,
                        value,
                        onChange,
                        type= "text"
                    }) => {

    const remainingChars = characterLimit ? characterLimit - (value?.length || 0) : null;

    return (

        <div className={"flex flex-col gap-1"}>

            <label className={"text-preset5 font-bold text-grey500"}>
                {label}
            </label>

            <input
                value={value}
                type={type}
                onChange={onChange}
                placeholder={placeholder}
                maxLength={characterLimit}
                className={`border-2 border-grey300 gap-4 px-3 py-3 rounded-xl ${className}`}
            />

            {characterLimit && type === "text" &&  (
                <p className={`text-preset5 ${remainingChars > 0  ? "text-grey500" : "text-red"} flex justify-end gap-2`}>
                    {remainingChars <= 0  ? <img src={AlertIcon} alt={""}/> : null}
                    {remainingChars} characters left
                </p>
            )}

        </div>

    );
};

export default ModalInput;