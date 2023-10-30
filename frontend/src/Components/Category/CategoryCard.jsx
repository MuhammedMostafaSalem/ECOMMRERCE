import React from 'react'
import itemImg from '../../images/item.png'
import { SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import { Col } from 'react-bootstrap';

const CategoryCard = () => {
    return (
        <Col xs="4" sm="3" md="2" lg="2" className="m-3">
            <div className="allCard mb-3">
                <div className="categoty-card"></div>
                <img alt="zcv" src={itemImg} className="categoty-card-img" />
                <p className="categoty-card-text">category name</p>
            </div>
        </Col>
    )
}

const CategoryCardSplide = () => {
    return (
        <SplideSlide>
            <div className='card'>
                <div className='categoty-card'></div>
                <img alt="zcv" src={itemImg}/>
                <p className='categoty-card-text'>category name</p>
            </div>
        </SplideSlide>
    )
}

export { CategoryCard, CategoryCardSplide }