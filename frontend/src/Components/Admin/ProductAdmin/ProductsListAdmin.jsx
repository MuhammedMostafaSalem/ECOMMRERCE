import React from 'react'
import GetAllProductsHook from '../../../Hooks/Admin/Product/GetAllProductsHook'
import Loader from '../../Utilities/Loader/Loader';
import EditIcon from '@mui/icons-material/Edit';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import DeleteProductAdminHook from '../../../Hooks/Admin/Product/DeleteProductAdminHook';
import { Button, Modal } from 'react-bootstrap';

const ProductsListAdmin = () => {
    const [itemsProduct, loading] = GetAllProductsHook();
    const [
        deleteProdId,
        showDeleteProd,
        handleCloseDeleteProd,
        handleShowDeleteProd,
        deleteProdHandler
    ] = DeleteProductAdminHook();
    
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
                                        <Modal show={showDeleteProd} onHide={handleCloseDeleteProd}>
                                            <Modal.Body>
                                                <h3>
                                                Are you sure you want to delete this ID ({deleteProdId})?
                                                </h3>
                                            </Modal.Body>
                                            <Modal.Footer style={{borderTop: "none"}}>
                                                <Button variant="danger" onClick={handleCloseDeleteProd}>
                                                    Close
                                                </Button>
                                                <Button variant="secondary" onClick={() => deleteProdHandler(deleteProdId)}>
                                                    Delete
                                                </Button>
                                            </Modal.Footer>
                                        </Modal>

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
                                            onClick={() => handleShowDeleteProd(item._id)}
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