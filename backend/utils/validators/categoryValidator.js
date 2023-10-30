const {validatorMiddleware} = require('../../middleware/validatorMiddleware');
const slugify = require('slugify');
const { check, body } = require('express-validator');

exports.createCategoryValidator = [
    check('name')
        .isLength({ min: 3 })
        .withMessage('must be at least 3 chars')
        .notEmpty()
        .withMessage('Category required'),
        // .custom((val, { req }) => {
        //     req.body.slug = slugify(val);
        //     return true;
        // }),
    validatorMiddleware,
];


exports.getCategoryValidator = [
    check('id').isMongoId().withMessage('Invalid ID formate'),
    validatorMiddleware,
];


exports.updateCategoryValidator = [
    check('id').isMongoId().withMessage('Invalid ID formate'),
    body('name')
        .optional(),
        // .custom((val, { req }) => {
        //     req.body.slug = slugify(val);
        //     return true;
        // }),
    validatorMiddleware,
];


exports.deleteCategoryValidator = [
    check('id').isMongoId().withMessage('Invalid ID formate'),
    validatorMiddleware,
];