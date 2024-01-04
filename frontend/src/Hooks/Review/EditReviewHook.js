import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import { toast } from "react-toastify";
import { updateReview } from "../../Redux/Actions/Review/ReviewAction";

const EditReviewHook = () => {
    const dispatch = useDispatch();
    const [ID, setID] = useState('')
    const [editReview, setEditReview] = useState('');
    const [editRating, setEditRating] = useState('');
    const [showEdit, setShowEdit] = useState(false);
    const handleCloseEdit = () => setShowEdit(false);
    const handleShowEdit = (id, rating, review) => {
        setID(id);
        setEditRating(rating);
        setEditReview(review);
        setShowEdit(true);
    }

    const onChangeReview = (e) => {
        setEditReview(e.target.value)
    }
    const onChangeRating = (newRating) => {
        setEditRating(newRating)
    }

    const validationValues = () => {
        if(editRating < 1) {
            toast('The rating must be 1 or greater than 1')
            return;
        }
        if(editReview === '') {
            toast('Please write a comment')
            return;
        }
    }

    const onSubmitEdit = async (ID) => {
        validationValues();
        await dispatch(updateReview(ID, {
            review: editReview,
            rating: editRating
        }))
        handleCloseEdit();
    }

    const res = useSelector(state => state.ReviewReducer.editReview);
    const loading = useSelector(state => state.ReviewReducer.loading);

    useEffect(() => {
        if(loading === false) {
            if(res) {
                if(res.status === 200) {
                    toast('Review updated successfully');
                    setTimeout(() => {
                        window.location.reload();
                    }, 1500)
                }
            }
        }
    }, [loading, res])

    return [
        ID,
        editReview,
        onChangeReview,
        editRating,
        onChangeRating,
        showEdit,
        handleCloseEdit,
        handleShowEdit,
        onSubmitEdit
    ]
}

export default EditReviewHook