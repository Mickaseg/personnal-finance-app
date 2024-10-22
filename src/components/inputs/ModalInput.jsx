import React from 'react';

const ModalInput = ({
                        label,
                        placeholder,
                        className = "",
                        characterLimit = null,
                        value,
                        onChange
                    }) => {

    const remainingChars = characterLimit ? characterLimit - (value?.length || 0) : null;

    return (

        <div className={"flex flex-col gap-1"}>

            <label className={"text-preset5 font-bold text-grey500"}>
                {label}
            </label>

            <input
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                maxLength={characterLimit}
                className={`border-2 border-grey300 gap-4 px-3 py-3 rounded-xl ${className}`}
            />

            {characterLimit && (
                <p className={"text-right text-preset5 text-grey500"}>
                    {remainingChars} characters left
                </p>
            )}
            
        </div>

    );
};

export default ModalInput;