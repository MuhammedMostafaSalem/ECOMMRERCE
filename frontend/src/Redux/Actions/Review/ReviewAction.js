import { useCreateData } from "../../../Hook/useCreateData"
import useDeleteData from "../../../Hook/useDeleteData"
import { useEditData } from "../../../Hook/useEditData"
import { CREATE_REVIEW, DELETE_REVIEW, EDIT_REVIEW } from "../../Types"

//create review
export const createReview = (body) => async (dispatch) => {
    try {
        const response = await useCreateData(`/api/v1/reviews`, body)

        dispatch({
            type: CREATE_REVIEW,
            payload: response,
        })
    }catch(err) {
        dispatch({
            type: CREATE_REVIEW,
            payload: err.response,
        })
    }
}


// edit review
export const updateReview = (id, body) => async (dispatch) => {
    try {
        const response = await useEditData(`/api/v1/review/${id}`, body)

        dispatch({
            type: EDIT_REVIEW,
            payload: response,
        })
    }catch(err) {
        dispatch({
            type: EDIT_REVIEW,
            payload: err.response,
        })
    }
}


// delete review
export const removeReview = (id) => async (dispatch) => {
    try {
        const response = await useDeleteData(`/api/v1/review/${id}`);

        dispatch({
            type: DELETE_REVIEW,
            payload: response,
            loading: true,
        });
    } catch (error) {
        dispatch({
            type: DELETE_REVIEW,
            payload: error.response
        });
    }
};