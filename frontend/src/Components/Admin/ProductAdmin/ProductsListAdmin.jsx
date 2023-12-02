import React from 'react'
import GetAllProductsHook from '../../../Hooks/Admin/Product/GetAllProductsHook'
import Loader from '../../Utilities/Loader/Loader';
import EditIcon from '@mui/icons-material/Edit';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';

const ProductsListAdmin = () => {
    const [itemsProduct, loading] = GetAllProductsHook();
    
    return (
        <div className='productItems mb-4' style={{minHeight: '593px'}}>
            {
                loading === false ?
                    <table>
                        <thead>
                            <th>product ID</th>
                            <th>name</th>
                            <th>stock</th>
                            <th>price</th>
                            <th>actions</th>
                        </thead>
                        
                        {
                            itemsProduct ?
                                itemsProduct.map((item, index) => (
                                    <tbody key={index}>
                                        <td>
                                            <p>{item._id}</p>
                                        </td>
                                        <td>
                                            <p>{item.title}</p>
                                        </td>
                                        <td>
                                            <p>{item.quantity}</p>
                                        </td>
                                        <td>
                                            <p>{item.price}</p>
                                        </td>
                                        <td>
                                        <p>
                                        <EditIcon
                                            className='user-admin-btn text-success'
                                        />
                                        <DeleteOutlineIcon
                                            className="user-admin-btn text-danger"
                                        />
                                    </p>
                                        </td>
                                    </tbody>
                                ))
                            : <h3>There are no Products now</h3>
                        }
                    </table>
                : <Loader />
            }
        </div>
    )
}

export default ProductsListAdmin