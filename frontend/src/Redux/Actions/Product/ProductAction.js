import { useCreateDataWithImg } from "../../../Hook/useCreateData";
import { useGetData } from "../../../Hook/useGetData";
import { CREATE_PRODUCT, GET_ALL_PRODUCTS, GET_ERROR } from "../../Types";

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

// get all products
export const getAllProducts = () => async(dispatch) => {
    try {
        const response = await useGetData(`/api/v1/products`);

        dispatch({
            type: GET_ALL_PRODUCTS,
            payload: response,
        });
    } catch(error) {
        dispatch({
            type: GET_ERROR,
            payload: 'Error ' + error,
        });
    }
}