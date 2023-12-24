import React from 'react'
import itemImg from '../../images/item.png'
import { SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import { Col } from 'react-bootstrap';

const CategoryCard = ({name, image}) => {
    return (
        <Col xs="4" sm="3" md="2" lg="2" className="m-3">
            <div className="allCard mb-3">
                <div className="categoty-card"></div>
                <img alt="zcv" src={image} className="categoty-card-img" />
                <p className="categoty-card-text text-center">{name}</p>
            </div>
        </Col>
    )
}

const CategoryCardSplide = ({name, image}) => {
    return (
        <SplideSlide>
            <div className='card'>
                <div className='categoty-card'></div>
                <img alt="zcv" src={image}/>
                <p className='categoty-card-text'>{name}</p>
            </div>
        </SplideSlide>
    )
}

export { CategoryCard, CategoryCardSplide }