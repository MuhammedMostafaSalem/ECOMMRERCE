import React from 'react'
import ProductDetalis from '../../Components/Products/ProductDetalis'
import ReviewContainer from '../../Components/Reviews/ReviewContainer'
import { useParams } from 'react-router-dom';
import ViewProductsDetalisHook from '../../Hooks/Admin/Product/ViewProductsDetalisHook';
import AddToCartHook from '../../Hooks/Cart/AddToCartHook';

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
    
    const [
        quantity,
        increaseQuantity,
        decreaseQuantity,
        indexColor,
        colorClick,
        addToCartHandler
    ] = AddToCartHook(id, prodItem);

    return (
        <div>
            <ProductDetalis
                id={id}
                prodItem={prodItem}
                images={images}
                cat={cat}
                quantity={quantity}
                increaseQuantity={increaseQuantity}
                decreaseQuantity={decreaseQuantity}
                indexColor={indexColor}
                colorClick={colorClick}
                addToCartHandler={addToCartHandler}
            />
            <ReviewContainer prodReview={prodReview} />
        </div>
    )
}

export default ProductDetailsPage