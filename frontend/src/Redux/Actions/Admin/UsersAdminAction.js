// import useDeleteData from "../../../Hook/useDeleteData";
// import { useGetDataToken } from "../../../Hook/useGetData";
// import { ALL_USERS_FAIL, ALL_USERS_SUCCESS, DELETE_USER_FAIL, DELETE_USER_SUCCESS, GET_ERROR } from "../../Types";

import { useEditData } from "../../../Hook/useEditData";
import { useGetDataToken } from "../../../Hook/useGetData";
import { ALL_USERS_SUCCESS, DELETE_USER_SUCCESS, GET_ERROR, UPDATE_USER_ROLE_ADMIN, USER_DETAILS_SUCCESS } from "../../Types";
import useDeleteData from './../../../Hook/useDeleteData';

// get All Users
export const getAllUsers = () => async (dispatch) => {
    try {
        const res = await useGetDataToken(`/api/v1/admin/users`);

        dispatch({
            type: ALL_USERS_SUCCESS,
            payload: res,
            loading: true,
        });
    } catch (error) {
        dispatch({
            type: GET_ERROR,
            payload: "Error " + error
        });
    }
};

//Get one user with id
export const getOneUser = (id) => async (dispatch) => {
    try {
        const res = await useGetDataToken(`/api/v1/admin/user/${id}`);

        dispatch({
            type: USER_DETAILS_SUCCESS,
            payload: res,
            loading: true,
        })
    } catch(err) {
        dispatch({
            type: GET_ERROR,
            payload: "Error " + err,
        });
    }
}

// Delete User
export const deleteUserAdmin = (id) => async (dispatch) => {
    try {
        const res = await useDeleteData(`/api/v1/admin/user/${id}`);

        dispatch({
            type: DELETE_USER_SUCCESS,
            payload: res,
            loading: true,
        });
    } catch (error) {
        dispatch({
            type: GET_ERROR,
            payload: "Error " + error
        });
    }
};

// Update User Role
export const updateUserRole = (id, data) => async (dispatch) => {
    try {
        const res = await useEditData(`/api/v1/admin/user/${id}`, data);
        dispatch({
            type: UPDATE_USER_ROLE_ADMIN,
            payload: res,
            loading: true,
        })
    }catch(err) {
        dispatch({
            type: GET_ERROR,
            payload: "Error " + err,
        })
    }
}

// Clearing Errors
// export const clearErrors = () => async (dispatch) => {
//     dispatch({ type: GET_ERROR });
// };