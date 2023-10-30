const slugify = require('slugify');
const { check, body } = require('express-validator');
const {validatorMiddleware} = require('../../middleware/validatorMiddleware');


// check() => check body and params etc
exports.createSubCategoryValidator = [
    check('name')
        .isLength({ min: 2 })
        .withMessage('must be at least 2 chars')
        .notEmpty()
        .withMessage('SubCategory required'),
        // .custom((val, { req }) => {
        //     req.body.slug = slugify(val);
        //     return true;
        // }),
    check('category')
        .isMongoId()
        .withMessage('Invalid ID formate')
        .notEmpty()
        .withMessage('SubCategory must be belong to category'),

    validatorMiddleware,
];


exports.getSubCategoryValidator = [
    check('id').isMongoId().withMessage('Invalid ID formate'),
    validatorMiddleware,
];


exports.updateSubCategoryValidator = [
    check('id').isMongoId().withMessage('Invalid ID formate'),
    body('name'),
    // .custom((val, { req }) => {
    //     req.body.slug = slugify(val);
    //     return true;
    // }),
    validatorMiddleware,
];


exports.deleteSubCategoryValidator = [
    check('id').isMongoId().withMessage('Invalid ID formate'),
    validatorMiddleware,
];