import { useDispatch, useSelector } from "react-redux";
import { getAllCategories } from "../../../Redux/Actions/Category/CategoryAction";
import { toast } from "react-toastify";
import { createSubategory } from "../../../Redux/Actions/Subcategory/SubcategoryAction";
import { useState, useEffect } from "react";

const CreateSubcategoryhook = () => {
    const dispatch = useDispatch();

    const [subCatName, setSubCatName] = useState('');
    const [catId, setCatId] = useState('0');
    const [showCreateSubcat, setShowCreateSubcat] = useState(false);

    const handleCloseCreateSubcat = () => setShowCreateSubcat(false);
    const handleShowCreateSubcat = () => {
        setShowCreateSubcat(true);
    }

    useEffect(() => {
        dispatch(getAllCategories());
    }, [dispatch])

    const categories = useSelector(state => state.CategoryReducer.allCategories);
    const subcatData = useSelector(state => state.SubcategoryReducer.createSubcategory);
    const loading = useSelector(state => state.SubcategoryReducer.loading);

    let catData = []
    try {
        if(categories.data.data) {
            catData = categories.data.data;
        }
        else {
            catData = []
        }
    } catch(e) {}

    const onChangeName = (e) => {
        // e.persist();
        console.log(e.target.value)
        setSubCatName(e.target.value)
    }
    const onCatIdChange = (e) => {
        console.log(e.target.value)
        setCatId(e.target.value)
    }

    const validationValues = () => {
        if(catId === '0') {
            toast('Please enter your category')
            return;
        }
        else if(subCatName === '') {
            toast('Please enter subcategory name')
            return;
        }
    }

    const handelSubmit = async (e) => {
        e.preventDefault();
        validationValues();

        await dispatch(createSubategory({
            name: subCatName,
            category: catId
        }));

        handleCloseCreateSubcat();
    }

    useEffect(() => {
        if(loading === false) {
            setSubCatName('');
            setCatId('0');

            if(subcatData) {
                console.log(subcatData)
                toast('Added subcategory successfully')
            }
        }
    }, [loading]);

    return [
        subCatName,
        onChangeName,
        catId,
        onCatIdChange,
        catData,
        handelSubmit,
        showCreateSubcat,
        handleCloseCreateSubcat,
        handleShowCreateSubcat
    ]
}

export default CreateSubcategoryhook