import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom';

const ShowFooter = ({children}) => {
    // for show and hide navbar header
    const location = useLocation();
    const [showFooter, setShowFooter] = useState(false);
    useEffect(() => {
        if(
            location.pathname === '/login' ||
            location.pathname === '/account' ||
            location.pathname === '/account/update' ||
            location.pathname === '/orders' ||
            location.pathname === '/admin/dashboard' ||
            location.pathname === '/admin/categories' ||
            location.pathname === '/admin/products' ||
            location.pathname === '/admin/orders' ||
            location.pathname === '/admin/users' ||
            location.pathname === '/admin/reviews'
        ) {
            setShowFooter(false)
        } else {
            setShowFooter(true)
        }
    }, [location])
    
    return (
        <div className='showNavbar'>
            {showFooter && children}
        </div>
    )
}

export default ShowFooter