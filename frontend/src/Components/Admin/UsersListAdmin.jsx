import React from 'react'

const UsersListAdmin = () => {
    return (
        <div className='orderItems mb-4' style={{minHeight: '593px'}}>
            <table>
                <thead>
                    <th>user ID</th>
                    <th>email</th>
                    <th>name</th>
                    <th>role</th>
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

export default UsersListAdmin