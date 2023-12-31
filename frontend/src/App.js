import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./Components/Utilities/Footer/Footer";
import Header from "./Components/Utilities/Header/Header";
import Home from "./Page/Home/Home";
import ShopProductsPage from "./Page/Shop/ShopProductsPage";
import ProductDetailsPage from "./Page/Shop/ProductDetailsPage";
import SearchPage from "./Page/Search/SearchPage";
import CartPage from "./Page/Cart/CartPage";
import LoginSignUpPage from "./Page/Auth/LoginSignUpPage";
import ForgotpasswordPage from "./Page/Auth/ForgotpasswordPage";
import ResetpasswordPage from "./Page/Auth/ResetpasswordPage";
import ShowNavbar from "./Components/Utilities/ShowNavbar/ShowNavbar";
import ShowFooter from './Components/Utilities/ShowFooter/ShowFooter';
import SideBar from './Components/Admin/Sidebar';
import DashboardPage from "./Page/Admin/DashboardPage";
import CategoryAdminPage from "./Page/Admin/CategoryAdminPage";
import ProductsAdminPage from "./Page/Admin/ProductsAdminPage";
import OrdersAdminPage from "./Page/Admin/OrdersAdminPage";
import UsersAdminPage from "./Page/Admin/UsersAdminPage";
import ReviewsAdminPage from "./Page/Admin/ReviewsAdminPage";
import ProfilePage from "./Page/User/ProfilePage";
import UpdateProfilePage from "./Page/User/UpdateProfilePage";
import OrderUserPage from "./Page/User/OrderUserPage";
import UpdatePasswordPage from "./Page/User/UpdatePasswordPage";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loggedUser } from "./Redux/Actions/Auth/AuthActions";
import SubcategoryAdminPage from "./Page/Admin/SubcategoryAdminPage";

function App() {
  const dispatch = useDispatch();
  const {isAuthenticated, user} = useSelector(state => state.AuthReducer)

  useEffect(() => {
    dispatch(loggedUser())
  }, [])
  
return (
  <div className="App">
    <BrowserRouter>
      <ShowNavbar>
        <Header isAuthenticated={isAuthenticated} user={user} />
      </ShowNavbar>

      <Routes>
        <Route index element={<Home />} />
        <Route path="/shop" element={<ShopProductsPage />} />
        <Route path="/product/:id" element={<ProductDetailsPage />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/login" element={<LoginSignUpPage />} />
        <Route path="/password/forgot" element={<ForgotpasswordPage />} />
        <Route path="/password/reset/:token" element={<ResetpasswordPage />} />

        <Route path="/admin" element={<SideBar isAuthenticated={isAuthenticated} user={user}  />}>
          <Route path="/admin/dashboard" element={<DashboardPage />} />
          <Route path="/admin/categories" element={<CategoryAdminPage />} />
          <Route path="/admin/subcategory" element={<SubcategoryAdminPage />} />
          <Route path="/admin/products" element={<ProductsAdminPage />} />
          <Route path="/admin/orders" element={<OrdersAdminPage />} />
          <Route path="/admin/users" element={<UsersAdminPage />} />
          <Route path="/admin/reviews" element={<ReviewsAdminPage />} />
        </Route>

        <Route path="/account" element={<ProfilePage user={user} />} />
        <Route path="/account/update" element={<UpdateProfilePage />} />
        <Route path="/password/update" element={<UpdatePasswordPage />} />
        <Route path="/orders" element={<OrderUserPage />} />
      </Routes>


      <ShowFooter>
      <Footer />
      </ShowFooter>
    </BrowserRouter>
  </div>
  );
}

export default App;
