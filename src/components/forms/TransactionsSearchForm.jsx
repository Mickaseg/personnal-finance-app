import SearchIcon from '../../assets/images/icon-search.svg';
import SortIcon from '../../assets/images/icon-sort-mobile.svg';
import FilterIcon from '../../assets/images/icon-filter-mobile.svg';
import {Input} from "@/components/ui/input";

import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue
} from "@/components/ui/select"


const TransactionsSearchForm = () => {
    return (
        <form className={"flex justify-evenly items-center lg:justify-between"}>

            <div className={"flex border-2 border-grey300 px-3 py-3 rounded-xl items-center"}>
                {/*<Input*/}
                {/*    type="text"*/}
                {/*    value={transactionName}*/}
                {/*    onChange={(e) => {*/}
                {/*        setTransactionName(e.target.value);*/}
                {/*    }}*/}
                {/*    className="pl-7"*/}
                {/*    placeholder="Search transaction"*/}
                {/*/>*/}
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
                    <Select>
                        <SelectTrigger className="w-[120px]">
                            <SelectValue placeholder="Sort by"/>
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value={"latest"}>Latest</SelectItem>
                            <SelectItem value={"oldest"}>Oldest</SelectItem>
                            <SelectItem value={"atoz"}>A to Z</SelectItem>
                            <SelectItem value={"ztoa"}>Z to A</SelectItem>
                            <SelectItem value={"highest"}>Highest</SelectItem>
                            <SelectItem value={"lowest"}>Lowest</SelectItem>
                        </SelectContent>
                    </Select>
                </div>
            </div>

            <div>
                <div className={"md:hidden"}>
                    <img src={FilterIcon} alt={"filter icon"}/>
                </div>
                <div className={"hidden md:flex md:items-center gap-3"}>
                    <Select>
                        <SelectTrigger className="w-[120px]">
                            <SelectValue placeholder="Category"/>
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value={"latest"}>Entertainment</SelectItem>
                        </SelectContent>
                    </Select>
                </div>
            </div>
            {/*</div>*/}

        </form>
    );
};

export default TransactionsSearchForm;