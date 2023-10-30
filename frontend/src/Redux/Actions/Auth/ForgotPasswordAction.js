import { useCreateData } from "../../../Hook/useCreateData";
import { useEditData } from "../../../Hook/useEditData";
import { FORGOT_PASSWORD_FAIL, FORGOT_PASSWORD_REQUEST, FORGOT_PASSWORD_SUCCESS, GET_ERROR, RESET_PASSWORD_FAIL, RESET_PASSWORD_REQUEST, RESET_PASSWORD_SUCCESS } from "../../Types";

// Forgot Password
export const forgotPassword = (email) => async (dispatch) => {
    try {
        dispatch({ type: FORGOT_PASSWORD_REQUEST });

        const { data } = await useCreateData(`/api/v1/password/forgot`, email);

        dispatch({
            type: FORGOT_PASSWORD_SUCCESS,
            payload: data
        });
    } catch(e) {
        dispatch({
            type: FORGOT_PASSWORD_FAIL,
            payload: e.response,
        })
    }
}

// Reset Password
export const resetPassword = (token, passwords) => async (dispatch) => {
    try {
        dispatch({ type: RESET_PASSWORD_REQUEST });

        const { data } = await useEditData(`/api/v1/password/reset/${token}`, passwords);

        dispatch({
            type: RESET_PASSWORD_SUCCESS,
            payload: data
        });
    } catch(e) {
        dispatch({
            type: RESET_PASSWORD_FAIL,
            payload: e.response,
        });
    }
}

// Clearing Errors
export const clearErrors = () => async (dispatch) => {
    dispatch({ type: GET_ERROR });
};