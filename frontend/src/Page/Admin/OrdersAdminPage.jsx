import React from 'react'
import OrdersListAdmin from '../../Components/Admin/OrdersListAdmin'

const OrdersAdminPage = () => {
    return (
        <div className="ordersListContainer">
            <h1 id="ordersListHeading">ALL ORDERS</h1>
            <OrdersListAdmin />
        </div>
    )
}

export default OrdersAdminPage