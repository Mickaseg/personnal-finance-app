const ExpensesLegend = ({segments, style}) => {
    return (
        <div className={`grid grid-cols-2 gap-2 ${style} items-center`}>
            {segments && segments.slice(0, 4).map((item, index) => {
                return (
                    <div
                        key={item._id}
                        className={`border-l-4 pl-4 border-${item.color}`}
                    >
                        <p className={'text-preset5 capitalize'}>{item.name}</p>
                        <p className={'text-preset4 font-bold'}>
                            $ {item.current === 0 || item.spent === 0 ? "0" : (item.current || item.spent)}
                        </p>
                    </div>
                )
            })}
        </div>
    );
};

export default ExpensesLegend;