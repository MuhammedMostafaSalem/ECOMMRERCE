import React from 'react'
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import EditIcon from '@mui/icons-material/Edit';
import Profile from '../../../images/Profile.png'
import GetAllSubcategoryHook from '../../../Hooks/Admin/Subcategory/GetAllSubcategoryHook';
import Loader from '../../Utilities/Loader/Loader';

const SubCategoryListAdmin = () => {
    const [allSubcat, loading] = GetAllSubcategoryHook();
    console.log(allSubcat)

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