import React from 'react'
import { CategoryCard, CategoryCardSplide } from './CategoryCard'
import { Splide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import { Row } from 'react-bootstrap';

const CategoryContainer = () => {
    return (
        // <Row className='divContainer categoryCard'>
        //     <CategoryCard/>
        //     <CategoryCard/>
        //     <CategoryCard/>
        //     <CategoryCard/>
        //     <CategoryCard/>
        //     <CategoryCard/>
        //     <CategoryCard/>
        //     <CategoryCard/>
        //     <CategoryCard/>
        //     <CategoryCard/>
        // </Row>
        <div className='divContainer categoryContainer'>
            <Splide
                aria-label="My Favorite Images"
                options = {
                    {
                        type: 'loop',
                        fixedWidth: '130px',
                        focus: 'center',
                        isNavigation: true,
                        autoplay: true,
                        gap: '10px',
                    }
                }
            >
                <CategoryCardSplide />
                <CategoryCardSplide />
                <CategoryCardSplide />
                <CategoryCardSplide />
                <CategoryCardSplide />
                <CategoryCardSplide />
                <CategoryCardSplide />
                <CategoryCardSplide />
                <CategoryCardSplide />
                <CategoryCardSplide />
                <CategoryCardSplide />
                <CategoryCardSplide />
                <CategoryCardSplide />
                <CategoryCardSplide />
            </Splide>
        </div>
        )
}

export default CategoryContainer