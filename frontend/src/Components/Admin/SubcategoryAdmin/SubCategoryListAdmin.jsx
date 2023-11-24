import React from 'react'
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import EditIcon from '@mui/icons-material/Edit';
import Profile from '../../../images/Profile.png'

const SubCategoryListAdmin = () => {
    return (
        <table>
            <thead>
                <th>id</th>
                <th>name</th>
                <th>category image</th>
                <th className='text-end'>actions</th>
            </thead>

            <tbody>
                <td>
                    <p>subID</p>
                </td>
                <td>
                    <p>subNAme</p>
                </td>
                <td>
                    <img style={{width: "75px", height: "75px"}} src={Profile} alt='' />
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
        </table>
    )
}

export default SubCategoryListAdmin