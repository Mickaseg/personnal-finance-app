import React from 'react';

const ModalSelect = ({label, options, className}) => {
    return (
        <div className={"flex flex-col gap-1"}>
            <label className={"text-preset5 font-bold text-grey500"}>{label}</label>
            <select name="" id="" className={`border-2 border-grey300 gap-4 px-3 py-3 rounded-xl ${className}`}>
                {options.map((option, index) => (
                    <option key={index} value={option} className={"text-preset4 text-grey900"}>{option}</option>
                ))}
            </select>
        </div>
    );
};

export default ModalSelect;