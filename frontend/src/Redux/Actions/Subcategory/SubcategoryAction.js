import { useCreateData } from "../../../Hook/useCreateData";
import useDeleteData from "../../../Hook/useDeleteData";
import { useEditData } from "../../../Hook/useEditData";
import { useGetData } from "../../../Hook/useGetData";
import { CREATE_SUBCATEGORY, DELETE_SUBCATEGORY, GET_ALL_SUBCATEGORY, GET_ERROR, UPDATE_SUBCATEGORY } from "../../Types";

// create subcategory
export const createSubategory = (formData) => async (dispatch) => {
    try {
        const response = await useCreateData(`/api/v1/subcategories` , formData);

        dispatch({
            type: CREATE_SUBCATEGORY,
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

// get all subcategory
export const getAllSubcategory = () => async(dispatch) => {
    try {
        const response = await useGetData(`/api/v1/subcategories`);

        dispatch({
            type: GET_ALL_SUBCATEGORY,
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
export const updateSubcategory = (id, data) => async (dispatch) => {
    try {
        const response = await useEditData(`/api/v1/subcategory/${id}`, data);
        
        dispatch({
            type: UPDATE_SUBCATEGORY,
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

// delete subcategory
export const deleteSubcategory = (id) => async (dispatch) => {
    try {
        const response = await useDeleteData(`/api/v1/subcategory/${id}`);

        dispatch({
            type: DELETE_SUBCATEGORY,
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