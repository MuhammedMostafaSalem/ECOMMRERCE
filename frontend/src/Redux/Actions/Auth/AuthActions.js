import { useCreateData, useCreateDataWithImg } from "../../../Hook/useCreateData"
import { useGetDataToken } from "../../../Hook/useGetData";
import { LOGOUT_FAIL, REGISTER_USER_SUCCESS, REGISTER_USER_REQUEST, REGISTER_USER_FAIL, GET_ERROR, LOGIN_SUCCESS, LOGIN_FAIL, LOGIN_REQUEST, LOGGED_USER_REQUEST, LOGGED_USER_SUCCESS, LOGGED_USER_FAIL, LOGOUT_SUCCESS } from "../../Types";

// Register
export const register = (userData) => async(dispatch) => {
    try {
        dispatch({ type: REGISTER_USER_REQUEST });

        const { data } = await useCreateDataWithImg(`/api/v1/register`, userData);

        dispatch({
            type: REGISTER_USER_SUCCESS,
            payload: data,
        })
    } catch(e) {
        dispatch({
            type: REGISTER_USER_FAIL,
            payload: e.response,
        })
    }
}

// Login
export const loginUser = (userData) => async(dispatch) => {
    try {
        dispatch({ type: LOGIN_REQUEST });

        const res = await useCreateData(`api/v1/login`, userData);

        dispatch({
            type: LOGIN_SUCCESS,
            payload: res,
        })
    } catch(e) {
        dispatch({
            type: LOGIN_FAIL,
            payload: e.response,
        })
    }
}

// Logged User
export const loggedUser = () => async(dispatch) =>{
    try {
        dispatch({ type: LOGGED_USER_REQUEST });

        const { data } = await useGetDataToken(`/api/v1/users/getMe`);

        dispatch({
            type: LOGGED_USER_SUCCESS,
            payload: data,
        })
    } catch(e) {
        dispatch({
            type: LOGGED_USER_FAIL,
            payload: e.response,
        })
    }
}

// Logout User
export const logout = () => async (dispatch) => {
    try {
        await useGetDataToken(`/api/v1/logout`);

        dispatch({ type: LOGOUT_SUCCESS });
    } catch (e) {
        dispatch({
            type: LOGOUT_FAIL,
            payload: e.response
        });
    }
};


// Clearing Errors
export const clearErrors = () => async (dispatch) => {
    dispatch({ type: GET_ERROR });
};