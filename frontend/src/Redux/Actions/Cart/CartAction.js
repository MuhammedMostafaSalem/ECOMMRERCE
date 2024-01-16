import { useCreateData } from "../../../Hook/useCreateData";
import { useEditData } from "../../../Hook/useEditData";
import { useGetDataToken } from "../../../Hook/useGetData";
import { ADD_TO_CART, DELETE_ONE_CART, GET_ALL_CART, GET_ERROR, UPDATE_QUANTITY } from "../../Types";
import useDeleteData from './../../../Hook/useDeleteData';

// Add to Cart
export const addItemsToCart = (body) => async(dispatch, getState) => {
    try {
        const response = await useCreateData(`/api/v1/cart`, body);
        
        dispatch({
            type: ADD_TO_CART,
            payload: response
        });
    } catch(err) {
        dispatch({
            type: ADD_TO_CART,
            payload: err.response
        })
    }
}


// Get All Cart
export const getAllCart = () => async (dispatch) => {
    try {
        const res = await useGetDataToken('/api/v1/cart');

        dispatch({
            type: GET_ALL_CART,
            payload: res,
        })
    } catch(err) {
        dispatch({
            type: GET_ERROR,
            payload: 'Error ' + err,
        })
    }
}


// delete one cart
export const deleteOneCart = (id) => async (dispatch) => {
    try {
        const response = await useDeleteData(`/api/v1/cart/${id}`);

        dispatch({
            type: DELETE_ONE_CART,
            payload: response,
            loading: true,
        });
    } catch (err) {
        dispatch({
            type: GET_ERROR,
            payload: "Error " + err
        });
    }
};


// update quantity 
export const updateQuantity = (productId, quantity) => async (dispatch) => {
    try {
        const response = await useEditData(`/api/v1/cart/${productId}`, quantity);
        dispatch({
            type: UPDATE_QUANTITY,
            payload: response,
        })
    }catch(err) {
        dispatch({
            type: UPDATE_QUANTITY,
            payload: err.response,
        })
    }
}