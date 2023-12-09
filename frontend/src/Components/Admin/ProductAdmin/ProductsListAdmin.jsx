import React from 'react'
import GetAllProductsHook from '../../../Hooks/Admin/Product/GetAllProductsHook'
import Loader from '../../Utilities/Loader/Loader';
import EditIcon from '@mui/icons-material/Edit';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import DeleteProductAdminHook from '../../../Hooks/Admin/Product/DeleteProductAdminHook';
import { Button, Form, Modal } from 'react-bootstrap';
import UpdateProductHook from '../../../Hooks/Admin/Product/UpdateProductHook';
import MultiImageInput from 'react-multiple-image-input';
import Select from 'react-select';
import makeAnimated from 'react-select/animated';
import { IoMdAddCircleOutline } from "react-icons/io";
import { CompactPicker } from 'react-color';

const ProductsListAdmin = () => {
    const [itemsProduct, loading] = GetAllProductsHook();
    
    const [
        deleteProdId,
        showDeleteProd,
        handleCloseDeleteProd,
        handleShowDeleteProd,
        deleteProdHandler
    ] = DeleteProductAdminHook();
    const [
        showEditProduct,
        handleCloseEditProduct,
        handleShowEditProduct,
        ID,
        images,
        setImages,
        prodName,
        onNameChange,
        description,
        onDescriptionChange,
        price,
        onPriceChange,
        qty,
        onQtyChange,
        catID,
        onCatIdChange,
        catOptions,
        catData,
        handelSubmit,
        showColor,
        colors,
        onColorChange,
        handelChangeComplete,
        removeColor
    ] = UpdateProductHook();

    const animatedComponents = makeAnimated();
    
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

                                        <Modal className='modalAddProd' show={showEditProduct} onHide={handleCloseEditProduct}>
                                            <Modal.Header>
                                                <Modal.Title>Update product ID: {ID}</Modal.Title>
                                            </Modal.Header>
                                            <Modal.Body>
                                                <Form className='multiImages'>
                                                    <MultiImageInput
                                                        images={images}
                                                        setImages={setImages}
                                                        theme="light"
                                                        allowCrop={false}
                                                        cropConfig={{ maxHeight: 800 }}
                                                        max={5}
                                                    />
                                                    <Form.Control
                                                        type="text"
                                                        placeholder="Product name"
                                                        value={prodName}
                                                        onChange={onNameChange}
                                                    />
                                                    <Form.Control
                                                        as="textarea"
                                                        rows={3}
                                                        placeholder="Product description"
                                                        value={description}
                                                        onChange={onDescriptionChange}
                                                    />
                                                    <Form.Control
                                                        type="number"
                                                        placeholder="Product price"
                                                        value={price}
                                                        onChange={onPriceChange}
                                                    />
                                                    <Form.Control
                                                        type="number"
                                                        placeholder="Product quantity"
                                                        value={qty}
                                                        onChange={onQtyChange}
                                                    />
                                                    <Form.Select aria-label="Default select example" value={catID} onChange={onCatIdChange}>
                                                        {
                                                            catData ?
                                                                catData.map((item, index) => {
                                                                    return (
                                                                        <option key={index} value={item._id}>{item.name}</option>
                                                                    )
                                                                })
                                                            : null
                                                        }
                                                    </Form.Select>
                                                    <div className="text-form ms-1">Product Color</div>
                                                    <div className="d-flex">
                                                        {
                                                            colors.length >= 1 ?
                                                                colors.map((item, index) => (
                                                                    <div
                                                                        key={index}
                                                                        onClick={() => removeColor(item)}
                                                                        className="color ms-2 mt-1"
                                                                        style={{ backgroundColor: item }} >
                                                                    </div>
                                                                ))
                                                            : null
                                                        }
                                                        <IoMdAddCircleOutline className='AddProdColor' onClick={onColorChange} />
                                                        {
                                                            showColor === true ?
                                                                <CompactPicker onChangeComplete={handelChangeComplete} />
                                                            : null
                                                        }
                                                    </div>

                                                    <div className='d-flex gap-2 justify-content-end'>
                                                        <Button variant="secondary" onClick={handleCloseEditProduct}>
                                                            Close
                                                        </Button>
                                                        <Button variant="primary" onClick={() => handelSubmit(ID)}>
                                                        Save Changes
                                                        </Button>
                                                    </div>
                                                </Form>
                                            </Modal.Body>
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
                                                    onClick={() => handleShowEditProduct(item._id, item.title, (item.imageCover, item.images), item.description, item.price, item.quantity, item.category, item.availableColors)}
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