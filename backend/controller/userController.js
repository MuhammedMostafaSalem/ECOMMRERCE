const crypto = require("crypto");
const ErrorHandler = require("../utils/errorHandler");
const sendToken = require("../utils/jwtToken");
const sendEmail = require("../utils/sendEmail");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const User = require("../model/userModel");
const cloudinary = require("cloudinary");


// Get User Detail
exports.getUserDetails = catchAsyncErrors(async (req, res, next) => {
    const user = await User.findById(req.user.id);

    res.status(200).json({
        status: "success",
        user,
    });
});


// update User password
exports.updatePassword = catchAsyncErrors(async (req, res, next) => {
    const user = await User.findById(req.user.id).select("+password");

    const isPasswordMatched = await user.comparePassword(req.body.oldPassword);

    if (!isPasswordMatched) {
        return next(new ErrorHandler("Old password is incorrect", 400));
    }

    if (req.body.newPassword !== req.body.confirmPassword) {
        return next(new ErrorHandler("password does not match", 400));
    }

    user.password = req.body.newPassword;

    await user.save();

    sendToken(user, 200, res);
});


// update User Profile
exports.updateProfile = catchAsyncErrors(async (req, res, next) => {
    const newUserData = {
        name: req.body.name,
        email: req.body.email,
        avatar: req.body.avatar,
    };

    const user = await User.findByIdAndUpdate(req.user.id, newUserData, {
        new: true,
        runValidators: true,
        useFindAndModify: false,
    });

    res.status(200).json({
        status: "success",
        user
    });
});


// Get all users -- admin
exports.getAllUser = catchAsyncErrors(async (req, res, next) => {
    const users = await User.find();

    res.status(200).json({
        status: "success",
        users,
    });
});


// Get single user -- admin
exports.getSingleUser = catchAsyncErrors(async (req, res, next) => {
    const user = await User.findById(req.params.id);

    if (!user) {
        return next(
            new ErrorHandler(`User does not exist with Id: ${req.params.id}`)
        );
    }

    res.status(200).json({
        status: "success",
        user,
    });
});


// update User Role -- Admin
exports.updateUserRole = catchAsyncErrors(async (req, res, next) => {
    const newUserData = {
        // name: req.body.name,
        // email: req.body.email,
        role: req.body.role,
    };

    await User.findByIdAndUpdate(req.params.id, newUserData, {
        new: true,
        runValidators: true,
        useFindAndModify: false,
    });

    res.status(200).json({
        status: "success",
    });
});


// Delete User --Admin
exports.deleteUser = catchAsyncErrors(async (req, res, next) => {
    const user = await User.findByIdAndDelete(req.params.id);

    if (!user) {
        return next(
            new ErrorHandler(`User does not exist with Id: ${req.params.id}`, 400)
        );
    }

    // const imageId = user.avatar.public_id;

    // await cloudinary.v2.uploader.destroy(imageId);

    // await user.remove();

    res.status(200).json({
        status: "success",
        message: "User Deleted Successfully",
    });
});