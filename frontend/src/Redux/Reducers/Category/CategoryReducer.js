import { GET_ALL_CATEGORIES, UPDATE_CATEGORY } from "../../Types";

const initail = {
    allCategories: [],
    updateCategory: [],
    loading: true,
}

const CategoryReducer = (state=initail, action)  => {
    switch(action.type) {
        case GET_ALL_CATEGORIES:
            return {
                ...state,
                allCategories: action.payload,
                loading: false,
            }
        case UPDATE_CATEGORY:
            return {
                ...state,
                updateCategory: action.payload,
                loading: false,
            }
        default: 
            return state;
    }
}

export default CategoryReducer