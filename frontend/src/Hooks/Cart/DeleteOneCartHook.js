import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteOneCart } from "../../Redux/Actions/Cart/CartAction";
import { toast } from "react-toastify";

const DeleteOneCartHook = () => {
    const dispatch = useDispatch();
    const [idOneDelete, setIdOneDelete] = useState('');
    const [showDeleteOneCart, setShowDeleteOneCart] = useState(false);

    const handleCloseDeleteOneCart = () => setShowDeleteOneCart(false);
    const handleShowDeleteOneCart = (id) => {
        setIdOneDelete(id)
        setShowDeleteOneCart(true);
    }

    const deleteOneCartHandler = async (id) => {
        await dispatch(deleteOneCart(id))
        toast('Cart item Deleted Successfully');
        setTimeout(() => {
            handleCloseDeleteOneCart();
        }, 1000);
    }

    return [
        idOneDelete,
        showDeleteOneCart,
        handleCloseDeleteOneCart,
        handleShowDeleteOneCart,
        deleteOneCartHandler
    ]
}

export default DeleteOneCartHook