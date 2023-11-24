import { useState } from "react";
import { useDispatch } from "react-redux";
import { deleteCategory } from "../../../Redux/Actions/Category/CategoryAction";
import { toast } from "react-toastify";

const DeleteCategoryAdminHook = () => {
    const dispatch = useDispatch();
    const [idCatDelet, setIdCatDelet] = useState('');
    const [showDeleteCat, setShowDeleteCat] = useState(false);

    const handleCloseDeleteCat = () => setShowDeleteCat(false);
    const handleShowDeleteCat = (id) => {
        setIdCatDelet(id)
        setShowDeleteCat(true);
    }

    const deleteCatHandler = async (id) => {
        await dispatch(deleteCategory(id))
        toast('Category Deleted Successfully');
        handleCloseDeleteCat();
    }

    return [
        idCatDelet,
        showDeleteCat,
        handleCloseDeleteCat,
        handleShowDeleteCat,
        deleteCatHandler
    ]
}

export default DeleteCategoryAdminHook