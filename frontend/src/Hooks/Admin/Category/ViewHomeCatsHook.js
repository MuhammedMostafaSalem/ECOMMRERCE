import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllCategories } from "../../../Redux/Actions/Category/CategoryAction";

const ViewHomeCatsHook = () => {
    const dispatch = useDispatch();

    const categories = useSelector(state => state.CategoryReducer.allCategories);

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


    return [itemsCategory]
}

export default ViewHomeCatsHook