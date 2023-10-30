import React from 'react'

const CategoriesListAdmin = () => {
    return (
        <div className='categoryItems mb-4' style={{minHeight: '593px'}}>
            <table>
                <thead>
                    <th>category ID</th>
                    <th>name</th>
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
                        <p>actions</p>
                    </td>
                </tbody>
            </table>
        </div>
    )
}

export default CategoriesListAdmin