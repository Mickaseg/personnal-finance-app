import React from 'react';

import ExpensesLegend from "../components/cards/ExpensesLegend.jsx";
import MultiSegmentDonut from "../components/donuts/MultiSegmentDonut.jsx";

import CaretRight from "../assets/images/icon-caret-right.svg";
import PotsIcon from "../assets/images/icon-pot.svg";
import Avatar from "../assets/images/avatars/rina-sato.jpg";

const Overview = () => {

    const data = [
        {title: 'Bills', value: '$1,250', colorLegend: 'border-red'},
        {title: 'Transport', value: '$250', colorLegend: 'border-blue'},
        {title: 'Food', value: '$500', colorLegend: 'border-green'},
        {title: 'Entertainment', value: '$100', colorLegend: 'border-yellow'},
    ];

    return (
        <div className={"px-4 pt-6 pb-28 min-h-screen bg-beige200 flex flex-col gap-8 md:px-10 lg:pl-72"}>

            <h1 className={"text-preset1 text-grey900 font-bold"}>Overview</h1>
            {/*// TODO : Grid for desktop*/}
            {/*BALANCE*/}
            <section className={"flex flex-col gap-3 md:flex-row md:gap-6"}>
                <div className={'p-5 bg-grey900 rounded-xl text-white md:w-1/3'}>
                    <p className={'text-preset4'}>Current balance</p>
                    <p className={"text-preset1 font-bold"}>$4,836.00</p>
                </div>
                <div className={'p-5 bg-white rounded-xl md:w-1/3'}>
                    <p className={'text-preset4'}>Income</p>
                    <p className={"text-preset1 font-bold"}>$3850.00</p>
                </div>
                <div className={'p-5 bg-white rounded-xl md:w-1/3'}>
                    <p className={'text-preset4'}>Expenses</p>
                    <p className={"text-preset1 font-bold"}>$1750.00</p>
                </div>
            </section>

            <div className={"flex flex-col gap-8"}>
                {/*POTS*/}
                <section className={"py-6 px-5 bg-white rounded-xl flex flex-col gap-5 md:p-8"}>

                    <div className={"flex justify-between "}>
                        <h2 className={"text-preset2 font-bold"}>Pots</h2>
                        <div className={"flex gap-2 justify-center items-center"}>
                            <p className={"text-preset4"}>View Details</p>
                            <img alt="carret icon" className={"icon w-2 h-1.5"} src={CaretRight}/>
                        </div>
                    </div>

                    <div className={"flex flex-col md:flex-row gap-5"}>

                        <div className={"bg-beige200 p-5 flex gap-4 rounded-xl md:w-1/3"}>
                            <img src={PotsIcon} alt=""/>
                            <div>
                                <p className={"text-preset4"}>Total Saved</p>
                                <p className={"text-preset1"}>$850</p>
                            </div>
                        </div>

                        <ExpensesLegend segments={data} style={"md:w-2/3 "}/>
                    </div>

                </section>

                {/*  TRANSACTIONS  */}
                <section className={"py-6 px-5 bg-white rounded-xl flex flex-col gap-8 md:p-8"}>

                    <div className={"flex justify-between "}>
                        <h2 className={"text-preset2 font-bold"}>Transactions</h2>
                        <div className={"flex gap-2 justify-center items-center"}>
                            <p className={"text-preset4"}>View Details</p>
                            <img alt="carret icon" className={"icon w-2 h-1.5"} src={CaretRight}/>
                        </div>
                    </div>

                    {/*AVATARS*/}
                    <ul className={'flex flex-col'}>

                        <li className={"flex justify-around w-full items-center border-t-2 pt-5 pb-5"}>
                            <div className={"flex items-center gap-3"}>
                                <img className={"w-8 h-8 rounded-full"} src={Avatar} alt=""/>
                                <p className={"text-preset4 font-bold "}>Savory Bites Bistro</p>
                            </div>
                            <div className={"flex flex-col gap-2"}>
                                <p className={"text-preset4 font-bold text-end"}>-$45.00</p>
                                <p className={"text-preset5 text-grey500"}>19 Aug 2024</p>
                            </div>
                        </li>

                        <li className={"flex justify-around w-full items-center border-t-2 pt-5 pb-5"}>
                            <div className={"flex items-center gap-3"}>
                                <img className={"w-8 h-8 rounded-full"} src={Avatar} alt=""/>
                                <p className={"text-preset4 font-bold "}>Savory Bites Bistro</p>
                            </div>
                            <div className={"flex flex-col gap-2"}>
                                <p className={`text-preset4 font-bold text-end`}>-$45.00</p>
                                <p className={"text-preset5 text-grey500"}>19 Aug 2024</p>
                            </div>
                        </li>

                        <li className={"flex justify-around w-full items-center border-t-2 pt-5 pb-5"}>
                            <div className={"flex items-center gap-3"}>
                                <img className={"w-8 h-8 rounded-full"} src={Avatar} alt=""/>
                                <p className={"text-preset4 font-bold "}>Savory Bites Bistro</p>
                            </div>
                            <div className={"flex flex-col gap-2"}>
                                <p className={"text-preset4 font-bold text-end"}>-$45.00</p>
                                <p className={"text-preset5 text-grey500"}>19 Aug 2024</p>
                            </div>
                        </li>

                        <li className={"flex justify-around w-full items-center border-t-2 pt-5 pb-5"}>
                            <div className={"flex items-center gap-3"}>
                                <img className={"w-8 h-8 rounded-full"} src={Avatar} alt=""/>
                                <p className={"text-preset4 font-bold "}>Savory Bites Bistro</p>
                            </div>
                            <div className={"flex flex-col gap-2"}>
                                <p className={"text-preset4 font-bold text-end"}>-$45.00</p>
                                <p className={"text-preset5 text-grey500"}>19 Aug 2024</p>
                            </div>
                        </li>

                        <li className={"flex justify-around w-full items-center border-t-2 pt-5 pb-5"}>
                            <div className={"flex items-center gap-3"}>
                                <img className={"w-8 h-8 rounded-full"} src={Avatar} alt=""/>
                                <p className={"text-preset4 font-bold "}>Savory Bites Bistro</p>
                            </div>
                            <div className={"flex flex-col gap-2"}>
                                <p className={"text-preset4 font-bold text-end"}>-$45.00</p>
                                <p className={"text-preset5 text-grey500"}>19 Aug 2024</p>
                            </div>
                        </li>

                    </ul>

                </section>

                {/*BUDGETS*/}
                <section className={"py-6 px-5 bg-white rounded-xl flex flex-col gap-2 md:p-8"}>

                    <div className={"flex justify-between "}>
                        <h2 className={"text-preset2 font-bold"}>Budgets</h2>
                        <div className={"flex gap-2 justify-center items-center"}>
                            <p className={"text-preset4"}>View Details</p>
                            <img alt="carret icon" className={"icon w-2 h-1.5"} src={CaretRight}/>
                        </div>
                    </div>


                    <MultiSegmentDonut/>


                </section>

                {/*RECURRING BILLS*/}
                <section className={"py-6 px-5 bg-white rounded-xl flex flex-col gap-8"}>

                    <div className={"flex justify-between"}>
                        <h2 className={"text-preset2 font-bold"}>Recurring Bills</h2>
                        <div className={"flex gap-2 justify-center items-center"}>
                            <p className={"text-preset4"}>View Details</p>
                            <img alt="carret icon" className={"icon w-2 h-1.5"} src={CaretRight}/>
                        </div>
                    </div>

                    <div className={"flex flex-col gap-3"}>
                        <div
                            className={"bg-beige200 flex justify-between py-5 px-4 rounded-xl border-l-4 border-green"}>
                            <p className={"text-grey500 text-preset4"}>Paid Bills</p>
                            <p className={"text-preset4 font-bold"}>$190.00</p>
                        </div>
                        <div className={"bg-beige200 flex justify-between py-5 px-4 rounded-xl border-l-4 border-blue"}>
                            <p className={"text-grey500 text-preset4"}>Paid Bills</p>
                            <p className={"text-preset4 font-bold"}>$190.00</p>
                        </div>
                        <div className={"bg-beige200 flex justify-between py-5 px-4 rounded-xl border-l-4 border-red"}>
                            <p className={"text-grey500 text-preset4"}>Paid Bills</p>
                            <p className={"text-preset4 font-bold"}>$190.00</p>
                        </div>
                    </div>


                </section>
            </div>

        </div>
    );
};

export default Overview;