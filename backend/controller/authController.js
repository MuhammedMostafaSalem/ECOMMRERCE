const crypto = require("crypto");
const ErrorHandler = require("../utils/errorHandler");
const sendToken = require("../utils/jwtToken");
const sendEmail = require("../utils/sendEmail");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const User = require("../model/userModel");
const cloudinary = require("cloudinary");
const { uploadSingleImage } = require("../middleware/imageUpload");
const asyncHandler = require('express-async-handler');
const {v4: uuidv4} = require("uuid");
const sharp = require("sharp");
const multer = require('multer');
const path = require("path");


// exports.uploadUserImage = uploadSingleImage('image');
// Resize image
// exports.resizeImage = asyncHandler(async (req, res, next) => {
//     if (!req.file) return next();

//     const ext = req.file.mimetype.split('/')[1];
//     const filename = `user-${uuidv4()}-${Date.now()}.${ext}`;

//     await sharp(req.file.buffer).toFile(`uploads/users/${filename}`);

//     req.body.avatar = filename;
//     next();
// })



// Storage
const multerStorage = multer.memoryStorage();
// Accept only images
const multerFilter = (req, file, cb) => {
    if (file.mimetype.startsWith('image')) {
        cb(null, true);
    } else {
        cb(new ErrorHandler('only images allowed', 400), false);
    }
}

const upload = multer({ storage: multerStorage, fileFilter: multerFilter });
exports.uploadUserImage = upload.fields([
    { name: 'avatar', maxCount: 1 },
]);

exports.resizeImage = asyncHandler(async (req, res, next) => {
    // if (req.files.avatar) {
    //     const ext = req.files.avatar[0].mimetype.split('/')[1];
    //     const avatarFilename = `user-${uuidv4()}-${Date.now()}-cover.${ext}`;

    //     await sharp(req.files.avatar[0].buffer)
    //         .toFile(`uploads/users/${avatarFilename}`); // write into a file on the disk

    //     // Save imageCover into database
    //     req.body.avatar = avatarFilename;
    // }
    
    if (req.files.avatar) {
        const uploadDir = path.join(__dirname, '../uploads/users');

        if (!fs.existsSync(uploadDir)) {
            fs.mkdirSync(uploadDir, { recursive: true });
        }

        const ext = req.files.avatar[0].mimetype.split('/')[1];
        const avatarFilename = `user-${uuidv4()}-${Date.now()}-cover.${ext}`;

        let format = ext;
        if (format === 'jpg') format = 'jpeg';

        await sharp(req.files.avatar[0].buffer)
            .resize(500, 500)
            .toFormat(format)
            .toFile(path.join(uploadDir, avatarFilename)); // Save to disk

        // Save the filename in the request body
        req.body.avatar = avatarFilename;
    }
    // const uploadDir = path.join(__dirname, '../uploads/users');

    // // Ensure the directory exists
    // if (!fs.existsSync(uploadDir)) {
    //     fs.mkdirSync(uploadDir, { recursive: true });
    // }
    
    // if (req.files && req.files.avatar) {
    //     const ext = req.files.avatar[0].mimetype.split('/')[1];
    //     const avatarFilename = `user-${uuidv4()}-${Date.now()}-cover.${ext}`;
    //     const avatarPath = path.join(uploadDir, avatarFilename);

    //     await sharp(req.files.avatar[0].buffer)
    //         .toFile(avatarPath); // Write into a file on the disk

    //     // Save imageCover into database
    //     req.body.avatar = avatarFilename;
    // }
    next();
});


// Register a User
exports.registerUser = catchAsyncErrors(async (req, res, next) => {
    // const myCloud = await cloudinary.v2.uploader.upload(req.body.avatar, {
    //     folder: "avatars",
    //     width: 150,
    //     crop: "scale",
    // });
    const { name, email, password, avatar } = req.body;

    const user = await User.create({
        name,
        email,
        password,
        avatar,
    });

    sendToken(user, 201, res);
});


// Login User
exports.loginUser = catchAsyncErrors(async (req, res, next) => {
    const { email, password } = req.body;

    // checking if user has given password and email both

    if (!email || !password) {
        return next(new ErrorHandler("Please Enter Email & Password", 400));
    }

    const user = await User.findOne({ email }).select("+password");

    if (!user) {
        return next(new ErrorHandler("Invalid email", 401));
    }

    const isPasswordMatched = await user.comparePassword(password);

    if (!isPasswordMatched) {
        return next(new ErrorHandler("Invalid password", 401));
    }

    sendToken(user, 200, res);
});


// Logout User
exports.logout = catchAsyncErrors(async (req, res, next) => {
    res.cookie("token", null, {
        expires: new Date(Date.now()),
        httpOnly: true,
    });

    res.status(200).json({
        Status: "success",
        message: "Logged Out",
    });
});


// Forgot Password
exports.forgotPassword = catchAsyncErrors(async (req, res, next) => {
    const user = await User.findOne({ email: req.body.email });

    if (!user) {
        return next(new ErrorHandler("User not found", 404));
    }

    // Get ResetPassword Token
    const resetToken = user.getResetPasswordToken();

    await user.save({ validateBeforeSave: false });

    const resetPasswordUrl = `${req.protocol}://${req.get(
        "host"
    )}/password/reset/${resetToken}`;
    // const resetPasswordUrl = `${process.env.FRONTENT_URL}/password/reset/${resetToken}`;

    const message = `Your password reset token is :- \n\n ${resetPasswordUrl} \n\nIf you have not requested this email then, please ignore it.`;

    try {
        await sendEmail({
            email: user.email,
            subject: `Ecommerce Password Recovery`,
            message,
        });

        res.status(200).json({
            status: "success",
            message: `Email sent to ${user.email} successfully`,
        });
    } catch (error) {
        user.resetPasswordToken = undefined;
        user.resetPasswordExpire = undefined;
    
        await user.save({ validateBeforeSave: false });
    
        return next(new ErrorHandler(error.message, 500));
    }
});


// Reset Password
exports.resetPassword = catchAsyncErrors(async (req, res, next) => {
    // creating token hash
    const resetPasswordToken = crypto
        .createHash("sha256")
        .update(req.params.token)
        .digest("hex");

    const user = await User.findOne({
        resetPasswordToken,
        resetPasswordExpire: { $gt: Date.now() },
    });

    if (!user) {
        return next(
            new ErrorHandler(
                "Reset Password Token is invalid or has been expired",
                400
            )
        );
    }

    if (req.body.password !== req.body.confirmPassword) {
        return next(new ErrorHandler("Password does not password", 400));
    }

    user.password = req.body.password;
    user.resetPasswordToken = undefined;
    user.resetPasswordExpire = undefined;

    await user.save();

    sendToken(user, 200, res);
});