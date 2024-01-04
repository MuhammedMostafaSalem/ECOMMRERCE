import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import { toast } from "react-toastify";
import { createReview } from "../../Redux/Actions/Review/ReviewAction";

const CreateReviewHook = (id) => {
    const dispatch = useDispatch();
    const [review, setReview] = useState('');
    const [rating, setRating] = useState(0);
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const { user } = useSelector(state => state.AuthReducer);

    let userID = []
    try {
        if(user.user._id) {
            userID = user.user._id;
        }
        else {
            userID = []
        }
    } catch(e) {}

    const onChangeReview = (e) => {
        setReview(e.target.value);
    }
    const onChangeRating = (newRating) => {
        setRating(newRating);
    }

    const validationValues = () => {
        if(rating < 1) {
            toast('The rating must be 1 or greater than 1')
            return;
        }
        if(review === '') {
            toast('Please write a comment')
            return;
        }
    }

    const onSubmit = async () => {
        validationValues();
        await dispatch(createReview({
            review,
            rating,
            product: id,
            user: userID
        }))
    }

    const res = useSelector(state => state.ReviewReducer.createReview);
    const loading = useSelector(state => state.ReviewReducer.loading);

    useEffect(() => {
        if(loading === false) {
            if(res) {
                if(res.status === 201) {
                    toast('Review added successfully');
                    setReview('');
                    setRating(0);
                    handleClose();
                    setTimeout(() => {
                        window.location.reload();
                    }, 1500)
                }
                if(res.status === 400) {
                    toast('You already added review on this product');
                }
            }
        }
    }, [loading, res])

    return [
        review,
        onChangeReview,
        rating,
        onChangeRating,
        show,
        handleClose,
        handleShow,
        onSubmit
    ]
}

export default CreateReviewHook