import React, { useEffect, useState } from 'react'
import DashboardIcon from '@mui/icons-material/Dashboard';
import CategoryIcon from '@mui/icons-material/Category';
import ImportExportIcon from '@mui/icons-material/ImportExport';
import ListAltIcon from '@mui/icons-material/ListAlt';
import PeopleIcon from '@mui/icons-material/People';
import RateReviewIcon from '@mui/icons-material/RateReview';
import MenuIcon from '@mui/icons-material/Menu';
import logo from '../../images/logo.png'
import userIcon from '../../images/user-icon.png'
import { Link, Outlet, useLocation } from 'react-router-dom';
import { Sidebar, Menu, MenuItem } from 'react-pro-sidebar';

const SideBar = ({children}) => {
    const location = useLocation();


    // for open and close sidebar
    const[isOpen ,setIsOpen] = useState(false);
    const open = () => setIsOpen (!isOpen);

    // for toggle open sidebar when small screem
    const[isToggled ,setToggled] = useState(false);
    const toggled = () => setToggled (!isToggled);
    useEffect(() => {
        let handler = () =>  {
            setToggled(false)
        }
        document.addEventListener('mousedown', handler);
    })

    return (
        <div className='d-flex' style={{backgroundColor: '#f9f9f9'}}>

            {/* sidebar */}
            <Sidebar
                collapsed={isOpen ? true : false}
                toggled={isToggled ? true : false}
                backgroundColor='#fff' 
                className={isToggled ? 'isToggled' : "isNotToggled"} 
                id='SideBar'
            >
                <Menu>
                    <div className='d-flex align-items-center gap-3'>
                        <Link to="/" className='logoLink'>
                            <img className='logo' src={logo} alt="Ecommerce" />
                        </Link>
                    </div>
                    <MenuItem
                        component={<Link to="/admin/dashboard" />}
                        id={location.pathname === '/admin/dashboard' ? 'active' : ''}
                    >
                        <p>
                            <DashboardIcon /> <span>Dashboard</span>
                        </p>
                    </MenuItem>
                    <MenuItem
                        component={<Link to="/admin/categories" />}
                        id={location.pathname === '/admin/categories' ? 'active' : ''}
                    >
                        <p>
                            <CategoryIcon /> <span>Categories</span>
                        </p>
                    </MenuItem>
                    <MenuItem
                        component={<Link to="/admin/products" />}
                        id={location.pathname === '/admin/products' ? 'active' : ''}
                    >
                        <p>
                            <ImportExportIcon /> <span>Products</span>
                        </p>
                    </MenuItem>
                    <MenuItem
                        component={<Link to="/admin/orders" />}
                        id={location.pathname === '/admin/orders' ? 'active' : ''}
                    >
                        <p>
                            <ListAltIcon /> <span>Orders</span>
                        </p>
                    </MenuItem>
                    <MenuItem
                        component={<Link to="/admin/users" />}
                        id={location.pathname === '/admin/users' ? 'active' : ''}
                    >
                        <p>
                            <PeopleIcon /> <span>Users</span>
                        </p>
                    </MenuItem>
                    <MenuItem
                        component={<Link to="/admin/reviews" />}
                        id={location.pathname === '/admin/reviews' ? 'active' : ''}
                    >
                        <p>
                            <RateReviewIcon /> <span>Reviews</span>
                        </p>
                    </MenuItem>
                </Menu>
            </Sidebar>


            <div style={{width: '100%'}} className='adminPages px-4'>

                {/* admin header */}
                <div style={{display: 'flex', justifyContent: 'space-between', padding: '10px 0'}}>
                    <div className='bar1' onClick={open}>
                        <MenuIcon/>
                    </div>
                    <div className='bar2 toggled' onClick={toggled}>
                        <MenuIcon/>
                    </div>
                    <div>
                        <img style={{width: '40px'}} src={userIcon} alt=''/>
                    </div>
                </div>
                <Outlet />

                {/* admin pages */}
                <div>{children}</div>
            </div>
        </div>
    )
}

export default SideBar