// import { ALL_USERS_FAIL, ALL_USERS_SUCCESS, DELETE_USER_FAIL, DELETE_USER_RESET, DELETE_USER_SUCCESS, GET_ERROR } from "../../Types";

import { ALL_USERS_SUCCESS, DELETE_USER_SUCCESS, GET_ERROR, UPDATE_USER_ROLE_ADMIN, USER_DETAILS_SUCCESS } from "../../Types"

const initail =  {
    allUsers: [],
    oneUser: [],
    deleteUser: [],
    updateUserRole: [],
    // error: [],
    loading: true,
}

const UsersAdminReducer = (state=initail, action) => {
    switch (action.type) {
        case ALL_USERS_SUCCESS:
            return {
                ...state,
                loading: false,
                allUsers: action.payload,
            };
        case USER_DETAILS_SUCCESS:
            return {
                oneUser: action.payload,
                loading: false,
            }
        case DELETE_USER_SUCCESS:
            return {
                ...state,
                deleteUser: action.payload,
                loading: false,
            }
        case UPDATE_USER_ROLE_ADMIN:
            return {
                ...state,
                updateUserRole: action.payload,
                loading: false,
            }
        // case ALL_USERS_FAIL:
        //     return {
        //         ...state,
        //         loading: false,
        //         error: action.payload,
        //     };
//         // case DELETE_USER_SUCCESS:
//         //     return {
//         //         ...state,
//         //         loading: false,
//         //         deleteUser: action.payload,
//         //     };
//         // case DELETE_USER_FAIL:
//         //     return {
//         //         ...state,
//         //         loading: false,
//         //         error: action.payload,
//         //     };
//         // case DELETE_USER_RESET:
//         //     return {
//         //         ...state,
//         //         deleteUser: false,
//         //     };
        case GET_ERROR:
            return {
                ...state,
                allUsers: [],
            };
        default:
            return state;
    }
}

export default UsersAdminReducer