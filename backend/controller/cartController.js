const asyncHandler = require("express-async-handler");
const ErrorHandler = require("../utils/errorHandler");
const Product = require("../model/productModel");
const Cart = require("../model/cartModel");


const calcTotalCartPrice = async (cart) => {
    let totalPrice = 0;
    cart.products.forEach((prod) => {
        totalPrice += prod.price;
    });

    cart.totalCartPrice = totalPrice;

    await cart.save();

    return totalPrice;
}



// Add product to cart
exports.addProductToCart = asyncHandler(async (req, res, next) => {
    const { productId, color, count } = req.body;

    const product = await Product.findById(productId);

    // Check for available quantity
    if (product.quantity < count) {
        return next(new ErrorHandler('The required quantity is not available now'));
    }

    // 1) Check if there is cart for logged user
    let cart = await Cart.findOne({ cartOwner: req.user._id });

    if (cart) {
        // 2) check if product exists for user cart
        const itemIndex = cart.products.findIndex((p) =>
            p.product.toString() === req.body.productId && p.color === req.body.color && p.count === req.body.count
        );
        if (itemIndex > -1) {
            //product exists in the cart, update the quantity
            const productItem = cart.products[itemIndex];
            productItem.count += req.body.count;
            cart.products[itemIndex] = productItem;
        } else {
            //product does not exists in cart, add new item
            cart.products.push({ product: productId, color, price: product.price*req.body.count, count:count });
        }
    }
    if (!cart) {
        //no cart for user, create new cart
        cart = await Cart.create({
            cartOwner: req.user._id,
            products: [{ product: productId, color, price: product.price*req.body.count, count:count }],
        });
    }

    // Calculate total cart price
    await calcTotalCartPrice(cart);

    return res.status(200).json({
        status: 'success',
        message: 'Product added successfully to your cart',
        numOfCartItems: cart.products.length,
        data: cart,
    });
});



// Update product quantity
exports.updateCartProductCount = asyncHandler(async (req, res, next) => {
    const { itemId } = req.params;
    const { count } = req.body;

    // 1) Check if there is cart for logged user
    const cart = await Cart.findOne({ cartOwner: req.user._id })
    .populate({
        path: 'products.product',
        select: 'title imageCover price quantity ratingsAverage brand category ',
        populate: { path: 'brand', select: 'name -_id', model: 'Brand' },
    })
    .populate({
        path: 'products.product',
        select: 'title imageCover price quantity ratingsAverage brand category',
        populate: { path: 'category', select: 'name -_id', model: 'Category' },
    });

    if (!cart) {
        return next(new ErrorHandler(`No cart exist for this user: ${req.user._id}`, 404));
    }

    const itemIndex = cart.products.findIndex(
        (item) => item._id.toString() === itemId
    );

    // Check for available quantity
    if (cart.products[itemIndex].product.quantity < count) {
        return next(new ErrorHandler('The required quantity is not available now'));
    }

    if (itemIndex > -1) {
        //product exists in the cart, update the quantity
        const productItem = cart.products[itemIndex];
        productItem.count = count;
        productItem.price = count * cart.products[itemIndex].product.price;
        cart.products[itemIndex] = productItem;
    } else {
        return next(new ErrorHandler(`No Product Cart item found for this id: ${itemId}`));
    }

    // Calculate total cart price
    await calcTotalCartPrice(cart);

    return res.status(200).json({
        status: 'success',
        numOfCartItems: cart.products.length,
        data: cart,
    });
});



// Get logged user cart
exports.getLoggedUserCart = asyncHandler(async (req, res, next) => {
    const cart = await Cart.findOne({ cartOwner: req.user._id })
    .populate({
        path: 'products.product',
        select: 'title imageCover price quantity ratingsAverage brand category ',
        populate: { path: 'brand', select: 'name -_id', model: 'Brand' },
    })
    .populate({
        path: 'products.product',
        select: 'title imageCover price quantity ratingsAverage brand category',
        populate: { path: 'category', select: 'name -_id', model: 'Category' },
    });

    if (!cart) {
        return next(new ErrorHandler(`No cart exist for this user: ${req.user._id}`, 404));
    }

    // Reverse the products array
    cart.products.reverse();

    return res.status(200).json({
        status: 'success',
        numOfCartItems: cart.products.length,
        data: cart,
    });
});



// Remove product from cart
exports.removeCartProduct = asyncHandler(async (req, res, next) => {
    const { itemId } = req.params;
    const cart = await Cart.findOneAndUpdate(
        { cartOwner: req.user._id },
        {
            $pull: { products: { _id: itemId } },
        },
        { new: true }
    )
    .populate({
        path: 'products.product',
        select: 'title imageCover ratingsAverage brand category ',
        populate: { path: 'brand', select: 'name -_id', model: 'Brand' },
    })
    .populate({
        path: 'products.product',
        select: 'title imageCover ratingsAverage brand category',
        populate: { path: 'category', select: 'name -_id', model: 'Category' },
    });

    // Calculate total cart price
    await calcTotalCartPrice(cart);

    return res.status(200).json({
        status: 'success',
        numOfCartItems: cart.products.length,
        data: cart,
    });
});



// Clear logged user cart
exports.clearLoggedUserCart = asyncHandler(async (req, res, next) => {
    await Cart.findOneAndDelete({ cartOwner: req.user._id });

    res.status(204).send();
});



