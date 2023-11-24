import React from 'react'
import AddSubcategory from '../../Components/Admin/SubcategoryAdmin/AddSubcategory'
import SubCategoryListAdmin from '../../Components/Admin/SubcategoryAdmin/SubCategoryListAdmin'

const SubcategoryAdminPage = () => {
    return (
        <div className='productListContainer'>
            <AddSubcategory />
            <SubCategoryListAdmin />
        </div>
    )
}

export default SubcategoryAdminPage