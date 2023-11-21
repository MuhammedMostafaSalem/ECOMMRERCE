import React from 'react'
import Loader from './../Utilities/Loader/Loader';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import EditIcon from '@mui/icons-material/Edit';
import { Button, Form, Modal } from 'react-bootstrap';
import GetAllUsersAdminHook from '../../Hooks/Admin/Users/GetAllUsersAdminHook';
import DeleteUserAdminHook from '../../Hooks/Admin/Users/DeleteUserAdminHook';
import UpdateUserAdminHook from './../../Hooks/Admin/Users/UpdateUserAdminHook';

const UsersListAdmin = () => {
    const [itemsUsers, loading] = GetAllUsersAdminHook();
    const [
        deleteUserHandler,
        showDeleteUser,
        handleCloseDeleteUser,
        handleShowDeleteUser
    ] = DeleteUserAdminHook();
    const [
        role,
        onChangeRole,
        updateUserRoleHandler,
        showEditRole,
        handleCloseEditRole,
        handleShowEditRole
    ] = UpdateUserAdminHook();

    return (
        <div className='orderItems mb-4' style={{minHeight: '593px'}}>
            {
                loading === false ?
                    <table>
                        <thead>
                            <th>user ID</th>
                            <th>email</th>
                            <th>name</th>
                            <th>role</th>
                            <th>actions</th>
                        </thead>
                        
                        {
                            itemsUsers ?
                                itemsUsers.map((item, index) => {
                                    return (
                                        <tbody key={index}>
                                            <Modal show={showDeleteUser} onHide={handleCloseDeleteUser}>
                                                <Modal.Body>
                                                    <h3>
                                                    Are you sure you want to delete this user?
                                                    </h3>
                                                </Modal.Body>
                                                <Modal.Footer style={{borderTop: "none"}}>
                                                    <Button variant="danger" onClick={handleCloseDeleteUser}>
                                                        Close
                                                    </Button>
                                                    <Button variant="secondary" onClick={() => deleteUserHandler(item._id)}>
                                                        Delete
                                                    </Button>
                                                </Modal.Footer>
                                            </Modal>
                                            
                                            <Modal show={showEditRole} onHide={handleCloseEditRole}>
                                                <Modal.Header>
                                                    <Modal.Title>Update user role:</Modal.Title>
                                                </Modal.Header>
                                                <Modal.Body>
                                                    <Form.Select value={role} onChange={onChangeRole} aria-label="Default select example">
                                                        <option>Open this select menu</option>
                                                        <option value="Admin">Admin</option>
                                                        <option value="User">User</option>
                                                    </Form.Select>
                                                </Modal.Body>
                                                <Modal.Footer style={{borderTop: "none"}}>
                                                    <Button variant="danger" onClick={handleCloseEditRole}>
                                                        Close
                                                    </Button>
                                                    <Button variant="secondary" onClick={() => updateUserRoleHandler(item._id)}>
                                                        Update
                                                    </Button>
                                                </Modal.Footer>
                                            </Modal>

                                            
                                            <td>
                                                <p>{item._id}</p>
                                            </td>
                                            <td>
                                                <p>{item.email}</p>
                                            </td>
                                            <td>
                                                <p>{item.name}</p>
                                            </td>
                                            <td>
                                                <p>{item.role}</p>
                                            </td>
                                            <td>
                                                <p>
                                                    <EditIcon className='user-admin-btn text-success' onClick={() => handleShowEditRole(item._id)} />
                                                    <DeleteOutlineIcon className="user-admin-btn text-danger" onClick={() => handleShowDeleteUser(item._id)} />
                                                </p>
                                            </td>
                                        </tbody>
                                    )
                                })
                            : null
                        }
                    </table>
                : <Loader />
            }
        </div>
    )
}

export default UsersListAdmin