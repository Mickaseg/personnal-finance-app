import React from 'react';

const ExpensesLegend = ({segments, style}) => {


    return (
        <>
            <div className={`grid grid-cols-2 gap-2 ${style} items-center`}>
                {segments && segments.slice(0,4).map((item) => {
                    return (
                        <div className={`border-l-4 pl-4 ${item.colorLegend}`}>
                            <p className={'text-preset5 capitalize'}>{item.name}</p>
                            <p className={'text-preset4 font-bold'}>${item.current}</p>
                        </div>
                    )
                })}
            </div>
        </>
    );
};

export default ExpensesLegend;