import React from 'react'
import { Container, Row } from 'react-bootstrap'
import ProductCard from './ProductCard'

const CardProductsContainer = () => {
    return (
        <div>
            <Container>
                <Row className='my-5'>
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                </Row>
            </Container>
        </div>
    )
}

export default CardProductsContainer