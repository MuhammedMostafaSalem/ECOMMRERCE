import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeReview } from "../../Redux/Actions/Review/ReviewAction";
import { toast } from "react-toastify";

const DeleteReviewHook = () => {
    const dispatch = useDispatch();
    const [idDelete, setIdDelete] = useState('');
    const [showDelete, setShowDelete] = useState(false);
    const handleCloseDelete = () => setShowDelete(false);
    const handleShowDelete = (id) => {
        setIdDelete(id)
        setShowDelete(true);
    }

    const onSubmitDelete = async (id) => {
        await dispatch(removeReview(id))
    }

    const res = useSelector(state => state.ReviewReducer.deleteReview);
    const loading = useSelector(state => state.ReviewReducer.loading);

    useEffect(() => {
        if(loading === false) {
            if(res) {
                if(res.status === 204) {
                    toast('Review Deleted Successfully');
                    handleCloseDelete();
                    setTimeout(() => {
                        window.location.reload();
                    }, 1500)
                }
            }
        }
    }, [loading, res])

    return [
        idDelete,
        showDelete,
        handleCloseDelete,
        handleShowDelete,
        onSubmitDelete
    ]
}

export default DeleteReviewHook