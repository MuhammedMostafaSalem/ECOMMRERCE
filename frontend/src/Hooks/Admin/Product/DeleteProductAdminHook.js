import { useDispatch, useSelector } from "react-redux";
import { deleteProduct } from "../../../Redux/Actions/Product/ProductAction";
import { useState } from "react";
import { toast } from "react-toastify";

const DeleteProductAdminHook = () => {
    const dispatch = useDispatch();

    const [deleteProdId, setDeleteProdId] = useState('');
    const [showDeleteProd, setShowDeleteProd] = useState(false);

    const handleCloseDeleteProd = () => setShowDeleteProd(false);
    const handleShowDeleteProd = (id) => {
        setDeleteProdId(id)
        setShowDeleteProd(true);
    }

    const deleteProdHandler = async (id) => {
        await dispatch(deleteProduct(id))
        toast('Product Deleted Successfully');
        handleCloseDeleteProd();
    }

    return [
        deleteProdId,
        showDeleteProd,
        handleCloseDeleteProd,
        handleShowDeleteProd,
        deleteProdHandler
    ]
}

export default DeleteProductAdminHook