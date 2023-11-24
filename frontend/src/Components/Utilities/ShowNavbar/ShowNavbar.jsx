import React, { useEffect, useRef, useState } from 'react'
import './ShowNavbar.css'
import { useLocation } from 'react-router-dom'

const ShowNavbar = ({children}) => {
    // for show and hide navbar header
    const location = useLocation();
    const [showNavbar, setShowNavbar] = useState(false);
    useEffect(() => {
        if(
            location.pathname === '/login' ||
            location.pathname === '/account' ||
            location.pathname === '/account/update' ||
            location.pathname === '/admin/dashboard' ||
            location.pathname === '/admin/categories' ||
            location.pathname === '/admin/subcategory' ||
            location.pathname === '/admin/products' ||
            location.pathname === '/admin/orders' ||
            location.pathname === '/admin/users' ||
            location.pathname === '/admin/reviews'
        ) {
            setShowNavbar(false)
        } else {
            setShowNavbar(true)
        }
    }, [location])


    // select window scroll in header
    const headerRef = useRef(null)
    const stickyHeader = () => {
        window.addEventListener('scroll', () => {
            if(document.body.scrollTop > 600 || document.documentElement.scrollTop > 600) {
                headerRef.current.classList.add('sticky_header')
            } else {
                headerRef.current.classList.remove('sticky_header')
                headerRef.current.classList.add('static_header')
            }
        })
    }
    useEffect(() => {
        stickyHeader();
        return ()=> window.removeEventListener('scroll', stickyHeader)
    })
    
    return (
        <div className='showNavbar' ref={headerRef}>
            {showNavbar && children}
        </div>
    )
}

export default ShowNavbar