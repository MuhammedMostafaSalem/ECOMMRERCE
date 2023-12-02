import { CREATE_PRODUCT, DELETE_PRODUCT, GET_ALL_PRODUCTS } from "../../Types";

const initail = {
    newProduct: [],
    allProduct: [],
    deleteProduct: [],
    loading: true,
}

const ProductReducer = (state=initail, action) => {
    switch(action.type) {
        case CREATE_PRODUCT:
            return {
                ...state,
                newProduct: action.payload,
                loading: false,
            }
        case GET_ALL_PRODUCTS:
            return {
                ...state,
                allProduct: action.payload,
                loading: false,
            }
        case DELETE_PRODUCT:
            return {
                ...state,
                deleteProduct: action.payload,
                loading: false,
            }
        default: 
            return state;
    }
}

export default ProductReducer