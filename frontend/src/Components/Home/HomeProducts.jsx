import React from 'react'
import CardProductsContainer from '../Products/CardProductsContainer'
import ViewHomeProductsHook from '../../Hooks/Admin/Product/ViewHomeProductsHook';

const HomeProducts = () => {
    const [itemsProduct] = ViewHomeProductsHook();
    
    return (
        <div className='homeProducts'>
            <p>featured products</p>
            <CardProductsContainer products={itemsProduct} />
        </div>
    )
}

export default HomeProducts