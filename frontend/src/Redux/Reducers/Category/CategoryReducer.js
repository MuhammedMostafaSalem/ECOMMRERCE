import { CREATE_CATEGORY, DELETE_CATEGORY, GET_ALL_CATEGORIES, GET_ONE_CATEGORY, UPDATE_CATEGORY } from "../../Types";

const initail = {
    allCategories: [],
    updateCategory: [],
    deleteCategory: [],
    createCategory: [],
    getOneCategory: [],
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
        case DELETE_CATEGORY:
            return {
                ...state,
                deleteCategory: action.payload,
                loading: false,
            }
        case CREATE_CATEGORY:
            return {
                createCategory: action.payload,
                loading: false,
            }
        case GET_ONE_CATEGORY: 
            return {
                getOneCategory: action.payload,
                loading: false,
            }
        default: 
            return state;
    }
}

export default CategoryReducer