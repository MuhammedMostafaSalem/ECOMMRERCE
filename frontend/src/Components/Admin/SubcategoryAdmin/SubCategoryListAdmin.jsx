import React from 'react'
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import EditIcon from '@mui/icons-material/Edit';
import Profile from '../../../images/Profile.png'
import GetAllSubcategoryHook from '../../../Hooks/Admin/Subcategory/GetAllSubcategoryHook';
import Loader from '../../Utilities/Loader/Loader';
import DeleteSubcategoryAdminHook from '../../../Hooks/Admin/Subcategory/DeleteSubcategoryAdminHook';
import { Button, Modal } from 'react-bootstrap';

const SubCategoryListAdmin = () => {
    const [allSubcat, loading] = GetAllSubcategoryHook();
    const [
        idSubcatDelete,
        showDeleteSubcat,
        handleCloseDeleteSubcat,
        handleShowDeleteSubcat,
        deleteSubcatHandler,
    ] = DeleteSubcategoryAdminHook();

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