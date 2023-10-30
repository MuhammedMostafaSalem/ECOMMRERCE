import React from 'react'
import '../Admin/Admin.css'

const OrderUserPage = () => {
    return (
        <div className='divContainer'>
            <div className="ordersListContainer">
                <div className='orderItems mb-4' style={{minHeight: '593px'}}>
                    <table>
                        <thead>
                            <th>order ID</th>
                            <th>status</th>
                            <th>item qty</th>
                            <th>amount</th>
                            <th>actions</th>
                        </thead>
                        
                        
                        <tbody>
                            <td>
                                <p>product ID</p>
                            </td>
                            <td>
                                <p>name</p>
                            </td>
                            <td>
                                <p>stock</p>
                            </td>
                            <td>
                                <p>price</p>
                            </td>
                            <td>
                                <p>actions</p>
                            </td>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default OrderUserPage