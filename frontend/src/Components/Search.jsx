import React from 'react'

const Search = () => {
    return (
        <div style={{width: '600px', height: '50px'}}>
            <input type='search' placeholder='Search a product ...' className='inputSearch' />
            <button className='btnSearch'>Search</button>
        </div>
    )
}

export default Search