import React from 'react'
import CardProductsContainer from '../Products/CardProductsContainer'

const HomeProducts = () => {
    return (
        <div className='homeProducts'>
            <p>featured products</p>
            <CardProductsContainer/>
        </div>
    )
}

export default HomeProducts