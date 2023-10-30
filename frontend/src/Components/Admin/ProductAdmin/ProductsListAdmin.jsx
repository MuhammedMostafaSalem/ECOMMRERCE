import React from 'react'

const ProductsListAdmin = () => {
    return (
        <div className='productItems mb-4' style={{minHeight: '593px'}}>
            <table>
                <thead>
                    <th>product ID</th>
                    <th>name</th>
                    <th>stock</th>
                    <th>price</th>
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

export default ProductsListAdmin