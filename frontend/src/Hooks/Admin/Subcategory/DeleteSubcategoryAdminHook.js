import { useState } from "react";
import { useDispatch } from "react-redux";
import { deleteSubcategory } from "../../../Redux/Actions/Subcategory/SubcategoryAction";
import { toast } from "react-toastify";

const DeleteSubcategoryAdminHook = () => {
    const dispatch = useDispatch();

    const [idSubcatDelete, setIdSubcatDelete] = useState('');
    const [showDeleteSubcat, setShowDeleteSubcat] = useState(false);

    const handleCloseDeleteSubcat = () => setShowDeleteSubcat(false);
    const handleShowDeleteSubcat = (id) => {
        setIdSubcatDelete(id)
        setShowDeleteSubcat(true);
    }

    const deleteSubcatHandler = async (id) => {
        await dispatch(deleteSubcategory(id))
        toast('Subcategory Deleted Successfully');
        handleCloseDeleteSubcat();
    }

    return [
        idSubcatDelete,
        showDeleteSubcat,
        handleCloseDeleteSubcat,
        handleShowDeleteSubcat,
        deleteSubcatHandler,
    ]
}

export default DeleteSubcategoryAdminHook