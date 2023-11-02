import {
    GET_ERROR,
    UPDATE_PROFILE_FAIL,
    UPDATE_PROFILE_REQUEST,
    UPDATE_PROFILE_SUCCESS
} from "../../Types";
import { useEditDataWithImg } from "../../../Hook/useEditData";

// Update Profile
export const updateProfile = (userData) => async (dispatch) => {
    try {
        dispatch({ type: UPDATE_PROFILE_REQUEST });

        const res = await useEditDataWithImg(`/api/v1/users/updateMe`, userData)

        dispatch({
            type: UPDATE_PROFILE_SUCCESS,
            payload: res
        });
    } catch(e) {
        dispatch({
            type: UPDATE_PROFILE_FAIL,
            payload: e.res,
        });
    }
}


// Clearing Errors
export const clearErrors = () => async (dispatch) => {
    dispatch({ type: GET_ERROR });
};