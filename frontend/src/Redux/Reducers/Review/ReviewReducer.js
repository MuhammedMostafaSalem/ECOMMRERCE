import { CREATE_REVIEW, DELETE_REVIEW, EDIT_REVIEW } from "../../Types";

const initail = {
    createReview: [],
    editReview: [],
    deleteReview: [],
    loading: true,
}

const ReviewReducer = (state = initail, action) => {
    switch(action.type) {
        case CREATE_REVIEW : 
            return {
                ...state,
                createReview: action.payload,
                loading: false,
            }
        case EDIT_REVIEW :
            return {
                ...state,
                editReview: action.payload,
                loading: false,
            }
        case DELETE_REVIEW:
            return {
                ...state,
                deleteReview: action.payload,
                loading: false,
            }
        default: 
            return state;
    }
}

export default ReviewReducer