import { CREATE_PRODUCT } from "../../Types";

const initail = {
    newProduct: [],
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
        default: 
            return state;
    }
}

export default ProductReducer