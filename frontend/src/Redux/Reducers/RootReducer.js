import { combineReducers } from "redux";
import AuthReducer from './Auth/AuthReducer';
import ForgotPasswordReducer from './Auth/ForgotPasswordReducer';
import ProfileReducer from './User/ProfileReducer';
import UsersAdminReducer from "./Admin/UsersAdminReducer";
import CategoryReducer from "./Category/CategoryReducer";

export default combineReducers({
    AuthReducer: AuthReducer,
    ForgotPasswordReducer: ForgotPasswordReducer,
    ProfileReducer: ProfileReducer,
    UsersAdminReducer: UsersAdminReducer,
    CategoryReducer: CategoryReducer,
})