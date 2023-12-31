import { CREATE_SUBCATEGORY, DELETE_SUBCATEGORY, GET_ALL_SUBCATEGORY, UPDATE_SUBCATEGORY } from "../../Types";

const initail = {
    createSubcategory: [],
    allSubcategory: [],
    updateSubcategory: [],
    deleteSubcategory: [],
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
        case UPDATE_SUBCATEGORY:
            return {
                ...state,
                updateSubcategory: action.payload,
                loading: false,
            }
        case DELETE_SUBCATEGORY:
            return {
                ...state,
                deleteSubcategory: action.payload,
                loading: false,
            }
        default: 
            return state;
    }
}

export default SubcategoryReducer