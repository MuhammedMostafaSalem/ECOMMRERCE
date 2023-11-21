import { GET_ALL_CATEGORIES } from "../../Types";

const initail = {
    allCategories: [],
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
        default: 
            return state;
    }
}

export default CategoryReducer