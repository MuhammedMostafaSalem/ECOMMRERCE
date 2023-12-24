import React from 'react'
import { Link } from 'react-router-dom'
import GetAllUsersAdminHook from '../../../Hooks/Admin/Users/GetAllUsersAdminHook';
import GetAllProductsHook from '../../../Hooks/Admin/Product/GetAllProductsHook';

const DashboardSummary = () => {
    const [itemsUsers, loading] = GetAllUsersAdminHook();
    const [itemsProduct, prodLoading=loading] = GetAllProductsHook();
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
                    <p>{itemsProduct.length}</p>
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