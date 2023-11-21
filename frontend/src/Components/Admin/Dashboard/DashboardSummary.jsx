import React from 'react'
import { Link } from 'react-router-dom'
import GetAllUsersAdminHook from '../../../Hooks/Admin/Users/GetAllUsersAdminHook';

const DashboardSummary = () => {
    const [itemsUsers, loading] = GetAllUsersAdminHook();
    
    return (
        <div className='dashboardSummary'>
            <div>
                <p>
                    Total Amount
                </p>
            </div>
            <div className="dashboardSummaryBox">
                <Link to="/admin/products">
                    <p>Products</p>
                    <p>20</p>
                </Link>
                <Link to="/admin/orders">
                    <p>Orders</p>
                    <p>5</p>
                </Link>
                <Link to="/admin/users">
                    <p>Users</p>
                    <p>{itemsUsers.length}</p>
                </Link>
            </div>
        </div>
    )
}

export default DashboardSummary