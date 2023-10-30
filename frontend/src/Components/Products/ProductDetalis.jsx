import React from 'react'
import { Col, Row } from 'react-bootstrap';
import ProductGallery from './ProductGallery';
import ProductText from './ProductText';

const ProductDetalis = () => {
    return (
        <div style={{minHeight: '593px'}}>
            <div className='divContainer'>
                <Row>
                    <Col md='6'>
                        <ProductGallery />
                    </Col>
                    <Col md='6'>
                        <ProductText />
                    </Col>
                </Row>
            </div>
        </div>
    )
}

export default ProductDetalis