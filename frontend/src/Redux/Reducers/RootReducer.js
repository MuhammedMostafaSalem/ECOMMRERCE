import { combineReducers } from "redux";
import AuthReducer from './Auth/AuthReducer';
import ForgotPasswordReducer from './Auth/ForgotPasswordReducer';
import ProfileReducer from './User/ProfileReducer';

export default combineReducers({
    AuthReducer: AuthReducer,
    ForgotPasswordReducer: ForgotPasswordReducer,
    ProfileReducer: ProfileReducer,
})