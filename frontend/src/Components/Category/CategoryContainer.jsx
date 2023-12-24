import React from 'react'
import { CategoryCard, CategoryCardSplide } from './CategoryCard'
import { Splide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import { Row } from 'react-bootstrap';
import GetAllCategoryHook from '../../Hooks/Admin/Category/GetAllCategoryHook';
import ViewHomeCatsHook from '../../Hooks/Admin/Category/ViewHomeCatsHook';

const CategoryContainer = () => {
    const [itemsCategory] = ViewHomeCatsHook();
    
    return (
        <div>
            {
                itemsCategory.length <= 10 ?
                    <Row className='divContainer categoryCard'>
                        {
                            itemsCategory.map((item, index) => (
                                <CategoryCard name={item.name} image={item.image} key={index} />
                            ))
                        }
                    </Row>
                :
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
                        {
                            itemsCategory.map((item, index) => (
                                <CategoryCardSplide key={index} name={item.name} image={item.image} />
                            ))
                        }
                    </Splide>
                </div>
            }
        </div>
        )
}

export default CategoryContainer