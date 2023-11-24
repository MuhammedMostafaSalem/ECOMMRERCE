import { CREATE_SUBCATEGORY, GET_ALL_SUBCATEGORY } from "../../Types";

const initail = {
    createSubcategory: [],
    allSubcategory: [],
    loading: true,
}

const SubcategoryReducer = (state=initail, action) => {
    switch(action.type) {
        case CREATE_SUBCATEGORY:
            return {
                ...state,
                createSubcategory: action.payload,
                loading: false,
            }
        case GET_ALL_SUBCATEGORY:
            return {
                ...state,
                allSubcategory: action.payload,
                loading: false,
            }
        default: 
            return state;
    }
}

export default SubcategoryReducer