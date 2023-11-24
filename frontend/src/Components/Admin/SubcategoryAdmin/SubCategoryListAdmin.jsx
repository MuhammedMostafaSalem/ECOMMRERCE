import React from 'react'
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import EditIcon from '@mui/icons-material/Edit';
import Profile from '../../../images/Profile.png'
import GetAllSubcategoryHook from '../../../Hooks/Admin/Subcategory/GetAllSubcategoryHook';
import Loader from '../../Utilities/Loader/Loader';
import DeleteSubcategoryAdminHook from '../../../Hooks/Admin/Subcategory/DeleteSubcategoryAdminHook';
import { Button, Form, Modal } from 'react-bootstrap';
import UpdateSubcategoryHook from '../../../Hooks/Admin/Subcategory/UpdateSubcategoryHook';

const SubCategoryListAdmin = () => {
    const [allSubcat, loading] = GetAllSubcategoryHook();
    const [
        idSubcatDelete,
        showDeleteSubcat,
        handleCloseDeleteSubcat,
        handleShowDeleteSubcat,
        deleteSubcatHandler,
    ] = DeleteSubcategoryAdminHook();
    const [
        IdSubcat,
        name,
        onNameChange,
        handleEditSubmit,
        showEditSubcat,
        handleCloseEditSubcat,
        handleShowEditSubcat,
    ] = UpdateSubcategoryHook();

    return (
        <div className='categoryItems' style={{minHeight: '593px'}}>
            {
                loading === false ?
                    <table>
                        <thead>
                            <th>id</th>
                            <th>sucategory name</th>
                            <th className='text-end'>actions</th>
                        </thead>
        
                        {
                            allSubcat ?
                                allSubcat.map((item, index) => {
                                    return (
                                        <tbody key={index}>
                                            <Modal show={showEditSubcat} onHide={handleCloseEditSubcat}>
                                                <Modal.Header>
                                                    <Modal.Title>Update subcategory ID: {IdSubcat}</Modal.Title>
                                                </Modal.Header>
                                                <Modal.Body>
                                                    <Form>
                                                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                                            <Form.Control
                                                                type="text"
                                                                placeholder="Enter the new subcategory name"
                                                                autoFocus
                                                                value={name}
                                                                onChange={onNameChange}
                                                            />
                                                        </Form.Group>

                                                        <div className='d-flex gap-2 justify-content-end'>
                                                            <Button variant="secondary" onClick={handleCloseEditSubcat}>
                                                                Close
                                                            </Button>
                                                            <Button variant="primary" onClick={() => handleEditSubmit(IdSubcat)}>
                                                            Save Changes
                                                            </Button>
                                                            
                                                        </div>
                                                    </Form>
                                                </Modal.Body>
                                            </Modal>

                                            <Modal show={showDeleteSubcat} onHide={handleCloseDeleteSubcat}>
                                                <Modal.Body>
                                                    <h3>
                                                    Are you sure you want to delete this ID ({idSubcatDelete})?
                                                    </h3>
                                                </Modal.Body>
                                                <Modal.Footer style={{borderTop: "none"}}>
                                                    <Button variant="danger" onClick={handleCloseDeleteSubcat}>
                                                        Close
                                                    </Button>
                                                    <Button variant="secondary" onClick={() => deleteSubcatHandler(idSubcatDelete)}>
                                                        Delete
                                                    </Button>
                                                </Modal.Footer>
                                            </Modal>


                                            <td>
                                                <p>{item._id}</p>
                                            </td>
                                            <td>
                                                <p>{item.name}</p>
                                            </td>
                                            <td  className='text-end'>
                                                <p>
                                                    <EditIcon
                                                        className='user-admin-btn text-success'
                                                        onClick={() => handleShowEditSubcat(item._id, item.name)}
                                                    />
                                                    <DeleteOutlineIcon
                                                        className="user-admin-btn text-danger"
                                                        onClick={() => handleShowDeleteSubcat(item._id)}
                                                    />
                                                </p>
                                            </td>
                                        </tbody>
                                    )
                                })
                            : <h3>There are no subcategory now</h3>
                        }
                    </table>
                : <Loader />
            }
        </div>
    )
}

export default SubCategoryListAdmin