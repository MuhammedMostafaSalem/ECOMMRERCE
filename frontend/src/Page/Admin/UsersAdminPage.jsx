import React from 'react'
import UsersListAdmin from '../../Components/Admin/UsersListAdmin'

const UsersAdminPage = () => {
    return (
        <div className="ordersListContainer">
            <h1 id="ordersListHeading">ALL USERS</h1>
            <UsersListAdmin />
        </div>
    )
}

export default UsersAdminPage