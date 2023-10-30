import React from 'react'

const OrdersListAdmin = () => {
    return (
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
    )
}

export default OrdersListAdmin