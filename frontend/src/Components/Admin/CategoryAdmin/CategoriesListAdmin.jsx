import React from 'react'
import GetAllCategoryHook from '../../../Hooks/Admin/Category/GetAllCategoryHook';
import Loader from '../../Utilities/Loader/Loader';

const CategoriesListAdmin = () => {
    const [itemsCategory, loading] = GetAllCategoryHook();
    console.log(itemsCategory)
    console.log(loading)
    return (
        <div className='categoryItems mb-4' style={{minHeight: '593px'}}>
            {
                loading === false ?
                    <table>
                        <thead>
                            <th>image</th>
                            <th>name</th>
                            <th>actions</th>
                        </thead>
                    
                        {
                            itemsCategory ?
                                itemsCategory.map((item, index) => {
                                    return(
                                        <tbody key={index}>
                                            <td>
                                                <img src={item.image} alt='' />
                                            </td>
                                            <td>
                                                <p>{item.name}</p>
                                            </td>
                                            <td>
                                                <p>actions</p>
                                            </td>
                                        </tbody>
                                    )
                                })
                            : <h4>There are no categories now</h4>
                        }
                    </table>
                : <Loader />
            }
        </div>
    )
}

export default CategoriesListAdmin