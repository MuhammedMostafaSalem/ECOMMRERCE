import { useEditDataWithImg } from "../../../Hook/useEditData";
import { useGetData } from "../../../Hook/useGetData";
import { GET_ALL_CATEGORIES, GET_ERROR, UPDATE_CATEGORY } from "../../Types";

// getAllCategory
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

// updateCategory
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