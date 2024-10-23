import SearchIcon from '../../assets/images/icon-search.svg';
import SortIcon from '../../assets/images/icon-sort-mobile.svg';
import FilterIcon from '../../assets/images/icon-filter-mobile.svg';

const TransactionsSearchForm = () => {
    return (
        <form className={"flex justify-evenly items-center lg:justify-between"}>

            <div className={"flex border-2 border-grey300 px-3 py-3 rounded-xl items-center"}>
                <label className={"hidden"}>Search transaction</label>
                <input placeholder={"Search transactions"}></input>
                <img alt="search icon" className={"icon w-4 h-4 ml-2"} src={SearchIcon}/>
            </div>

            {/*TODO : On desktop, separate inputs*/}
            {/*<div className={"lg:flex gap-3"}>*/}
            <div>
                <div className={"md:hidden"}>
                    <label className={"hidden"}>Sort by</label>
                    <img src={SortIcon} alt="sort icon" className={""}/>
                </div>
                <div className={"hidden md:flex md:items-center gap-3"}>
                    <label className={"text-preset4"}>Sort by</label>
                    <select className={"border-2 border-grey300 gap-4 px-3 py-3 rounded-xl cursor-pointer"}>
                        <option className={"cursor-pointer"}>Latest</option>
                        <option>Oldest</option>
                        <option>A to Z</option>
                        <option>Z to A</option>
                        <option>Highest</option>
                        <option>Lowest</option>
                    </select>
                </div>

            </div>

            <div>
                <div className={"md:hidden"}>
                    <img src={FilterIcon} alt={"filter icon"}/>
                </div>
                <div className={"hidden md:flex md:items-center gap-3"}>
                    <label className={"text-preset4"}>Category</label>
                    <select className={"border-2 border-grey300 gap-4 px-3 py-3 rounded-xl"}>
                        <option>All Transactions</option>
                    </select>
                </div>
            </div>
            {/*</div>*/}

        </form>
    );
};

export default TransactionsSearchForm;