import { ADD_TO_CART, DELETE_ONE_CART, GET_ALL_CART, UPDATE_QUANTITY } from "../../Types"

const initail = {
    cartItems: [],
    getAllCart: [],
    deleteOneCart: [],
    editQuantityCart: [],
    loading: true,
}

const CartReducer = (state=initail, action) => {
    switch (action.type) {
        case ADD_TO_CART :
            return {
                ...state,
                cartItems: action.payload,
                loading: false
            }
        case GET_ALL_CART: 
            return {
                ...state,
                getAllCart: action.payload,
                loading: false
            }
        case DELETE_ONE_CART:
            return {
                ...state,
                deleteOneCart: action.payload,
                loading: false,
            }
        case UPDATE_QUANTITY:
            return {
                ...state,
                editQuantityCart: action.payload,
                loading: false,
            }
        default:
            return state;
    }
}

export default CartReducer