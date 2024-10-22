import React from 'react';

const ExpensesLegend = ({segments, style}) => {


    return (
        <>
            <div className={`grid grid-cols-2 gap-2 ${style}`}>
                {segments && segments.map((item) => {
                    return (
                        <div className={`border-l-4 pl-4 ${item.colorLegend}`}>
                            <p className={'text-preset5'}>{item.title}</p>
                            <p className={'text-preset4 font-bold'}>{item.value}</p>
                        </div>
                    )
                })}
            </div>
        </>
    );
};

export default ExpensesLegend;