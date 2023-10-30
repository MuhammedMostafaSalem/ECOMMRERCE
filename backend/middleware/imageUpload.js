const multer = require("multer");
const ErrorHandler = require("../utils/errorHandler");

// Upload single image => method return multer middleware
exports.uploadSingleImage = (fieldName) => {
    // Storage
    const multerStorage = multer.memoryStorage();

      // Accept only images
    const multerFilter = (req, file, cb) => {
        if(file.mimetype.startsWith('image')) {
            cb(null, true);
        } else {
            cb(new ErrorHandler('only images allowed', 400), false);
        }
    };

    const upload = multer({storage: multerStorage, fileFilter: multerFilter});

    return upload.single(fieldName);
};