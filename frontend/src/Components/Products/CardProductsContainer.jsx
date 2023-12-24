import React from 'react'
import { Container, Row } from 'react-bootstrap'
import ProductCard from './ProductCard'

const CardProductsContainer = ({products}) => {
    return (
        <div>
            <Container>
                <Row className='my-5'>
                    {
                        products ?
                            products.map((item, index) => (
                                <ProductCard key={index} name={item.title} price={item.price} image={item.imageCover} id={item._id} />
                            ))
                        : null
                    }
                </Row>
            </Container>
        </div>
    )
}

export default CardProductsContainer