import React from 'react'
import { Col, Row } from 'react-bootstrap';
import ProductGallery from './ProductGallery';
import ProductText from './ProductText';
import { useParams } from 'react-router-dom';
import ViewProductsDetalisHook from '../../Hooks/Admin/Product/ViewProductsDetalisHook';

const ProductDetalis = () => {
    const {id} = useParams();
    const [prodItem, images, cat]= ViewProductsDetalisHook(id);

    return (
        <div className='my-5' style={{minHeight: '593px'}}>
            <div className='divContainer'>
                <Row>
                    <Col md='6'>
                        <ProductGallery images={images} />
                    </Col>
                    <Col md='6'>
                        <ProductText prodItem={prodItem} cat={cat} />
                    </Col>
                </Row>
            </div>
        </div>
    )
}

export default ProductDetalis