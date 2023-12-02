import { useCreateDataWithImg } from "../../../Hook/useCreateData";
import { CREATE_PRODUCT, GET_ERROR } from "../../Types";

//create product
export const createProduct = (formData) => async (dispatch) => {
    try {
        const res = await useCreateDataWithImg(`/api/v1/product/new` , formData);

        dispatch({
            type: CREATE_PRODUCT,
            payload: res,
            loading: true,
        })
    }catch(err) {
        dispatch({
            type: GET_ERROR,
            payload: "Error " + err.response,
        })
    }
}