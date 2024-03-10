import { useState } from "react"
import ViewSearchProductsHook from "../Admin/Product/ViewSearchProductsHook";

const SearchHook = () => {
    const [keyword, setKeyword] = useState('');

    const onChangeSearch = (e) => {
        console.log(e.target.value)
        setKeyword(e.target.value);
    }

    return [keyword, onChangeSearch]
}

export default SearchHook