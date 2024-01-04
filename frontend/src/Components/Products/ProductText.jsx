import React from 'react'
import { Card, Col, Row } from 'react-bootstrap'
import StarIcon from '@mui/icons-material/Star';

const ProductText = ({prodItem, cat}) => {
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
                <Col className='d-flex'>
                    <div className="d-flex gap-1">
                        <StarIcon className='iconStar' />
                        <StarIcon className='iconStar' />
                        <StarIcon className='iconStar' />
                        <StarIcon className='iconStar' />
                        <StarIcon className='iconStar' />
                    </div>
                    <div className='cat-text'>({prodItem.ratingsQuantity} Reviews)</div>
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
                                <div className='btn'>
                                    <p>-</p>
                                </div>
                                <span>1</span>
                                <div className='btn'>
                                    <p>+</p>
                                </div>
                            </div>
                        </Col>
                        <Col md='4' sm='4' xs='12' className='colBtn'>
                            <div className='btnBox'>
                                <div className="btn product-cart-add">Add To Cart</div>
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