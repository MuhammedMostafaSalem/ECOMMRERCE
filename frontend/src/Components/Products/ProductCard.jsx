import React from 'react'
import '../../Page/Shop/Shop.css'
import { Card, Col } from 'react-bootstrap'
import prod1 from '../../images/prod1.png'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion';

const ProductCard = () => {
    return (
        <Col lg='3' md='4' sm='6' xs='12'>
            <motion.div whileHover={{scale: 0.9}}>
                <Card className='my-2' style={{border: 'none'}}>
                    <Link className='productID' to='/product/:id'>
                        <Card.Img variant="top" src={prod1} />
                    </Link>
                    <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        <div className='rait'>
                            star (reviews)
                        </div>
                        <div className='price'>$ 123</div>
                    </Card.Body>
                </Card>
            </motion.div>
        </Col>
    )
}

export default ProductCard