import {
    GET_ERROR,
    UPDATE_PASSWORD_FAIL,
    UPDATE_PASSWORD_REQUEST,
    UPDATE_PASSWORD_SUCCESS,
    UPDATE_PROFILE_FAIL,
    UPDATE_PROFILE_REQUEST,
    UPDATE_PROFILE_SUCCESS
} from "../../Types";
import { useEditData, useEditDataWithImg } from "../../../Hook/useEditData";

// Update Profile
export const updateProfile = (userData) => async (dispatch) => {
    try {
        dispatch({ type: UPDATE_PROFILE_REQUEST });

        const { data } = await useEditDataWithImg(`/api/v1/users/updateMe`, userData)

        dispatch({
            type: UPDATE_PROFILE_SUCCESS,
            payload: data
        });
    } catch(e) {
        dispatch({
            type: UPDATE_PROFILE_FAIL,
            payload: e.response,
        });
    }
}

// Update Password
export const updateProfilePassword = (passwords) => async (dispatch) => {
    try {
    dispatch({ type: UPDATE_PASSWORD_REQUEST });

    const { data } = await useEditData(`/api/v1/users/changeMyPassword`,passwords);

    dispatch({
        type: UPDATE_PASSWORD_SUCCESS,
        payload: data
    });
    } catch (error) {
        dispatch({
            type: UPDATE_PASSWORD_FAIL,
            payload: error.response,
        });
    }
};


// Clearing Errors
export const clearErrors = () => async (dispatch) => {
    dispatch({ type: GET_ERROR });
};