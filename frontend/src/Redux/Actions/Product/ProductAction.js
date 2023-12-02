import { useCreateDataWithImg } from "../../../Hook/useCreateData";
import useDeleteData from "../../../Hook/useDeleteData";
import { useGetData } from "../../../Hook/useGetData";
import { CREATE_PRODUCT, DELETE_PRODUCT, GET_ALL_PRODUCTS, GET_ERROR } from "../../Types";

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

// delete product
export const deleteProduct = (id) => async (dispatch) => {
    try {
        const response = await useDeleteData(`/api/v1/product/${id}`);

        dispatch({
            type: DELETE_PRODUCT,
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