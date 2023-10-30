import React from 'react'
import StarIcon from '@mui/icons-material/Star';


const ReviewsAdminPage = () => {
    return (
        <div className="productReviewsContainer">
            <form className="productReviewsForm">
                <h1 className="productReviewsFormHeading">ALL REVIEWS</h1>
                <div>
                    <StarIcon />
                    <input
                        type="text"
                        placeholder="Product Id"
                        required
                    />
                </div>
                <button
                    id="createProductBtn"
                    type="submit"
                >
                    Search
                </button>
            </form>

            <div className='reviewsItems mb-4' style={{minHeight: '593px'}}>
                <table>
                    <thead>
                        <th>product ID</th>
                        <th>name</th>
                        <th>stock</th>
                        <th>price</th>
                        <th>actions</th>
                    </thead>
                    
                    
                    <tbody>
                        <td>
                            <p>product ID</p>
                        </td>
                        <td>
                            <p>name</p>
                        </td>
                        <td>
                            <p>stock</p>
                        </td>
                        <td>
                            <p>price</p>
                        </td>
                        <td>
                            <p>actions</p>
                        </td>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default ReviewsAdminPage