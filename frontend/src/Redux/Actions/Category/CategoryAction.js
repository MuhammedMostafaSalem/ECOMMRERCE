import { useCreateDataWithImg } from "../../../Hook/useCreateData";
import { useEditDataWithImg } from "../../../Hook/useEditData";
import { useGetData } from "../../../Hook/useGetData";
import { CREATE_CATEGORY, DELETE_CATEGORY, GET_ALL_CATEGORIES, GET_ERROR, GET_ONE_CATEGORY, UPDATE_CATEGORY } from "../../Types";
import useDeleteData from './../../../Hook/useDeleteData';

// get all categories
export const getAllCategories = () => async(dispatch) => {
    try {
        const response = await useGetData(`/api/v1/categories`);

        dispatch({
            type: GET_ALL_CATEGORIES,
            payload: response,
        });
    } catch(error) {
        dispatch({
            type: GET_ERROR,
            payload: 'Error ' + error,
        });
    }
}

// update category
export const updateCategory = (id, data) => async (dispatch) => {
    try {
        const response = await useEditDataWithImg(`/api/v1/category/${id}`, data);
        
        dispatch({
            type: UPDATE_CATEGORY,
            payload: response,
            loading: true,
        });
    } catch(err) {
        dispatch({
            type: GET_ERROR,
            payload: "Error " + err,
        });
    }
}

// delete category
export const deleteCategory = (id) => async (dispatch) => {
    try {
        const response = await useDeleteData(`/api/v1/category/${id}`);

        dispatch({
            type: DELETE_CATEGORY,
            payload: response,
            loading: true,
        });
    } catch (error) {
        dispatch({
            type: GET_ERROR,
            payload: "Error " + error
        });
    }
};


// create category
export const createCategory = (formData) => async (dispatch) => {
    try {
        const response = await useCreateDataWithImg(`/api/v1/category/new` , formData);

        dispatch({
            type: CREATE_CATEGORY,
            payload: response,
            loading: true,
        })
    }catch(err) {
        dispatch({
            type: GET_ERROR,
            payload: "Error " + err,
        })
    }
}


// get one category
export const getOneCategory = (id) => async (dispatch) => {
    try {
        const res = await useGetData(`/api/v1/category/${id}`);
        dispatch({
            type: GET_ONE_CATEGORY,
            payload: res,
        })
    }catch(err) {
        dispatch({
            type: GET_ERROR,
            payload: "Error " + err,
        })
    }
}