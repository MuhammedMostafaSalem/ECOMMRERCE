import React from 'react'
import { Card, Col, Row } from 'react-bootstrap'
import { FaStar } from "react-icons/fa";
import ckeckIcon from '../../images/checkIcon.png'

const ProductText = ({
    prodItem,
    cat,
    quantity,
    increaseQuantity,
    decreaseQuantity,
    indexColor,
    colorClick,
    addToCartHandler
}) => {
    return (
        <Card style={{border: 'none'}}>
            <Row>
                <div className="cat-text">category: {cat.name}</div>
            </Row>
            <Row>
                <Col>
                    <h4>
                        {prodItem.title}
                    </h4>
                    <div className="cat-title d-inline">product # {prodItem._id}</div>
                </Col>
            </Row>
            <Row style={{margin: '10px 0'}}>
                <Col className='d-flex gap-1'>
                    <FaStar className='text-warning fs-5' />
                    <div className='cat-text'>({prodItem.ratingsAverage} Ratings)</div>
                </Col>
            </Row>
            <Row>
                <Col className='d-flex gap-2'>
                    {
                        prodItem.availableColors ?
                            prodItem.availableColors.map((color, index) => (
                                <div
                                    className="color border"
                                    style={{ backgroundColor: color }}
                                    key={index}
                                    onClick={() => colorClick(index, color)}
                                >
                                    {
                                        indexColor === index ?
                                            <img style={{width: '25px', height: '25px', marginLeft: '2px'}} src={ckeckIcon} alt=''/>
                                        : null
                                    }
                                </div>
                            ))
                        : null
                    }
                </Col>
            </Row>
            <Row className="mt-4">
                <Col>
                    <Row className='pricingBox'>
                        <Col md='4' sm='4' xs='12'>
                            <div className="product-price">$ {prodItem.price}</div>
                        </Col>
                        <Col md='4' sm='4' xs='12'>
                        <div className='qauntity'>
                            <div className='btn' onClick={decreaseQuantity}>-</div>
                            <span>{quantity}</span>
                            <div className='btn' onClick={increaseQuantity}>+</div>
                        </div>
                        </Col>
                        <Col md='4' sm='4' xs='12' className='colBtn'>
                            <div className='btnBox'>
                                <div className="btn product-cart-add" onClick={addToCartHandler}>Add To Cart</div>
                            </div>
                        </Col>
                    </Row>
                </Col>
            </Row>
            <Row className="mt-4" style={{borderTop: '1px solid #e1e1e1', borderBottom: '1px solid #e1e1e1'}}>
                <h6 className='py-2'>
                    Status: {
                        prodItem.quantity >= 1 ?
                            <span style={{color: 'green'}}>InStock</span>
                        : <span style={{color: 'tomato'}}>OutOfStock</span>
                    }
                </h6>
            </Row>
            <Row className="mt-4">
                <div className="cat-text">Description :</div>
            </Row>
            <Row>
                <div className="product-description">{prodItem.description}</div>
            </Row>
        </Card>
    )
}

export default ProductText