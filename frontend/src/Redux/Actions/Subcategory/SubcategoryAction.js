import { useCreateData } from "../../../Hook/useCreateData";
import { useGetData } from "../../../Hook/useGetData";
import { CREATE_SUBCATEGORY, GET_ALL_SUBCATEGORY, GET_ERROR } from "../../Types";

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