import React from 'react'
import AddProduct from '../../Components/Admin/ProductAdmin/AddProduct'
import ProductsListAdmin from '../../Components/Admin/ProductAdmin/ProductsListAdmin'

const ProductsAdminPage = () => {
    return (
        <div className='productListContainer'>
            <AddProduct />
            <ProductsListAdmin />
        </div>
    )
}

export default ProductsAdminPage