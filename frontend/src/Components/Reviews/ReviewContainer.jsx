import React from 'react'
import './Reviews.css'
import ReviewItem from './ReviewItem'

const ReviewContainer = ({prodReview}) => {
    return (
        <div className='divContainer reviewContainer'>
            <h4>REVIEWS</h4>
            <div className="reviews">
                {
                    prodReview ?
                        prodReview.map((item, index) => (
                            <ReviewItem
                                key={index}
                                avatar={item.user.avatar}
                                userName={item.user.name}
                                rating={item.rating}
                                review={item.review}
                                id={item._id}
                            />
                        ))
                    : <h4>There are no reviews now</h4>
                }
            </div>
        </div>
    )
}

export default ReviewContainer