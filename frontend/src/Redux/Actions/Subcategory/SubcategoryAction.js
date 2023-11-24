import { useCreateData } from "../../../Hook/useCreateData";
import { CREATE_SUBCATEGORY, GET_ERROR } from "../../Types";

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