const express = require("express");
const {
    createReview,
    setProductAndUserIds,
    getReviews,
    createFilterObj,
    getReview,
    updateReview,
    deleteReview
} = require("../controller/reviewController");
const {
    createReviewValidator,
    getReviewValidator,
    updateReviewValidator,
    deleteReviewValidator
} = require("../utils/validators/reviewValidator");
const { isAuthenticatedUser, authorizeRoles } = require("../middleware/auth");

const router = express.Router({ mergeParams: true });


router.route("/reviews")
    .get(createFilterObj, getReviews)
    .post(
        isAuthenticatedUser,
        setProductAndUserIds,
        createReviewValidator,
        createReview
    );

router.route("/review/:id")
    .get(getReviewValidator, getReview)
    .put(
        isAuthenticatedUser,
        updateReviewValidator,
        updateReview
    )
    .delete(
        isAuthenticatedUser,
        authorizeRoles("admin", "user"),
        deleteReviewValidator,
        deleteReview
    );


module.exports = router;