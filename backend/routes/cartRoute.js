const express = require("express");
const { isAuthenticatedUser } = require("../middleware/auth");
const {
    addProductToCart,
    getLoggedUserCart,
    clearLoggedUserCart,
    updateCartProductCount,
    removeCartProduct
} = require("../controller/cartController");

const router = express.Router();

router.use(isAuthenticatedUser);

router
    .route('/')
    .post(addProductToCart)
    .get(getLoggedUserCart)
    .delete(clearLoggedUserCart);

router.route('/:itemId').put(updateCartProductCount).delete(removeCartProduct);


module.exports = router;