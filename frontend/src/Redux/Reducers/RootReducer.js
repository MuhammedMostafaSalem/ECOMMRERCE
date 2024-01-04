import { combineReducers } from "redux";
import AuthReducer from './Auth/AuthReducer';
import ForgotPasswordReducer from './Auth/ForgotPasswordReducer';
import ProfileReducer from './User/ProfileReducer';
import UsersAdminReducer from "./Admin/UsersAdminReducer";
import CategoryReducer from "./Category/CategoryReducer";
import SubcategoryReducer from "./Subcategory/SubcategoryReducer";
import ProductReducer from "./Product/ProductReducer";
import ReviewReducer from "./Review/ReviewReducer";

export default combineReducers({
    AuthReducer: AuthReducer,
    ForgotPasswordReducer: ForgotPasswordReducer,
    ProfileReducer: ProfileReducer,
    UsersAdminReducer: UsersAdminReducer,
    CategoryReducer: CategoryReducer,
    SubcategoryReducer: SubcategoryReducer,
    ProductReducer: ProductReducer,
    ReviewReducer: ReviewReducer,
})