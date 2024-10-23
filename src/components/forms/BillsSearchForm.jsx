import SearchIcon from '../../assets/images/icon-search.svg';
import SortIcon from '../../assets/images/icon-sort-mobile.svg';
import FilterIcon from '../../assets/images/icon-filter-mobile.svg';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue
} from "@/components/ui/select"

const BillsSearchForm = () => {
    return (
        <form className={"flex justify-between items-center"}>

            <div className={"flex border-2 border-grey300 px-3 py-3 rounded-xl items-center"}>
                <label className={"hidden"}>Search transaction</label>
                <input placeholder={"Search bills"}></input>
                <img alt="search icon" className={"icon w-4 h-4 ml-2"} src={SearchIcon}/>
            </div>

            {/*TODO : On desktop, separate inputs*/}
            {/*<div className={"lg:flex gap-3"}>*/}
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
        </form>
    );
};

export default BillsSearchForm;