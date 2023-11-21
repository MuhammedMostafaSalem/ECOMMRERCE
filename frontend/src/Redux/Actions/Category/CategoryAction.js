import { useGetData } from "../../../Hook/useGetData";
import { GET_ALL_CATEGORIES, GET_ERROR } from "../../Types";

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