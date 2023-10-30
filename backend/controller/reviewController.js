// const Product = require("../model/productModel");
// const catchAsyncErrors = require("../middleware/catchAsyncErrors");
// const ErrorHandler = require("../utils/errorHandler");


// // Create New Review or Update the review
// exports.createProductReview = catchAsyncErrors(async (req, res, next) => {
//     const { rating, comment, productId } = req.body;

//     const review = {
//         user: req.user._id,
//         name: req.user.name,
//         // avatar: req.user.avatar,
//         rating: Number(rating),
//         comment,
//     };

//     const product = await Product.findById(productId);

//     const isReviewed = product.reviews.find(
//         (rev) => rev.user.toString() === req.user._id.toString()
//     );

//     if (isReviewed) {
//         product.reviews.forEach((rev) => {
//             if (rev.user.toString() === req.user._id.toString())
//                 (rev.rating = rating), (rev.comment = comment);
//         });
//     } else {
//         product.reviews.push(review);
//         product.numOfReviews = product.reviews.length;
//     }

//     let avg = 0;
//     product.reviews.forEach((rev) => {
//         avg += rev.rating;
//     });

//     product.ratings = avg / product.reviews.length;

//     await product.save({ validateBeforeSave: false });

//     res.status(200).json({
//         status: "success",
//         review
//     });
// });


// // Get All Reviews of a product
// exports.getProductReviews = catchAsyncErrors(async (req, res, next) => {
//     const product = await Product.findById(req.query.id);

//     if (!product) {
//         return next(new ErrorHandler("Product not found", 404));
//     }

//     res.status(200).json({
//         status: "success",
//         reviews: product.reviews,
//     });
// });


// // Delete Review
// exports.deleteReview = catchAsyncErrors(async (req, res, next) => {
//     const product = await Product.findById(req.query.id);

//     if (!product) {
//         return next(new ErrorHandler("Product not found", 404));
//     }

//     const reviews = product.reviews.filter(
//         (rev) => rev._id.toString() !== req.query.id.toString()
//     );

//     let avg = 0;

//     reviews.forEach((rev) => {
//         avg += rev.rating;
//     });

//     let ratings = 0;

//     if (reviews.length === 0) {
//         ratings = 0;
//     } else {
//         ratings = avg / reviews.length;
//     }

//     const numOfReviews = reviews.length;

//     await Product.findByIdAndUpdate(
//         req.query.productId,
//         {
//             reviews,
//             ratings,
//             numOfReviews,
//         },
//         {
//             new: true,
//             runValidators: true,
//             useFindAndModify: false,
//         }
//     );

//     res.status(200).json({
//         status: "success",
//     });
// });




const asyncHandler = require('express-async-handler');
const factory = require('./handlersFactory');
const Review = require('../model/reviewModel');

// Middleware to create filterObject for get reviews In product
exports.createFilterObj = (req, res, next) => {
    let filter = {};
    if (req.params.productId) filter = { product: req.params.productId };
    req.filterObject = filter;
    next();
};

// Allow nested routes
exports.setProductAndUserIds = (req, res, next) => {
    if (!req.body.product) req.body.product = req.params.productId;
    if (!req.body.user) req.body.user = req.user._id;
    next();
};

// Create review
exports.createReview = factory.createOne(Review);

// Get all reviews
exports.getReviews = factory.getAll(Review);

// Get one review by id
exports.getReview = factory.getOne(Review);

// Update review
exports.updateReview = factory.updateOne(Review);

// Delete review
exports.deleteReview = factory.deleteOne(Review);