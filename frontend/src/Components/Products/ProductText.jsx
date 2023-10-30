import React from 'react'
import { Col, Row } from 'react-bootstrap'
import StarIcon from '@mui/icons-material/Star';

const ProductText = () => {
    return (
        <div>
            <Row>
                <div className="cat-text">category :</div>
            </Row>
            <Row>
                <Col>
                    <h4>
                        product name
                    </h4>
                    <div className="cat-title d-inline">product # 65414646454</div>
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
                    <div className='cat-text'>(1 Reviews)</div>
                </Col>
            </Row>
            <Row className="mt-4">
                <Col>
                    <Row className='pricingBox'>
                        <Col md='4' sm='4' xs='12'>
                            <div className="product-price">$ 34000</div>
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
                    Status: <span style={{color: 'green'}}>InStock</span>
                </h6>
            </Row>
            <Row className="mt-4">
                <div className="cat-text">Description :</div>
            </Row>
            <Row>
                <Col md="10">
                    <div className="product-description d-inline">Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus inventore pariatur quaerat adipisci non quidem itaque, velit delectus ipsam esse.</div>
                </Col>
            </Row>
        </div>
    )
}

export default ProductText