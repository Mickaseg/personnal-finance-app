import SearchIcon from '../../assets/images/icon-search.svg';
import SortIcon from '../../assets/images/icon-sort-mobile.svg';
import FilterIcon from '../../assets/images/icon-filter-mobile.svg';

const TransactionsSearchForm = () => {
    return (
        <form className={"flex justify-between items-center"}>

            <div className={"flex border-2 border-grey300 px-3 py-3 rounded-xl items-center"}>
                <label className={"hidden"}>Search transaction</label>
                <input placeholder={"Search bills"}></input>
                <img alt="search icon" className={"icon w-4 h-4 ml-2"} src={SearchIcon}/>
            </div>

            {/*TODO : On desktop, separate inputs*/}
            {/*<div className={"lg:flex gap-3"}>*/}
            <div>
                <div className={"md:hidden"}>
                    <label className={"hidden"}>Sort by</label>
                    <img src={SortIcon} alt="sort icon"/>
                </div>
                <div className={"hidden md:flex md:items-center gap-3"}>
                    <label className={"text-preset4"}>Sort by</label>
                    <select className={"border-2 border-grey300 gap-4 px-3 py-3 rounded-xl"}>
                        <option>Latest</option>
                    </select>
                </div>

            </div>

        </form>
    );
};

export default TransactionsSearchForm;