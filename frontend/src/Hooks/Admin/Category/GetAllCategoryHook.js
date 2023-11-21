import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllCategories } from "../../../Redux/Actions/Category/CategoryAction";

const GetAllCategoryHook = () => {
    const dispatch = useDispatch();

    const categories = useSelector(state => state.CategoryReducer.allCategories);
    const loading = useSelector(state => state.CategoryReducer.loading);

    useEffect(() => {
        dispatch(getAllCategories())
    }, [])

    let itemsCategory = []
    try {
        if(categories.data.data) {
            itemsCategory = categories.data.data;
        }
        else {
            itemsCategory = []
        }
    } catch(e) {}


    return [itemsCategory, loading]
}

export default GetAllCategoryHook