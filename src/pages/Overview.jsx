import React, {useEffect, useState} from 'react';

import ExpensesLegend from "../components/cards/ExpensesLegend.jsx";
import MultiSegmentDonut from "../components/donuts/MultiSegmentDonut.jsx";

import CaretRight from "../assets/images/icon-caret-right.svg";
import PotsIcon from "../assets/images/icon-pot.svg";
import Avatar from "../assets/images/avatars/rina-sato.jpg";
import {getBalance} from "@/api/BalanceRequests.jsx";
import {getPots, getTotalSavings} from "@/api/PotsRequests.jsx";
import {getBudgets} from "@/api/BudgetsRequests.jsx";
import BalanceModal from "@/components/modals/BalanceModal.jsx";
import ExpenseDialog from "@/components/modals/ExpenseDialog.jsx";


const Overview = () => {
    const [balance, setBalance] = useState([]);
    const [savings, setSavings] = useState();
    const [pots, setPots] = useState([]);
    const [budgets, setBudgets] = useState([]);
    const [openBalanceEdit, setOpenBalanceEdit] = useState(false)
    const [editingBalance, setEditingBalance] = useState(null);

    const fetchBalance = async () => {
        const data = await getBalance();
        setBalance(data[0]);
    };

    useEffect(() => {

        fetchBalance()

        getTotalSavings().then((response) => {
            setSavings(response.totalBalance)
        })

        getPots().then((response) => {
            setPots(response)
        })

        getBudgets().then((response) => {
            setBudgets(response)
        })

    }, []);

    console.log(balance)

    return (
        <div className={"px-4 pt-6 pb-28 min-h-screen bg-beige200 flex flex-col gap-8 md:px-10 lg:pl-72 lg:pb-6"}>
            <div className={"flex justify-between"}>
                <h1 className={"text-preset1 text-grey900 font-bold"}>Overview</h1>
                <button className={"text-preset4 font-bold p-4 bg-grey900 text-white rounded-xl"} onClick={() => {
                    setOpenBalanceEdit(true);
                    setEditingBalance(null);
                }}>
                    Set Balance
                </button>
                <BalanceModal
                    isOpen={openBalanceEdit}
                    setIsOpen={setOpenBalanceEdit}
                    initialData={balance[0]}
                />
            </div>

            {/*// TODO : Grid for desktop*/}
            {/*BALANCE*/}
            <section className={"flex flex-col gap-3 md:flex-row md:gap-6"}>
                <div className={'p-5 bg-grey900 rounded-xl text-white md:w-1/3'}>
                    <p className={'text-preset4'}>Current balance</p>
                    <p className={"text-preset1 font-bold"}>${balance.current}</p>
                </div>
                <div className={'p-5 bg-white rounded-xl md:w-1/3'}>
                    <p className={'text-preset4'}>Income</p>
                    <p className={"text-preset1 font-bold text-green"}>+${balance.income}</p>
                </div>
                <div className={'p-5 bg-white rounded-xl md:w-1/3'}>
                    <p className={'text-preset4'}>Expenses</p>
                    <p className={"text-preset1 font-bold text-red"}>-${balance.expenses}</p>
                </div>
            </section>

            <div className={"flex flex-col gap-8 parent"}>

                {/*POTS*/}
                <section
                    className={"py-6 px-5 bg-white order-1 rounded-xl flex flex-col gap-5  lg:h-[218px] justify-center div1"}>

                    <div className={"flex justify-between "}>
                        <h2 className={"text-preset2 font-bold"}>Pots</h2>
                        <div className={"flex gap-2 justify-center items-center"}>
                            <p className={"text-preset4"}>View Details</p>
                            <img alt="carret icon" className={"icon w-2 h-1.5"} src={CaretRight}/>
                        </div>
                    </div>

                    <div className={"flex flex-col md:flex-row gap-5"}>

                        <div className={"bg-beige200 p-5 flex gap-4 rounded-xl md:w-1/3 items-center"}>
                            <img src={PotsIcon} alt="" className={"w-10 h-10"}/>
                            <div>
                                <p className={"text-preset4"}>Total Saved</p>
                                <p className={"text-preset1"}>${savings}</p>
                            </div>
                        </div>

                        <ExpensesLegend segments={pots} style={"md:w-2/3 "}/>
                    </div>

                </section>

                {/*  TRANSACTIONS  */}
                <section
                    className={"py-6 px-5 bg-white order-2 rounded-xl flex flex-col gap-8 md:p-8 lg:h-[520px] justify-center div3"}>

                    <div className={"flex justify-between"}>
                        <h2 className={"text-preset2 font-bold"}>Transactions</h2>
                        <div className={"flex gap-2 justify-center items-center"}>
                            <p className={"text-preset4"}>View Details</p>
                            <img alt="carret icon" className={"icon w-2 h-1.5"} src={CaretRight}/>
                        </div>
                    </div>

                    {/*AVATARS*/}
                    <ul className={'flex flex-col'}>

                        <li className={"flex justify-between w-full items-center border-t-2 pt-5 pb-5 first:border-0 first:pt-0"}>
                            <div className={"flex items-center gap-3"}>
                                <img className={"w-8 h-8 rounded-full"} src={Avatar} alt=""/>
                                <p className={"text-preset4 font-bold "}>Savory Bites Bistro</p>
                            </div>
                            <div className={"flex flex-col gap-2"}>
                                <p className={"text-preset4 font-bold text-end"}>-$45.00</p>
                                <p className={"text-preset5 text-grey500"}>19 Aug 2024</p>
                            </div>
                        </li>

                        <li className={"flex justify-between w-full items-center border-t-2 pt-5 pb-5 first:border-0 first:pt-0 "}>
                            <div className={"flex items-center gap-3"}>
                                <img className={"w-8 h-8 rounded-full"} src={Avatar} alt=""/>
                                <p className={"text-preset4 font-bold "}>Savory Bites Bistro</p>
                            </div>
                            <div className={"flex flex-col gap-2"}>
                                <p className={`text-preset4 font-bold text-end`}>-$45.00</p>
                                <p className={"text-preset5 text-grey500"}>19 Aug 2024</p>
                            </div>
                        </li>

                        <li className={"flex justify-between w-full items-center border-t-2 pt-5 pb-5 first:border-0 first:pt-0 "}>
                            <div className={"flex items-center gap-3"}>
                                <img className={"w-8 h-8 rounded-full"} src={Avatar} alt=""/>
                                <p className={"text-preset4 font-bold "}>Savory Bites Bistro</p>
                            </div>
                            <div className={"flex flex-col gap-2"}>
                                <p className={"text-preset4 font-bold text-end"}>-$45.00</p>
                                <p className={"text-preset5 text-grey500"}>19 Aug 2024</p>
                            </div>
                        </li>

                        <li className={"flex justify-between w-full items-center border-t-2 pt-5 pb-5 first:border-0 first:pt-0 "}>
                            <div className={"flex items-center gap-3"}>
                                <img className={"w-8 h-8 rounded-full"} src={Avatar} alt=""/>
                                <p className={"text-preset4 font-bold "}>Savory Bites Bistro</p>
                            </div>
                            <div className={"flex flex-col gap-2"}>
                                <p className={"text-preset4 font-bold text-end"}>-$45.00</p>
                                <p className={"text-preset5 text-grey500"}>19 Aug 2024</p>
                            </div>
                        </li>

                        <li className={"flex justify-between w-full items-center border-t-2 pt-5 pb-5 first:border-0 first:pt-0 "}>
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
                <section
                    className={"py-6 px-5 bg-white order-3 rounded-xl flex flex-col gap-2 md:p-8 lg:h-[410px] justify-center lg:order-2 div2"}>

                    <div className={"flex justify-between "}>
                        <h2 className={"text-preset2 font-bold"}>Budgets</h2>
                        <div className={"flex gap-2 justify-center items-center"}>
                            <p className={"text-preset4"}>View Details</p>
                            <img alt="carret icon" className={"icon w-2 h-1.5"} src={CaretRight}/>
                        </div>
                    </div>


                    <MultiSegmentDonut segments={budgets}/>

                </section>

                {/*RECURRING BILLS*/}
                <section className={"py-6 px-5 bg-white order-4 rounded-xl flex flex-col gap-8 justify-center div4"}>

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