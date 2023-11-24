import React from 'react'
import GetAllCategoryHook from '../../../Hooks/Admin/Category/GetAllCategoryHook'
import Loader from '../../Utilities/Loader/Loader';
import { Button, Form, Modal } from 'react-bootstrap';
import UpdateCategoryHook from '../../../Hooks/Admin/Category/UpdateCategoryHook';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import EditIcon from '@mui/icons-material/Edit';

const CategoriesListAdmin = () => {
    const [itemsCategory, loading] = GetAllCategoryHook();
    const [
        ID,
        img,
        onImageChange,
        name,
        onNameChange,
        showEditcategory,
        handleCloseEditCategory,
        handleShowEditCategory,
        handleEditSubmit
    ] = UpdateCategoryHook();
    
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
                                    return (
                                        <tbody key={index}>
                                            <Modal show={showEditcategory} onHide={handleCloseEditCategory}>
                                                <Modal.Header>
                                                    <Modal.Title>Update category ID: {ID}</Modal.Title>
                                                </Modal.Header>
                                                <Modal.Body>
                                                    <Form>
                                                        <Form.Group id="registerImage" className="mb-3 d-flex gap-3 align-items-center" controlId="exampleForm.ControlTextarea1">
                                                            <img src={img} alt="" />
                                                            <Form.Control
                                                                type="file"
                                                                name="avatar"
                                                                accept="image/*"
                                                                onChange={onImageChange}
                                                            />
                                                        </Form.Group>
                                                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                                            <Form.Control
                                                                type="text"
                                                                placeholder="Enter the new category name"
                                                                autoFocus
                                                                value={name}
                                                                onChange={onNameChange}
                                                            />
                                                        </Form.Group>

                                                        <div className='d-flex gap-2 justify-content-end'>
                                                            <Button variant="secondary" onClick={handleCloseEditCategory}>
                                                                Close
                                                            </Button>
                                                            <Button variant="primary" onClick={() => handleEditSubmit(ID)}>
                                                            Save Changes
                                                            </Button>
                                                            
                                                        </div>
                                                    </Form>
                                                </Modal.Body>
                                            </Modal>



                                            <td>
                                                <img src={item.image} alt='' />
                                            </td>
                                            <td>
                                                <p>{item.name}</p>
                                            </td>
                                            <td>
                                                <p>
                                                    <EditIcon
                                                        className='user-admin-btn text-success'
                                                        onClick={() => handleShowEditCategory(item._id, item.name, item.image)}
                                                    />
                                                    <DeleteOutlineIcon className="user-admin-btn text-danger" />
                                                </p>
                                            </td>
                                        </tbody>
                                    )
                                })
                            : <h3>There are no categoires now</h3>
                        }
                    </table>
                : <Loader />
            }
        </div>
    )
}

export default CategoriesListAdmin