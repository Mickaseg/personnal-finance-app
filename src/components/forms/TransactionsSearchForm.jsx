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
import {useEffect, useState} from "react";
import axios from "axios";


const TransactionsSearchForm = ({transactions, setTransactions, originalTransactions, currentPage, setCurrentPage}) => {

    const [categories, setCategories] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState("");
    const [isSorted, setIsSorted] = useState(false);

    useEffect(() => {
        axios.get('http://localhost:5000/api/categories')
            .then((response) => {
                const categories = response.data.map((category) => category.name);
                setCategories(categories);
            })
            .catch((error) => {
                console.error(error);
            });
    }, []);




    const handleSortCategory = (selectedValue) => {
        setCurrentPage(1);
        if (selectedValue === "All") {
            setTransactions(originalTransactions);
            return;
        }
        const filteredCat = originalTransactions.filter((transaction) => transaction.category === selectedValue);
        setTransactions(filteredCat);
    };

    const handleSort = (selectedValue) => {
        setCurrentPage(1);
        switch (selectedValue) {
            case 'latest':
                setTransactions([...originalTransactions].sort((a, b) => new Date(b.date) - new Date(a.date)));
                break;
            case 'oldest':
                setTransactions([...originalTransactions].sort((a, b) => new Date(a.date) - new Date(b.date)));
                break;
            case 'atoz':
                setTransactions([...originalTransactions].sort((a, b) => a.name.localeCompare(b.name)));
                break;
            case 'ztoa':
                setTransactions([...originalTransactions].sort((a, b) => b.name.localeCompare(a.name)));
                break;
            case 'highest':
                setTransactions([...originalTransactions].sort((a, b) => b.amount - a.amount));
                break;
            case 'lowest':
                setTransactions([...originalTransactions].sort((a, b) => a.amount - b.amount));
                break;
            default:
                break;
        }
    }

    const handleSearch = (e) => {
        setCurrentPage(1);
        const searchValue = e.target.value;
        const filteredTransactions = originalTransactions.filter((transaction) => transaction.name.toLowerCase().includes(searchValue.toLowerCase()));
        setTransactions(filteredTransactions);
    }

    console.log(categories)
    return (
        <form className={"flex justify-evenly items-center lg:justify-between"}>
            <div className={"flex border-2 border-grey300 px-3 py-3 rounded-xl items-center"}>

                <label className={"hidden"}>Search transaction</label>
                <input placeholder={"Search transactions"} onChange={handleSearch}></input>
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
                    <Select onValueChange={handleSort}>
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
                    <Select onValueChange={handleSortCategory}>
                        <SelectTrigger className="w-[120px]">
                            <SelectValue placeholder="Category"/>
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value={"All"}>
                                All
                            </SelectItem>
                            {categories.map((category, index) => (
                                <SelectItem key={index} value={category}>
                                    {category}
                                </SelectItem>
                            ))}
                        </SelectContent>
                    </Select>
                </div>
            </div>
            {/*</div>*/}

        </form>
    );
};

export default TransactionsSearchForm;