import { CREATE_SUBCATEGORY } from "../../Types";

const initail = {
    createSubcategory: [],
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
        default: 
            return state;
    }
}

export default SubcategoryReducer