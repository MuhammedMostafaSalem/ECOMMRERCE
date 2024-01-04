import React from 'react'
import ProductDetalis from '../../Components/Products/ProductDetalis'
import ReviewContainer from '../../Components/Reviews/ReviewContainer'
import { useParams } from 'react-router-dom';
import ViewProductsDetalisHook from '../../Hooks/Admin/Product/ViewProductsDetalisHook';

const ProductDetailsPage = () => {
    const {id} = useParams();
    const [prodItem, images, cat]= ViewProductsDetalisHook(id);
    let prodReview = []
    try {
        if(prodItem.reviews) {
            prodReview = prodItem.reviews;
        }
        else {
            prodReview = []
        }
    } catch(e) {}

    return (
        <div>
            <ProductDetalis id={id} prodItem={prodItem} images={images} cat={cat} />
            <ReviewContainer prodReview={prodReview} />
        </div>
    )
}

export default ProductDetailsPage