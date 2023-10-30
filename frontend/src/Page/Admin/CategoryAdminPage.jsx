import React from 'react'
import AddCategory from '../../Components/Admin/CategoryAdmin/AddCategory'
import CategoriesListAdmin from '../../Components/Admin/CategoryAdmin/CategoriesListAdmin'

const CategoryAdminPage = () => {
    return (
        <div className='productListContainer'>
            <AddCategory />
            <CategoriesListAdmin />
        </div>
    )
}

export default CategoryAdminPage