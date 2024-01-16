import React from 'react'
import { Col, Modal, Row } from 'react-bootstrap';
import ProductGallery from './ProductGallery';
import ProductText from './ProductText';
import { FaRegStar, FaStar } from "react-icons/fa6";
import Rating from 'react-rating';
import CreateReviewHook from '../../Hooks/Review/CreateReviewHook';

const ProductDetalis = ({
    id,
    prodItem,
    images,
    cat,
    quantity,
    increaseQuantity,
    decreaseQuantity,
    indexColor,
    colorClick,
    addToCartHandler
}) => {
    const [
        review,
        onChangeReview,
        rating,
        onChangeRating,
        show,
        handleClose,
        handleShow,
        onSubmit
    ] = CreateReviewHook(id);

    return (
        <div className='my-5'>
            <Modal
                show={show} 
                onHide={handleClose}
                size="sm"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Body id="contained-modal-title-vcenter">
                    <div className="mb-3 d-flex flex-column">
                        <label>Rating</label>
                        <Rating
                            emptySymbol={<FaRegStar />}
                            fullSymbol={<FaStar />}
                            fractions={2}
                            className='fs-5 text-warning'
                            initialRating={rating}
                            onChange={onChangeRating}
                        />
                    </div>
                    <div
                        className="mb-3"
                    >
                        <label>Review</label>
                        <textarea value={review} onChange={onChangeReview} className="form-control" placeholder="Leave a comment here" id="floatingTextarea2" style={{height: '100px'}}></textarea>
                    </div>
                </Modal.Body>
                <div className="btn product-cart-add mx-3 mb-3" onClick={onSubmit}>Add</div>
            </Modal>


            <div className='divContainer'>
                <Row>
                    <Col md='6'>
                        <ProductGallery images={images} />
                    </Col>
                    <Col md='6'>
                        <ProductText
                            prodItem={prodItem}
                            cat={cat}
                            quantity={quantity}
                            increaseQuantity={increaseQuantity}
                            decreaseQuantity={decreaseQuantity}
                            indexColor={indexColor}
                            colorClick={colorClick}
                            addToCartHandler={addToCartHandler}
                        />
                        <div className="btn product-cart-add mt-3" onClick={handleShow}>Add Review</div>
                    </Col>
                </Row>
            </div>
        </div>
    )
}

export default ProductDetalis