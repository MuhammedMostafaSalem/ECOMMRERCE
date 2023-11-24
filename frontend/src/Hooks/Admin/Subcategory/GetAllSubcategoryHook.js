import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllSubcategory } from "../../../Redux/Actions/Subcategory/SubcategoryAction";

const GetAllSubcategoryHook = () => {
    const dispatch = useDispatch();

    const subcats = useSelector(state => state.SubcategoryReducer.allSubcategory);
    const loading = useSelector(state => state.SubcategoryReducer.loading);

    useEffect(() => {
        if(subcats) {
            dispatch(getAllSubcategory())
        }
    }, [subcats])

    let allSubcat = []
    try {
        if(subcats.data.data) {
            allSubcat = subcats.data.data;
        }
        else {
            allSubcat = []
        }
    } catch(e) {}

    return [allSubcat, loading]
}

export default GetAllSubcategoryHook