import {useState} from 'react';
import {NavLink} from "react-router-dom";

import LogoSmall from '../../assets/images/logo-small.svg';
import LogoLarge from '../../assets/images/logo-large.svg';

import OverviewIcon from '../../assets/images/icon-nav-overview.svg';
import TransactionsIcon from '../../assets/images/icon-nav-transactions.svg';
import BudgetsIcon from '../../assets/images/icon-nav-budgets.svg';
import PotsIcon from '../../assets/images/icon-nav-pots.svg';
import RecurringBillsIcon from '../../assets/images/icon-nav-recurring-bills.svg';
import MinimizeIcon from '../../assets/images/icon-minimize-menu.svg';

const Navbar = () => {
    const [expanded, setExpanded] = useState(false);

    const handleMinimize = () => {
        setExpanded(!expanded);
    }

    return (<nav
        className={`z-10 bg-grey900 fixed bottom-0 w-screen pt-4 rounded-t-lg  lg:h-screen ${expanded ? "lg:w-64" : "lg:w-24"} transition-all lg:rounded-r-lg lg:rounded-tl-none`}>

        <div className={"flex justify-start lg:p-8"}>
            {expanded ? <img src={LogoLarge} className={"h-6 hidden lg:block whitespace-nowrap w-24"} alt=""/> :
                <img src={LogoSmall} className={"w-6 h-6 hidden lg:flex lg:justify-center"} alt=""/>}
        </div>

        <ul className={"flex justify-evenly lg:flex-col lg:pr-6 lg:gap-4"}>
            <li>
                <NavLink to={"/"}
                         className="text-grey300 font-bold text-center text-preset5 flex flex-col items-center pt-2 pb-3 px-6 rounded-t-lg border-b-8 border-grey900 active:bg-beige200 active:text-grey900 active:border-green lg:flex-row lg:text-preset3 lg:gap-4 lg:px-0 lg:pl-7 lg:border-b-0 lg:border-l-4 lg:rounded-tl-none lg:rounded-r-lg">
                    <img src={OverviewIcon} alt='#' className="icon w-6 h-6"/>
                    <span className={"hidden md:block md:pt-1 lg:hidden"}>Overview</span>
                    {expanded ? <span className={"hidden lg:block whitespace-nowrap"}>Overview</span> : null}
                </NavLink>
            </li>
            <li>
                <NavLink to={"/transactions"}
                         className="text-grey300 font-bold text-center text-preset5 flex flex-col items-center pt-2 pb-3 px-6 rounded-t-lg border-b-8 border-grey900 active:bg-beige200 active:text-grey900 active:border-green lg:flex-row lg:text-preset3 lg:gap-4 lg:px-0 lg:pl-7 lg:border-b-0 lg:border-l-4 lg:rounded-tl-none lg:rounded-r-lg">
                    <img src={TransactionsIcon} alt='#' className="icon"/>
                    <span className={"hidden md:block md:pt-1 lg:hidden"}>Transactions</span>
                    {expanded ? <span className={"hidden lg:block whitespace-nowrap"}>Transactions</span> : null}
                </NavLink>
            </li>
            <li>
                <NavLink to={"/budgets"}
                         className="text-grey300 font-bold text-center text-preset5 flex flex-col items-center pt-2 pb-3 px-6 rounded-t-lg border-b-8 border-grey900 active:bg-beige200 active:text-grey900 active:border-green lg:flex-row lg:text-preset3 lg:gap-4 lg:px-0 lg:pl-7 lg:border-b-0 lg:border-l-4 lg:rounded-tl-none lg:rounded-r-lg">
                    <img src={BudgetsIcon} alt='#' className="icon"/>
                    <span className={"hidden md:block md:pt-1 lg:hidden"}>Budgets</span>

                    {expanded ? <span className={"hidden lg:block whitespace-nowrap"}>Budgets</span> : null}

                </NavLink>
            </li>
            <li>
                <NavLink to={"/pots"}
                         className="text-grey300 font-bold text-center text-preset5 flex flex-col items-center pt-2 pb-3 px-6 rounded-t-lg border-b-8 border-grey900 active:bg-beige200 active:text-grey900 active:border-green lg:flex-row lg:text-preset3 lg:gap-4 lg:px-0 lg:pl-7 lg:border-b-0 lg:border-l-4 lg:rounded-tl-none lg:rounded-r-lg">
                    <img src={PotsIcon} alt='#' className="icon"/>
                    <span className={"hidden md:block md:pt-1 lg:hidden"}>Pots</span>

                    {expanded ? <span className={"hidden lg:block whitespace-nowrap"}>Pots</span> : null}
                </NavLink>
            </li>
            <li>
                <NavLink to={"/recurring-bills"}
                         className="text-grey300 font-bold text-center text-preset5 flex flex-col items-center pt-2 pb-3 px-6 rounded-t-lg border-b-8 border-grey900 active:bg-beige200 active:text-grey900 active:border-green lg:flex-row lg:text-preset3 lg:gap-4 lg:px-0 lg:pl-7 lg:border-b-0 lg:border-l-4 lg:rounded-tl-none lg:rounded-r-lg">

                    <img src={RecurringBillsIcon} alt='#' className="icon"/>
                    <span className={"hidden md:block md:pt-1 lg:hidden"}>Recurring Bills</span>
                    {expanded ? <span className={"hidden lg:block whitespace-nowrap "}>Recurring Bills</span> : null}
                </NavLink>
            </li>
        </ul>

        <button className={"hidden lg:flex lg:pl-8 lg:pt-32 lg:gap-4 lg:items-center"} onClick={handleMinimize}>
            <img src={MinimizeIcon} className={`${expanded ? null : "rotate-180"}`} alt=""/>
            {expanded ? <p className={"text-grey300 font-bold whitespace-nowrap"}>Minimize Menu</p> : null}
        </button>
    </nav>);
};

export default Navbar;